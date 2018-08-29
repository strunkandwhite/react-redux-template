import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'

import Title from 'Src/components/Title'
import App from './'

describe('<App />', () => {
  let props
  let wrapper
  let store

  const AppWrapper = () => {
    if (!wrapper) {
      wrapper = mount(<App store={store} {...props} />)
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
