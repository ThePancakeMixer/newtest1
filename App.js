import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';


class ExcerciseEntry extends Component {
  render() {


    const blockStyle = {
      display:'grid',
      gridTemplateRows:'90px 90px',
      gridTemplateColumns:'200px 200px',
      background: '#2A4A51',
      border: '1px solid #979797',
      borderRadius: '8px',
      height: '180px',
      width: '400px',
    }

    const ExNameStyle = {
      fontFamily: 'Helvetica',
      marginTop:'40px',
      marginLeft:'40px',
      fontSize: '1.5em',
      color: 'rgb(255,255,255)',
      gridRow:'1',
      gridColumnSpan:'2',
    };

    const logButtonStyle = {
      marginBottom:'45px',
      marginTop:'10px',
      marginLeft:'25px',
      marginRight:'25px',

      backgroundColor: '#E8560E',
      color: 'rgb(255,255,255)',
      fontSize:'1em',
      border: '1px solid #97979',
      borderRadius: '8px',
      gridRow:'2',gridColumn:'2',

    }

    const weightInputStyle = {
      marginBottom:'45px',
      marginTop:'15px',
      marginLeft:'25px',
      marginRight:'25px',
      gridRow:'2',gridColumn:'1',
    }


    return (
        <div style={blockStyle}>

          <label style={ExNameStyle}>{this.props.exName}</label>

          <button style={logButtonStyle}> Log Set</button>

          <input style={weightInputStyle}></input>


        </div>
    )


  }
}

function App() {

  const [count,setCount] = useState(0);

  let onClick = () => {
    setCount(count+1);
  }



  return (
    <div className="App">

      <ExcerciseEntry exName="Flat Chest Press"/>
      <ExcerciseEntry exName="Incline Chest Press"/>
      <ExcerciseEntry exName="Decline Chest Press"/>


    </div>
  );
}





export default App;
