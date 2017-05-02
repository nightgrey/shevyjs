import { defaultOptions, headings } from './constants'

export default class Shevy {
  constructor(options) {
    const mergedOptions = { ...defaultOptions, ...options }
    const {
      baseFontSize,
      baseLineHeight,
      baseFontScale,
      addMarginBottom,
      proximity,
      proximityFactor
    } = mergedOptions

    this.baseFontSize = baseFontSize
    this.baseLineHeight = baseLineHeight
    this.baseFontScale = baseFontScale
    this.addMarginBottom = addMarginBottom
    this.proximity = proximity
    this.proximityFactor = proximityFactor

    // Binding methods
    this.calcFontSize = this.calcFontSize.bind(this)

    // Set headings
    baseFontScale.forEach((factor, index) => {
      const heading = headings[index]
      this[heading] = {
        fontSize: this.calcFontSize(factor)
      }
    })
  }

  calcFontSize (factor) {
    const fontValue = parseFloat(this.baseFontSize)
    return fontValue * factor
  }
}
