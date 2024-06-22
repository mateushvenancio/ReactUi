import React from 'react';
import { render } from '@testing-library/react';
import Sales from './sales';

test('renders Sales component', () => {
  const sales = {
    uploads: 0,
    linesAdded: 0,
    uploadSuccess: 0,
    linesSaved: 0,
  };

  const { getByText } = render(<Sales sales={sales} />);
  expect(getByText(/Sales/i)).toBeInTheDocument();
});
