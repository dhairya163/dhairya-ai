import { useState, useEffect } from "react";
import { getWork } from "@/sanity/lib/sanity";
import HeroSection from "@/components/hero-section";
import ResumeSection from "./resume-section";
import TechStackSection from "./tech-stack-section";

// Define an interface for your work data
interface WorkData {
  mainTitle: string;
  mainDescription: string;
  resume: any; // Replace 'any' with a more specific type if possible
  techStack: any; // Replace 'any' with a more specific type if possible
}

export function WorkContent() {
  const [data, setData] = useState<WorkData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const workData = await getWork();
      setData(workData);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-transparent">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-400 dark:border-gray-600"></div>
        <p className="ml-4 text-lg font-medium text-gray-600 dark:text-gray-400">Loading...</p>
      </div>
    );
  }

  if (!data) {
    return <h2>No work data available.</h2>;
  }

  return (
    <div className="w-full">
      <HeroSection
        name="Hey, I'm Dhairya 👋"
        title={data.mainTitle}
        description={data.mainDescription}
      />
      <ResumeSection resumeData={data.resume} />
      <TechStackSection techStackData={data.techStack} />
    </div>
  );
}
