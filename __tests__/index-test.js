import FlipCard, { FlipCardBack, FlipCardFront } from '../src'
import FlipCardComponent from '../src/FlipCard'
import FlipCardBackComponent from '../src/FlipCardBack'
import FlipCardFrontComponent from '../src/FlipCardFront'

describe('testing exports', () => {
  test('should export', () => {
    expect(FlipCard).toBe(FlipCardComponent)
    expect(FlipCardBack).toBe(FlipCardBackComponent)
    expect(FlipCardFront).toBe(FlipCardFrontComponent)
  })
})
