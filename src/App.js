import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        count: 0,
        rendering: false
    }
  }

  handleIncrement = () => {
    // this.state.count += 1; 
    this.setState( (prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  handleDecrement = () => {
    this.setState( (prevState) => {
      return {
        count:  prevState.count - 1
      }
    })
  }


  render(){
      return (
        <>
          <center>
          <div className="counter-view">{this.state.count}</div>
          <button type="button" className="btn btn-primary" onClick={this.handleIncrement}>Count +</button>
          <button type="button" className="btn btn-secondary" onClick={this.handleDecrement}>Count -</button>
          </center>
        </>
      )
  }
}



export default App;
