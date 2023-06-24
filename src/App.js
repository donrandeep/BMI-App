import Swal from "sweetalert2";
import "./App.css";
import React, { useState } from "react";
//import swal from 'sweetalert2';

function App() {
   const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const [advice, setAdvice] = useState("");

  //Calculation
  let meter = height / 3.281;
  let m2 = meter * meter;
  let calcBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      Swal.fire('Please Enter a valid Weight & Height!!')
      
    } else {
      let bmi = weight / m2;
      setBmi(bmi.toFixed(1));


      if (bmi < 18.5) {
        setMessage("You are UnderWeight");
        setAdvice(
          "your body is less than the normal recommended weight. you need to eat more nutritious food with adequate exercises."
        );
      } else if (bmi >= 18.5 && bmi < 22.9) {
        setMessage("You are Normal");
        setAdvice(
          "Your weight is within the normal recommended weight. Maintain your weight with adequate exercises."
        );
      } else if (bmi >= 23 && bmi < 24.9) {
        setMessage("You are Risk to overweight");
        setAdvice(
          "Your weight is within the normal recommended weight. Try to bring down it with more exercises and correct dietary practices."
        );
      } else if (bmi >= 25 && bmi < 29.9) {
        setMessage("You are Overweight ");
        setAdvice(
          "Your weight is more than the normal recommended weight. Bring down it with more exercises and correct dietary practices."
        );
      } else {
        setMessage("You are Obesity");
        setAdvice(
          "Your weight is very much higher than the normal recommended weight and is a risk factor for many other diseases like diabetes and heart diseases. Bring down it with more exercises, correct dietary practices and medical advices."
        );
      }
    }
  };


  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2 className="h2">BMI Calculator</h2>
        <br></br>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (Kg)</label>
            <input
              type="text"
              placeholder="Enter Weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (feet)</label>
            <input
              type="text"
              placeholder="Enter Height value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Calculate
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Clean
            </button>
          </div>

          <div className="center">
            <h3>Your BMI Rate:{bmi}</h3>
            <p>{message}</p>
            <p className="advice">{advice}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;


  //OLD Logic

  // let calcBmi = (e) => {

  //   e.preventDefault();

  //   if(weight===0 || height===0)
  //   {
  //     alert('Please Enter a valid Weight & Height!!')
  //   }

  //   else{
  //     let bmi = (weight/(height*height)*703)
  //     setBmi(bmi.toFixed(1))

  //     //

  //     if(bmi<25) {
  //       setMessage('You are underweight')
  //     }

  //     else if (bmi>=25 && bmi <30){
  //       setMessage('You are a Healthy weight')
  //     }

  //     else{
  //       setMessage('You are overweight')
  //     }
  //   }
  // }

