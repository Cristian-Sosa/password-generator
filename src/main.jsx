import React from "react";
import ReactDOM from "react-dom/client";
import Settings from "./components/Settings";
import Length from "./components/Length";
import PassShow from "./components/PassShow";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main id="PasswordGenerator">
      <PassShow />
      <Length />
      <Settings />
    </main>
  </React.StrictMode>
);
