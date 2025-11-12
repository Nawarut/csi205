import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Fth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("..Home");
  }, []);
  return (
    <>
      <h3>Forward to home</h3>
    </>
  );
};

export default Fth;
