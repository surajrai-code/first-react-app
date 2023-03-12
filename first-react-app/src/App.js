// import logo from './logo.svg';
import React,{useState} from 'react';

import './App.css';
import ExpanseForm from './components/ExpanseForm';
import ExpanseList from './components/ExpanseList';
const App=()=>{
  const [expanseList,setExpanseList]=useState([]);
  const addExpanseHandler=(uAmount,uDiscription,uOption)=>{
      setExpanseList((prevExpanseList)=>{
        return[...prevExpanseList,{Amount:uAmount,Discription:uDiscription,Option:uOption,id: Math.random().toString()}]
      })
  }

  return (
    <div className="App">
        <ExpanseForm onAddExpanse={addExpanseHandler} />
        <ExpanseList Expanses={expanseList}/>
    </div>
  );
}

export default App;
