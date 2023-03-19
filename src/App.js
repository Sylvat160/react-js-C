import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name : {props.name} </h1>
      <h1> age : {props.age} </h1>
      <h1> Number : {props.number} </h1>  
    </>
  )
}

const App = () => {

  const name = "Sylva"
  const isNameShowing = false 
  return (
    <div className="App">
      <Person name={'John'} age={32} number={123123} />
    </div>
  );
}

export default App;
