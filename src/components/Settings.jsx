import ToggleButton from "./ToggleButton";

function Settings() {
  return (
    <div className="Settings">
      <span className="Settings_title">Settings</span>
      <div className="form-check form-switch">
        <ToggleButton text="Include Uppercase" id="uppercase" />
        <ToggleButton text="Include Lowercase" id="lowercase" />
        <ToggleButton text="Include Numbers" id="numbers" />
        <ToggleButton text="Include Simbols" id="simbols" />
      </div>
    </div>
  );
}

export default Settings;
