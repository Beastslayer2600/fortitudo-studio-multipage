import { ARTICLES, articlePath } from "../content/articles";

export const STATIC_ROUTES = [
  "/",
  "/about",
  "/services",
  "/process",
  "/guides",
  "/insights",
  "/contact",
  "/disclaimer",
  "/privacy",
  "/thank-you",
];

export const ALL_ROUTES = [...STATIC_ROUTES, ...ARTICLES.map(articlePath)];
