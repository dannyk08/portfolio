const DEFAULT_WIDTH = 500
const mobileRatio = 600 / 1146
const desktopRatio = 1399 / 1025

const getDimensions = (ratio: number) => {
  return {
    width: DEFAULT_WIDTH,
    height: Math.round(DEFAULT_WIDTH / ratio),
  }
}

export const mobileDimensions = getDimensions(mobileRatio)
export const desktopDimensions = getDimensions(desktopRatio)

