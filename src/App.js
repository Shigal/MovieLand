import './App.css';


const Person = (props) => {
  return(
    <>
    <h1>First Name: {props.fName}</h1>
    <h1>Last Name: {props.lName}</h1>
    <h1>Occupation: {props.job}</h1>
    </>
  );
}

const App = () => {
  return (
    <div className="App">
     <Person fName='Jane' lName='Maria' job='editor'/>
     <Person fName='Jack' lName='Sparrow' job='pirate'/>
     <Person fName='Mark' lName='Antony' job='publisher'/>
    </div>
  );
}

export default App;
