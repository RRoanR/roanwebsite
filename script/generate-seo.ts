import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { seoSitemapPaths } from "../shared/siteRoutes";

const BASE_URL = "https://roanr.be";

function absoluteUrl(route: string) {
  return new URL(route, BASE_URL).toString();
}

export async function generateSeoAssets() {
  const publicDir = path.resolve("client", "public");
  await mkdir(publicDir, { recursive: true });

  const today = new Date().toISOString().split("T")[0];
  const uniquePaths = Array.from(new Set(seoSitemapPaths));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniquePaths
  .map(
    (route) => `  <url>
    <loc>${absoluteUrl(route)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.7"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  const robots = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${BASE_URL}/sitemap.xml
`;

  await writeFile(path.join(publicDir, "sitemap.xml"), sitemap, "utf8");
  await writeFile(path.join(publicDir, "robots.txt"), robots, "utf8");
}
