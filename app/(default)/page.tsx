"use client";
// import { siteConfig } from "@/config/site";
import { WorkContent } from "./work/_components/work-content";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
        <WorkContent />
    </div>
  );
}
