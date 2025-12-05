# Activity Log

## December 4, 2025

### User Prompt
> Build a simple text file window. Create text.jsx inside windows folder.
> 
> Use window wrapper and window store. The window is txtfile. Read windows.txtfile.data and render its name, optional image, optional subtitle and an array of description paragraphs. If no data, return null.
> 
> Wrap the component with the window wrapper as we've done with other windows. Then export it from windows/index.js and import it in app.jsx
> 
> I should be able to open any text file from finder and see this window display its content

### Actions Performed

1. **Created `/src/windows/Text.jsx`**
   - Built a new window component for displaying text file content
   - Uses `WindowWrapper` HOC with key "txtfile"
   - Reads data from `windows.txtfile.data` via `useWindowStore`
   - Returns `null` if no data is present
   - Renders:
     - File name in the header
     - Optional image (centered with rounded corners)
     - Optional subtitle (styled as heading)
     - Array of description paragraphs with proper spacing
   - Added unique IDs to all div elements for styling purposes

2. **Fixed bug in `/src/windows/Finder.jsx`**
   - Changed `item.filetype` to `item.fileType` (corrected case sensitivity)
   - This was preventing text files from opening properly

3. **Updated `/src/windows/index.js`**
   - Added import for `Text` component
   - Added `Text` to exports

4. **Updated `/src/App.jsx`**
   - Added `Text` import from `@windows`
   - Added `<Text />` component to the render tree

### Files Modified
- `src/windows/Text.jsx` (created)
- `src/windows/Finder.jsx` (bug fix)
- `src/windows/index.js` (export added)
- `src/App.jsx` (import and usage added)
- `docs/activity.md` (created)

---

## December 5, 2025

### User Prompt
> Just like we created the text window, now create an Image file window just like the text window, it should render the title and the image, use window-header for the window controls and make sure to follow the same logic as the other windows

### Actions Performed

1. **Created `/src/windows/Image.jsx`**
   - Built a new window component for displaying image files
   - Uses `WindowWrapper` HOC with key "imgfile"
   - Reads data from `windows.imgfile.data` via `useWindowStore`
   - Returns `null` if no data is present
   - Renders:
     - File name in the header with WindowControls
     - Image centered with dark background for better viewing
   - Added unique IDs to all div elements:
     - `imgfile-header` - the window header
     - `imgfile-title` - the file name
     - `imgfile-content` - the content container
     - `imgfile-image` - the actual image element
   - Styled with dark neutral background to make images stand out

2. **Updated `/src/windows/index.js`**
   - Added import for `Image` component
   - Added `Image` to exports

3. **Updated `/src/App.jsx`**
   - Added `Image` import from `@windows`
   - Added `<Image />` component to the render tree

### Files Modified
- `src/windows/Image.jsx` (created)
- `src/windows/index.js` (export added)
- `src/App.jsx` (import and usage added)
- `docs/activity.md` (updated)

---

### User Prompt
> Update the styles on Contact.jsx to match other windows, the spacing is bit off with the elements inside the window

### Actions Performed

1. **Updated `/src/windows/Contact.jsx`**
   - Fixed bug: `id="p-5 space-y-5"` was incorrectly used instead of `className`
   - Changed content container to use proper id (`contact-content`) and className
   - Added consistent styling to match other windows:
     - `bg-white p-6 overflow-y-auto max-h-[400px]` for content container
   - Improved profile section layout:
     - Centered avatar with `flex flex-col items-center`
     - Larger avatar (24x24) with proper rounded-full and shadow
     - Better typography for title and subtitle
   - Enhanced social links list:
     - Added `space-y-3` for consistent vertical spacing
     - Rounded corners on list items
     - Proper padding and flex alignment for anchor links
     - Added hover opacity transition
     - White text with medium font weight
   - Added unique IDs to all elements:
     - `contact-content` - main content container
     - `contact-profile` - profile section wrapper
     - `contact-avatar` - profile image
     - `contact-title` - main heading
     - `contact-subtitle` - description text
     - `contact-socials` - social links list
     - `contact-social-{id}` - individual social items

### Files Modified
- `src/windows/Contact.jsx` (styling updated)
- `docs/activity.md` (updated)

---

### User Prompt
> Fix the design issues with the photos window

### Actions Performed

1. **Fixed `/src/windows/Photos.jsx`**
   - **Fixed typo**: Changed `classname` to `className` on the content container
   - **Fixed layout structure**: Merged the two separate containers into one flex container
     - Previously: sidebar and gallery were in separate parent divs
     - Now: sidebar and gallery are siblings in a single flex container (`flex w-full h-full`)
   - This matches the pattern used in Finder.jsx and aligns with the CSS in `#photos`
   - Added hover effect on gallery items (`cursor-pointer hover:opacity-90 transition-opacity`)
   - Improved gallery image name to include the ID for better identification
   - Added unique IDs to all elements:
     - `photos-header-icons` - header icons container
     - `photos-content` - main content flex container
     - `photos-sidebar` - sidebar container
     - `photos-nav-list` - navigation list
     - `photos-nav-item-{id}` - individual nav items
     - `photos-gallery` - gallery container
     - `photos-gallery-grid` - gallery grid
     - `photos-gallery-item-{id}` - individual gallery items

### Files Modified
- `src/windows/Photos.jsx` (design fixes)
- `docs/activity.md` (updated)

---

### User Prompt
> Scan the entire codebase now get complete understanding of the project and how I have developed it, make sure to go through each and every file even the global css is a custom developed, so make sure to go through everything, also the way I have coded this project

### Codebase Analysis & Understanding

## Project Overview
A **macOS-style portfolio website** built with React + Vite that simulates the macOS desktop experience. The portfolio displays projects, skills, blog posts, and contact info through draggable windows that mimic native macOS applications.

---

## Tech Stack
- **React 19.2** - UI framework
- **Vite 7.2** - Build tool with HMR
- **Tailwind CSS 4.1** - Styling (via @tailwindcss/vite plugin)
- **Zustand 5.0** - State management with Immer middleware
- **GSAP 3.13** - Animations (Draggable plugin for window dragging)
- **dayjs** - Date formatting
- **react-pdf** - PDF rendering for resume
- **lucide-react** - Icons
- **react-tooltip** - Tooltips for dock
- **clsx** - Conditional classnames

---

## Project Architecture

### Path Aliases (vite.config.js)
```
@components → src/components
@constants  → src/constants
@store      → src/store
@hoc        → src/hoc
@windows    → src/windows
```

### Folder Structure
```
src/
├── main.jsx          # Entry point
├── App.jsx           # Main app with all components
├── index.css         # Global CSS with Tailwind + custom styles
├── components/       # Reusable UI components
├── windows/          # Window components (macOS apps)
├── store/            # Zustand stores
├── hoc/              # Higher-Order Components
└── constants/        # Static data & configuration
```

---

## State Management Pattern

### Window Store (`store/window.js`)
- Uses Zustand with Immer middleware for immutable updates
- Tracks all windows: `isOpen`, `zIndex`, `data`
- Actions: `openWindow(key, data)`, `closeWindow(key)`, `focusWindow(key)`
- Z-index management ensures clicked window comes to front

### Location Store (`store/location.js`)
- Manages current Finder location (folder navigation)
- Default location: `locations.work`
- Used for navigating the virtual file system

---

## Core Patterns

### 1. WindowWrapper HOC (`hoc/WindowWrapper.jsx`)
Every window uses this HOC pattern:
```jsx
const MyWindow = WindowWrapper(MyComponent, "windowKey");
```
The HOC handles:
- GSAP entrance animations (scale + fade + slide)
- Draggable functionality via GSAP Draggable
- Z-index management on click/focus
- Show/hide based on `isOpen` state
- Wraps in `<section id={windowKey}>` for CSS targeting

### 2. Window Structure Pattern
All windows follow this structure:
```jsx
<>
  <div id="window-header">
    <WindowControls target="windowKey" />
    {/* Optional header content */}
  </div>
  <div className="content-area">
    {/* Window content */}
  </div>
</>
```

### 3. File Type Routing (Finder.jsx)
Opening files based on type:
- `pdf` → Opens Resume window
- `folder` → Sets activeLocation
- `fig`, `url` → Opens external link
- Other types → `openWindow(`${fileType}${kind}`, item)`
  - `txtfile` → Text window
  - `imgfile` → Image window

---

## CSS Architecture (`index.css`)

### Custom Tailwind Setup
- Imports Google Fonts: Georama (variable weight) + Roboto Mono
- Custom theme variables: `--font-georama`, `--font-roboto`, `--breakpoint-3xl`

### Custom Utilities
```css
@utility flex-center  → flex items-center justify-center
@utility col-center   → flex flex-col items-center justify-center
@utility abs-center   → absolute top-1/2 left-1/2 -translate-x/y-1/2
```

### Component Styles (ID-based)
Each window has dedicated styles via ID selectors:
- `#window-header` - Shared header styling
- `#window-controls` - Traffic light buttons
- `#dock` - macOS dock with tooltips
- `#welcome` - Hero section
- `#finder`, `#safari`, `#terminal`, `#contact`, `#photos`, `#resume`, `#txtfile`, `#imgfile`, `#home`

### Key CSS Features
- **Glassmorphism**: `bg-white/50 backdrop-blur-3xl` on navbar
- **Traffic lights**: Custom colors (#ff6157, #ffc030, #2acb42)
- **Responsive**: `max-sm:hidden` for mobile warning
- **Grid layouts**: Photos gallery uses CSS Grid with `row-span`/`col-span`
- **Sidebar patterns**: Consistent across Finder/Photos

---

## Components Breakdown

### Layout Components
| Component | Purpose |
|-----------|---------|
| `Navbar` | macOS menu bar with nav links, icons, time |
| `Dock` | Bottom app dock with GSAP hover animations |
| `Welcome` | Hero text with variable font weight animation |
| `Home` | Desktop folder icons (draggable) |
| `WindowControls` | Red/yellow/green traffic lights |

### Window Components
| Window | Key | Description |
|--------|-----|-------------|
| `Terminal` | `terminal` | Tech stack display |
| `Safari` | `safari` | Blog posts viewer |
| `Resume` | `resume` | PDF viewer with react-pdf |
| `Finder` | `finder` | File browser with sidebar |
| `Photos` | `photos` | Gallery with grid layout |
| `Contact` | `contact` | Social links |
| `Text` | `txtfile` | Dynamic text file viewer |
| `Image` | `imgfile` | Dynamic image viewer |

---

## Data Structure (`constants/index.js`)

### Location System (Virtual File System)
```javascript
locations = {
  work: { children: [project folders...] },
  about: { children: [images, about-me.txt] },
  resume: { children: [Resume.pdf] },
  trash: { children: [deleted items] }
}
```

### File Object Schema
```javascript
{
  id: number,
  name: string,
  icon: string,
  kind: "file" | "folder",
  fileType: "txt" | "img" | "pdf" | "url" | "fig",
  position: string,      // Tailwind positioning
  windowPosition: string, // For folders
  description: string[], // For txt files
  imageUrl: string,      // For img files
  href: string,          // For url/fig files
}
```

### Window Configuration
```javascript
WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: 1000, data: null },
  // ... all windows
}
```

---

## Animation Patterns

### Welcome Text (Variable Font Animation)
- Uses Georama variable font
- Mouse proximity detection
- Weight animated between min/max based on distance
- Gaussian falloff formula: `Math.exp(-(distance ** 2) / 2000)`

### Dock Icons (GSAP)
- Scale + Y translation on hover
- Distance-based intensity
- Smooth reset on mouse leave

### Window Entrance
```javascript
gsap.fromTo(el,
  { scale: 0.8, opacity: 0, y: 40 },
  { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
);
```

---

## Development Conventions

1. **Unique IDs on all divs** - For targeting with prompts
2. **WindowWrapper pattern** - All windows wrapped with HOC
3. **Constants separation** - All static data in constants/
4. **Barrel exports** - index.js files for clean imports
5. **Activity logging** - docs/activity.md for tracking changes
6. **Component-scoped CSS** - ID selectors in global CSS
7. **Tailwind utilities** - Inline + component classes combined

---

### Files Reviewed
- `package.json`, `vite.config.js`, `jsconfig.json`, `eslint.config.js`
- `index.html`, `src/main.jsx`, `src/App.jsx`, `src/index.css`
- All components: `Navbar`, `Welcome`, `Dock`, `Home`, `WindowControls`
- All windows: `Terminal`, `Safari`, `Resume`, `Finder`, `Photos`, `Contact`, `Text`, `Image`
- Stores: `window.js`, `location.js`
- HOC: `WindowWrapper.jsx`
- Constants: `index.js` (complete data structure)
- Documentation: `docs/activity.md`

---

### User Prompt
> Now, the current implementation is only for the laptop and tablet screen this site is not compatible for mobile screens, now I wish to develop the project for the mobile screen size and push it to the branch feat/mobile

### Actions Performed

## iOS-Style Mobile Implementation (feat/mobile branch)

Created a complete iOS-style mobile interface that runs on screens < 640px, featuring:
- App icon grid home screen
- Full-screen views (not draggable windows)
- Slide-in animations
- Touch-friendly navigation

### New Files Created

1. **`src/hooks/useIsMobile.js`**
   - Custom hook using `window.matchMedia` to detect mobile screens
   - Returns boolean `isMobile` with reactive updates

2. **`src/store/mobile.js`**
   - Zustand store for mobile navigation
   - State: `currentView`, `viewData`, `history`
   - Actions: `openView`, `goBack`, `goHome`, `replaceView`

3. **`src/mobile/MobileApp.jsx`**
   - Main mobile wrapper component
   - iOS-style status bar (time, signal, wifi, battery icons)
   - Home indicator bar at bottom
   - Conditional rendering of HomeScreen vs MobileWindow

4. **`src/mobile/HomeScreen.jsx`**
   - iOS-style home screen with app icon grid
   - Welcome text (simplified from desktop)
   - 3-column grid of app icons
   - Tap to open full-screen views

5. **`src/mobile/MobileWindow.jsx`**
   - Full-screen view wrapper
   - Header with back button and title
   - GSAP slide-in animation from right
   - Animated slide-out on back navigation

6. **`src/mobile/views/` (8 components)**
   - `MobileFinder.jsx` - List-based file browser with location tabs
   - `MobileSafari.jsx` - Blog posts with full-width cards
   - `MobilePhotos.jsx` - 2-column photo grid
   - `MobileContact.jsx` - Centered profile with stacked social buttons
   - `MobileTerminal.jsx` - Tech stack as category cards with tags
   - `MobileResume.jsx` - Download/view buttons for PDF
   - `MobileText.jsx` - Text file content display
   - `MobileImage.jsx` - Full-screen image viewer with dark background

7. **`src/mobile/views/index.js`** - Barrel exports for views
8. **`src/mobile/index.js`** - Barrel exports for mobile components

### Files Modified

1. **`vite.config.js`**
   - Added `@hooks` alias → `src/hooks`
   - Added `@mobile` alias → `src/mobile`

2. **`src/App.jsx`**
   - Added `useIsMobile` hook import
   - Conditional rendering: mobile shows `<MobileApp />`, desktop shows existing layout

3. **`src/index.css`**
   - Added ~350 lines of iOS-style mobile CSS
   - Components: `#mobile-app`, `#mobile-status-bar`, `#mobile-home-screen`, `#mobile-app-grid`, `#mobile-window`, `#mobile-finder`, `#mobile-safari`, `#mobile-photos`, `#mobile-contact`, `#mobile-terminal`, `#mobile-resume`, `#mobile-text`, `#mobile-image`
   - Touch-friendly: 44px+ tap targets, active states, safe area insets

4. **`src/components/Welcome.jsx`**
   - Removed `.small-screen` mobile warning div (no longer needed)

### New Folder Structure
```
src/
├── hooks/
│   └── useIsMobile.js
├── mobile/
│   ├── index.js
│   ├── MobileApp.jsx
│   ├── HomeScreen.jsx
│   ├── MobileWindow.jsx
│   └── views/
│       ├── index.js
│       ├── MobileFinder.jsx
│       ├── MobileSafari.jsx
│       ├── MobilePhotos.jsx
│       ├── MobileContact.jsx
│       ├── MobileTerminal.jsx
│       ├── MobileResume.jsx
│       ├── MobileText.jsx
│       └── MobileImage.jsx
└── store/
    └── mobile.js
```

### Technical Details

- **Breakpoint**: 640px (Tailwind's `sm` breakpoint)
- **Navigation pattern**: Stack-based with history for back navigation
- **Animations**: GSAP slide-in/out (x: 100% → 0)
- **Safe areas**: Uses `env(safe-area-inset-top/bottom)` for notched devices
- **State**: Separate Zustand store from desktop (mobile.js vs window.js)

