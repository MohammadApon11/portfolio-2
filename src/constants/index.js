import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  next,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  bootstrap,
  sqlite,
  work1,
  work2,
  work3,
  work4,
  work5,
  work6,
  firebase,
  solutya,
  hero,
  teligati,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "NextJs",
    icon: next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "sQlite",
    icon: sqlite,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Solutya Pvt. Ltd. (Intern)",
    icon: solutya,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Complete Web Development",
    company_name: "Programming Hero (Online Course)",
    icon: hero,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - July 2023",
    points: [
      "Foundations: HTML, CSS, JavaScript intermediate.",
      "Front-End Mastery: React, Next, Redux, UI frameworks.",
      "Back-End Proficiency: Node.js, Express, Firebase, RESTful APIs.",
      "Database & Deployment: MongoDB, sQlite, Deployment strategies, Testing basics.",
      "Others: Git, Figma, Vs code",
    ],
  },
  {
    title: "Computer Training Course",
    company_name: "Teligati Institution of Technology",
    icon: teligati,
    iconBg: "#383E56",
    date: "Apr 2017 - July 2017",
    points: [
      "Hardware Essentials: Understanding components.",
      "Operating Systems: Proficiency in OS navigation.",
      "Internet Literacy: Browsing, online safety.",
      "Troubleshooting Skills: Basic issue identification & resolution.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Learning Platform",
    description:
      "Online-base Learning platform Like 10 Minutes School, E mpowering learners and educators with secure access,(Students, Admin, Instructors) Dashboard, Authentication and Authorization, Payment Integration, Course Management, Enrollment and Progress Tracking, Feedback and Reviews, Content Management, Search and Filtering Functionality, Security Management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "text-green-400",
      },
      {
        name: "node",
        color: "text-green-700",
      },
      {
        name: "firebase",
        color: "text-yellow-500",
      },
      {
        name:"html/jsx",
        color:"text-orange-600"
      },
      {
        name: "css",
        color: "text-blue-600",
      },
      {
        name: "tailwind",
        color: "text-sky-500",
      },
    ],
    image: work1,
    source_code_link: "https://github.com/",
  },
  {
    name: "Restaurant",
    description:
      "A Bangladeshi startup akin to Foodpanda, offers an online food ordering system. Our platform promises convenience, ensuring an enjoyable food experience. We prioritize simplicity in ordering. With authentication, payments, course management, progress tracking, feedback, search, and security features, we facilitate seamless food exploration and safety.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "text-green-400",
      },
      {
        name: "node",
        color: "text-green-700",
      },
      {
        name: "firebase",
        color: "text-yellow-500",
      },
      {
        name:"html/jsx",
        color:"text-orange-600"
      },
      {
        name: "css",
        color: "text-blue-600",
      },
      {
        name: "tailwind",
        color: "text-sky-500",
      },
    ],
    image: work2,
    source_code_link: "https://github.com/",
  },
  {
    name: "NFt Marketplace",
    description:
      "NFT marketplaces utilize blockchain for creators to tokenize digital assets such as art, music, and collectibles. Users securely exhibit, exchange, and trade these unique items, fostering an ecosystem where digital assets gain value through cryptocurrency or traditional currency transactions. It has added smooth animations which can easily atract visitors. 100% Responsive & Mobile-friendly.",
    tags: [
      {
        name: "html",
        color: "text-orange-600",
      },
      {
        name: "css",
        color: "text-blue-600",
      },
      {
        name: "javaScript",
        color: "text-yellow-500",
      },
      {
        name: "jQuery",
        color: "text-blue-500",
      },
    ],
    image: work3,
    source_code_link: "https://github.com/",
  },
  {
    name: "Template",
    description:
      "A responsive HTML/CSS sidebar adapts layout based on screen size. It features navigation or content alongside media queries, ensuring optimal display across devices for seamless user experience.",
    tags: [
      {
        name:"html",
        color:"text-orange-600"
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: work4,
    source_code_link: "https://github.com/",
  },
  {
    name: "Chef management",
    description:
      "A chef management website organizes chefs, skills, bookings for culinary events Authentication and Authorization, Content Management, Security Management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "text-green-700",
      },
      {
        name: "firebase",
        color: "text-yellow-500",
      },
      {
        name:"html/jsx",
        color:"text-orange-600"
      },
      {
        name: "css",
        color: "text-blue-600",
      },
      {
        name: "tailwind",
        color: "text-sky-500",
      },
    ],
    image: work5,
    source_code_link: "https://github.com/",
  },
  {
    name: "Toy Marketplace",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "text-green-700",
      },
      {
        name: "firebase",
        color: "text-yellow-500",
      },
      {
        name:"html/jsx",
        color:"text-orange-600"
      },
      {
        name: "css",
        color: "text-blue-600",
      },
      {
        name: "tailwind",
        color: "text-sky-500",
      },
    ],
    image: work6,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
