import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import "@testing-library/react/cleanup-after-each"


afterEach(rtl.cleanup);

describe('<App />', () => {
  it('renders without crashing using ReactDOM', () => {
    const wrapper = rtl.render(
      <span className="greet">hello world</span>
    );
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div)
  });

  it('renders without crashing', () => {
    render(<App/>)

  });

  it('renders Users',() => {
    const app = render(<App/>);
    app.getByText(/users/i)

  })
})
