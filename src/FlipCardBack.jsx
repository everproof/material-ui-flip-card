// @flow
import React from 'react'
import { bool } from 'prop-types'
import classnames from 'classnames'
import { withStyles } from 'material-ui/styles'
import type { Node } from 'react'

import FlipCardSide from './FlipCardSide'

function FlipCardBack(
  {
    className,
    classes: { back },
    ...props
  }: {
    children: Node,
    className?: string,
    classes: { back: string },
  },
  { flipped }: { flipped: boolean },
) {
  return (
    <FlipCardSide
      className={classnames(back, className)}
      showing={flipped}
      {...props}
    />
  )
}

FlipCardBack.contextTypes = { flipped: bool.isRequired }

FlipCardBack.defaultProps = { className: '' }

export default withStyles({
  back: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 2,
    transform: 'rotateY(180deg)',
  },
})(FlipCardBack)
