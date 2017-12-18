// @flow
import React from 'react'
import { bool } from 'prop-types'

import FlipCardSide from './FlipCardSide'

export default function FlipCardFront(
  props?: Object,
  { flipped }: { flipped: boolean },
) {
  return <FlipCardSide {...props} showing={!flipped} />
}

FlipCardFront.contextTypes = { flipped: bool.isRequired }
