import React from "react";
import ReactDOM from "react-dom/client";
import Settings from "./components/Settings";
import Length from "./components/Length";
import PassShow from "./components/PassShow";
import GenerateButton from './components/GenerateButton';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main id="PasswordGenerator">
      <PassShow />
      <Length />
      <Settings />
      <GenerateButton />
    </main>
  </React.StrictMode>
);
