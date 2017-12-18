import React from 'react'
import { createShallow } from 'material-ui/test-utils'

import FlipCardFront from '../src/FlipCardFront'

describe('<FlipCardFront />', () => {
  let shallow

  beforeEach(() => {
    shallow = createShallow({ untilSelector: 'FlipCardFront' })
  })

  test('should work', () => {
    shallow(<FlipCardFront />)
  })
})
