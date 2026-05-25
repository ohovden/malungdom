import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const fraasegner = defineCollection({
	loader: glob({ pattern: "*.md", base: "./src/content/fraasegner"}),
});

const artiklar = defineCollection({
	loader: glob({ pattern: "*.md", base: "./src/content/artiklar"}),
});

const hendingar = defineCollection({
	loader: glob({ pattern: "*.md", base: "./src/content/hendingar"}),
});

export const collections = { fraasegner, artiklar, hendingar };