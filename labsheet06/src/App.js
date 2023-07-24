import Timer from "./components/Timer";
import Toggle from "./components/Toggle";
import TodoList from "./components/TodoList";
import CardList from "./components/CardList";
import Form from "./components/Form";

function App() {
  const todos = [
    "Learn React",
    "Build a project",
    "Go for a walk",
    "Do some exercises",
    "Join a music class",
    "Read a novel",
  ];

  const cards = [
    { title: "Card 1", content: "This is the content of Card 1" },
    { title: "Card 2", content: "This is the content of Card 2" },
    { title: "Card 3", content: "This is the content of Card 3" },
  ];

  return (
    <div className="App">
      <Toggle />
      <Timer />
      <TodoList todos={todos} />
      <CardList cards={cards} />
      <Form />
    </div>
  );
}

export default App;
