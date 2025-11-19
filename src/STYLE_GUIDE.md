# PR Hero Style Guide & Component Reference

A comprehensive design system and implementation guide for PR Hero's modern SaaS interface, featuring clean minimalist design with warm gradients, organic shapes, and sophisticated glass-morphism effects.

## Table of Contents

- [Design Tokens & CSS Variables](#design-tokens--css-variables)
- [Color System](#color-system)
- [Typography Scale](#typography-scale)
- [Spacing & Layout Grid](#spacing--layout-grid)
- [Visual Effects](#visual-effects)
- [Component Patterns](#component-patterns)
- [Shadcn/UI Integration](#shadcnui-integration)
- [Building New Sections](#building-new-sections)

---

## Design Tokens & CSS Variables

Our design system uses CSS custom properties mapped to Tailwind utility classes for consistency and maintainability.

### Core Token Mapping

/* CSS Custom Properties */
--color-primary-black: #1a1a1a;
--color-primary-white: #ffffff;
--color-gradient-pink-start: #f8e6f0;
--color-gradient-pink-end: #e6d7ff;
--color-gradient-orange-start: #fff4e6;
--color-gradient-orange-end: #ffe6cc;
--color-purple-accent: #8b5cf6;
--color-yellow-accent: #fbbf24;
--color-gray-medium: #6b7280;
--color-gray-light: #f3f4f6;

--font-inter: 'Inter', sans-serif;
--text-hero-heading: 72px;
--text-section-heading: 48px;
--text-body: 16px;
--text-button: 14px;
--text-small: 14px;
### Tailwind Utility Class Mapping

// Recommended Tailwind classes for design tokens
const designTokens = {
  colors: {
    primary: 'text-neutral-900', // --color-primary-black
    secondary: 'text-gray-500',  // --color-gray-medium
    accent: 'text-violet-500',   // --color-purple-accent
    highlight: 'text-amber-400'  // --color-yellow-accent
  },
  backgrounds: {
    primary: 'bg-white',
    gradiendPink: 'bg-gradient-to-br from-rose-50 to-purple-100',
    gradientOrange: 'bg-gradient-to-br from-orange-50 to-orange-100'
  }
}
---

## Color System

### Primary Colors

/* Usage Examples */
.text-primary { color: var(--color-primary-black); }     /* #1a1a1a */
.text-secondary { color: var(--color-gray-medium); }     /* #6b7280 */
.bg-primary { background: var(--color-primary-white); } /* #ffffff */
### Gradient Backgrounds

<!-- Hero Section Pink Gradient -->
<section class="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100">
  <!-- Content -->
</section>

<!-- Feature Section Orange Gradient -->
<section class="bg-gradient-to-br from-orange-50 to-orange-100">
  <!-- Content -->
</section>

<!-- Glass-morphism Overlay -->
<div class="bg-white/80 backdrop-blur-sm border border-white/20">
  <!-- Glassmorphism content -->
</div>
### Accent Colors

<!-- Purple Accent for Interactive Elements -->
<a class="text-violet-500 hover:text-violet-600 transition-colors">
  Learn more
</a>

<!-- Yellow Accent for Highlights -->
<span class="bg-amber-400 text-neutral-900 px-2 py-1 rounded-md">
  New Feature
</span>
---

## Typography Scale

### Heading Hierarchy

<!-- Hero Heading -->
<h1 class="text-7xl font-bold leading-tight text-neutral-900">
  Write less, achieve more
</h1>

<!-- Section Heading -->
<h2 class="text-5xl font-semibold leading-tight text-neutral-900">
  Three steps to PR success
</h2>

<!-- Sub Heading -->
<h3 class="text-3xl font-semibold leading-snug text-neutral-900">
  Smart AI Rules
</h3>

<!-- Feature Title -->
<h4 class="text-xl font-medium text-neutral-900">
  Gmail Integration
</h4>
### Body Text & Small Text

<!-- Body Text -->
<p class="text-base leading-relaxed text-neutral-900">
  Connect your GitHub repository and let our AI handle the rest.
</p>

<!-- Secondary Text -->
<p class="text-base leading-relaxed text-gray-500">
  Automatically generate PR descriptions, organize labels, and streamline reviews.
</p>

<!-- Small Text -->
<span class="text-sm text-gray-500">
  Last updated 2 hours ago
</span>

<!-- Button Text -->
<button class="text-sm font-medium">
  Get Started Free
</button>
### Typography Utilities

<!-- Font Weights -->
<span class="font-normal">400</span>    <!-- Body text -->
<span class="font-medium">500</span>    <!-- Buttons -->
<span class="font-semibold">600</span>  <!-- Section headings -->
<span class="font-bold">700</span>      <!-- Hero heading -->

<!-- Line Heights -->
<h1 class="leading-tight">1.1</h1>      <!-- Hero -->
<h2 class="leading-snug">1.2</h2>       <!-- Sections -->
<p class="leading-relaxed">1.6</p>      <!-- Body -->
---

## Spacing & Layout Grid

### Container & Section Layout

<!-- Main Container -->
<div class="max-w-6xl mx-auto px-5">
  <!-- Content constrained to 1200px max-width -->
</div>

<!-- Section Spacing -->
<section class="py-20 px-5">
  <!-- 80px vertical, 20px horizontal padding -->
</section>

<!-- Component Spacing -->
<div class="space-y-6">        <!-- 24px vertical gaps -->
<div class="space-x-4">        <!-- 16px horizontal gaps -->
<div class="gap-6 grid">       <!-- 24px grid gaps -->
### Grid Systems

<!-- Three Column Feature Grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="space-y-4">
    <!-- Feature card content -->
  </div>
</div>

<!-- Two Column Layout -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  <div><!-- Text content --></div>
  <div><!-- Image/visual content --></div>
</div>

<!-- Responsive Cards Grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  <!-- Auto-responsive card grid -->
</div>
---

## Visual Effects

### Glassmorphism

<!-- Primary Glassmorphism Card -->
<div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg">
  <!-- Content with glass effect -->
</div>

<!-- Subtle Glass Overlay -->
<div class="bg-white/60 backdrop-blur-md border border-gray-100/50 rounded-xl">
  <!-- Lighter glass effect -->
</div>

<!-- Dark Glass Variant -->
<div class="bg-neutral-900/80 backdrop-blur-sm border border-white/10 rounded-2xl">
  <!-- Dark glassmorphism -->
</div>
### Shadows & Elevation

<!-- Card Shadow -->
<div class="shadow-lg">                    /* 0 10px 15px rgba(0,0,0,0.1) */
<div class="shadow-xl">                    /* 0 20px 25px rgba(0,0,0,0.1) */
<div class="shadow-2xl">                   /* 0 25px 50px rgba(0,0,0,0.25) */

<!-- Custom Shadow -->
<div class="shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
  <!-- Matches design system exactly -->
</div>

<!-- Hover Elevation -->
<div class="shadow-lg hover:shadow-xl transition-shadow duration-300">
  <!-- Interactive elevation -->
</div>
### Border Radius

<!-- Card Radius -->
<div class="rounded-2xl">     /* 16px - Standard cards */
<div class="rounded-xl">      /* 12px - Smaller cards */
<div class="rounded-lg">      /* 8px - Buttons */
<div class="rounded-md">      /* 6px - Small elements */
<div class="rounded-full">    /* Full - Avatars, badges */
### Transitions & Animations

<!-- Standard Transitions -->
<div class="transition-all duration-300 ease-in-out">
<button class="transition-colors duration-200 hover:bg-violet-600">
<div class="transition-transform duration-300 hover:scale-105">

<!-- Fade In Animation -->
<div class="animate-fadeIn">              /* Custom fade in */
<div class="animate-slideUp">             /* Custom slide up */

<!-- Loading States -->
<div class="animate-pulse">               /* Skeleton loading */
<div class="animate-spin">                /* Loading spinner */
---

## Component Patterns

### Buttons

<!-- Primary Button -->
<button class="bg-neutral-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors duration-200 shadow-lg hover:shadow-xl">
  Get Started Free
</button>

<!-- Secondary Button -->
<button class="border border-neutral-300 text-neutral-900 px-6 py-3 rounded-lg font-medium hover:bg-neutral-50 transition-colors duration-200">
  Learn More
</button>

<!-- Accent Button -->
<button class="bg-violet-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-violet-600 transition-colors duration-200 shadow-lg">
  Try It Now
</button>

<!-- Ghost Button -->
<button class="text-violet-500 px-4 py-2 rounded-lg font-medium hover:bg-violet-50 transition-colors duration-200">
  View Details
</button>
### Cards

<!-- Feature Card -->
<div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
  <div class="space-y-4">
    <h3 class="text-xl font-semibold text-neutral-900">Card Title</h3>
    <p class="text-gray-500 leading-relaxed">Card description text.</p>
  </div>
</div>

<!-- Glass Card -->
<div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
  <!-- Glass effect card content -->
</div>

<!-- Hover Card -->
<div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
  <!-- Interactive card -->
</div>
### Badges & Tags

<!-- Status Badge -->
<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
  Active
</span>

<!-- Accent Badge -->
<span class="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-medium">
  New Feature
</span>

<!-- Highlight Badge -->
<span class="bg-amber-400 text-neutral-900 px-3 py-1 rounded-md text-sm font-medium">
  Popular
</span>

<!-- Outline Badge -->
<span class="border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm">
  Category
</span>
### Navigation

<!-- Header Navigation -->
<header class="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
  <div class="max-w-6xl mx-auto px-5 py-4">
    <nav class="flex justify-between items-center">
      <!-- Logo -->
      <div class="font-bold text-xl text-neutral-900">PR Hero</div>
      
      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-8">
        <a class="text-gray-600 hover:text-neutral-900 transition-colors" href="#features">Features</a>
        <a class="text-gray-600 hover:text-neutral-900 transition-colors" href="#pricing">Pricing</a>
      </div>
      
      <!-- CTA Button -->
      <button class="bg-neutral-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-neutral-800 transition-colors">
        Sign Up
      </button>
    </nav>
  </div>
</header>
---

## Shadcn/UI Integration

### Component Overrides

<!-- Button Component Override -->
<Button className="bg-neutral-900 hover:bg-neutral-800 text-white shadow-lg hover:shadow-xl transition-all duration-200">
  Custom Styled Button
</Button>

<!-- Card Component Override -->
<Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
  <CardContent className="p-8">
    <!-- Enhanced card content -->
  </CardContent>
</Card>

<!-- Input Component Override -->
<Input className="border-gray-200 focus:border-violet-500 focus:ring-violet-500/20 rounded-lg" />
### Color Mapping for Shadcn/UI

// tailwind.config.js - Shadcn/UI color integration
module.exports = {
  theme: {
    extend: {
      colors: {
        // Map to Shadcn/UI variables
        primary: {
          DEFAULT: '#1a1a1a',     // --color-primary-black
          foreground: '#ffffff',   // --color-primary-white
        },
        secondary: {
          DEFAULT: '#f3f4f6',     // --color-gray-light
          foreground: '#6b7280',   // --color-gray-medium
        },
        accent: {
          DEFAULT: '#8b5cf6',     // --color-purple-accent
          foreground: '#ffffff',
        }
      }
    }
  }
}
### Extended Shadcn/UI Components

<!-- Enhanced Dialog -->
<Dialog>
  <DialogContent className="bg-white/95 backdrop-blur-md border-white/20 shadow-2xl rounded-2xl">
    <DialogHeader>
      <DialogTitle className="text-2xl font-semibold text-neutral-900">
        Modal Title
      </DialogTitle>
    </DialogHeader>
    <!-- Content -->
  </DialogContent>
</Dialog>

<!-- Custom Sheet -->
<Sheet>
  <SheetContent className="bg-white/90 backdrop-blur-md border-l border-white/20">
    <!-- Glassmorphism sidebar -->
  </SheetContent>
</Sheet>
---

## Building New Sections

### Section Template

<!-- Standard Section Structure -->
<section class="py-20 px-5">
  <div class="max-w-6xl mx-auto">
    <!-- Section Header -->
    <div class="text-center mb-16 space-y-4">
      <h2 class="text-5xl font-semibold leading-tight text-neutral-900">
        Section Title
      </h2>
      <p class="text-xl text-gray-500 max-w-3xl mx-auto">
        Section description that explains the value proposition.
      </p>
    </div>
    
    <!-- Section Content -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Content areas -->
    </div>
  </div>
</section>
### Background Variations

<!-- White Background -->
<section class="py-20 px-5 bg-white">

<!-- Gradient Background -->
<section class="py-20 px-5 bg-gradient-to-br from-rose-50 to-purple-100">

<!-- Dark Background -->
<section class="py-20 px-5 bg-neutral-900 text-white">
### Content Patterns

<!-- Feature List Pattern -->
<div class="space-y-8">
  <div class="flex items-start space-x-4">
    <div class="bg-violet-100 p-3 rounded-lg">
      <CheckIcon className="w-6 h-6 text-violet-600" />
    </div>
    <div>
      <h4 class="text-lg font-semibold text-neutral-900 mb-2">Feature Title</h4>
      <p class="text-gray-500">Feature description explaining the benefit.</p>
    </div>
  </div>
</div>

<!-- Stats Pattern -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
  <div>
    <div class="text-4xl font-bold text-neutral-900 mb-2">99%</div>
    <div class="text-gray-500">Accuracy Rate</div>
  </div>
</div>

<!-- CTA Pattern -->
<div class="text-center py-16">
  <h3 class="text-3xl font-semibold text-neutral-900 mb-4">Ready to get started?</h3>
  <p class="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">Join thousands of teams already using PR Hero.</p>
  <div class="space-x-4">
    <button class="bg-neutral-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-neutral-800 transition-colors shadow-lg">
      Start Free Trial
    </button>
    <button class="border border-neutral-300 text-neutral-900 px-8 py-4 rounded-lg font-medium hover:bg-neutral-50 transition-colors">
      View Demo
    </button>
  </div>
</div>
---

## Best Practices

### Performance
- Use `backdrop-blur` sparingly for glassmorphism effects
- Implement `will-change` for frequently animated elements
- Prefer `transition-colors` over `transition-all` when possible

### Accessibility
- Maintain sufficient color contrast (4.5:1 minimum)
- Use semantic HTML structure with proper heading hierarchy
- Include focus states for all interactive elements

### Responsiveness
- Test all components from 320px to 1440px+ widths
- Use `space-y` for vertical stacking on mobile
- Implement progressive enhancement for complex layouts

### Maintenance
- Always reference this style guide for new components
- Use design tokens instead of hardcoded values
- Document any deviations from established patterns