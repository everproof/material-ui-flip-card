// @flow
import React from 'react'
import classnames from 'classnames'
import { withStyles } from 'material-ui/styles'
import type { Node } from 'react'

function FlipCardSide({
  children,
  className,
  classes: { hidden, side },
  showing,
}: {
  children?: Node,
  className?: string,
  classes: { hidden: string, side: string },
  showing: boolean,
}) {
  return (
    <div className={classnames(className, side, !showing && hidden)}>
      {children}
    </div>
  )
}

FlipCardSide.defaultProps = { children: <div />, className: '' }

export default withStyles({
  hidden: { opacity: 0, visibility: 'hidden' },
  side: {
    height: 'inherit',
    transition: 'inherit',
    backfaceVisibility: 'hidden',
  },
})(FlipCardSide)
