export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    linkedin: string;
  };
  contacts: {
    email: string;
    phone: string;
  };
  location: string;
  education: {
    degree: string;
    institution: string;
    year: string;
  };
  skills: string[];
  experience: {
    title: string;
    company: string;
    period: string;
    achievements: string[];
  }[];
};

export const siteConfig: SiteConfig = {
  name: "Dhairya Aggarwal",
  title: "Full Stack Software Engineer | AI Enthusiast",
  description:
    "Computer Science graduate with expertise in Generative AI and RAG-based products. Experienced in solving challenging technical problems and full-stack development.",
  url: "https://dhairya-aggarwal.com",
  ogImage: "/dhairya-profile.jpg",
  links: {
    github: "https://github.com/dhairya163",
    linkedin: "https://www.linkedin.com/in/dhairya-aggarwal",
  },
  contacts: {
    email: "dhairya.aggarwal@gmail.com",
    phone: "XXXXXXXXXX",
  },
  location: "Chandigarh, India",
  education: {
    degree: "B.E. Computer Science Engineering",
    institution: "Thapar Institute of Engineering and Technology (TIET), Patiala",
    year: "2019 - 2023",
  },
  skills: [
    "Python", "Redis", "React.js", "MongoDB", "HTML/CSS", "JavaScript",
    "Next.js", "AWS", "Java", "Spring Boot", "Agile Methodology",
    "RESTful APIs", "Data Structures", "Algorithms", "Machine Learning"
  ],
  experience: [
    {
      title: "Software Engineer",
      company: "Writesonic",
      period: "07/2023 - Present",
      achievements: [
        "Handling frontend and backend development for core products",
        "Working with LLMs and integrating them into products",
        "Built Botsonic using RAG pipeline",
        "Created microservices for vector database operations",
        "Reduced operations cost by over $10K through serverless deployment optimizations",
        "Improved main services' speed with caching techniques"
      ]
    },
    {
      title: "Intern - Engineering",
      company: "BYJU'S",
      period: "01/2023 - 06/2023",
      achievements: [
        "Worked as a Full Stack Developer in the Assessment Org under Content Engineering team",
        "Contributed to building Assessment as an independent SaaS offering",
        "Handled 5 million monthly assessment conducts across 6 different clients",
        "Reduced Student Report API response time from 2 seconds to 200 milliseconds using caching techniques"
      ]
    }
  ]
};
