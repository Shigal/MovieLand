import './App.css';

const Person = () => {
  return(
    <>
    <h1>First Name: Jack</h1>
    <h1>Last Name: Sparrow</h1>
    <h1>Occupation: Pirate</h1>
    </>
  );
}

const App = () => {

  const name = null;
  const isNameShowing = true;

  return (
    <div className="App">
      <h1>Hello, { isNameShowing ? name : "someone"}</h1>
      {name ? 
    <>
      test
    </> :
    (
      <>
    <h1>hello</h1>
    <h2>tester</h2> 
    </> 
    )
    }
    
    </div>
  );
}

export default App;
