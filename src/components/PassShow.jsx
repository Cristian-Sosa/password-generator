function PassShow({ pass }) {
  return (
    <div className="PassContainer">
      <span className="PassShow">
        {pass ? pass : "Click en Generar contraseña"}
      </span>
    </div>
  );
}

export default PassShow;
