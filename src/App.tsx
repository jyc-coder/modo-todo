import React from "react";
import "./App.css";
import { getTodoList } from "./api/services/todo";

function App() {
  const [data, setData] = React.useState<ITodo[]>();
  React.useEffect(() => {
    const fetchData = async () => {
      await getTodoList().then((data) => {
        setData(data);
      });
    };

    fetchData();
  }, []);
  console.log(data);

  return <></>;
}

export default App;
