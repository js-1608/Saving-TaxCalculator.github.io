  // form

import { useState } from "react";
const initialUserInput={
  'current-savings':0,
  'yearly-contribution':0,
  'expected-return':0,
  'duration':0
};

const UserInput=(props)=>{
  const [userInput, setUserInput] = useState(initialUserInput);

  // const useState=()=>{
  // const[userInput,setUserInput]= useState({
  //     'currentSaving':10000,
  //     'yearlyContribution':1200,
  //     'expectedReturn':7,
  //     'duration':10
  //   });
  // }

  const submitHandler=(event)=>{
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHandler=()=>{
    // event.preventDefault();
    setUserInput(initialUserInput);
  }
  // const resetHandler = (event) => {
  //   event.preventDefault(); // Prevent the default form reset behavior
  //   setUserInput(initialUserInput); // Reset the state
  // };
  

  const inputchangeHandler=(input,value)=>{
    setUserInput((prevInput)=>{
        return{
          ...prevInput,
          [input]:+value,
        };
    });
  };

    return(
      
    
    <form onSubmit={submitHandler} className="form">
    <div className="input-group">
      <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input
         onChange={(event)=>inputchangeHandler('current-savings',event.target.value)} 
         value={userInput['current-savings']}
         type="number"
         id="current-savings" />
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input 
         onChange={(event)=>inputchangeHandler('yearly-contribution',event.target.value)}
         value={userInput['yearly-contribution']}
        type="number" 
        id="yearly-contribution" />
      </p>
    </div>
    <div className="input-group">
      <p>
        <label htmlFor="expected-return">
          Expected Interest (%, per year)
        </label>
        <input 
         onChange={(event)=>inputchangeHandler('expected-return',event.target.value)}
         value={userInput['expected-return']}
        type="number"
         id="expected-return" />
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input
        onChange={(event)=>inputchangeHandler('duration',event.target.value)}
        type="number"
        id="duration"
        value={userInput['duration']}
         />
      </p>
    </div>
    <p className="actions">
      <button onClick={resetHandler} type="reset" className="buttonAlt" >
        Reset
      </button>
      <button type="submit" className="button">
        Calculate
      </button>
    </p>
  </form>
);
}
export default UserInput; 