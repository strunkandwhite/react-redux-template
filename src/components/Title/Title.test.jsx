import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Title from './'

describe('<Title />', () => {
  let props
  let wrapper

  const TitleWrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Title {...props} />)
    }

    return wrapper
  }

  beforeEach(() => {
    props = {
      title: 'Jack',
    }

    wrapper = undefined
  })

  it('renders a welcome message', () => {
    expect(TitleWrapper().text()).to.equal('Jack')
  })
})
