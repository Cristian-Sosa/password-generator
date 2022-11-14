function ToggleButton({ text, id }) {

  return (
    <div className="form-check form-switch form-check-reverse">
      <input className="form-check-input" type="checkbox" role="switch" id={ id } />
      <label className="form-check-label" htmlFor={ id }>{ text }</label>
    </div>
  )

}

export default ToggleButton;
