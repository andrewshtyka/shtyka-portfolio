# Shtyka portfolio website

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

## Challenges

1. (WIP) Make components antifragile (don't crash if no data is passed)
   - [x] Home
2. [x] Videos - play only those in viewport
   - intersection observer (start downloading when less than 300px left for video to become in viewport)
   - intersection observer (play when 10% is in viewport)

## TODO

1. Generate Metadata for Pages:
title = hero title
description = hero subtitle

next js docs - (Memoizing data requests) - https://nextjs.org/docs/app/getting-started/metadata-and-og-images
base url - https://www.w3.org/TR/2011/WD-html5-author-20110809/the-base-element.html

2. Add loading state for images and videos

3. Menu mob:
When link clicked, hide menu. Same for Logo click.

4. Sanity schema:
Add description to limit max amount of characters for subtitile to 40-45

5. Layout transition:
Clean up file and set up transition