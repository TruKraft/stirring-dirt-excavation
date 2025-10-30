# Stirring Dirt Excavation Website

A professional website for Stirring Dirt Excavation, a family-owned excavation business in Logan, Utah owned and operated by Colton Boyack.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with black and orange branding
- **Service Showcase**: Detailed information about all excavation services offered
- **About Page**: Company story and values highlighting honesty, reliability, and community focus
- **SEO Optimized**: Proper meta tags and semantic HTML for search engine visibility

## Services Highlighted

1. Yard Preparation
2. Sod Installation
3. Decorative Rock Work
4. Driveway Grading & Gravel Restoration
5. Demolition
6. Junk Removal & Hauling

## Tech Stack

- **Framework**: Next.js 15.2.4 (React)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Images**: Next.js Image component with Unsplash optimization

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd "Test Cursor"
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── services/          # Services page
│   ├── about/             # About page
│   ├── layout.tsx         # Root layout with header/footer
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   └── Footer.tsx        # Site footer
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind CSS configuration
└── next.config.ts        # Next.js configuration
```

## Customization

### Brand Colors

The website uses a black and orange color scheme defined in `tailwind.config.ts`:

- **Primary Orange**: `#FF6B00`
- **Dark**: `#000000`

To change these colors, edit the `tailwind.config.ts` file.

### Contact Information

Update phone numbers and email addresses in:
- `components/Header.tsx` (navigation call button)
- `components/Footer.tsx` (contact information)
- All CTA sections throughout the pages

### Images

The website uses Unsplash images. You can replace them with custom images by:
1. Adding images to the `public/` directory
2. Updating image paths in the page components
3. Or using your own image hosting service

## Deployment

This Next.js application can be deployed to:

- **Vercel** (recommended): Connect your GitHub repository for automatic deployments
- **Netlify**: Support for Next.js with serverless functions
- **Any Node.js hosting**: Run `npm run build` and `npm start`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private project for Stirring Dirt Excavation.

## Contact

For questions about this website, please contact Stirring Dirt Excavation.

**Location**: Logan, Utah  
**Phone**: (123) 456-7890  
**Email**: info@stirringdirt.com

