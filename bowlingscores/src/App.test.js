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

  describe('when calculating the score for gutter game', () =>{
    let testRun = '00-00-00-00-00-00-00-00-00-00';
    beforeEach(()=>{
      app.find('FormControl').simulate('change',{
        target:{value: testRun}
      });
    });
    it('updates the text in state', () => {
      expect(app.state().text).toEqual(testRun);
    });
    it('updates the result in state', () => {
      expect(app.state().result).toEqual(0);
    });
  });

  describe('when calculating the score for all ones', () =>{
    let testRun = '11-11-11-11-11-11-11-11-11-11';
    beforeEach(()=>{
      app.find('FormControl').simulate('change',{
        target:{value: testRun}
      });
    });
    it('updates the text in state', () => {
      expect(app.state().text).toEqual(testRun);
    });
    it('updates the result in state', () => {
      expect(app.state().result).toEqual(20);
    });
  });
});
