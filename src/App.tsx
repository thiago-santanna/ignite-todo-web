import { Header } from "./components/Header";
import { AddTodo } from "./components/AddTodo/index";
import { Todo } from "./components/Todo";

export function App() {
  return (
    <>
      <Header />
      <AddTodo />
      <Todo />
    </>
  );
}
