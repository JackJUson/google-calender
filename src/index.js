import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createClient } from "@supabase/supabase-js";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

const supabase = createClient(
  "https://udcmatwaayidfdqnsric.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkY21hdHdhYXlpZGZkcW5zcmljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUzNzQwMTEsImV4cCI6MTk5MDk1MDAxMX0.zyUdV5XBDUmxYjvoQo2eS98Gh9-clMqwakhjO-eVmNU"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SessionContextProvider>
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
