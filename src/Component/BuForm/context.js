import { createContext } from "react";

const formState = createContext({});

const { Provider, useContext } = formState;

export { Provider, useContext };
