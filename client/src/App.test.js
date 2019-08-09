import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const wrapper = rtl.render(
    <span className="greet">hello world</span>
  );
});