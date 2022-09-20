// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadUsers></LoadUsers>
    </div>
  );
}

function LoadUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div>
      <h1>Total Users: {users.length}</h1>
      {
        users.map(user => <DisplayUsers name={user.name} email={user.email}></DisplayUsers>)
      }
    </div>
  )
}
function DisplayUsers(props) {
  return (
    <div className='dispalyusers'>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}
export default App;
