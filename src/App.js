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
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setCounter((current) => current + 2);
  };

  const onChange = (event) => {
    setKeyword((current) => event.target.value);
  };

  useEffect(() => {
    console.log("i run only once");
  }, []);
  useEffect(() => {
    console.log("i run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes");
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Serach here..."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
