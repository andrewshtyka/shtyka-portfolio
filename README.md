# My portfolio website

## 1. Basic info

### Install

Run in terminal:

```js
npm install
```

<br/>

### Tech stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Motion (ex Framer Motion)

<br />

## 2. Challenges

(WIP) Make components antifragile (don't crash if no data is passed)

- [x] Home
- Project
- 404
- Error
- Preloader

[x] Videos - play only those in viewport

- intersection observer (start downloading when less than 300px left for video to become in viewport)
- intersection observer (play when 10% is in viewport)

<br />

## 3. TODO

### Functional

- Menu:
  Highlight link when appropriate section is in viewport

- Menu mob:
  - When link clicked - close menu.
  - When Logo clicked - close menu.
  - When menu opened and clicked (tapped) outside - close menu.

- Menu:
  Hide on scroll down, appear on scroll up.

- Add loading state for images and videos

<br />

### Animation

- Add shaders for hero video

- Hovers (find refs):
  - Links
  - Buttons

- Appearance animation (find refs)
  ON LOAD and ON SCROLL:
  - Menu
  - Texts
  - Videos and images
  - Sections

- Animation of transition between pages (fade):
  - Clean up file and set up transition
  - Do for Language change.

<br />

### BACKLOG

- Project page
- 404 page
- Error page
- Preloader

- Generate Metadata for Pages:
  title = hero title
  description = hero subtitle
  next js docs - (Memoizing data requests) - https://nextjs.org/docs/app/getting-started/metadata-and-og-images
  base url - https://www.w3.org/TR/2011/WD-html5-author-20110809/the-base-element.html

<br />

### DONE

- [x] Sanity schema:
  Add description to limit max amount of characters for subtitile to 40-45