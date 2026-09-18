import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content/projects");

export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  date?: string;
  url?: string;
  repository?: string;
  published: boolean;
  archived?: boolean;
  featured?: boolean;
  featuredOrder?: number;
  content: string;
  thumbnail?: string | null;
}

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) return [];
  return fs.readdirSync(contentDirectory).filter((file) => file.endsWith(".mdx"));
}

export function getProjectBySlug(slug: string): ProjectData {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Extract first image from markdown content as thumbnail (e.g. ![alt](/img/path.png))
  const imageMatch = content.match(/!\[.*?\]\((.*?)\)/);
  const thumbnail = imageMatch ? imageMatch[1] : null;

  return {
    slug: realSlug,
    title: data.title || "",
    description: data.description || "",
    date: data.date,
    url: data.url,
    repository: data.repository,
    published: data.published === true || data.published === "true",
    archived: data.archived === true || data.archived === "true",
    featured: data.featured === true || data.featured === "true",
    featuredOrder: typeof data.featuredOrder === "number" ? data.featuredOrder : undefined,
    content,
    thumbnail,
  };
}

export function getAllProjects(): ProjectData[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project) => project.published)
    .sort((a, b) => {
      // Sort by date descending
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });
  
  return projects;
}

export function getFeaturedProjects(): ProjectData[] {
  const allProjects = getAllProjects();
  
  // Only get explicitly featured projects
  let featuredProjects = allProjects.filter(p => p.featured);
  
  // Sort featured projects by featuredOrder if available, then by date
  featuredProjects.sort((a, b) => {
    if (a.featuredOrder !== undefined && b.featuredOrder !== undefined) {
      return a.featuredOrder - b.featuredOrder;
    }
    if (a.featuredOrder !== undefined) return -1;
    if (b.featuredOrder !== undefined) return 1;
    // Fallback to date
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return 0;
  });

  return featuredProjects;
}
