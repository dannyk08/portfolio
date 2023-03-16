import { desktopDimensions, mobileDimensions } from '../utils/viewportRatio';
import { ProjectDetails } from './types';

export default [
  {
    heading: 'CornerStone',
    url: 'https://cornerstone-1b175.web.app/',
    githubUrl: 'https://github.com/dannyk08/cornerstone',
    description: 'The Cornerstone team tasked me with a landing page designed to test my UI and styling skills as well as the resemblance to the mockups provided. The landing page is visually appealing and has a clean, modern design that is sure to capture the attention of visitors. The use of ReactJS and Webpack ensures that the app is fast and responsive, providing a seamless user experience.',
    assets: [
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
    url: 'https://anattadesign-9c9c7.web.app/',
    githubUrl: 'https://github.com/dannyk08/anattadesign',
    description: 'AnattaDesign team provided a prompt where I had to build a hierarchical organization tool web application. The app was designed to help a company, called “The Boring” company, manage their employees efficiently. Built with VueJS, the app features a recursive component that displays a tree structure, allowing users to navigate the organizational chart.',
    assets: [
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
    url: 'https://ember-ritual.web.app/',
    githubUrl: 'https://github.com/dannyk08/ritual',
    description: 'The web app is an ingredient filtering tool designed to help users find and learn about ingredients. Built with EmberJS, the app challenged my ability to work with new tech. The app features a list of options that users can use to filter ingredients, making it easy to find specific ingredients. Users can also see detailed information on each ingredient, including nutritional value, recipes, and other useful information.',
    assets: [
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
    url: 'https://fff-profiles.web.app/',
    githubUrl: 'https://github.com/dannyk08/fff',
    description: 'This web app is a dynamic carousel of profiles that was built with ReactJS. The challenge of this project was that the data was not provided, which required me to improvise and come up with creative solutions to achieve the desired outcome. When a user clicks on a colleague\'s profile image, the app inserts a profile into a long running carousel of profiles, providing the user with a unique and engaging experience.',
    assets: [
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
    url: 'https://guitar-center-vanilla.web.app/',
    description: 'A landing page for Guitar Center that met all the requirements without using any modern frontend libraries. The challenge was to complete the task in a short amount of time. To achieve this, I utilized my skills in HTML, CSS, and vanilla JavaScript and JQuery to create an aesthetically pleasing and user-friendly landing page.',
    assets: [
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
    url: 'https://sellbrite-vue.web.app/shop',
    githubUrl: 'https://github.com/dannyk08/fe-sample-project',
    description: 'An e-commerce web app using VueJS that challenged me to manage state between multiple routes and a cart component. The goal was to create an intuitive user experience where customers could easily add items to their cart and view their total cost. To achieve this, I utilized VueJS\'s reactive data bindings and computed properties to dynamically update the cart and total cost based on user interactions.',
    assets: [
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
    url: 'https://vue-beautycounter.web.app/landing-page',
    githubUrl: 'https://github.com/dannyk08/beautycounter',
    description: 'The challenge consisted of two phases: first, I had to create a landing page that matched a design to the pixel, and second, I had to utilize an API of my choice to run queries and display the results. For the landing page, I carefully studied the provided design and used my skills in HTML, CSS, and JavaScript to create a responsive and visually stunning page. For the API challenge, the API is unavailable now.',
    assets: [
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
