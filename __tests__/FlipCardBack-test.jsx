import React from 'react'
import { createShallow } from 'material-ui/test-utils'

import FlipCardBack from '../src/FlipCardBack'

describe('<FlipCardBack />', () => {
  let shallow

  beforeEach(() => {
    shallow = createShallow({ untilSelector: 'FlipCardBack' })
  })

  test('should work', () => {
    shallow(<FlipCardBack />)
  })
})
