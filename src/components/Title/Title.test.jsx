import React from 'react'
import { render } from '@testing-library/react'

import Title from '.'

describe('<Title />', () => {
  it('renders a welcome message', () => {
    const { getByText } = render(<Title title="hello" />)
    expect(getByText(/hello/i))
  })
})
