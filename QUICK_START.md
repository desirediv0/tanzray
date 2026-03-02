# 🚀 TANZRAY LEGAL - QUICK START GUIDE

## Installation & Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git (optional)

### Quick Start (3 Steps)

```bash
# 1. Navigate to project directory
cd d:\Ritesh\tanzray

# 2. Install dependencies (if not already done)
npm install

# 3. Start development server
npm run dev
```

The website will be available at **http://localhost:3000**

---

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

---

## Project Structure at a Glance

```
src/
├── app/              # All pages using Next.js App Router
├── components/       # Navbar, Footer, and other components
├── lib/             # Utility functions
└── globals.css      # Global styles with Tailwind
```

---

## Key Features

✨ **White + Gold Premium Design**

- No full black backgrounds
- Soft grey sections for contrast
- Elegant gold accents throughout
- Professional luxury aesthetic

📱 **Fully Responsive**

- Mobile-first design
- Works on all devices
- Touch-friendly navigation
- Optimized images

⚡ **Fast & Optimized**

- Static page generation
- Production-ready build
- Minified assets
- Zero build errors

---

## Pages Overview

| Page        | Route                    | Purpose                   |
| ----------- | ------------------------ | ------------------------- |
| Home        | `/`                      | Main landing page         |
| About       | `/about`                 | Advocate profile & info   |
| Matrimonial | `/matrimonial`           | Matrimonial law services  |
| Criminal    | `/criminal`              | Criminal defense services |
| Contract    | `/contract`              | Contract law services     |
| Mediation   | `/mediation`             | Mediation & ADR services  |
| IP Rights   | `/intellectual-property` | IP protection services    |
| Contact     | `/contact`               | Contact form & info       |

---

## Customization Guide

### Change Brand Colors

Edit `src/app/globals.css`:

```css
:root {
  --gold-primary: #d4af37;
  --gold-dark: #b8933f;
  --text-primary: #1a1a1a;
}
```

### Change Firm Information

Update in `src/components/Footer.jsx` and `src/app/contact/page.js`:

- Phone number
- Email address
- Physical address
- Office hours

### Modify Content

Edit individual page files in `src/app/[page-name]/page.js`:

- Update service descriptions
- Add/remove service items
- Modify hero text
- Update process steps

### Change Logo/Branding

1. Update logo text in `src/components/Navbar.jsx`
2. Add logo image if needed
3. Update favicon in `public/` folder

---

## Form Integration

The contact form on `/contact` currently shows a success message locally.

To connect it to a backend:

1. Create an API endpoint
2. Update the `handleSubmit` function in `/src/app/contact/page.js`
3. Add server action or API route

Example:

```javascript
// In src/app/contact/page.js
const handleSubmit = async (e) => {
  e.preventDefault();

  // Send to your backend
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    setSubmitted(true);
  }
};
```

---

## Deployment Options

### Vercel (Recommended for Next.js)

1. Push code to GitHub
2. Connect repo to Vercel
3. Auto-deploys on every push
4. Free tier available

### Netlify

1. Build: `npm run build`
2. Publish directory: `.next`
3. Auto-build on push

### Manual Deployment

```bash
# Build production version
npm run build

# Upload .next folder to your server
# Point server to run: npm start
```

---

## Performance Tips

✅ Images are optimized
✅ Code is minified
✅ Pages are statically generated
✅ CSS is purged for unused styles
✅ Animations use CSS (not JS)

---

## Browser Support

- Chrome/Edge: ✅ Full Support
- Firefox: ✅ Full Support
- Safari: ✅ Full Support
- Mobile Browsers: ✅ Full Support

---

## Troubleshooting

### Port 3000 Already in Use

```bash
# Use different port
npm run dev -- -p 3001
```

### Build Fails

```bash
# Clear cache and rebuild
rm -r .next node_modules
npm install
npm run build
```

### Styling Issues

```bash
# Rebuild Tailwind CSS
npm run build
```

---

## Adding New Pages

1. Create folder: `src/app/new-page/`
2. Create file: `page.js` inside
3. Add your content

Example:

```javascript
export default function NewPage() {
  return (
    <div className="section-padding">
      <h1 className="text-4xl font-bold">New Page</h1>
      {/* Your content */}
    </div>
  );
}
```

Automatically accessible at `/new-page`

---

## Adding Components

Create in `src/components/YourComponent.jsx`:

```javascript
export default function YourComponent() {
  return <div className="card-premium">{/* Your component */}</div>;
}
```

Import in pages:

```javascript
import YourComponent from "@/components/YourComponent";
```

---

## Styling Guidelines

### Use Pre-Built Classes

- `.btn-premium` - Gold button
- `.btn-premium-outline` - Gold outline button
- `.card-premium` - Card with shadow
- `.input-gold` - Form input with gold border
- `.gold-divider` - Horizontal divider
- `.section-padding` - Standard section padding
- `.section-light-grey` - Light grey background

### Color Classes

- Gold: `text-yellow-600`, `bg-yellow-50`, `border-yellow-600`
- Grey: `text-gray-600`, `bg-gray-50`
- White: `bg-white`
- Dark: `text-gray-900`

---

## SEO

Update metadata in `src/app/layout.js`:

```javascript
export const metadata = {
  title: "Your Title",
  description: "Your description",
  keywords: "keyword1, keyword2",
};
```

Individual page metadata:

```javascript
export const metadata = {
  title: "Page Title | TANZRAY LEGAL",
  description: "Page description",
};
```

---

## Contact & Support

For development questions or issues:

- Check `WEBSITE_DOCUMENTATION.md` for detailed docs
- Review `COMPLETION_CHECKLIST.md` for what's included
- Check individual page files for examples

---

## Next Steps

1. ✅ Test all pages locally (`npm run dev`)
2. ✅ Customize content as needed
3. ✅ Connect contact form to backend
4. ✅ Add Google Analytics
5. ✅ Deploy to production
6. ✅ Monitor performance

---

## Quick Links

- 📚 [Next.js Docs](https://nextjs.org/docs)
- 🎨 [Tailwind CSS Docs](https://tailwindcss.com/docs)
- 📱 [Responsive Design Tips](https://nextjs.org/docs/advanced-features/static-optimization)
- 🚀 [Vercel Deployment](https://vercel.com/docs)

---

**Website Status:** ✅ Production Ready
**Last Updated:** February 2026
**Version:** 1.0.0
