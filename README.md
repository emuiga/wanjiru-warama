# Wanjirũ Warama Website

A modern, responsive website for author Wanjirũ Warama, built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

### 🏠 Home Page
- **Greenery-themed banner** with author photo and featured book
- **Newsletter signup** form for readers
- **Responsive design** that works on all devices
- **Clean, modern layout** with amber and green color scheme

### 📖 About Page
- **Neat, smaller text** for better readability
- **Author biography** and writing themes
- **Professional layout** with author photo
- **Mission statement** section

### 📚 Books Page
- **Collage layout** with books arranged in 2 rows
- **Featured book section** with detailed information
- **No banner** as requested (only navigation)
- **Book club information** and discussion guides

### 📅 Events Page
- **Functional event listings** inspired by Elizabeth Gilbert and Ta-Nehisi Coates
- **Upcoming events** with detailed information
- **Past events** archive
- **Event newsletter signup**

### 📞 Contact Page
- **Wanjiruwarama.com** instead of email (as requested)
- **Contact form** with subject categories
- **Social media links**
- **FAQ section**

### 🧭 Navigation
- **Brown menu banners** (amber-800 color)
- **Responsive mobile menu**
- **Clean, professional design**

### 🦶 Footer
- **Contact link** and social media icons on all pages
- **Copyright information**
- **Consistent branding**

## Technical Details

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans and Geist Mono
- **Responsive**: Mobile-first design
- **SEO**: Optimized metadata and structure

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── books/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── events/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   └── Navigation.tsx
public/
├── author-photo.jpg (placeholder)
├── colonial-farm-cover.jpg (placeholder)
└── [other placeholder images]
```

## Customization

### Colors
The website uses a warm amber and green color scheme:
- **Primary**: Amber-600 (#D97706)
- **Secondary**: Green-200 (#BBF7D0)
- **Navigation**: Amber-800 (#92400E)

### Images
Placeholder images are included. Replace with actual images:
- `author-photo.jpg` - Author's professional photo
- `colonial-farm-cover.jpg` - Book cover image
- Event images for the events page
- Additional book covers for the books page

### Content
All content can be easily updated by editing the respective page files in the `src/app/` directory.

## Deployment

The website is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

## Client Requirements Met

✅ **HOME page** with greenery theme, author photo, smaller banner size  
✅ **ABOUT page** with neater, smaller text  
✅ **BOOKS page** with collage layout (2 rows), no banner  
✅ **EVENTS page** functional design inspired by Elizabeth Gilbert/Ta-Nehisi Coates  
✅ **CONTACT page** with Wanjiruwarama.com instead of email  
✅ **Navigation** with brown menu banners only  
✅ **Footer** with CONTACT and social media icons on all pages  
✅ **BLOG page** removed as requested  

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2021, Wanjiru Warama. All rights reserved.