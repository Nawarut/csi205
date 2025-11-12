import { useState, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const BallAnimation = () => {
  const fieldWidth = 930;
  const fieldHeight = 400;
  const diameter = 100;
  const maxLeft = fieldWidth - diameter - 2;
  const maxTop = fieldHeight - diameter - 2;
  const vx = 5;
  const vy = 5;

  const [running, setRunning] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [ballImage, setBallImage] = useState('none');

  const ballRef = useRef(null);
  const runBtnRef = useRef(null);

  const images = {
    none: "None.png",
    basketball: "Basketball.png",
    football: "Football.png",
    volleyball: "Volleyball.png",
    human: "Human.png",
    cartoon: "Cartoon.png",
    logo: "Logo.png",
  };

  // toggle run/pause
  const runClick = () => {
    setRunning(prev => !prev);
  };

  // set ball image
  const handleSetBallImage = (type) => {
    setBallImage(type);
  };

  // calculate position
  const calculate = () => {
    setX(prevX => {
      let newX = goRight ? prevX + vx : prevX - vx;
      if (newX >= maxLeft) {
        setGoRight(false);
        newX = maxLeft;
      } else if (newX <= 0) {
        setGoRight(true);
        newX = 0;
      }
      return newX;
    });

    setY(prevY => {
      let newY = goDown ? prevY + vy : prevY - vy;
      if (newY >= maxTop) {
        setGoDown(false);
        newY = maxTop;
      } else if (newY <= 0) {
        setGoDown(true);
        newY = 0;
      }
      return newY;
    });
  };

  // render position and rotation
  useEffect(() => {
    if (ballRef.current && runBtnRef.current) {
      ballRef.current.style.left = `${x}px`;
      ballRef.current.style.top = `${y}px`;
      ballRef.current.style.transform = `rotate(${(x + y) * 2}deg)`;

      if (running) {
        runBtnRef.current.innerHTML = '<span class="bi bi-pause">&nbsp;Pause</span>';
        runBtnRef.current.classList.remove("btn-success");
        runBtnRef.current.classList.add("btn-danger");
      } else {
        runBtnRef.current.innerHTML = '<span class="bi bi-play">&nbsp;Run</span>';
        runBtnRef.current.classList.remove("btn-danger");
        runBtnRef.current.classList.add("btn-success");
      }
    }
  }, [x, y, running]);

  // main loop
  useEffect(() => {
    const interval = setInterval(() => {
      if (running) calculate();
    }, 25);
    return () => clearInterval(interval);
  }, [running, goRight, goDown]);

  // keyboard control
  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === "Space") runClick();
      else if (e.key >= "0" && e.key <= "6") {
        const keys = ["none", "basketball", "football", "volleyball", "human", "cartoon", "logo"];
        setBallImage(keys[parseInt(e.key)]);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div id="calculate" className="anim-container">
      <div id="field" className="box box-new" style={{ width: fieldWidth, height: fieldHeight }}>
        <div
          id="ball"
          ref={ballRef}
          className="ball"
          style={{ backgroundImage: ballImage !== "none" ? `url(${images[ballImage]})` : "none" }}
        ></div>
      </div>
      <div className="mt-2">
        <button ref={runBtnRef} id="run" className="btn btn-success" onClick={runClick}>
          <span className="bi bi-play">&nbsp;Run</span>
        </button>
        <button className="btn btn-primary" onClick={() => handleSetBallImage('none')}>None</button>
        <button className="btn btn-primary" onClick={() => handleSetBallImage('basketball')}>Basketball</button>
        <button className="btn btn-primary" onClick={() => handleSetBallImage('football')}>Football</button>
        <button className="btn btn-primary" onClick={() => handleSetBallImage('volleyball')}>Volleyball</button>
        <button className="btn btn-primary" onClick={() => handleSetBallImage('human')}>Human</button>
        <button className="btn btn-primary" onClick={() => handleSetBallImage('cartoon')}>Cartoon</button>
        <button className="btn btn-primary" onClick={() => handleSetBallImage('logo')}>Logo</button>
      </div>
    </div>
  );
};

export default BallAnimation;
