function GenerateButton({ setPass, upper, number, simbol, range }) {
  const generatePassword = () => {
    let pwd = '';
    const lowerPattern = "abcdefghijklmnopqrstuvwxyz";
    const upperPattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbertPattern = "0123456789";
    const simbolPattern = "@#$!%&()[]{}^*+-<>";

    let str = lowerPattern.concat(
      upper ? upperPattern : '',
      number ? numbertPattern : '',
      simbol ? simbolPattern : ''
    );

    for (let i = 0; i < range; i++) {
      var char = Math.floor(Math.random() * str.length + 1);
      pwd += str.charAt(char);
    }

    setPass(pwd);
  };

  return (
    <div className="GenerateButton">
      <button
        onClick={generatePassword}
        type="button"
        className="btn btn-primary"
      >
        Generar contraseña
      </button>
    </div>
  );
}

export default GenerateButton;
