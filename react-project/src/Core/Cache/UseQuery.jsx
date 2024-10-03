import {
    QueryClient,
    QueryClientProvider,
    useQuery,
    useQueryClient,
  } from "@tanstack/react-query";
  import axios from "axios";
  import React from "react";
  
  // why we use ?
  
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60000, // ms , used when api data that rarely changes.
        // serves data from the cache without refetching it from the server.
        // after time expires query refetch api || if you refetch manually
      },
    },
  });
  
  function ReactUseQuery() {
    return (
      <div>
        <QueryClientProvider client={client}>
          <App />
        </QueryClientProvider>
      </div>
    );
  }
  
  export default ReactUseQuery;
  
  function useCustomHook(api, enable) {
    return useQuery({
      queryKey: ["key", "unique"], // unique key required to store diff data
      queryFn: async () => await axios.get(api),
      enabled: !!enable, // Query will not execute until true // default true
      refetchOnWindowFocus: false, // refetch data when user return to tab // d true
      // refetchInterval: 60000, // data will refetch every 1 min // default false
      // initialData: [], // Provides initial data before the api call
      select: (res) => res.data, // pass the structured data to component,
    });
  }
  
  function App() {
    const queryClient = useQueryClient();
  
    const api = "https://jsonplaceholder.typicode.com/users";
  
    const { data, isLoading, isSuccess, refetch } = useCustomHook(api, true);
    // data Initially undefined , also look select file carefully
    // isLoading Initially true but after fetching its false
    // refetch fn manually refetch query.if data is same then not re-render
    // isSuccess true when query data successfully load.
  
    console.log(data);
  
    function invalid() {
      // situation : when you want fresh data after some operation,but not now
      // When query is accessed again, it will automatically refetch the data
      queryClient.invalidateQueries(["key", "unique"]);
    }
  
    return (
      <div className="d-flex gap-2">
        <button className="btn btn-primary" onClick={refetch}>
          Refetch
        </button>
        <button className="btn btn-primary" onClick={invalid}>
          clear keys
        </button>
      </div>
    );
  }
  