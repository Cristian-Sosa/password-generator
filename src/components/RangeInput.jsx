function RangeInput() {
  return (
    <div className="RangeInput">
      <label htmlFor="lenght" className="form-label">
        6
      </label>
      <input
        type="range"
        className="form-range"
        min="6"
        max="32"
        step="1"
        id="lenght"
      ></input>
      <label htmlFor="lenght" className="form-label">
        32
      </label>
    </div>
  );
}

export default RangeInput;
