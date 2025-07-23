export interface TechnologyContent {
  title: string;
  heroDescription: string;
  services: { title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  logo: string;
}

export const technologyData: Record<string, TechnologyContent> = {
  react: {
    title: "React Development",
    heroDescription:
      "React is a widely-used JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the user interface as the underlying data changes. With its declarative syntax and virtual DOM, React simplifies the process of building interactive and responsive web applications.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    services: [
      { title: "React.js development from scratch", desc: "We build tailor-made React applications from scratch, aligning them with your specific business requirements and objectives." },
      { title: "Custom React.js development", desc: "Our team creates reusable and efficient React components that can be seamlessly integrated into your existing applications." },
      { title: "User Friendly Interface", desc: "We design visually appealing and user-friendly interfaces using React, focusing on delivering a compelling user experience." },
      { title: "High quality website", desc: "We optimize React applications for performance, scalability, and SEO, ensuring they deliver fast and engaging experiences to your users." },
    ],
    benefits: [
      { title: "Reusable components", desc: "React follows a component-based approach, allowing developers to break down the UI into modular and reusable components, which leads to code reusability and easier maintenance." },
      { title: "Enhanced performance", desc: "React utilizes a virtual DOM, which updates only the necessary parts of the user interface, resulting in improved performance and a smoother user experience." },
      { title: "Unidirectional data flow", desc: "React enforces a one-way data flow, making it easier to track and manage data changes, reducing bugs and enhancing code stability." },
      { title: "Flexibility", desc: "React has a vast ecosystem of libraries, tools, and resources, as well as a vibrant community that actively contributes to its development and provides support." },
    ],
  },
  nodejs: {
    title: "Node.js Development",
    heroDescription:
      "Node.js is a powerful JavaScript runtime built on Chrome's V8 engine. It enables developers to build scalable and high-performance server-side applications. With its event-driven, non-blocking I/O model, Node.js is ideal for real-time apps and APIs.",
    logo: "https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png",
    services: [
      { title: "Custom Backend Development", desc: "We develop custom backend applications and APIs using Node.js, tailored to your specific business requirements and scalability needs." },
      { title: "RESTful API Development", desc: "We build robust and scalable RESTful APIs using Node.js and popular frameworks like Express.js, allowing seamless integration with frontend applications and third-party services." },
      { title: "Real-time Application Development", desc: "We leverage the event-driven nature of Node.js to build real-time applications such as chat applications, collaborative tools, and streaming platforms." },
      { title: "Microservices Architecture", desc: "We design and develop backend systems using Node.js with a microservices architecture, allowing for modular and scalable application development." },
    ],
    benefits: [
      { title: "Scalability and Performance", desc: "Node.js is known for its ability to handle a large number of concurrent connections with high efficiency, making it suitable for building scalable and high-performance backend systems." },
      { title: "JavaScript Everywhere", desc: "With Node.js, developers can use the same programming language (JavaScript) on both the frontend and backend, allowing for easier code sharing, faster development, and better collaboration between frontend and backend teams." },
      { title: "Non-Blocking I/O", desc: "Node.js uses an asynchronous, non-blocking I/O model, allowing it to handle multiple requests concurrently without getting blocked, resulting in faster response times and improved application performance." },
      { title: "Vast Ecosystem", desc: "Node.js has a rich ecosystem of modules and libraries available through npm, enabling developers to leverage pre-built components, frameworks, and tools to accelerate development and enhance functionality." },
    ],
  },
  python: {
    title: "Python Development",
    heroDescription:
      "Python is a versatile, high-level programming language known for its simplicity and readability. It's widely used for web development, data science, AI, and automation — enabling rapid development of robust applications.",
    logo: "https://www.python.org/static/community_logos/python-logo-generic.svg",
    services: [
      { title: "Custom Backend Development", desc: "We develop custom backend systems and web applications using Python, tailored to your specific business requirements and objectives." },
      { title: "API Development", desc: "We build robust and secure APIs using Python frameworks like Django and Flask, allowing seamless communication between different systems and enabling integration with external services." },
      { title: "Web Scraping and Data Processing", desc: "We leverage Python's libraries and tools to extract, process, and analyze data from various sources, enabling you to derive valuable insights and automate data-driven tasks." },
      { title: "Serverless Functions", desc: "We develop serverless functions using Python and platforms like AWS Lambda, allowing you to run code without worrying about server management and scaling." },
    ],
    benefits: [
      { title: "Readability and Maintainability", desc: "Python is clean and readable syntax allows developers to write code that is easy to understand and maintain, resulting in efficient collaboration and long-term code sustainability." },
      { title: "Large Ecosystem of Libraries and Frameworks", desc: "Python has a vast collection of libraries and frameworks, such as Django and Flask, which provide pre-built components and functionalities for rapid development and streamlined backend processes." },
      { title: "Scalability and Performance", desc: "Python's scalability is supported by frameworks like Django and Flask, which offer features like caching, load balancing, and asynchronous task management, enabling efficient handling of high traffic and large-scale applications." },
      { title: "Integration and Versatility", desc: "Python seamlessly integrates with various technologies and databases, making it suitable for building backend systems that interact with different platforms and services." },
    ],
  },
  nextjs: {
    title: "Next.js Development",
    heroDescription:
      "Build fast, scalable, and SEO-friendly web applications using Next.js – the leading React framework for production-grade solutions.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    services: [
      { title: "Custom Next.js Development", desc: "We leverage the power of Next.js to build scalable and high-performance web applications tailored to your specific business needs." },
      { title: "Server-Side Rendering (SSR)", desc: "Our team utilizes Next.js to implement server-side rendering, ensuring faster page loads and improved search engine visibility." },
      { title: "Static Site Generation (SSG)", desc: "We use Next.js to generate static websites that offer fast loading times, enhanced security, and cost-effective hosting options." },
      { title: "Next.js Migration", desc: "If you have an existing React application, we can help you migrate it to Next.js, leveraging its benefits and optimizing your application's performance." },
    ],
    benefits: [
      { title: "Server-Side Rendering", desc: "Next.js enables server-side rendering, which improves initial page load times, enhances SEO, and provides a better user experience." },
      { title: "Automatic Code Splitting", desc: "Next.js automatically splits the JavaScript code into smaller chunks, loading only what is necessary for each page, resulting in faster page loads." },
      { title: "Fast Refresh", desc: "Next.js offers a Fast Refresh feature that enables instant live updates to the application without losing the current state, providing a smooth development experience." },
      { title: "API Routes", desc: "Next.js simplifies the creation of API endpoints, allowing seamless integration of serverless functions for backend functionalities." },
    ],
  },
  angular: {
    title: "Angular Development",
    heroDescription:
      "Build robust, scalable web applications with Angular – the platform for building mobile and desktop web applications using TypeScript.",
    logo: "https://angular.io/assets/images/logos/angular/angular.svg",
    services: [
      { title: "Custom Angular Development", desc: "We develop customized Angular applications tailored to your specific business requirements, delivering robust and scalable solutions." },
      { title: "Angular Component Development", desc: "Our team creates reusable and modular Angular components that can be seamlessly integrated into your applications, promoting code reusability and efficiency." },
      { title: "Angular UI/UX Design", desc: "We design visually appealing and user-friendly interfaces using Angular, focusing on delivering an exceptional user experience." },
      { title: "Angular Migration", desc: "If you have an existing application and want to migrate it to Angular, we can assist you in the migration process, ensuring a smooth transition and leveraging the benefits of Angular's features and performance optimizations." },
    ],
    benefits: [
      { title: "Powerful Data Binding", desc: "Angular's two-way data binding simplifies the synchronization between the UI and data model, reducing the need for manual updates and improving developer productivity." },
      { title: "Modular and Reusable Components", desc: "Angular encourages the use of reusable components, which promotes code reusability, maintainability, and efficient development." },
      { title: "Dependency Injection", desc: "Angular's built-in dependency injection system simplifies component management and facilitates the development of loosely coupled and testable code." },
      { title: "Enhanced Performance", desc: "Angular optimizes application performance through features like ahead-of-time (AOT) compilation, lazy loading, and code splitting, resulting in faster load times and improved user experience." },
    ],
  },
  figma: {
    title: "Figma Design",
    heroDescription:
      "Create beautiful, collaborative designs with Figma – the modern interface design tool that brings teams together.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    services: [
      { title: "User Research and UX Strategy", desc: "We conduct user research to understand your target audience and their needs. Based on the findings, we create UX strategies that align with your business goals and provide optimal user experiences." },
      { title: "Wire-framing and Prototyping", desc: "We use Figma to create wire-frames and interactive prototypes that illustrate the layout, navigation, and functionality of your digital product. This allows you to visualize the user flow and make informed design decisions." },
      { title: "Visual Design and Branding", desc: "Our talented designers utilize Figma powerful design tools to create visually stunning and brand-aligned user interfaces. We focus on creating intuitive and engaging designs that resonate with your target audience." },
      { title: "Design Collaboration and Handoff", desc: "With Figma collaboration features, we ensure smooth communication and collaboration throughout the design process. We provide design handoff deliverables that facilitate seamless integration with the development team." },
    ],
    benefits: [
      { title: "Collaborative Design", desc: "Figma is designed with collaboration in mind. Multiple designers can work simultaneously on the same project, making it easy to share ideas, gather feedback, and maintain a unified design vision. Real-time collaboration fosters efficient teamwork and reduces version control issues." },
      { title: "Cloud-Based and Cross-Platform", desc: "Figma is a cloud-based tool, which means that designs are saved and accessible online. It allows designers to work from anywhere, on any operating system, without the need for local installations or file syncing. This flexibility enhances productivity and enables seamless collaboration across teams and locations." },
      { title: "Interactive Prototyping", desc: "Figma offers powerful prototyping capabilities, allowing designers to create interactive prototypes with transitions and animations. This enables stakeholders to experience the user journey and provides a realistic representation of the final product, facilitating better decision-making and user testing." },
      { title: "Design System and Component Libraries", desc: "Figma supports the creation and management of design systems and component libraries. This allows designers to establish consistent design patterns, reuse design elements, and maintain design integrity throughout the project. It promotes design scalability and efficiency." },
    ],
  },
  android: {
    title: "Android Development",
    heroDescription:
      "Build powerful, native Android applications that deliver exceptional user experiences across millions of devices.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg",
    services: [
      { title: "Custom Android App Development", desc: "We develop tailor-made Android applications that align with your business requirements, ensuring a visually appealing design, smooth functionality, and optimal performance." },
      { title: "UI/UX Design", desc: "Our skilled designers create intuitive and visually engaging user interfaces, focusing on user-centric design principles to deliver a seamless and delightful user experience for your Android app." },
      { title: "App Testing and Quality Assurance", desc: "We conduct thorough testing to ensure your Android app is free from bugs, performs seamlessly across different Android devices, and delivers a consistent experience." },
      { title: "Play Store Submission and Support", desc: "We assist you in the process of submitting your app to the Google Play Store, ensuring it meets the necessary requirements. We also provide ongoing support and maintenance for your Android app to ensure its continued success." },
    ],
    benefits: [
      { title: "Large User Base", desc: "Android has the largest market share globally, providing a vast potential user base for your app. Developing an Android app allows you to reach a wide audience and expand your business reach." },
      { title: "Open Platform", desc: "Android offers an open platform that allows for greater customization and flexibility in app development. It provides developers with the freedom to innovate and create unique experiences for users." },
      { title: "Device Compatibility", desc: "Android supports a wide range of devices with varying screen sizes, resolutions, and hardware capabilities. By developing an Android app, you can ensure compatibility across a diverse range of smartphones and tablets." },
      { title: "Integration with Google Services", desc: "Android seamlessly integrates with various Google services such as Google Maps, Google Analytics, Google Drive, and Google Play Services, providing opportunities for enhanced functionality and integration with popular Google services." },
    ],
  },
  flutter: {
    title: "Flutter Development",
    heroDescription:
      "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase with Flutter.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
    services: [
      { title: "Cross-Platform App Development", desc: "We utilize Flutter to build robust and scalable mobile applications that work seamlessly on iOS, Android, and the web. This ensures maximum reach and compatibility across different devices." },
      { title: "Custom UI/UX Design", desc: "Our talented designers create visually appealing and user-friendly interfaces, leveraging Flutter's rich widget library to design intuitive and engaging user experiences." },
      { title: "App Testing and Quality Assurance", desc: "We conduct thorough testing to ensure your Flutter app is stable, bug-free, and performs optimally on various platforms and devices." },
      { title: "App Store Deployment and Support", desc: "We assist you in the process of submitting your Flutter app to the respective app stores, providing guidance and support to ensure a successful launch. We also offer ongoing maintenance and support services to address any issues and keep your app up to date." },
    ],
    benefits: [
      { title: "Single Codebase", desc: "Flutter allows you to write a single codebase that runs on multiple platforms, reducing development time and effort. This means you can reach a wider audience with consistent user experiences across different devices." },
      { title: "Fast Performance", desc: "Flutter apps are compiled to native machine code, providing near-native performance and smooth animations. The framework also optimizes rendering and ensures a responsive user interface, resulting in a delightful user experience." },
      { title: "Rich UI and Customization", desc: "Flutter provides a wide range of customizable widgets and rich UI components, enabling developers to create visually appealing and unique app designs. The flexible widget system allows for seamless customization to match your brand identity and user interface requirements." },
      { title: "Rapid Development", desc: "Flutter's hot-reload feature allows developers to instantly see the effects of code changes, making the development process highly iterative and efficient. This helps in faster debugging, UI tweaking, and overall faster app development cycles." },
    ],
  },
  "react-native": {
    title: "React Native Development",
    heroDescription:
      "Build native mobile applications using React and JavaScript, delivering high-performance apps for iOS and Android.",
    logo: "https://reactnative.dev/img/header_logo.svg",
    services: [
      { title: "Cross-Platform App Development", desc: "We leverage React Native to build robust and feature-rich mobile applications that run smoothly on both iOS and Android platforms, ensuring a consistent user experience across devices." },
      { title: "UI/UX Design", desc: "Our talented designers create visually appealing and user-friendly interfaces, following best design practices to deliver an intuitive and engaging user experience for your React Native app." },
      { title: "App Testing and Quality Assurance", desc: "We conduct thorough testing to ensure your React Native app is stable, bug-free, and performs optimally on different devices and operating systems." },
      { title: "App Store Deployment and Support", desc: "We assist you in the process of submitting your app to the respective app stores, providing guidance and support to ensure a successful launch. We also offer ongoing maintenance and support services to address any issues and keep your app up to date." },
    ],
    benefits: [
      { title: "Cross-Platform Compatibility", desc: "With React Native, you can develop mobile applications that run seamlessly on both iOS and Android platforms, eliminating the need for separate codebase and reducing development and maintenance costs." },
      { title: "Reusable Codebase", desc: "React Native allows for code reuse, enabling developers to write a single codebase that can be shared between platforms. This results in faster development cycles and easier maintenance." },
      { title: "Native-like Performance", desc: "React Native leverages native components and optimizes performance, ensuring that the apps perform smoothly and deliver a native-like user experience." },
      { title: "Rapid Development", desc: "React Native offers a hot-reloading feature that allows developers to see real-time updates of code changes instantly, speeding up the development process and enabling quick iterations." },
    ],
  },
}; 