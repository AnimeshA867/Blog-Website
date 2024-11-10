# Blog Website

A responsive and modern blog website built with Next.js, TypeScript, and styled components. This project showcases a clean and functional design with features such as post previews, navigation, and easy-to-read typography.

## Features

- **Dynamic Content**: Fetches blog posts from a backend or headless CMS.
- **Responsive Design**: Optimized for all screen sizes (desktop, tablet, and mobile).
- **SEO-Friendly**: Uses meta tags, open graph tags, and dynamic page titles to improve search engine visibility.
- **Page Transitions**: Smooth transitions using Framer Motion for an enhanced user experience.
- **Theming**: Light and dark mode support for user preference.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: CSS Modules, styled-components
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Data Handling**: Headless CMS (Sanity, Contentful, or similar) or local markdown files

## Getting Started

### Prerequisites

- **Node.js** (v14+)
- **Yarn** (or npm)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AnimeshA867/Blog-Website.git
   cd Blog-Website
	```
2. Install dependencies:
```bash
    yarn install
    # or
    npm install
```
3. Configure environment variables (e.g., for CMS API keys) if required. See .env.example for reference.

### Running the Project

To start the development server:
```bash
yarn dev
# or
npm run dev
```
This will run the website on http://localhost:3000.
### Building for Production

To build the project for production:
```bash
yarn build
# or
npm run build
```
After building, you can start the production server:
```bash
yarn start
# or
npm start
```
## Project Structure

- `pages/`: Contains the main pages of the website, including blog pages and static pages.
- `components/`: Reusable UI components (Navbar, Footer, etc.).
- `lib/`: Utility functions, helpers, and hooks.
- `public/`: Static assets like images and icons.
- `styles/`: Global and component-specific styles.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss improvements or bugs.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Created by [Animesh Acharya](https://animeshacharya.com.np).
