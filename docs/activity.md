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

