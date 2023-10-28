import { ReactNode } from "react";
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";

type ReactQuerySettingProps = {
  children: ReactNode;
};

export const queryClient = new QueryClient({
  queryCache: new QueryCache(),
  mutationCache: new MutationCache(),
});

queryClient.setDefaultOptions({
  queries: {
    retry: 1,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    staleTime: 1000 * 60 * 10, //10 minutes
  },
  mutations: {},
});

export default function ReactQuerySetting({ children }: ReactQuerySettingProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
