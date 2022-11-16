function RangeInput({ range, setRange }) {
  return (
    <div className="Length">
      <span className="Length_title">
        Caracteres: <b id="LengthValue">{range}</b>
      </span>
      <div className="RangeInput">
        <label htmlFor="lenght" className="form-label">
          6
        </label>
        <input
          onChange={(e) => setRange(e.target.value)}
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
    </div>
  );
}

export default RangeInput;
