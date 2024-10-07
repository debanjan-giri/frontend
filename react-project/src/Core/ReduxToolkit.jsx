// why we use ? global storage for any component

// slice
import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },

  reducers: {
    increment: (state) => {
      state.value++; // direct state mutation is ban in old redux
      // but toolkit use immer js to handle direct mutation
    },
    decrement: (state) => {
      return { ...state, value: state.value - 1 }; // not muted
    },
    reset: (state) => {
      return { ...state, value: 0 }; // not muted
    },
    startWith: (state, action) => {
      state.value = action.payload; // muted
    },
  },
});

// store
const store = configureStore({
  reducer: {
    counter: slice.reducer,
  },
});

// root
import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

function Toolkit() {
  return (
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  );
}

export default Toolkit;

// component
function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.counter.value);

  return (
    <div className="d-flex gap-2">
      <button
        className="btn btn-primary"
        onClick={() => dispatch(slice.actions.increment())}
      >
        Increment {data}
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch(slice.actions.decrement())}
      >
        Decrement {data}
      </button>
      <button
        className="btn btn-danger"
        onClick={() => dispatch(slice.actions.reset())}
      >
        Reset
      </button>
      <button
        className="btn btn-danger"
        onClick={() => dispatch(slice.actions.startWith(10))}
      >
        StartWith
      </button>
    </div>
  );
}
