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
    // this.score()
  }

  // score(){
  //   const {result, rollIndex} = this.state;
  //
  //     for (let frameIndex = 0; frameIndex< 10; frameIndex++){
  //       //accounting for a spare
  //       if(this.isStrike()){
  //         this.setState{(result: this.state.result += this.getStrikeScore())};
  //         rollIndex++
  //       }
  //       else if (this.isSpare()){
  //         result += this.getSpareScore();
  //         //gives the two rolls in each frame
  //         rollIndex += 2;
  //       }
  //       else{
  //         result += this.getNormalScore();
  //         //gives the two rolls in each frame
  //         rollIndex += 2;
  //       }
  //
  //     }
  //           return result;
  //
  // }
  // isStrike(){
  //   return this.rolls[rollIndex] == 'X';
  // }
  //
  // isSpare(){
  //   return this.rolls[rollIndex] == '/';
  // }
  //
  // getStrikeScore(){
  //   return 10 + this.rolls[rollIndex + 1];
  // }
  //
  // getSpareScore(){
  //   return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  // }
  //
  // getNormalScore(){
  //   return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
  // }
  //



  render() {
    return (
      <div>
        <h2>Bowling Scores App</h2>
        <p>Enter your bowling scores for each frame separated by dashes. Enter / for spares and X for strikes. Bonus roles can be tacked on the end. Example 45-54-36-27-09-63-81-18-90-7/-5 or for a perfect game X-X-X-X-X-X-X-X-X-X-XX.</p>
        <Form>
          <FormControl onChange= {this.onChange}/>
          <Button onClick={() => this.onSubmit()} >Submit</Button>
        </Form>
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
