"use client";
import { PostList } from "./_components/post-list";
import { getPosts } from "@/sanity/lib/sanity";
import HeroSection from "@/components/hero-section";

export default async function BlogPage() {
  const allPosts = await getPosts();

  return (
    <main className="min-h-screen antialiased">
      <HeroSection
        name="Dhairya Aggarwal"
        title="Read My Blog"
        description="Enhance your development skills through insightful articles."
      />
      <PostList allPosts={allPosts} />
    </main>
  );
}
