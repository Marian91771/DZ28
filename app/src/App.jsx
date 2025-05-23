import ToDoInput from './components/ToDoInput';
import ToDoTable from './components/ToDoTable';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todo')) || [];
    setItems(saved);
  }, []);

  const onAdd = (values) => {
    let updatedItems;

    if (editIndex !== null) {
      updatedItems = items.map((item, i) => i === editIndex ? values.ToDo : item);
      setEditIndex(null);
    } else {
      updatedItems = [...items, values.ToDo];
    }

    setItems(updatedItems);
    localStorage.setItem('todo', JSON.stringify(updatedItems));
  };


  const onDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    localStorage.setItem('todo', JSON.stringify(updatedItems));
  }

  const onEdit = (index) => {
    setEditIndex(index);
  }

  return (
    <>
      <ToDoInput onAdd={onAdd} editValue={editIndex !== null ? items[editIndex] : ''}/>
      <ToDoTable items={items} onDelete={onDelete} onEdit={onEdit} />
    </>
  )
}

export default App
