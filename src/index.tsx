import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="w-full max-w-[412px] mx-auto h-screen bg-main-color">
        <App />
      </div>
    </QueryClientProvider>
  </React.StrictMode>
);
