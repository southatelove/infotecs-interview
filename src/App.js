// BASE
import React from "react";

// COMPONENTS
import Header from "./Components/Header/Header";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  const [todo, setTodo] = React.useState([
    {
      id: 1,
      title: "first test todo",
      status: true,
    },
    {
      id: 2,
      title: "second test todo",
      status: false,
    },
    {
      id: 3,
      title: "third test todo",
      status: true,
    },
  ]);
  return (
    <div className="App">
      <Header></Header>
      <AddTodo todo={todo} setTodo={setTodo}></AddTodo>
      <TodoList todo={todo} setTodo={setTodo}></TodoList>
    </div>
  );
}

export default App;
