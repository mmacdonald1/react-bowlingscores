import React, { Component } from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      text: '',
      rolls: []
    }
  }
  onChange = (e) => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div>
        <h2>Bowling Scores App</h2>
        <p>Enter your bowling scores for each frame separated by dashes. Enter / for spares and X for strikes. Bonus roles can be tacked on the end. Example 45-54-36-27-09-63-81-18-90-7/-5 or for a perfect game X-X-X-X-X-X-X-X-X-X-XX.</p>
        <Form>
          <FormControl onChange= {this.onChange}/>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
