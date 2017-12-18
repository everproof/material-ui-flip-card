// @flow
import React, { Component } from 'react'
import { bool } from 'prop-types'
import classnames from 'classnames'
import Card from 'material-ui/Card'
import { withStyles } from 'material-ui/styles'
import type { Node } from 'react'

type Props = {
  children: Node,
  className?: string,
  classes: { card: string, container: string, flipped: string },
  flipped?: boolean,
}

export default withStyles(
  ({
    transitions: { duration, easing },
  }: {
    transitions: { duration: { complex: string }, easing: { sharp: string } },
  }) => ({
    card: {
      height: 'inherit',
      transition: `all ${duration.complex}ms ${easing.sharp}`,
      transformStyle: 'preserve-3d',
    },
    container: { position: 'relative', perspective: 1000 },
    flipped: { transform: 'rotateY(180deg)' },
  }),
)(
  class FlipCard extends Component<Props, { flipping: boolean }> {
    static childContextTypes = { flipped: bool.isRequired }

    state = { flipping: false }

    getChildContext() {
      return { flipped: Boolean(this.props.flipped) }
    }

    componentWillReceiveProps({ flipped }: Props) {
      if (this.props.flipped !== flipped) {
        this.setState({ flipping: true })
      }
    }

    handleTransitionEnd = () => {
      this.setState({ flipping: false })
    }

    render() {
      return (
        <div
          className={classnames(
            this.props.classes.container,
            this.props.className,
          )}
          onTransitionEnd={this.handleTransitionEnd}
          style={{ zIndex: this.state.flipping ? 10 : 1 }}
        >
          <Card
            className={classnames(
              this.props.classes.card,
              this.props.flipped && this.props.classes.flipped,
            )}
          >
            {this.props.children}
          </Card>
        </div>
      )
    }
  },
)
