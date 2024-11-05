import './App.css'
import TodoApp from './Components/TodoApp'
import SearchInput from './Components/SearchInput'
import ListItems from './Components/ListItems'
import Button from './Components/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

function App() {
  const [dateValue, setDateValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [groceryList, setGroceryList] = useState([]);
  
  const addItem = () => {
    if(inputValue.trim() !== "" && dateValue.trim() !==""){
      const newItem = {
        id: Date.now(),
        item: inputValue,
        date: dateValue,
      };
      setGroceryList((groceryList) => [...groceryList, newItem]);

      setInputValue('');
      setDateValue('');
    }else{
      alert('Please enter both item and date');
    }
  };

  const deleteRow = (id) => {
    setGroceryList(groceryList.filter(item => item.id !== id));
  };

  return (
    <>
      <TodoApp>
        <h4 className='text-primary'>Grocery List</h4>
        <div className="row">
          <div className="col-6 pe-2">
            <SearchInput inputValue={inputValue} setInputValue={setInputValue} addItem={addItem}></SearchInput>
          </div>
          <div className="col-5">
            <input type="date" value={dateValue} className="form-control" onChange={(e) => setDateValue(e.target.value)}/>
          </div>
          <div className="col-1 p-0">
            <Button addItem={addItem}></Button>
          </div>
        </div>
        <br/>
        <ListItems list={groceryList} onDelete={deleteRow}></ListItems>
      </TodoApp>
    </>
  )
}
export default App
