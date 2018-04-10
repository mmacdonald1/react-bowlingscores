import React, { Component } from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      text: '',
      rolls: [],
      result: 0,
      rollIndex: 0
    }
  }
  onChange = (e) => {
    this.setState({ text: e.target.value })
  }

  onSubmit(){
    const text = this.state.text;
    let rolls = text.replace(/[-]/g,"", "").split("");
    this.setState({rolls: rolls});
    this.score()
  }
  score(){
    let result = this.state.result;
    let rolls = this.state.rolls;
    for (let i=0; i<20;i++){
      result += rolls[i]
    }
    this.setState({result:result})
  }
  // score(){
  //   const {result, rollIndex} = this.state;
  //
  //     for (let frameIndex = 0; frameIndex< 10; frameIndex++){
  //       //accounting for a spare
  //       if(this.isStrike()){
  //         this.setState({result: this.state.result + this.getStrikeScore()});
  //         this.setState({rollIndex: rollIndex+1});
  //       }
  //       else if (this.isSpare()){
  //         this.setState({result: this.state.result + this.getSpareScore()});
  //         //gives the two rolls in each frame
  //         this.setState({rollIndex: rollIndex+2});
  //       }
  //       else{
  //
  //         this.setState({result: this.state.result + this.getNormalScore()});
  //         //gives the two rolls in each frame
  //         this.setState({rollIndex: rollIndex+2});
  //       }
  //
  //     }
  //           console.log(result)
  //           return result;
  //
  // }
  // isStrike(){
  //   return this.state.rolls[this.state.rollIndex] === 'X';
  // }
  //
  // isSpare(){
  //   return this.state.rolls[this.state.rollIndex] === '/';
  // }
  //
  // getStrikeScore(){
  //   return 10 + this.state.rolls[this.state.rollIndex + 1];
  // }
  //
  // getSpareScore(){
  //   return 10 + this.state.rolls[this.state.rollIndexx + 1] + this.state.rolls[this.state.rollIndex + 2];
  // }
  //
  // getNormalScore(){
  //   return this.state.rolls[this.state.rollIndex] + this.state.rolls[this.state.rollIndex + 1];
  // }




  render() {
    return (
      <div>
        <h2>Bowling Scores App</h2>
        <p>Enter your bowling scores for each frame separated by dashes. Enter / for spares and X for strikes. Bonus roles can be tacked on the end. Example 45-54-36-27-09-63-81-18-90-7/-5 or for a perfect game X-X-X-X-X-X-X-X-X-X-XX.</p>
        <Form>
          <FormControl onChange= {this.onChange}/>
          <Button onClick={() => this.onSubmit()} >Submit</Button>
        </Form>
        <h3>{this.state.result}</h3>
        {
          this.state.rolls.map((rolls, index) =>{
            return(
              <div key={index}>{rolls}</div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
