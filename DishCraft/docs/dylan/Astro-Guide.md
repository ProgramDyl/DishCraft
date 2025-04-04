# Guide To Astro

## What makes Astro unique? 

Building static websites with javascript frameworks, while shipping **zero** JavaScript to the browser. Frameworks (or multiple frameworks) are rendered to static html at runtime, resulting in a huge boost to performance and SEO. Astro is designed for **content-rich websites**, which contrasts with other frameworks that are designed to build "web applications", which are different. Large frameworks which devs love to use are for more heavy-duty needs like dashboards, users, inboxes, etc. 

Astro uses server rendering over client-side rendering in the browser as much as possible, similar to serverside frameworks like PHP, WordPress, Ruby on Rails, etc. Next.js is built for client side rendering of the entire website, and server is only considered for performance concerns. The Next approach is called **Single Page App (SPA)**, whereas Astro uses **Multi-Page App (MPA)**. This approach, combined with less-JS makes a very high performance website. 

## Astro Main Features
<hr>

### 1. Content Collections
For managing sets of recipes, a content collection is the best way. This helps structure, collect, and query documents. There is also a `Content Layer API` built-in to define and query collections. 

#### Our Use-Case:
This blog ideally can be built and sold to a Chef client who posts regularly. Post can range from recipes and instructions, to just regular updates and posts. This is where Content Collections are very helpful. We defined a blog collection using TypeScript with a specific schema to allow the flexibility our imaginary client needs. 

```ts

const blog = defineCollection({
    schema: z.object({
        //Required fields for all blog posts
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),

        //Optional fields: 
        mealId: z.string().optional()
    })
});

```

This component is then exported: 

`export const collections = { blog };`

This provides the blog collection UI a strict set of data to use for each post, while allowing the user to determine what kind of post they want to make. 

Astro has built-in support for Markdown files that can include `frontmatter YAML` to create tags or properties like we did for our blog collection. Any markdown files located in `src/pages/` will automatically generate markdown pages on the Blog/Index page. 

**Frontmatter YAML** 
```YAML
---
---
title: "Spicy Arrabiata Penne"
description: "Authentic Italian pasta dish with eggs, cheese, and pancetta"
pubDate: 2025-04-04 
mealId: "52771" 
---
---
```

The `content.config.ts` schema enforces YAML content, and is converted to TypeScript Types automatically. 

Frontmatter is also used for data fetching: 

in `[...slug].astro:
```ts
const recipe = post.data.mealId 
  ? await fetchMealDB(post.data.mealId) // Uses frontmatter!
  : null;
```

In the case of our recipes, the frontmatter is the recipe information or recipe card, and the markdown is the recipe instructions or content! 


### 2. Islands Architecture

### 3. 


## How does this project leverage Astro?
