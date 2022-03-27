// import Button from "./Button";
// import styles from "./App.module.css";

// function App() {
//   return (
//     <div>
//       <h1 className={styles.title}>Welcome back!</h1>
//       <Button text="continue" />
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((current) => current + 2);
  };
  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  };
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
