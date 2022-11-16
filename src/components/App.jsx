import PassShow from "./PassShow";
import RangeInput from "./RangeInput";
import Settings from "./Settings";
import { useState } from "react";

function App() {
  const [pass, setPass] = useState("");
  const [range, setRange] = useState(6)

  return (
    <main id="PasswordGenerator">
      <PassShow pass={pass}/>
      <RangeInput range={range} setRange={setRange} />
      <Settings pass={pass} setPass={setPass} range={range} />
    </main>
  );
}

export default App;
