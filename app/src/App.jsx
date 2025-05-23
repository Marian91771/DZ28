import ToDoInput from './components/ToDoInput';
import ToDoTable from './components/ToDoTable';
import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  const onAdd = (values) => {
    console.log(values);
    setItems([...items, values.ToDo]);
  }

  const onDelete = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated)
  }

  return (
    <>
      <ToDoInput onAdd={onAdd}/>
      <ToDoTable items={items} onDelete={onDelete}/>
    </>
  )
}

export default App
