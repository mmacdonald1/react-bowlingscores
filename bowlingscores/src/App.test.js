import React from 'react';
// import ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import App from './App';

describe('App',()=>{
  let app = mount (<App />);

  it('renders the App title', () => {
    // console.log(app.debug());
    expect(app.find('h2').text()).toEqual('Bowling Scores App')
  });
});
