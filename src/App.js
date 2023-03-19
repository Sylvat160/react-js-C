import './App.css';

const Person = () => {
  return (
    <>
      <h1>Name : Sylva</h1>
      <h1> age : 23 </h1>
      <h1> Number : 329034 </h1>  
    </>
  )
}

const App = () => {

  const name = "Sylva"
  const isNameShowing = false 
  return (
    <div className="App">
      <Person />
      <Person />
      <Person />
    </div>
  );
}

export default App;
