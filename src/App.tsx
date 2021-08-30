import React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TopBar from "./components/TopBar";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
// import { Todo } from "./store";
import { useTodos } from "./store";

export function App() {
  // const [todos, setTodos] = useState<Todo[]>([])
  const [todos, setTodos] = useTodos([])
  console.log("test", todos)
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TopBar setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos}/>
        <TodoAdd  todos={todos} setTodos={setTodos} />
      </Box>
    </ChakraProvider>
  );
}
