"use client";
import PageTitle from "./components/PageTitle";
import Wrapper from "./components/TodoApp";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();
export default function Home() {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <div>
          <PageTitle />
          <Wrapper />
        </div>
        <ReactQueryDevtools initialIsOpem={false} position="bottom-right" />
      </QueryClientProvider>
    </main>
  );
}
