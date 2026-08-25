/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Yayin AI Lab",
};

// Reused typography components
const components = {
  h1: (props: any) => <h1 className="font-heading text-4xl font-semibold mt-12 mb-6 text-text-primary" {...props} />,
  h2: (props: any) => <h2 className="font-heading text-2xl font-semibold mt-10 mb-4 border-b border-text-secondary/30 pb-2 text-text-primary" {...props} />,
  h3: (props: any) => <h3 className="font-heading text-xl font-semibold mt-8 mb-4 text-text-primary" {...props} />,
  p: (props: any) => <p className="text-text-secondary leading-relaxed mb-6" {...props} />,
  a: (props: any) => <a className="text-accent hover:underline underline-offset-4" target="_blank" rel="noopener noreferrer" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside text-text-secondary mb-6 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside text-text-secondary mb-6 space-y-2" {...props} />,
  li: (props: any) => <li className="" {...props} />,
  strong: (props: any) => <strong className="font-semibold text-text-primary" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-2 border-accent pl-4 italic text-text-secondary mb-6 bg-bg-secondary p-4" {...props} />
  )
};

export default function TermsPage() {
  const filePath = path.join(process.cwd(), "src/content/pages/terms-and-conditions.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContents);

  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary">
      <Navbar />
      
      <main className="flex-grow py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="block font-mono text-secondary text-sm mb-4 uppercase tracking-wider">
            {/* LEGAL */}
          </span>
          <article className="prose prose-invert max-w-none">
            <MDXRemote 
              source={content} 
              components={components}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
