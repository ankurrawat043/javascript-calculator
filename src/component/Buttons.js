import React, { useState } from "react";

function Buttons() {
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState(0);
  const display = (symbl) => {
    setExpression((prv) => prv + symbl);
    if (expression[expression.length - 1] === "=") {
      if (/[1-9.]/.test(symbl)) {
        setExpression(symbl);
      } else {
        setExpression(answer + symbl);
      }
    }
  };
  const calculate = () => {
    if (expression[expression.length - 1].match(/[1-9]/)) {
      setAnswer(eval(expression));
    }
  };
  const allClear = () => {
    setExpression("");
    setAnswer(0);
  };
  const clear = () => {
    setExpression((prv) =>
      prv
        .split("")
        .slice(0, prv.length - 1)
        .join("")
    );
  };
  return (
    <div className="container">
      <div className="grid">
        <div className="dis">
          <input
            className="dis"
            type="text"
            value={expression}
            placeholder="0"
          />
          <div className="total">{answer}</div>
        </div>
        <button onClick={allClear} className="padButton AC red">
          AC
        </button>
        <button onClick={clear} className="padButton C red">
          C
        </button>
        <button onClick={() => display("/")} className="padButton div ">
          /
        </button>
        <button onClick={() => display("*")} className="padButton multi ">
          X
        </button>
        <button
          onClick={() => display("7")}
          className="padButton seven dark-grey"
        >
          7
        </button>
        <button
          onClick={() => display("8")}
          className="padButton eight dark-grey"
        >
          8
        </button>
        <button
          onClick={() => display("9")}
          className="padButton nine dark-grey"
        >
          9
        </button>
        <button onClick={() => display("-")} className="padButton minus ">
          -
        </button>
        <button
          onClick={() => display("4")}
          className="padButton four dark-grey"
        >
          4
        </button>
        <button
          onClick={() => display("5")}
          className="padButton five dark-grey"
        >
          5
        </button>
        <button
          onClick={() => display("6")}
          className="padButton six dark-grey"
        >
          6
        </button>
        <button onClick={() => display("+")} className="padButton plus ">
          +
        </button>
        <button
          onClick={() => display("1")}
          className="padButton one dark-grey"
        >
          1
        </button>
        <button
          onClick={() => display("2")}
          className="padButton two dark-grey"
        >
          2
        </button>
        <button
          onClick={() => display("3")}
          className="padButton three dark-grey"
        >
          3
        </button>
        <button onClick={calculate} className="padButton equal blue">
          =
        </button>
        <button
          onClick={() => display("0")}
          className="padButton zero dark-grey"
        >
          0
        </button>
        <button
          onClick={() => display(".")}
          className="padButton dot dark-grey"
        >
          .
        </button>
      </div>
    </div>
  );
}

export default Buttons;
