import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

test('handles app render', () => {
  const { container } = render(<App />)

  expect(container).toMatchSnapshot()
})
