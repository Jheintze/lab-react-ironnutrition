
import './App.css';
import foods from './foods.json';
import { useState } from "react"
import 'antd/dist/reset.css';

import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import SearchBar from './SearchBar';

function App() {
  
  const [list, setList] = useState(foods)
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFoodList = list.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleDelete = (name) => {
    console.log('clicked');
    const filteredFoodList = list.filter((food) => {
      return food.name !== name;
    });
    setList(filteredFoodList);
  };
  
  return (
    <div className="App">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Button onClick={() => setShowForm(!showForm)}>Show Form</Button>
      {showForm && (
        <AddFoodForm list={list} setList={setList} />
      )}
      <Row>
        {filteredFoodList.map((food, i) => {
          return (
            <Col key={i}>
              <FoodBox food={food} handleDelete={handleDelete} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
  }
export default App;







