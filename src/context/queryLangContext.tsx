import { INITIAL_QUERY_STATE, Query } from "@/models";
import { ReactNode, createContext, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface QueryLangContext {
  query: Query;
  setQuery: (newQuery: Query) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  firstReq: boolean;
  setFirstReq: (firstReq: boolean) => void;
}

export const QueryLangContext = createContext<QueryLangContext>({
  query: INITIAL_QUERY_STATE,
  setQuery: () => {},
  isLoading: false,
  setIsLoading: () => {},
  firstReq: true,
  setFirstReq: () => {},
});

export const QueryLangProvider = ({ children }: Props) => {
  const [query, setQuery] = useState<Query>(INITIAL_QUERY_STATE);
  const [isLoading, setIsLoading] = useState(false);
  const [firstReq, setFirstReq] = useState(true);

  return (
    <QueryLangContext.Provider
      value={{
        query,
        setQuery,
        isLoading,
        setIsLoading,
        firstReq,
        setFirstReq,
      }}
    >
      {children}
    </QueryLangContext.Provider>
  );
};

export const useQueryLangContext = () => {
  const context = useContext(QueryLangContext);
  if (context === undefined) {
    throw new Error(
      "useQueryLangContext must be used within a QueryLangProvider"
    );
  }
  return context;
};
