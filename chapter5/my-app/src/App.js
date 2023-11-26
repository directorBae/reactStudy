import Button from "./button";
import style from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  console.log("i go all the time.");
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  const iRunOnlyOnce = () => {
    console.log("CALLING api...");
  };
  useEffect(() => {
    if (keyword !== "") {
      console.log("SEARCH FOR: ", keyword);
    }
  }, [keyword]);
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <h1 className={style.title}>Hello World!</h1>
      <h1>{counter}</h1>
      <button value={keyword} onClick={onClick}>
        Click me
      </button>
      <Button text="Hello" />
      <input onChange={onChange} type="text" placeholder="Search here..." />
    </div>
  );
}

export default App;
