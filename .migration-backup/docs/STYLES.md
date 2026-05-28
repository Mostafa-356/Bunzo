# Styles Guide

Styling guidelines and conventions for Bunzo.

## Design System

### Color Palette

```css
/* Primary Colors - Bunzo Brand */
--primary: #10b981;         /* Emerald-500 (main brand) */
--primary-dark: #059669;    /* Emerald-600 (darker emerald) */
--primary-light: #34d399;   /* Emerald-400 (lighter emerald) */
--primary-50: #ecfdf5;      /* Emerald-50 (lightest) */
--primary-100: #d1fae5;     /* Emerald-100 (very light) */

/* Background Colors */
--background: #ffffff;      /* Main background (white) */
--surface: #f9fafb;         /* Card backgrounds (gray-50) */
--surface-light: #f3f4f6;   /* Light surface (gray-100) */

/* Text Colors */
--text-primary: #111827;    /* Main text (gray-900) */
--text-secondary: #6b7280;  /* Secondary text (gray-500) */
--text-muted: #9ca3af;      /* Muted text (gray-400) */
--text-light: #d1d5db;      /* Light text (gray-300) */

/* Border Colors */
--border: #e5e7eb;          /* Subtle borders (gray-200) */
--border-dark: #d1d5db;     /* Darker borders (gray-300) */
--border-focus: #10b981;    /* Focus borders (emerald-500) */

/* Status Colors */
--success: #10b981;         /* Success state (emerald-500) */
--error: #ef4444;           /* Error state (red-500) */
--warning: #f59e0b;         /* Warning state (amber-500) */
--info: #3b82f6;            /* Info state (blue-500) */

/* Background Gradients */
--gradient-primary: linear-gradient(135deg, #10b981, #059669);
--gradient-hero: linear-gradient(135deg, #064e3b, #10b981);
--gradient-light: linear-gradient(to bottom, white, #ecfdf5);

/* Form Focus Colors */
--focus-ring: #10b981;      /* Focus ring color (emerald-500) */
--focus-border: #10b981;    /* Focus border color (emerald-500) */
```

### Typography

**Fonts**:
- **Primary**: Inter (sans-serif) - Modern, clean, readable
- **Secondary**: Public Sans (monospace) - Technical content
- **Accent**: Lobster (cursive) - Decorative headings
- **Fallback**: System font stack

**Font Sizes**:
```css
text-xs: 0.75rem;    /* 12px - Small labels */
text-sm: 0.875rem;   /* 14px - Body text */
text-base: 1rem;     /* 16px - Default */
text-lg: 1.125rem;   /* 18px - Large body */
text-xl: 1.25rem;    /* 20px - Small headings */
text-2xl: 1.5rem;    /* 24px - Medium headings */
text-3xl: 1.875rem;  /* 30px - Large headings */
text-4xl: 2.25rem;   /* 36px - Hero headings */
text-5xl: 3rem;      /* 48px - Display headings */
```

**Font Weights**:
```css
font-normal: 400;    /* Regular text */
font-medium: 500;    /* Emphasized text */
font-semibold: 600;  /* Subheadings */
font-bold: 700;      /* Headings */
```

### Spacing System

```css
gap-1: 0.25rem;   /* 4px - Tight spacing */
gap-2: 0.5rem;    /* 8px - Small spacing */
gap-4: 1rem;      /* 16px - Default spacing */
gap-6: 1.5rem;    /* 24px - Medium spacing */
gap-8: 2rem;      /* 32px - Large spacing */
gap-12: 3rem;     /* 48px - Extra large spacing */
gap-16: 4rem;     /* 64px - Section spacing */
```

## Bunzo Brand Elements

### Egyptian Burger Restaurant Identity
- **Brand Name**: "Bunzo" - Modern Egyptian Street Burgers
- **Concept**: Authentic Egyptian street food with modern presentation
- **Target**: Youth-focused, tourist-friendly, heritage-proud
- **Positioning**: "From Egyptian Streets to Your Table"

### Logo + Brand Name Usage
- **Logo**: `bunzo_logo.svg` (48x48px in header)
- **Brand Name**: "Bunzo" using Lobster font (decorative)
- **Tagline**: "Egyptian Street Burgers" using Inter font
- **Colors**: 
  - Logo: Emerald green (#10b981) 
  - Brand Name: Gray-900 (#111827)
  - Tagline: Emerald-600 (#059669)
- **Layout**: Logo + Brand Name + Tagline in horizontal layout
- **Minimum Size**: 200px total width for readability

### Brand Typography Hierarchy
```tsx
{/* Primary Brand Name */}
<h1 className="lobster-regular text-xl md:text-2xl font-bold text-gray-900">
  Bunzo
</h1>

{/* Brand Tagline */}
<p className="inter text-xs md:text-sm text-emerald-600 font-medium">
  Egyptian Street Burgers
</p>
```

### Egyptian Heritage Elements
- **Arabic Touch**: "من الشارع المصري إلى طاولتك" (From Egyptian Streets to Your Table)
- **Cultural Icons**: 🏺 Ancient Spices, 🌶️ Traditional Flavors, 🥙 Modern Techniques
- **Location References**: Cairo, Zamalek, New Capital, Alexandria, Nile Valley
- **Chef Names**: Ahmed, Fatma, Yasmin, Omar, Mariam (authentic Egyptian names)

### Burger Categories
- **Classic**: Traditional Egyptian-style burgers
- **Veggie**: Plant-based with Egyptian falafel
- **Beef**: Premium beef with traditional spices
- **Chicken**: Spiced chicken variations
- **Egyptian**: Heritage recipes with ancient spices
- **Spicy**: Harissa and desert-heat inspired

### Signature Burgers
- **The Pharaoh's Burger**: Royal Egyptian experience with spiced beef
- **Cairo Street Classic**: Authentic street food flavors
- **Nile Valley Veggie**: Fresh vegetarian with falafel
- **Spicy Sahara**: Harissa-marinated with desert heat
- **Alexandria Seafood**: Mediterranean fusion from the coast

### Scrollbar Styling
```css
/* Custom Bunzo Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 4px;
  border: 1px solid #f1f5f9;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #059669, #047857);
}

/* Firefox Scrollbar */
* {
  scrollbar-width: thin;
  scrollbar-color: #10b981 #f1f5f9;
}

/* Remove inner scrollbars utility */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
```

**Usage**: Apply `no-scrollbar` class to containers that should not show scrollbars:
```tsx
<div className="overflow-y-auto no-scrollbar max-h-64">
  {/* Content with hidden scrollbar */}
</div>
```

## Tailwind CSS

### Utility Classes

**Layout**:
```tsx
<div className="flex flex-col md:flex-row gap-4">
  {/* Responsive flexbox */}
</div>
```

**Grid**:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Responsive grid */}
</div>
```

**Responsive Design**:
```tsx
<div className="text-sm md:text-base lg:text-lg">
  {/* Responsive text */}
</div>
```

**Hover Effects**:
```tsx
<button className="hover:bg-primary hover:text-white transition-all duration-300">
  {/* Smooth hover */}
</button>
```

### Custom Classes

**Animations**:
```css
.fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Component Styles

### Buttons

```tsx
{/* Primary Button - Bunzo Brand */}
<button className="px-6 py-3 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg">
  Button Text
</button>

{/* Secondary Button */}
<button className="px-6 py-3 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300">
  Button Text
</button>

{/* Outline Button - Bunzo Style */}
<button className="px-6 py-3 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
  Button Text
</button>

{/* Gradient Button */}
<button className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-primary to-primary-dark rounded-lg hover:from-primary-dark hover:to-emerald-800 transition-all duration-300">
  Gradient Button
</button>
```

### Cards - Recipe Style

```tsx
<div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
  <img 
    src={recipe.image} 
    alt={recipe.title}
    className="w-full h-48 object-cover"
  />
  <div className="p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{recipe.title}</h3>
    <p className="text-sm text-gray-600 mb-4">{recipe.description}</p>
    <div className="flex items-center justify-between">
      <span className="text-xs text-gray-500 flex items-center gap-1">
        <ClockIcon className="w-4 h-4" />
        {recipe.cookingTime} min
      </span>
      <button className="text-primary hover:text-primary-dark transition-colors">
        <HeartIcon className="w-5 h-5" />
      </button>
    </div>
  </div>
</div>
```

### Forms - Bunzo Style

```tsx
<input 
  type="text"
  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all placeholder-gray-400"
  placeholder="Enter text"
/>

<textarea
  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-none placeholder-gray-400"
  rows={4}
  placeholder="Enter description"
/>

<select
  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
>
  <option>Select option</option>
</select>

{/* Form Input Component - Bunzo Style */}
<FormInput
  type="text"
  placeholder="Recipe title"
  label="Title"
  labelStyle="text-sm font-medium text-gray-700"
  inputStyle="focus:border-emerald-500 focus:ring-emerald-500"
  required
/>

{/* Select Dropdown - Bunzo Style */}
<SelectDropdown
  label="Category"
  options={categories}
  selected={selectedCategory}
  onChange={setSelectedCategory}
  labelStyle="text-sm font-medium text-gray-700"
  buttonStyle="focus:outline-emerald-600"
  optionStyle="data-focus:bg-emerald-600"
/>
```

### Navigation - Bunzo Header

```tsx
<nav className="bg-white shadow-sm border-b border-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo + Brand Name + Slogan */}
      <div className="flex items-center gap-3">
        <figure>
          <img src={bunzo_logo} alt="Bunzo" className="w-12 h-12 md:w-14 md:h-14" />
        </figure>
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 lobster-regular">
            Bunzo
          </h1>
          <p className="text-xs md:text-sm text-emerald-600 font-medium">
            Modern Recipe Platform
          </p>
        </div>
      </div>
      
      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="/" className="text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-3 py-2 rounded-lg transition-colors">Home</a>
        <a href="/recipes" className="text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-3 py-2 rounded-lg transition-colors">Recipes</a>
        <a href="/blog" className="text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-3 py-2 rounded-lg transition-colors">Blog</a>
      </div>
    </div>
  </div>
</nav>

{/* Mobile Navigation */}
<NavLink
  to="/recipes"
  className="text-gray-800 hover:bg-emerald-600 focus:bg-emerald-600 hover:text-white focus:text-white transition-colors py-2 px-3 rounded-lg"
>
  Recipes
</NavLink>
```

### Brand Typography Usage

```tsx
{/* Main Brand Name - Lobster Font */}
<h1 className="text-2xl font-bold text-gray-900 lobster-regular">
  Bunzo
</h1>

{/* Brand Slogan - Inter Font */}
<p className="text-sm text-emerald-600 font-medium">
  Modern Recipe Platform
</p>

{/* Alternative Slogans */}
<p className="text-sm text-emerald-600 font-medium">
  Delicious Recipes Made Simple
</p>
```

## Responsive Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

### Usage

```tsx
<div className="
  text-sm sm:text-base md:text-lg
  px-4 sm:px-6 md:px-8
  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
">
  {/* Responsive content */}
</div>
```

## Animations

### AOS (Animate On Scroll)

**Initialization**:
```tsx
import AOS from 'aos';
import 'aos/dist/aos.css';

useEffect(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
}, []);
```

**Usage**:
```tsx
<div data-aos="fade-up">
  {/* Animated content */}
</div>

<div data-aos="fade-left" data-aos-delay="200">
  {/* Delayed animation */}
</div>
```

### CSS Transitions

```tsx
<button className="transition-all duration-300 hover:scale-105">
  {/* Smooth transitions */}
</button>
```

## Swiper Carousel

### Configuration

```tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

<Swiper
  spaceBetween={30}
  slidesPerView={1}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
  <SwiperSlide>{/* Content */}</SwiperSlide>
</Swiper>
```

## Best Practices

1. **Mobile-first**: Start with mobile styles, add larger breakpoints
2. **Consistent spacing**: Use Tailwind spacing scale
3. **Reusable classes**: Extract common patterns
4. **Performance**: Minimize custom CSS
5. **Accessibility**: Maintain color contrast ratios
6. **Dark mode ready**: Use semantic color names (future)

## Theme Configuration

### Tailwind Config

**File**: `tailwind.config.ts`

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#10b981',
        'primary-dark': '#059669',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
}
```

## Icons

### Heroicons

**Usage**:
```tsx
import { HeartIcon, ClockIcon } from '@heroicons/react/24/outline';

<HeartIcon className="w-6 h-6 text-primary" />
<ClockIcon className="w-5 h-5 text-gray-500" />
```

**Sizes**:
- Small: `w-4 h-4` (16px)
- Medium: `w-5 h-5` (20px)
- Large: `w-6 h-6` (24px)

## Centralized Styling Approach

### ✅ No Inline Styles Policy
- **Removed**: All `style={{}}` inline styles replaced with Tailwind classes
- **Centralized**: Custom gradients moved to `src/styles/gradients.css`
- **Consistent**: All components use standardized Tailwind utilities
- **Maintainable**: Easy to update colors and gradients from central location

### Custom Gradient Classes

```css
/* Available Gradient Classes */
.bg-gradient-bunzo-light      /* Light emerald gradient */
.bg-gradient-bunzo-primary    /* Main brand gradient */
.bg-gradient-bunzo-hero       /* Hero section gradient */
.bg-gradient-bunzo-card       /* Recipe card gradient */
.bg-gradient-bunzo-contact    /* Contact page gradient */
.bg-gradient-bunzo-green      /* Dark green gradient */
.bg-gradient-bunzo-instagram  /* Instagram section gradient */

/* Category-specific gradients */
.bg-gradient-category-rice
.bg-gradient-category-veggies
.bg-gradient-category-beef
.bg-gradient-category-cake
.bg-gradient-category-bread
.bg-gradient-category-chocolate
```

### Color Override System

**CSS Overrides in `index.css`**:
```css
/* Navigation Link Overrides - Ensure Bunzo colors */
nav a:hover {
  background-color: #10b981 !important;
  color: white !important;
}

nav a:focus {
  background-color: #10b981 !important;
  color: white !important;
}

nav a.active {
  background-color: #10b981 !important;
  color: white !important;
}

/* Ensure emerald colors are available */
.bg-emerald-600 {
  background-color: #059669 !important;
}

.text-emerald-600 {
  color: #059669 !important;
}
```

**React Router NavLink Active States**:
```tsx
<NavLink
  to="/recipes"
  className={({ isActive }) =>
    `transition-colors py-2 px-3 rounded-lg ${
      isActive
        ? "bg-emerald-600 text-white"
        : "text-gray-800 hover:bg-emerald-600 hover:text-white"
    }`
  }
>
  Recipes
</NavLink>
```

### Acceptable Inline Styles

**Dynamic Content Only**: Inline styles are only acceptable for dynamic content that cannot be predefined:

```tsx
{/* ✅ Acceptable - Dynamic background image */}
<div 
  className="bg-cover bg-center"
  style={{ backgroundImage: `url(${dynamicImageUrl})` }}
>
  {/* Dynamic content */}
</div>

{/* ❌ Not Acceptable - Static gradients */}
<div style={{ background: 'linear-gradient(...)' }}>
  {/* Use gradient classes instead */}
</div>
```

### Usage Examples

```tsx
{/* Recipe Card - Use gradient class instead of inline style */}
<div className="bg-gradient-bunzo-card rounded-2xl p-4">
  {/* Card content */}
</div>

{/* Category Item - Dynamic gradient mapping */}
<div className="bg-gradient-category-rice rounded-3xl">
  {/* Category content */}
</div>

{/* Hero Section */}
<section className="bg-gradient-bunzo-hero text-white">
  {/* Hero content */}
</section>

{/* Background Image */}
<div className="bg-community bg-cover bg-center">
  {/* Community section */}
</div>
```

### Tailwind Configuration

**File**: `tailwind.config.ts`

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#10b981',
        'primary-dark': '#059669',
        // Override ALL blue/indigo with emerald
        blue: {
          500: '#10b981',
          600: '#059669',
          // ... all shades mapped to emerald
        },
        indigo: {
          500: '#10b981', 
          600: '#059669',
          // ... all shades mapped to emerald
        },
        emerald: {
          500: '#10b981',
          600: '#059669',
          // ... complete emerald palette
        }
      }
    }
  }
}
```

**Complete Color Override System**:
```css
/* Force ALL blue/indigo to emerald */
.bg-blue-500, .bg-blue-600, .bg-indigo-500, .bg-indigo-600 {
  background-color: #10b981 !important;
}

.text-blue-500, .text-blue-600, .text-indigo-500, .text-indigo-600 {
  color: #10b981 !important;
}

.hover\:bg-blue-500:hover, .hover\:bg-indigo-600:hover {
  background-color: #10b981 !important;
}
```

## Recent Updates (March 2026)

### ✅ Centralized Styling System
- **Removed Inline Styles**: Eliminated all `style={{}}` inline styles
- **Custom Gradient Classes**: Created centralized gradient system in `gradients.css`
- **Tailwind Configuration**: Added custom colors and utilities to `tailwind.config.ts`
- **Consistent Approach**: All components now use standardized Tailwind classes
- **Maintainable Code**: Easy to update styles from central configuration

### ✅ Complete Blue Color Elimination
- **Root Cause**: Compiled Tailwind CSS in `dist/` folder contained default blue/indigo colors
- **Solution**: 
  1. Deleted `dist/` folder to clear cached CSS
  2. Updated `tailwind.config.ts` to override blue/indigo with emerald colors
  3. Added comprehensive CSS overrides with `!important` declarations
  4. Rebuilt project to generate fresh CSS
- **Result**: ALL blue/indigo references now forced to use emerald (#10b981)
- **Verification**: Compiled CSS shows `.bg-blue-500{background-color:#10b981!important}`
### ✅ Navigation Color Override Fix
- **Issue**: React Router NavLink default styles conflicting with Bunzo emerald colors
- **Solution**: Added CSS overrides in `index.css` with `!important` declarations
- **Fixed**: Navigation now properly shows emerald colors on hover/focus/active states
- **Ensured**: All emerald color utilities work correctly across the application
### ✅ Enhanced Header Branding
- **Brand Name Display**: Added "Bunzo" text using Lobster font alongside logo
- **Brand Slogan**: Added "Modern Recipe Platform" in emerald color
- **Improved Layout**: Logo + Brand Name + Slogan horizontal layout
- **Typography**: Proper font hierarchy with Lobster for brand name, Inter for slogan
- **Responsive Design**: Scales appropriately on mobile and desktop

### ✅ Brand Color Consistency
- **Completed**: Replaced all `indigo` color references with Bunzo's emerald brand colors
- **Updated Components**: 
  - Form inputs: `focus:border-emerald-500 focus:ring-emerald-500`
  - Dropdown components: `focus:outline-emerald-600 data-focus:bg-emerald-600`
  - Navigation links: `hover:bg-emerald-600 focus:bg-emerald-600`
  - Buttons: `bg-emerald-600 hover:bg-emerald-500`
  - Pagination: `bg-emerald-600 focus-visible:outline-emerald-600`
  - 404 page: `text-emerald-600 bg-emerald-600`
  - About page gradients: `from-emerald-500 to-emerald-600`

### ✅ Scrollbar Optimization
- **Custom Bunzo Scrollbar**: Emerald gradient design (#10b981 → #059669)
- **No Inner Scrollbars**: Applied `no-scrollbar` class to modal dialogs
- **Clean Layout**: Removed `overflow-y-scroll` from page containers
- **Main Scrollbar Only**: Only the body scrollbar is visible with Bunzo branding

### ✅ Form Styling Standards
- **Consistent Focus States**: All form elements use emerald-500 focus colors
- **Unified Design**: Input, textarea, and select elements follow same pattern
- **Accessibility**: Proper focus indicators and color contrast maintained

---

For more details, see [STRUCTURE.md](./STRUCTURE.md) and [FEATURES.md](./FEATURES.md)

