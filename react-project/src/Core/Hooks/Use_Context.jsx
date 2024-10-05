export function RootApp() {
  const store = createContext();

  // wrapper component
  function Wrapper({ children }) {
    const [data, setData] = useState(0);

    function incFn() {
      setData(data + 1);
    }

    return (
      <store.Provider value={{ data, incFn }}>
        <div className="border border-3 p-3">{children}</div>
      </store.Provider>
    );
  }

  // updating data
  function Component() {
    const { data, incFn } = useContext(store);
    return (
      <>
        <button onClick={incFn} className="btn btn-primary">
          component_1 : {data}
        </button>
      </>
    );
  }

  //  accessing data
  function Component_2() {
    const { data, incFn } = useContext(store);
    return (
      <>
        <p>Component_2 : {data}</p>
      </>
    );
  }

  return (
    <>
      <Wrapper>
        <Component />
        <Component_2 />
      </Wrapper>
    </>
  );
}
