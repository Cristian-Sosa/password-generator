import ToggleButton from "./ToggleButton";
import GenerateButton from "./GenerateButton";
import { useState } from "react";

function Settings({ pass, setPass, range }) {
  const toggleButtons = [
    { text: "Mayúsculas", id: "upper" },
    { text: "Números", id: "numbers" },
    { text: "Simbolos", id: "simbols" },
  ];

  const [upper, setUpper] = useState(false);
  const [number, setNumber] = useState(false);
  const [simbol, setSimbol] = useState(false);

  const handleToggle = (e) => {
    switch (e.target.id) {
      case "upper":
        e.target.checked ? setUpper(true) : setUpper(false);
        break;

      case "numbers":
        e.target.checked ? setNumber(true) : setNumber(false);
        break;

      case "simbols":
        e.target.checked ? setSimbol(true) : setSimbol(false);
        break;

      default:
        console.log("error");
        break;
    }
  };

  return (
    <>
      <div className="Settings">
        <span className="Settings_title">Configuración</span>
        <div className="form-check form-switch">
          {toggleButtons.map((button) => (
            <ToggleButton
              key={button.id}
              text={button.text}
              id={button.id}
              handle={handleToggle}
            />
          ))}
        </div>
      </div>
      <>
        <GenerateButton
          setPass={setPass}
          upper={upper}
          number={number}
          simbol={simbol}
          range={range}
        />
      </>
    </>
  );
}

export default Settings;
