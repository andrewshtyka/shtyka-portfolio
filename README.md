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

### 3.1 Functional

<br />

### 3.2 Animation

- Menu:
  Hide on scroll down, appear on scroll up.

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

### 3.3 Backlog

- Project page
  - Menu: Hide on scroll down, appear on scroll up.
  - Nav bar: Appear on scroll down, hide on scroll up.
  - Button scroll to top

  ```ts
  "use client";

  function scrollToTop() {
  	window.scrollTo({
  		top: 0,
  	});
  }
  <Link ... onClick={scrollToTop} >...</Link>
  ```

- 404 page
- Error page
- Preloader
  - Change cursor to loading variant (spinning circle)

- Generate Metadata for Pages:
  title = hero title
  description = hero subtitle
  next js docs - (Memoizing data requests) - https://nextjs.org/docs/app/getting-started/metadata-and-og-images
  base url - https://www.w3.org/TR/2011/WD-html5-author-20110809/the-base-element.html

<br />

### 3.4 Done

- Sanity schema:
  Add description to limit max amount of characters for subtitile to 40-45

- Link to projects case study must include [lang] in url

- Experiments section:
  Add dots bg

- Remove border lines from cards, btns, etc.

- Tag: no bg, blurred bg

- Btn secondary: no bg, blurred bg

- Menu:
  - Bigger padding for links (currently menu is too small)
  - Logo - unclickable
  - Put back "Index"
  - REWRITE MENU FROM 0: Menu bar with logo and lang - is a container. Content (navigation items) depend on page:
    - Home - contains anchor links
    - Project - contains button "Go to the home page" (retrieve the text from CMS)
  - Tidy up styles
  - Highlight link when appropriate section is in viewport

- Links:
  - Underline on hover (solid)
  - Add icon to external

- Menu mob:
  - When link clicked - close menu.
  - When menu opened and clicked (tapped) outside - close menu.
  - Close opened menu on "Esc

<br />

## 4. INSPIRATION

- text on scroll https://www.structured.money/

- ??? https://lightshiprv.com/

- lines and text on scroll https://destigmatize.ca/

- text quote (gray to white) on scroll https://webisoft.com/

- text on scroll https://sidewave.it/

- text on scroll https://pp-fragment.com/

-
