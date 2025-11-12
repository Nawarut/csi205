import { useState } from "react"
import "../index.css"

const Calculator = () => {
  const [screen, setScreen] = useState("0");
  const [state, setState] = useState("S1"); // S1 = ready, S2 = typing
  const [operand1, setOperand1] = useState(null);
  const [operand2, setOperand2] = useState(null);
  const [lastOperator, setLastOperator] = useState(null);
  const [justEvaluated, setJustEvaluated] = useState(false);

  const formatResult = (n) => {
    if (Number.isFinite(n)) {
      let s = n.toString();
      if (s.length > 9) s = Number(n).toPrecision(9);
      return s;
    }
    return "0";
  };

  const doOp = (a, b, op) => {
    if (op === "+") return a + b;
    if (op === "-") return a - b;
    return b;
  };

  const numberClicked = (number) => {
    if (justEvaluated) {
      setOperand1(null);
      setOperand2(null);
      setLastOperator(null);
      setJustEvaluated(false);
    }

    if (state === "S1") {
      setScreen(number.toString());
      setState("S2");
    } else if (state === "S2") {
      if (screen.length < 9) setScreen(screen + number.toString());
    }
  };

  const operatorClicked = (operator) => {
    let op1 = operand1;
    let op2 = operand2;

    if (state === "S2") {
      if (op1 === null) setOperand1(parseFloat(screen));
      else if (lastOperator !== null) {
        op2 = parseFloat(screen);
        op1 = doOp(op1, op2, lastOperator);
        setScreen(formatResult(op1));
        setOperand1(op1);
      }
    } else if (state === "S1" && op1 === null) {
      setOperand1(parseFloat(screen));
    }

    setLastOperator(operator);
    setState("S1");
    setJustEvaluated(false);
  };

  const equalClicked = () => {
    let op1 = operand1;
    let op2 = operand2;

    if (state === "S2" && op1 !== null && lastOperator !== null) {
      op2 = parseFloat(screen);
      op1 = doOp(op1, op2, lastOperator);
      setScreen(formatResult(op1));
      setOperand1(op1);
      setState("S1");
      setJustEvaluated(true);
      return;
    }

    if (state === "S1" && op1 !== null && lastOperator !== null) {
      if (op2 === null) {
        op2 = op1;
        setOperand2(op2);
      }
      op1 = doOp(op1, op2, lastOperator);
      setScreen(formatResult(op1));
      setOperand1(op1);
      setJustEvaluated(true);
    }
  };

  const ceClicked = () => {
    setScreen("0");
    setState("S1");
    setOperand1(null);
    setOperand2(null);
    setLastOperator(null);
    setJustEvaluated(false);
  };

  return (
    <div className="cal-container">
      <div>
        <div className="cal-screen">{screen}</div>
      </div>
      <div>
        <button className="btn btn-green btn-cal" disabled>MC</button>
        <button className="btn btn-green btn-cal" disabled>MR</button>
        <button className="btn btn-green btn-cal" disabled>M+</button>
        <button className="btn btn-green btn-cal" disabled>M−</button>
        <button className="btn btn-red btn-active-red btn-cal" onClick={ceClicked}>CE</button>
      </div>

      <div>
        {[7,8,9].map(n => (
          <button key={n} className="btn btn-blue btn-active btn-cal" onClick={() => numberClicked(n)}>{n}</button>
        ))}
        <button className="btn btn-green btn-cal" disabled>÷</button>
        <button className="btn btn-green btn-cal" disabled>√</button>
      </div>

      <div>
        {[4,5,6].map(n => (
          <button key={n} className="btn btn-blue btn-active btn-cal" onClick={() => numberClicked(n)}>{n}</button>
        ))}
        <button className="btn btn-green btn-cal" disabled>×</button>
        <button className="btn btn-green btn-cal" disabled>%</button>
      </div>

      <div>
        {[1,2,3].map(n => (
          <button key={n} className="btn btn-blue btn-active btn-cal" onClick={() => numberClicked(n)}>{n}</button>
        ))}
        <button className="btn btn-green btn-cal" onClick={() => operatorClicked('-')}>−</button>
        <button className="btn btn-green btn-cal" disabled>1/x</button>
      </div>

      <div>
        <button className="btn btn-blue btn-active btn-cal" onClick={() => numberClicked(0)}>0</button>
        <button className="btn btn-blue btn-cal" disabled>.</button>
        <button className="btn btn-blue btn-cal" disabled><sup>+</sup>/<sub>−</sub></button>
        <button className="btn btn-green btn-cal" onClick={() => operatorClicked('+')}>+</button>
        <button className="btn btn-green btn-active btn-cal" onClick={equalClicked}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
