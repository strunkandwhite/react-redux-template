import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import App from '.'

describe('<App />', () => {
  it('renders a Title', () => {
    const mockStore = configureStore()
    const store = mockStore({ user: { name: 'Jack' } })
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    )
    expect(getByText(/hello jack/i))
  })
})
