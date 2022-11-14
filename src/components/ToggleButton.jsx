function ToggleButton({ text, id }) {

  return (
    <div className="ToggleButton">
      <input className="form-check-input" type="checkbox" role="switch" id={ id } />
      <label className="form-check-label" htmlFor={ id }>{ text }</label>
    </div>
  )

}

export default ToggleButton;
