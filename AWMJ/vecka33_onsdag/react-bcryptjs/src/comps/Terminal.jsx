const Terminal = ({ hashedPassword1, hashedPassword2, compareResult, selectedCompareResult }) => {
  return (
    <div className="terminal-window">
      <header>
        <div className="button green"></div>
        <div className="button yellow"></div>
        <div className="button red"></div>
      </header>
      <section className="terminal">
        {hashedPassword1 && <div>Hashed password 1: {hashedPassword1}</div>}
        {hashedPassword2 && <div>Hashed password 2: {hashedPassword2}</div>}
        {compareResult && <div>Comparison result: {compareResult}</div>}
        {selectedCompareResult && <div>Selected comparison result: {selectedCompareResult}</div>}
      </section>
    </div>
  );
};

export default Terminal;