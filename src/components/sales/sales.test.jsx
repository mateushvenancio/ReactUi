import React from 'react';
import { render } from '@testing-library/react';
import Sales from './sales';

test('renders Sales component', () => {
  const sales = {
    uploads: 10,
    uploadSuccess: 5,
    linesAdded: 10,
    linesSaved: 10,
  };

  const { getByText } = render(<Sales sales={sales} />);
  expect(getByText(/Sales/i)).toBeInTheDocument();

  expect(getByText(/50%/i)).toBeInTheDocument();
  expect(getByText(/100%/i)).toBeInTheDocument();
});
