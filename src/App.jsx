import { useEffect, useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Item from "./components/Item";
import List from "./components/List";

function App() {
  const initialData = [
    {
      message: "I tried so hard",
      deadline: '2001-10-09',
      priority: 'High'
    },
    {
      message: "And got so far",
      deadline: '2001-10-09',
      priority: 'High'
    },
    {
      message: "But in the end",
      deadline: '2001-10-09',
      priority: 'High'
    },
    {
      message: "It doesn't even matter",
      deadline: '2001-10-09',
      priority: 'High'
    },
  ];

  const [item, setItem] = useState({});
  const [list, setList] = useState(initialData);

  const getItems = () => {
    return list.map((item, i) => (
      <Item key={uuidv4()} message={item.message} deadline={item.deadline} priority={item.priority} func={() => deleteItem(i)} />
    ));
  };

  const addItem = (e) => {
    e.preventDefault();
    let errors = [];
    const now = new Date();
    const date = new Date(e.target.deadline.value)
    const message = e.target.message.value;
    const deadline = new Date(e.target.deadline.value).toLocaleDateString();
    const priority = e.target.priority.value;
    if (message.length > 30 || message.length < 6) {
      errors = [...errors, 'Task length must be between 6 and 30 characters'];
    };
    if (date < now) {
      errors = [...errors, 'Date has already passed'];
    };
    if (errors.length != 0) {
      let msg = '';
      for (let i = 0; i < errors.length; i++) {
        if (i == errors.length - 1) {
          msg += errors[i]
        } else {
          msg += errors[i] + ', '
        }
      };
      alert(`Couldn't add task: ${msg}.`);
      return;
    }
    const item = { message, deadline, priority };
    setItem(item);
    setList([...list, item]);
    e.target.message.value = "";
    e.target.deadline.value = "";
    e.target.priority.value = "High";
  };

  const clearItems = () => {
    setList([]);
  };

  const resetItems = () => {
    setList(initialData);
  };

  const deleteItem = (i) => {
    setList(list.filter((obj, j) => j !== i));
  };

  return (
    <>
      <section>
        <h1>New task</h1>
        <form onSubmit={addItem} id="itemForm">
          <label htmlFor="message">Task</label>
          <input type="text" name="message" placeholder="Wake up" required/>
          <label htmlFor="deadline">Deadline</label>
          <input type="date" name="deadline" required/>
          <label htmlFor="priority">Priority</label>
          <select name="priotiry" id="priority">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button type="submit">ADD</button>
        </form>
      </section>
      <section id="btns">
        <button onClick={clearItems}>CLEAR</button>
        <button onClick={resetItems}>RESET</button>
      </section>
      <section id="itemList">
        <h1>My to do list</h1>
        <List func={getItems()} />
      </section>
    </>
  );
}

export default App;
