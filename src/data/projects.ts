interface ImageProjectDetails {
  url: string,
  alt: string,
  height: number,
  width: number,
}

interface ProjectDetails {
  heading: string,
  subHeading: string,
  url: string,
  description: string,
  images: ImageProjectDetails[],
}

const DEFAULT_HEIGHT = 375
const mobileRatio = 600 / 1146
const desktopRatio = 1399 / 1025

const getDimensions = (ratio: number) => {
  return {
    width: Math.round(ratio * DEFAULT_HEIGHT),
    height: DEFAULT_HEIGHT,
  }
}

const mobileDimensions = getDimensions(mobileRatio)
const desktopDimensions = getDimensions(desktopRatio)

export default [
  {
    heading: 'CornerStone',
    subHeading: 'Coding Challenge',
    url: 'https://cornerstone-1b175.web.app/',
    description: 'This was a coding challenge...',
    images: [
      {
        url: '/images/projects/cornerstone-mobile.png',
        alt: 'CornerStone dev challenge mobile',
        ...mobileDimensions,
      },
      {
        url: '/images/projects/cornerstone-desktop.png',
        alt: 'CornerStone dev challenge desktop',
        ...desktopDimensions,
      },
      {
        url: '/images/projects/cornerstone-desktop-carousel.png',
        alt: 'CornerStone dev challenge desktop carousel scrolled',
        ...desktopDimensions,
      },
    ]
  },
  {
    heading: 'AnattaDesign',
    subHeading: 'Coding Challenge',
    url: 'https://anattadesign-9c9c7.web.app/',
    description: 'This was a coding challenge...',
    images: [
      {
        url: '/images/projects/anattadesign-mobile.png',
        alt: 'AnattaDesign dev challenge mobile',
        ...mobileDimensions,
      },
      {
        url: '/images/projects/anattadesign-mobile-opened.png',
        alt: 'AnattaDesign dev challenge mobile tree opened',
        ...mobileDimensions,
      },
      {
        url: '/images/projects/anattadesign-desktop.png',
        alt: 'AnattaDesign dev challenge desktop',
        ...desktopDimensions,
      },
      {
        url: '/images/projects/anattadesign-desktop-opened.png',
        alt: 'AnattaDesign dev challenge desktop tree opened',
        ...desktopDimensions,
      },
    ]
  },
  {
    heading: 'Ritual',
    subHeading: 'Coding Challenge',
    url: 'https://ember-ritual.web.app/',
    description: 'This was a coding challenge...',
    images: [
      {
        url: '/images/projects/ritual-mobile.png',
        alt: 'Ritual dev challenge mobile',
        ...mobileDimensions,
      },
      {
        url: '/images/projects/ritual-mobile-menu-open.png',
        alt: 'Ritual dev challenge mobile menu open',
        ...mobileDimensions,
      },
      {
        url: '/images/projects/ritual-desktop.png',
        alt: 'Ritual dev challenge desktop',
        ...desktopDimensions,
      },
      {
        url: '/images/projects/ritual-desktop-filter.png',
        alt: 'Ritual dev challenge desktop with filtered item active',
        ...desktopDimensions,
      },
    ]
  },
  {
    heading: 'Fab Fit Fun',
    subHeading: 'Coding Challenge',
    url: 'https://fff-profiles.web.app/',
    description: 'This was a coding challenge...',
    images: [
      {
        url: '/images/projects/fff-mobile.png',
        alt: 'Fab Fit Fun dev challenge mobile',
        ...mobileDimensions,
      },
      {
        url: '/images/projects/fff-mobile-added.png',
        alt: 'Fab Fit Fun dev challenge mobile with added user',
        ...mobileDimensions,
      },
      {
        url: '/images/projects/fff-desktop.png',
        alt: 'Fab Fit Fun dev challenge desktop',
        ...desktopDimensions,
      },
      {
        url: '/images/projects/fff-desktop-added.png',
        alt: 'Fab Fit Fun dev challenge desktop with added user',
        ...desktopDimensions,
      },
    ]
  },
  {
    heading: 'Guitar Center',
    subHeading: 'Coding Challenge',
    url: 'https://guitar-center-vanilla.web.app/',
    description: 'This was a coding challenge...',
    images: [
      {
        url: '/images/projects/guitar-center-desktop.png',
        alt: 'Guitar Center dev challenge desktop',
        ...desktopDimensions,
      },
      {
        url: '/images/projects/guitar-center-desktop-menu.png',
        alt: 'Guitar Center dev challenge desktop menu open',
        ...desktopDimensions,
      },
    ]
  },
  {
    heading: 'Sellbrite',
    subHeading: 'Coding Challenge',
    url: 'https://sellbrite-vue.web.app/shop',
    description: 'This was a coding challenge...',
    images: [
      {
        url: '/images/projects/sellbrite-mobile.png',
        alt: 'Sellbrite dev challenge mobile',
        ...mobileDimensions,
      },
      {
        url: '/images/projects/sellbrite-mobile-item-added.png',
        alt: 'Sellbrite dev challenge item added on mobile',
        ...mobileDimensions,
      },
      {
        url: '/images/projects/sellbrite-mobile-cart.png',
        alt: 'Sellbrite dev challenge item cart on mobile',
        ...mobileDimensions,
      },
      {
        url: '/images/projects/sellbrite.png',
        alt: 'Sellbrite dev challenge desktop',
        ...desktopDimensions,
      },
      {
        url: '/images/projects/sellbrite-item-page.png',
        alt: 'Sellbrite dev challenge item page on desktop',
        ...desktopDimensions,
      },
      {
        url: '/images/projects/sellbrite-item-added.png',
        alt: 'Sellbrite dev challenge item added on desktop',
        ...desktopDimensions,
      },
      {
        url: '/images/projects/sellbrite-item-multiple-added.png',
        alt: 'Sellbrite dev challenge multiple items added on desktop',
        ...desktopDimensions,
      },
      {
        url: '/images/projects/sellbrite-cart.png',
        alt: 'Sellbrite dev challenge item cart open on desktop',
        ...desktopDimensions,
      },
    ]
  },
  {
    heading: 'Beauty Counter',
    subHeading: 'Coding Challenge',
    url: 'https://vue-beautycounter.web.app/landing-page',
    description: 'This was a coding challenge...',
    images: [
      {
        url: '/images/projects/beauty-counter-mobile-landing-page.png',
        alt: 'Beauty Counter landing page dev challenge mobile',
        ...mobileDimensions,
      },
      {
        url: '/images/projects/beauty-counter-landing-page.png',
        alt: 'Beauty Counter landing page dev challenge desktop',
        ...desktopDimensions,
      },
    ]
  },
] as ProjectDetails[]
