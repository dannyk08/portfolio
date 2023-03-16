import { desktopDimensions } from '../utils/viewportRatio';
import { ProjectDetails, VideoProjectAssetDetail } from './types';

export default [
  {
    heading: 'FightCamp',
    description: 'My work at FightCamp was one of the most interesting: we created CMS components to populate the whole page. This allowed the marketing team to run tests with different messaging and assets to fine tune what the users resonated with. All the components in the preview were CMS driven. The tech stack was Nuxt/VueJS.',
    url: 'https://joinfightcamp.com',
    assets: [
      {
        alt: 'Fightcamp home page redesign with dynamic components',
        url: '/images/projects/fc-homepage.png',
        videoUrl: 'https://drive.google.com/file/d/1smqrgpxr8DNKjh4SzrwyUrWOzak1OSJ0/preview',
        ...desktopDimensions,
      },
      {
        alt: 'Fightcamp explainer page redesign with dynamic components',
        url: '/images/projects/fc-explainer.png',
        videoUrl: 'https://drive.google.com/file/d/1m9kS_ZeIiVdLVBo_mOTIx3fKBI3pCLYZ/preview',
        ...desktopDimensions,
      },
    ],
  },
  {
    heading: 'Internet Brands',
    description: 'At Internet Brands (IB), I worked on a variety of projects with various frontend frameworks: AngularJS, Angular, ReactJS. I created a UI library to unify the many projects that were using the same technologies and created a unified experience for users. The videos highlight the versatility of the UI library in styleguides and implementations for an enterprise application and landing page as well.',
    url: 'https://www.internetbrands.com/our-brands/health',
    assets: [
      {
        alt: 'Internet Brands\' Health vertical UI components\' library styleguide page',
        url: '/images/projects/ib-ui-library-styleguide.png',
        videoUrl: 'https://drive.google.com/file/d/13o1kzsNroXvSRiEcvFLvJlWwdZnDAlTX/preview',
        ...desktopDimensions,
      },
      {
        alt: 'Internet Brands\' Health vertical UI components\' library used in a dashboard application',
        url: '/images/projects/ib-ui-dashboard.png',
        videoUrl: 'https://drive.google.com/file/d/1efN2-icS6ApL4kX7Lc03H7-RJX-_zBW7/preview',
        ...desktopDimensions,
      },
      {
        alt: 'Internet Brands\' Health vertical mobile app rework',
        url: '/images/projects/ib-mobile-app.png',
        videoUrl: 'https://drive.google.com/file/d/1vmgAVuaZPYQMLMYv_NxZCLwCY1re5CJD/preview',
        ...desktopDimensions,
      },
      {
        alt: 'Internet Brands\' Health vertical UI components\' library used in a followup form landing page',
        url: '/images/projects/ib-ui-library-form.png',
        videoUrl: 'https://drive.google.com/file/d/1scfiA4oVk-4MFTrWbIVpt9DZ8kLkljIV/preview',
        ...desktopDimensions,
      },
    ],
  },
] as ProjectDetails<VideoProjectAssetDetail>[]
