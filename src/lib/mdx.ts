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
  content: string;
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

  return {
    slug: realSlug,
    title: data.title || "",
    description: data.description || "",
    date: data.date,
    url: data.url,
    repository: data.repository,
    published: data.published === true || data.published === "true",
    content,
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
