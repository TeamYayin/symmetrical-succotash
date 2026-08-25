import { getProjectBySlug, getProjectSlugs } from "@/lib/mdx";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  try {
    const project = getProjectBySlug(resolvedParams.slug);
    return {
      title: `${project.title} | Yayin AI Lab`,
      description: project.description,
    };
  } catch (e) {
    return {
      title: "Project Not Found",
    };
  }
}

// Custom components to map MDX HTML elements to our Tailwind design system
const components = {
  h1: (props: any) => <h1 className="font-heading text-4xl font-semibold mt-12 mb-6" {...props} />,
  h2: (props: any) => <h2 className="font-heading text-2xl font-semibold mt-10 mb-4 border-b border-text-secondary/30 pb-2" {...props} />,
  h3: (props: any) => <h3 className="font-heading text-xl font-semibold mt-8 mb-4" {...props} />,
  p: (props: any) => <p className="text-text-secondary leading-relaxed mb-6" {...props} />,
  a: (props: any) => <a className="text-accent hover:underline underline-offset-4" target="_blank" rel="noopener noreferrer" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside text-text-secondary mb-6 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside text-text-secondary mb-6 space-y-2" {...props} />,
  li: (props: any) => <li className="" {...props} />,
  strong: (props: any) => <strong className="font-semibold text-text-primary" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-2 border-accent pl-4 italic text-text-secondary mb-6 bg-bg-secondary p-4" {...props} />
  ),
  img: (props: any) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="max-w-full border border-text-secondary my-8 bg-bg-secondary" alt={props.alt || "Project image"} {...props} />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto mb-8 border border-text-secondary">
      <table className="w-full text-left text-sm" {...props} />
    </div>
  ),
  th: (props: any) => <th className="bg-bg-secondary p-3 font-semibold border-b border-text-secondary font-mono uppercase tracking-wider text-xs" {...props} />,
  td: (props: any) => <td className="p-3 border-b border-text-secondary/30 text-text-secondary" {...props} />,
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  let project;
  try {
    project = getProjectBySlug(resolvedParams.slug);
  } catch (e) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary">
      <Navbar />
      
      <main className="flex-grow">
        {/* Project Header */}
        <section className="pt-24 pb-12 border-b border-text-secondary bg-bg-secondary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/portfolio" className="inline-flex items-center text-sm font-mono uppercase tracking-wider text-text-secondary hover:text-accent transition-colors mb-8">
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
              Back to Portfolio
            </Link>
            
            <h1 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-text-primary mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" className="py-2 px-4 text-sm">
                    Visit Website
                  </Button>
                </a>
              )}
              {project.repository && (
                <a href={`https://github.com/${project.repository}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-mono text-text-secondary hover:text-text-primary transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  View Source
                </a>
              )}
            </div>
          </div>
        </section>

        {/* MDX Content */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-invert max-w-none">
              <MDXRemote 
                source={project.content} 
                components={components}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                  }
                }}
              />
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
