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
function Hello() {
  useEffect(() => {
    console.log("created");
    return () => console.log("destroyed");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  function onClick() {
    setShowing((current) => !current);
  }
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"} </button>
    </div>
  );
}

export default App;
