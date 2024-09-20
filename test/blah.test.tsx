// import * as React from 'react';
import * as ReactDOM from 'react-dom';


describe('it', () => {
  it('renders without crashing', () => {
    console.log("hello");
    
    const div = document.createElement('div');
    // ReactDOM.render(<Thing />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
