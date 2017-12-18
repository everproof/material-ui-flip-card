import React from 'react'
import { createShallow } from 'material-ui/test-utils'

import FlipCardSide from '../src/FlipCardSide'

describe('<FlipCardSide />', () => {
  let shallow

  beforeEach(() => {
    shallow = createShallow({ untilSelector: 'FlipCardSide' })
  })

  test('should work', () => {
    shallow(<FlipCardSide />)
  })
})
