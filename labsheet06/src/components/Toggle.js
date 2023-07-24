import React, { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      {isOn ? <p>ON</p> : <p>OFF</p>}
    </div>
  );
};

export default Toggle;
