import ToggleButton from "./ToggleButton";

function Settings() {
  return (
    <div className="Settings">
      <ToggleButton text="Include Uppercase" id="uppercase" />
      <ToggleButton text="Include Lowercase" id="lowercase" />
      <ToggleButton text="Include Numbers" id="numbers" />
      <ToggleButton text="Include Simbols" id="simbols" />
    </div>
  );
}

export default Settings;
