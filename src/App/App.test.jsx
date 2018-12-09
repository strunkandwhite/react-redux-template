import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Title from 'Src/components/Title'
import App from '.'

describe('<App />', () => {
  let props
  let wrapper
  let store

  const AppWrapper = () => {
    if (!wrapper) {
      wrapper = mount(
        <Provider store={store}>
          <App {...props} />
        </Provider>,
      )
    }

    return wrapper
  }

  const mockStore = configureStore()

  beforeEach(() => {
    props = {}
    wrapper = undefined
    store = mockStore({ user: { name: 'Jack' } })
  })

  it('renders a Title', () => {
    expect(AppWrapper().find(Title)).to.have.length(1)
  })
})
