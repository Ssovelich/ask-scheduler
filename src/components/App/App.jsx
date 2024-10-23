// import { useState } from 'react'

import { AppBar } from "../AppBar/AppBar";
import { Layout } from "../Layout/Layout";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskList } from "../TaskList/TaskList";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
}

export default App;
