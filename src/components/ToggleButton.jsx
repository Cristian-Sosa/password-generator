function ToggleButton({ text, id, handle }) {
  return (
    <div className="ToggleButton">
      <input
        onChange={handle}
        className="form-check-input"
        type="checkbox"
        role="switch"
        id={id}
      />
      <label className="form-check-label" htmlFor={id}>
        {text}
      </label>
    </div>
  );
}

export default ToggleButton;
