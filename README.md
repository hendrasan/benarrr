## About

This is a project to convert Figma design from [https://shaynakit.com/details/benarrr-finance-website-design](here) to responsive HTML and Tailwind CSS template.

## Scopes of Project

This project is strictly focusing on static HTML and Tailwind CSS. No JavaScript. There are several functionalities in the website that needs JavaScript to work, such as making hamburger menu works on mobile in mobile, making the video player and video chooser works, also adding transition and animation along with CSS. They can all be implemented with further development.

Also, in real projects, we would probably use either React.js/Vue.js/Next.js/Nuxt.js/Astro/Laravel/etc and use their tools and bundlers to make development easier, such as using components to reduce copy pasting codes whenever some CSS changes are needed.

## Development

After running `npm run install`, just run `npm run watch` to watch any changes to any html files that will re-compile Tailwind.

## Deployment

You can just upload whatever in the `public` folder to any static hosting.

The `index.html` (and if necessary other HTML files) are in `public` folder because it is the default standard output dir of most frameworks