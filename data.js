const profileData = {
    personalInfo: {
        name: "Shoeb Alam",
        headline: "Backend Developer | Building Scalable, Secure & Efficient Server-Side Systems",
        subHeadline: "Skilled in Spring Boot, MySQL & REST APIs",
        location: "Nagpur, Maharashtra, India",
        about: "I’m a backend developer who loves building structured, efficient, and scalable systems that make applications work smoothly behind the scenes. I specialize in Spring Boot, MySQL, and deploying projects using Render. I enjoy solving real-world problems through clean backend logic, database design, and well-tested APIs. I’m continuously learning how to make backend systems more optimized and reliable — from managing data flow to integrating services seamlessly. I also use GitHub for version control and collaboration, ensuring every project is organized and production-ready.",
        linkedin: "https://www.linkedin.com/in/shoeb4lam",
        email: "shoebalam440@gmail.com",
        github: "https://github.com/shoebalam440",
        avatar: "image.png"
    },
    experience: [
        {
            company: "ProfoundEdutech",
            role: "Full Stack Java Developer",
            date: "May 2025 - Jul 2025",
            location: "Nagpur, Maharashtra, India",
            description: "Completed comprehensive training at Profound Edutech, where I learned to develop dynamic and scalable web applications using Java Full Stack technologies. Gained hands-on experience with: Frontend: HTML, CSS, JavaScript, React; Backend: Core Java, Advanced Java, Spring Boot; Database: MySQL; Tools & Concepts: REST APIs, Git, and Project Deployment."
        },
        {
            company: "Certway Institute",
            role: "C Developer",
            date: "Jan 2024 - Apr 2024",
            location: "Nagpur, Maharashtra, India",
            description: "Completed internship training in C programming language, focusing on problem-solving and algorithmic thinking."
        }
    ],
    education: [
        {
            school: "Anjuman College Of Engineering & Technology",
            degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
            date: "Oct 2022 - Oct 2026",
            details: "CGPA: 7.3/10"
        }
    ],
    skills: {
        "Languages": [
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", desc: "Core language for robust backend systems." },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", desc: "Versatile language for AI/ML and scripting." },
            { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", desc: "Foundation for system-level programming." },
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", desc: "Structure of the web." },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", desc: "Styling and layout for modern UI." }
        ],
        "Backend & Frameworks": [
            { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", desc: "Rapid application development framework." },
            { name: "Spring MVC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", desc: "Model-View-Controller architecture." },
            { name: "Spring Security", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", desc: "Authentication and access control." },
            { name: "Spring Data JPA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", desc: "Simplified database interaction." },
            { name: "Hibernate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg", desc: "ORM for mapping Java objects to DB." },
            { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg", desc: "Designing scalable web services." },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", desc: "Relational database management." }
        ],
        "Tools & DevOps": [
            { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", desc: "Version control and collaboration." },
            { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", desc: "API testing and documentation." },
            { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg", desc: "Dependency management and build tool." },
            { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", desc: "Code editor of choice." },
            { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg", desc: "Powerful Java IDE." }
        ],
        "AI/ML & Data Science": [
            { name: "YOLOv8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", desc: "Real-time object detection." },
            { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", desc: "Computer vision library." },
            { name: "Arduino IDE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", desc: "IoT and hardware programming." }
        ]
    },
    projects: [
        {
            title: "Crypto Tracker – Real-Time Price Monitoring",
            date: "Dec 2025",
            description: "Built a real-time cryptocurrency tracker where users can enter any coin name and fetch live prices using an external API. Developed REST endpoints and integrated API responses into a dynamic UI using Spring Boot + Thymeleaf. Implemented service-layer logic for API consumption and JSON parsing.",
            tags: ["Spring Boot", "Thymeleaf", "REST API", "Java", "Railway"],
            image: "crypto_tracker.png",
            link: "https://crypto-tracker-app-4.onrender.com/"
        },
        {
            title: "Student Management System",
            date: "Nov 2025",
            description: "Developed a web-based system to add, view, update, and manage student records. Built backend APIs using Spring Boot (CRUD operations). Integrated APIs with a simple frontend UI to display real-time student data. Implemented form handling and validation.",
            tags: ["Spring Boot", "CRUD", "REST API", "MySQL", "Render"],
            image: "student_management.png",
            link: "https://student-management-app-7uwo.onrender.com/"
        },
        {
            title: "Smart Traffic Management System",
            date: "Jan 2025 - May 2025",
            description: "An AI-powered traffic control system that adjusts signals based on real-time vehicle detection. Highlights: -YOLOv8 + OpenCV for detection & counting -Arduino Nano-controlled LED signals -Physical prototype simulating real-life traffic.",
            tags: ["YOLOv8", "OpenCV", "Arduino", "Python"],
            image: "stms.jpg"
        },
        {
            title: "Social Forensic AI Tool",
            date: "Nov 2024 - Jan 2025",
            description: "An AI tool for detecting offensive/hate content from social media datasets. Highlights: -Data collection & preprocessing for NLP model training -Content classification & filtering -Python-based implementation with open-source datasets.",
            tags: ["NLP", "Python", "AI/ML"],
            image: "social.png"
        },
        {
            title: "Patent Gem",
            date: "Feb 2025",
            description: "We received the prize and recognized it as a patent gem in Advantage Vidarbha 2K25 for our team project Social Forensic.",
            tags: ["Award", "Innovation"],
            image: "gem.png"
        },
        {
            title: "Landslide Prediction System",
            date: "Jul 2025 - Nov 2025",
            description: "A real-time landslide monitoring system that uses sensors and AI to detect risk and give early alerts for safer disaster response.",
            tags: ["AI/ML", "Python", "Arduino", "Streamlit"],
            image: "landslide.png"
        }
    ],
    certifications: [
        {
            title: "Java Backend Developer",
            issuer: "GeekforGeeks",
            date: "Nov 2025",
            credentialId: "f179ba7f01f01ab279e0f61ac29aa4c5"
        },
        {
            title: "Java Full Stack Developer",
            issuer: "ProfoundEdutech",
            date: "Oct 2025",
            credentialId: ""
        },

        {
            title: "The Complete Python Developer Certification Course",
            issuer: "Udemy",
            date: "Sep 2025",
            credentialId: "UC-740916f5-1aa0-4291-b9e7-cc223a61a3ea"
        },
        {
            title: "Data Analytics with Python",
            issuer: "NPTEL",
            date: "Apr 2025",
            credentialId: "NPTEL25CS17S1152800393"
        },
        {
            title: "National Intellectual Property Awareness Mission (NIPAM)",
            issuer: "Intellectual Property Office India",
            date: "Apr 2025",
            credentialId: ""
        },
        {
            title: "Smart Traffic Management System",
            issuer: "IJSREM",
            date: "Apr 2025",
            credentialId: "2582-3930"
        },
        {
            title: "Certificate of Recognition",
            issuer: "Advantage Vidarbha",
            date: "Feb 2025",
            credentialId: ""
        },
        {
            title: "C language program",
            issuer: "Certway Institute",
            date: "Apr 2024",
            credentialId: ""
        },
        {
            title: "Introduction to java",
            issuer: "Simplilearn",
            date: "Oct 2023",
            credentialId: "4609561"
        }
    ]
};
// Forced update trigger
