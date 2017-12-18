import React from 'react'
import { createShallow } from 'material-ui/test-utils'

import FlipCard from '../src/FlipCard'

describe('<FlipCard />', () => {
  let shallow

  beforeEach(() => {
    shallow = createShallow({ untilSelector: 'FlipCard' })
  })

  test('componentWillReceiveProps', () => {
    const wrapper = shallow(<FlipCard />)
    expect(wrapper.state('flipping')).toBe(false)

    wrapper.setProps({ flipped: true })
    expect(wrapper.state('flipping')).toBe(true)

    wrapper.instance().handleTransitionEnd()
    expect(wrapper.state('flipping')).toBe(false)

    wrapper.setProps({ flipped: true })
    expect(wrapper.state('flipping')).toBe(false)
  })
})
