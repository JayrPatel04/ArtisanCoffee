# Artisan Coffee - Premium Coffee Brand Website

A cinematic, scroll-driven coffee brand landing page built with Next.js, React Three Fiber, and GSAP ScrollTrigger.

## 🌟 Features

- **3D Coffee Cup**: Interactive 3D coffee cup model that scales and rotates on scroll
- **Smooth Animations**: GSAP ScrollTrigger animations for cinematic storytelling
- **Responsive Design**: Mobile-first design with elegant desktop experience
- **Premium UI**: Warm coffee-themed color palette with modern aesthetics
- **Interactive Navigation**: Smooth scrolling navigation with sticky header
- **Menu Section**: Beautiful coffee menu cards with pricing
- **Contact Form**: Reservation form with social media links
- **Working Order Button**: Functional "Order Now" button with Zomato integration

## 🛠 Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Three Fiber** for 3D graphics
- **Drei** for Three.js helpers
- **GSAP** with ScrollTrigger for animations
- **Lucide React** for icons

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd coffee-brand
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
coffee-brand/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and Tailwind imports
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Main page component
│   └── components/
│       ├── Navbar.tsx           # Navigation bar with smooth scrolling
│       ├── HeroScene.tsx        # 3D coffee cup scene
│       ├── StorySections.tsx    # Brand storytelling sections
│       ├── MenuSection.tsx      # Coffee menu cards
│       └── ContactSection.tsx   # Contact form and social links
├── public/
│   ├── models/
│   │   └── cup.glb              # 3D coffee cup model
│   └── images/
│       ├── nancy-hughes-81E3xJGpoDI-unsplash.jpg
│       └── best-coffee.jpg
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## ⚙️ Customization Guide

### 🏷️ Brand Name

**Files to update:**
- `src/components/Navbar.tsx` - Line ~35
- `src/app/page.tsx` - Line ~107

**Replace:** `"Artisan Coffee"` with your brand name

### 📞 Phone Number

**Files to update:**
- `src/app/page.tsx` - Line ~23
- `src/components/Navbar.tsx` - Line ~16
- `src/components/ContactSection.tsx` - Line ~67

**Replace:** `+919876543210` with your phone number

### 🛒 Order Links

**Files to update:**
- `src/app/page.tsx` - Line ~20
- `src/components/Navbar.tsx` - Line ~13

**Current setup:**
```javascript
// Primary: Zomato
window.open('https://www.zomato.com/', '_blank')

// Fallback: Phone call
window.location.href = 'tel:+919876543210'
```

**Alternatives:**
- Swiggy: `https://www.swiggy.com/`
- Uber Eats: `https://www.ubereats.com/`
- Your own ordering platform

### 🖼️ Images

**Current images in `public/images/`:**
- `nancy-hughes-81E3xJGpoDI-unsplash.jpg` - Fresh beans section
- `best-coffee.jpg` - Crafted experience & signature blends sections

**To replace images:**
1. Place new images in `public/images/`
2. Update image paths in `src/components/StorySections.tsx`:
   ```javascript
   image: '/images/your-new-image.jpg',
   ```

### ☕ 3D Model

**Current model:** `public/models/cup.glb`

**To replace the 3D model:**
1. Export your 3D coffee cup as GLB format from Blender/3ds Max/Maya
2. Replace `public/models/cup.glb` with your model
3. Adjust camera and lighting in `src/components/HeroScene.tsx` if needed

**Camera settings (line ~80):**
```javascript
camera={{ position: [0, 0, 8], fov: 35 }}
```

## 🎨 Design Customization

### Colors

Edit `tailwind.config.js` to modify the color palette:
- `coffee` shades for primary colors
- `cream` shades for backgrounds  
- `gold` shades for accents

### Typography

Google Fonts used:
- **Playfair Display** for headings (serif)
- **Inter** for body text (sans-serif)

### Animations

Scroll animations are powered by GSAP ScrollTrigger. Modify in:
- `src/app/page.tsx` - Hero animations
- `src/components/StorySections.tsx` - Story section animations
- `src/components/MenuSection.tsx` - Menu card animations

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

### Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy `out` folder to Netlify**

### Traditional Hosting

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload `.next` folder to your server**

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Android Chrome)

## 🔧 Performance

- Optimized images and assets
- Lazy loading for 3D models
- Efficient scroll animations
- Responsive design for all devices

## 🤝 Client Handoff Notes

### Before Launch Checklist:
- [ ] Replace brand name throughout the site
- [ ] Update phone number
- [ ] Configure order links (Zomato/Swiggy/your platform)
- [ ] Replace placeholder images with your own photos
- [ ] Update 3D model if needed
- [ ] Test all contact information
- [ ] Verify social media links
- [ ] Test mobile responsiveness

### Content Updates:
- Menu items and pricing in `src/components/MenuSection.tsx`
- Contact information in `src/components/ContactSection.tsx`
- Story section text in `src/components/StorySections.tsx`

### SEO Recommendations:
- Add meta tags in `src/app/layout.tsx`
- Update page title and description
- Add structured data for local business
- Submit sitemap to search engines

## 📄 License

MIT License - feel free to use this project for your own coffee brand website.

---

**Crafted with passion for coffee lovers** ☕

For support or customization requests, please contact the development team.
