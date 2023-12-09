import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Competitive Programmer",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "MasterCard",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Feb 2022 - Oct 2023",
      points: [
        "Used Spring Core annotations for Spring Dependency Injection, Spring MVC for Rest API and Spring Boot for Microservices.",
        "Integrated with Spring Cloud projects to provide distributed tracing and other features.",
        "Developed Microservices with Spring and tested the application using Spring Boot.",
        "Extensively used core java concepts like Multithreading, Collections Framework, File I/O and concurrency. ",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Tifin Fintech",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Aug 2020 - Dec 2022",
      points: [
        "Built rich prototypes and applications using HTML5, CSS3, JavaScript, and jQuery, Ajax, JSON, Angular.js and Bootstrap.",
        "Development of Micro Services for all the models using combination of Spring Boot and Spring Security.",
        "Used Cloud Watch for monitoring AWS cloud resources and the applications that deployed on AWS by creating new alarm, enable notification service.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "APSDMA",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Assisted in the development of web applications using HTML, CSS, JavaScript, and frameworks like React and Angular.",
        "Assisted in the implementation of RESTful APIs and backend services using Node.js and Express.",
        "Worked with databases, including MySQL and MongoDB, to store and retrieve data.",
        "Assisted in the integration of third-party APIs and services to enhance application functionality.",
      ],
    },
    {
      title: "Full stack Developer Intern",
      company_name: "Exposys Data Labs",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Live Weather Application",
      description:
        "Utilize a weather data provider i.e, OpenWeatherMap to fetch real-time weather data and retrieves weather data (temperature, humidity, wind speed, etc.) based on user queries.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/vamsi2303/weather",
    },
    {
      name: "Brain Tumor Detection",
      description:
        "A brain tumor detection and classification typically involves the development of an RESNET 50 algorithm to accurately identify the presence of brain tumors in medical images, such as MRI scans.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/vamsi2303/Brain_tumor_detection",
    },
    {
      name: "Online Electronic-Store",
      description:
        "Welcome to our online electronic paradise!Our store is a haven for tech enthusiasts, offering an extensive array of the latest gadgets, gizmos, and electronics that redefine convenience, entertainment, and connectivity.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node",
          color: "pink-text-gradient",
        },
        {
          name: "Mongo DB",
          color: "green-text-gradient",
        },
        
      ],
      image: tripguide,
      source_code_link: "https://github.com/vamsi2303/e-store",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };