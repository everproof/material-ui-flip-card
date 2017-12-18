// @flow
import React from 'react'
import { bool } from 'prop-types'
import type { Node } from 'react'

import FlipCardSide from './FlipCardSide'

export default function FlipCardFront(
  props: { children: Node, className?: string },
  { flipped }: { flipped: boolean },
) {
  return <FlipCardSide {...props} showing={!flipped} />
}

FlipCardFront.contextTypes = { flipped: bool.isRequired }

FlipCardFront.defaultProps = { className: '' }
