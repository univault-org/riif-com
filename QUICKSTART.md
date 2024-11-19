# MarkVault Quick Start Guide

This guide will help you get your MarkVault site up and running in minutes using the simple setup.

## Prerequisites

- Basic knowledge of Markdown
- A text editor (VS Code recommended)
- A web browser
- Basic command line familiarity

## Step 1: Get Started

### Next.js Setup
```bash
# Clone the main branch
git clone https://github.com/univault-org/MarkVault.git my-site
cd my-site

# Install dependencies
pnpm install

# Start development
pnpm dev
```

### React Setup
```bash
# Clone the React branch
git clone -b markvault-react https://github.com/univault-org/MarkVault.git my-site
cd my-site

# No installation needed!
cd site
npx serve
```

## Step 2: Project Structure
```
my-site/
├── content/           # Content lives here (preserved across contributors)
│   ├── posts/        # Blog posts
│   │   └── my-first-post.md
│   └── pages/        # Static pages
│       ├── about.md
│       └── contact.md
│
└── site/             # React site (single HTML file)
    └── index.html    # All React components and configuration
```

## Step 3: Site Configuration

1. Open `site/index.html` in your text editor
2. Modify the basic settings:
```html
<head>
  <title>Your Site Name</title>
  <!-- Other meta tags you might want to change -->
</head>
```

## Step 4: Writing Content

### Create a Blog Post
1. Create a new `.md` file in `site/content/posts/`
2. Add frontmatter:
```markdown
---
title: My First Post
date: 2024-01-20
author: Your Name
excerpt: A brief description
---

Your content here...
```

### Create a Page
1. Create a new `.md` file in `site/content/pages/`
2. Add frontmatter:
```markdown
---
title: About
lastUpdated: 2024-01-20
---

Your content here...
```

## Step 5: Preview Your Site

```bash
# Navigate to the site directory
cd site

# Start a local server (choose one):
python -m http.server 8000
# or
php -S localhost:8000
# or
npx serve
# or use VS Code Live Server
```

Visit `http://localhost:8000` in your browser (port may vary depending on your server).

## Step 6: Customization

### Theme Colors
Modify the Tailwind configuration in `site/index.html`:
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Your brand colors
        }
      }
    }
  }
};
```

### Components
Major components you might want to customize:
- `Navigation`: Site header and navigation
- `Home`: Landing page layout
- `PostList`: Blog listing page
- `Post`: Individual post layout

## Common Tasks

### Adding Navigation Links
Modify the Navigation component in `site/index.html`:
```javascript
function Navigation() {
  return (
    <nav>
      {/* Add your links here */}
    </nav>
  );
}
```

### Adding New Features
1. Create your component in `site/index.html`
2. Add it to the appropriate section
3. Style using Tailwind CSS classes

## Deployment

1. Push your site to GitHub
2. Deploy using GitHub Pages:
   - Go to repository settings
   - Navigate to Pages
   - Select main branch
   - Set directory to /site
   
Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Need Help?

- Check the [README.md](README.md) for detailed documentation
- Visit our [GitHub repository](https://github.com/univault-org/MarkVault)
- Switch to the `main` branch for Next.js setup
- Open an issue for support

---

Happy writing! 🚀