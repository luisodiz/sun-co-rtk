export const inter = {
  font: `
    font-family: 'Inter', sans-serif;
  `,
  getRegular() {
    return `
      ${this.font}
      font-weight: 400;
    `
  },
  getSemiBold() {
    return `
      ${this.font}
      font-weight: 600;
    `
  },
  getBold() {
    return `
      ${this.font}
      font-weight: 700;
    `
  },
}

export const dmSans = {
  font: `
    font-family: 'DM Sans', sans-serif;
  `,
  getMedium() {
    return `
      ${this.font}
      font-weight: 500;
    `
  },
  getBold() {
    return `
      ${this.font}
      font-weight: 700;
    `
  },
}

export const getFontSize = ({ size = 18, lineHeight = 24 } = {}) => `
  font-size: ${size}px;
  line-height: ${lineHeight}px;
`
