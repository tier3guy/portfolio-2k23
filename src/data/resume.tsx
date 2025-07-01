import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
    name: "Avinash Gupta",
    initials: "AG",
    url: "https://tier3guy.com",
    location: "Bangalore, IN",
    locationLink: "https://maps.app.goo.gl/vLacb4xve5vMw7EP9",
    description:
        "Software Engineer who loves building real-world apps and solving problems. Passionate about tech, design, and helping others. Often working on side projects and sharing ideas.",
    summary:
        "I’m a full-stack developer who loves building fast, scalable apps with technologies like Next.js, Node.js, and Angular. From shipping real products at Infosys to creating side projects like [InterviewGenie](https://interview-genie.vercel.app/) and [Linkcrate](https://linkcrate.vercel.app/), I enjoy solving real-world problems with clean code and thoughtful design. I’ve also worked remotely with startups and constantly explore new tech, especially in the AI and web development space.",
    avatarUrl: "/me.jpg",
    skills: [
        "Java",
        "OOPs",
        "Databases (SQL & NoSQL)",
        "AWS",
        "Git",
        "NodeJS",
        "Fast API",
        "HTML",
        "CSS",
        "Javascript (ES6+)",
        "Typescript",
        "ReactJS",
        "AngularJS",
        "NextJS",
        "C",
        "C++",
        "Python",
        "Solidity",
        "NestJS",
        "Data Structures",
        "Docker",
        "Kubernetes",
        "Kafka",
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/blog", icon: NotebookIcon, label: "Blog" },
    ],
    contact: {
        email: "avinashgupta.works@gmail.com",
        tel: "+91 62903 06361",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/tier3guy",
                icon: Icons.github,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/tier3guy/",
                icon: Icons.linkedin,
                navbar: true,
            },
            X: {
                name: "X",
                url: "https://x.com/tier3guy/",
                icon: Icons.x,
                navbar: true,
            },
            Youtube: {
                name: "Youtube",
                url: "https://www.youtube.com/@avinashgupta2308",
                icon: Icons.youtube,
                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "#",
                icon: Icons.email,
                navbar: false,
            },
        },
    },
    work: [
        {
            company: "Qwerty Thoughts",
            href: "https://stories.qwertythoughts.com/",
            badges: [],
            location: "Delhi (Remote)",
            title: "Associate React Developer Intern",
            logoUrl: "/qwerty-thoughts.jpeg",
            start: "March 2022",
            end: "May 2022",
            description:
                "Built responsive, interactive web apps using Next.js, TypeScript, and Chakra UI. Delivered UIs for high-profile clients like Sadhguru and Isha Foundation.",
        },
        {
            company: "Bridge Healthcare",
            href: "https://www.linkedin.com/company/bridge-healthcare-india/",
            badges: [],
            location: "Tamil Nadu, India (Remote)",
            title: "Application Developer Intern",
            logoUrl: "/bridge-healthcare.jpeg",
            start: "October 2022",
            end: "December 2022",
            description:
                "Led the mobile app development team and contributed to four different applications. Gained experience in managing multiple projects, collaborating with the design team, and ensuring alignment with branding guidelines. Learned mobile development in a fast-paced startup environment using React Native, while also strengthening leadership, organizational, and problem-solving skills.",
        },
        {
            company: "VILS Behaviour Intelligence",
            href: "https://vils.ai/",
            badges: [],
            location: "Hyderabad (Remote)",
            title: "Software Engineer",
            logoUrl: "/vils.jpeg",
            start: "April 2023",
            end: "June 2024",
            description:
                "Scaled a browser-based app using Next.js and TypeScript, improving user engagement by 20%. Enhanced app speed by optimizing REST APIs and UI infrastructure. Implemented AWS Kinesis Data Streams for 100% faster data transfer.",
        },
        {
            company: "Infosys",
            href: "https://www.infosys.com/",
            badges: [],
            location: "Bangalore, India",
            title: "Specialist Programmer (NodeJS Angular Full Stack Developer)",
            logoUrl: "/infosys.webp",
            start: "September 2024",
            end: "Present",
            description:
                "Designed and implemented scalable Web APIs with efficient caching to reduce database load. Integrated LRU caching in Angular and optimized backend performance using parallel API calls, cutting response time from 2000ms to 300ms.",
        },
    ],
    education: [
        {
            school: "Gyan Bharati Vidyapith",
            href: "https://www.gyanbharati.com/",
            degree: "High School, Science (Grade: A+)",
            logoUrl: "/gbv.jpg",
            start: "March 2018",
            end: "April 2020",
        },
        {
            school: "Narula Institute of Technology",
            href: "https://nit.ac.in/",
            degree: "Bachelor of Technology in Information Technology (CGPA: 9.21/10)",
            logoUrl: "/nit.jpeg",
            start: "2020",
            end: "2024",
        }
    ],
    projects: [
        {
            title: "Interview Genie",
            href: "https://interview-genie.vercel.app/",
            dates: "May 2024 - June 2024",
            active: true,
            description:
                "An AI-based mock interview platform built using OpenAI’s API. Helps candidates prepare for interviews with intelligent, role-specific questions and feedback.",
            technologies: [
                "Next.js",
                "TypeScript",
                "OpenAI API",
                "TailwindCSS",
                "Shadcn UI",
                "Zustand",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://interview-genie.vercel.app/",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/tier3guy/interview-genie",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/interview-genie.png",
            video: "",
        },
        {
            title: "Linkcrate",
            href: "https://linkcrate.vercel.app/",
            dates: "Feb 2024 - Mar 2024",
            active: true,
            description:
                "A simple yet powerful web app to collect, categorize, and organize your links in one place. Built for productivity and seamless access.",
            technologies: [
                "React",
                "TypeScript",
                "TailwindCSS",
                "Zustand",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://linkcrate.vercel.app/",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/tier3guy/linkcrate",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/linkcrate.png",
            video: "",
        },
        {
            title: "Logo Maker",
            href: "https://logomaker.tier3guy.com/",
            dates: "Jan 2024 - Feb 2024",
            active: true,
            description:
                "A Next.js-based tool to generate, customize, and export unique logos using the Lucide Icon Pack. Built for startups, creators, and designers.",
            technologies: [
                "Next.js",
                "TypeScript",
                "Lucide Icons",
                "TailwindCSS",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://logomaker.tier3guy.com/",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/tier3guy/logo-maker",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/logo-maker.png",
            video: "",
        },
    ],

    // hackathons: [
    //     {
    //         title: "Hack Western 5",
    //         dates: "November 23rd - 25th, 2018",
    //         location: "London, Ontario",
    //         description:
    //             "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    //         image:
    //             "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    //         mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //         links: [],
    //     },
    //     {
    //         title: "Hack The North",
    //         dates: "September 14th - 16th, 2018",
    //         location: "Waterloo, Ontario",
    //         description:
    //             "Developed a mobile application which delivers university campus wide events in real time to all students.",
    //         image:
    //             "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //         mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //         links: [],
    //     },
    //     {
    //         title: "FirstNet Public Safety Hackathon",
    //         dates: "March 23rd - 24th, 2018",
    //         location: "San Francisco, California",
    //         description:
    //             "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
    //         icon: "public",
    //         image:
    //             "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
    //         links: [],
    //     },
    //     {
    //         title: "DeveloperWeek Hackathon",
    //         dates: "February 3rd - 4th, 2018",
    //         location: "San Francisco, California",
    //         description:
    //             "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //         image:
    //             "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //         links: [
    //             {
    //                 title: "Github",
    //                 icon: <Icons.github className="h-4 w-4" />,
    //                 href: "https://github.com/cryptotrends/cryptotrends",
    //             },
    //         ],
    //     },
    //     {
    //         title: "HackDavis",
    //         dates: "January 20th - 21st, 2018",
    //         location: "Davis, California",
    //         description:
    //             "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //         image:
    //             "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //         win: "Best Data Hack",
    //         mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //         links: [
    //             {
    //                 title: "Devpost",
    //                 icon: <Icons.globe className="h-4 w-4" />,
    //                 href: "https://devpost.com/software/my6footprint",
    //             },
    //             {
    //                 title: "ML",
    //                 icon: <Icons.github className="h-4 w-4" />,
    //                 href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //             },
    //             {
    //                 title: "iOS",
    //                 icon: <Icons.github className="h-4 w-4" />,
    //                 href: "https://github.com/Wallet6/CarbonWallet",
    //             },
    //             {
    //                 title: "Server",
    //                 icon: <Icons.github className="h-4 w-4" />,
    //                 href: "https://github.com/Wallet6/wallet6-server",
    //             },
    //         ],
    //     },
    //     {
    //         title: "ETH Waterloo",
    //         dates: "October 13th - 15th, 2017",
    //         location: "Waterloo, Ontario",
    //         description:
    //             "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //         image:
    //             "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //         links: [
    //             {
    //                 title: "Organization",
    //                 icon: <Icons.github className="h-4 w-4" />,
    //                 href: "https://github.com/ethdocnet",
    //             },
    //         ],
    //     },
    //     {
    //         title: "Hack The North",
    //         dates: "September 15th - 17th, 2017",
    //         location: "Waterloo, Ontario",
    //         description:
    //             "Developed a virtual reality application allowing users to see themselves in third person.",
    //         image:
    //             "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //         mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //         links: [
    //             {
    //                 title: "Streamer Source",
    //                 icon: <Icons.github className="h-4 w-4" />,
    //                 href: "https://github.com/justinmichaud/htn2017",
    //             },
    //             {
    //                 title: "Client Source",
    //                 icon: <Icons.github className="h-4 w-4" />,
    //                 href: "https://github.com/dillionverma/RTSPClient",
    //             },
    //         ],
    //     },
    //     {
    //         title: "Hack The 6ix",
    //         dates: "August 26th - 27th, 2017",
    //         location: "Toronto, Ontario",
    //         description:
    //             "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
    //         image:
    //             "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
    //         mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //         links: [
    //             {
    //                 title: "Source",
    //                 icon: <Icons.github className="h-4 w-4" />,
    //                 href: "https://github.com/ShareShip/ShareShip",
    //             },
    //             {
    //                 title: "Site",
    //                 icon: <Icons.globe className="h-4 w-4" />,
    //                 href: "https://share-ship.herokuapp.com/",
    //             },
    //         ],
    //     },
    //     {
    //         title: "Stupid Hack Toronto",
    //         dates: "July 23rd, 2017",
    //         location: "Toronto, Ontario",
    //         description:
    //             "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
    //         image:
    //             "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
    //         links: [
    //             {
    //                 title: "Source",
    //                 icon: <Icons.github className="h-4 w-4" />,
    //                 href: "https://github.com/nsagirlfriend/nsagirlfriend",
    //             },
    //         ],
    //     },
    //     {
    //         title: "Global AI Hackathon - Toronto",
    //         dates: "June 23rd - 25th, 2017",
    //         location: "Toronto, Ontario",
    //         description:
    //             "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
    //         image:
    //             "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
    //         win: "1st Place Winner",
    //         links: [
    //             {
    //                 title: "Article",
    //                 icon: <Icons.globe className="h-4 w-4" />,
    //                 href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
    //             },
    //             {
    //                 title: "Source",
    //                 icon: <Icons.github className="h-4 w-4" />,
    //                 href: "https://github.com/TinySamosas/",
    //             },
    //         ],
    //     },
    //     {
    //         title: "McGill AI for Social Innovation Hackathon",
    //         dates: "June 17th - 18th, 2017",
    //         location: "Montreal, Quebec",
    //         description:
    //             "Developed realtime facial microexpression analyzer using AI",
    //         image:
    //             "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //         links: [],
    //     },
    //     {
    //         title: "Open Source Circular Economy Days Hackathon",
    //         dates: "June 10th, 2017",
    //         location: "Toronto, Ontario",
    //         description:
    //             "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //         image:
    //             "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //         win: "1st Place Winner",
    //         links: [
    //             {
    //                 title: "Source",
    //                 icon: <Icons.github className="h-4 w-4" />,
    //                 href: "https://github.com/dillionverma/genecis",
    //             },
    //         ],
    //     },
    //     {
    //         title: "Make School's Student App Competition 2017",
    //         dates: "May 19th - 21st, 2017",
    //         location: "International",
    //         description: "Improved PocketDoc and submitted to online competition",
    //         image:
    //             "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //         win: "Top 10 Finalist | Honourable Mention",
    //         links: [
    //             {
    //                 title: "Medium Article",
    //                 icon: <Icons.globe className="h-4 w-4" />,
    //                 href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //             },
    //             {
    //                 title: "Devpost",
    //                 icon: <Icons.globe className="h-4 w-4" />,
    //                 href: "https://devpost.com/software/pocketdoc-react-native",
    //             },
    //             {
    //                 title: "YouTube",
    //                 icon: <Icons.youtube className="h-4 w-4" />,
    //                 href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //             },
    //             {
    //                 title: "Source",
    //                 icon: <Icons.github className="h-4 w-4" />,
    //                 href: "https://github.com/dillionverma/pocketdoc-react-native",
    //             },
    //         ],
    //     },
    //     {
    //         title: "HackMining",
    //         dates: "May 12th - 14th, 2017",
    //         location: "Toronto, Ontario",
    //         description: "Developed neural network to optimize a mining process",
    //         image:
    //             "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
    //         links: [],
    //     },
    //     {
    //         title: "Waterloo Equithon",
    //         dates: "May 5th - 7th, 2017",
    //         location: "Waterloo, Ontario",
    //         description:
    //             "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //         image:
    //             "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //         links: [
    //             {
    //                 title: "Devpost",
    //                 icon: <Icons.globe className="h-4 w-4" />,
    //                 href: "https://devpost.com/software/pocketdoc-react-native",
    //             },
    //             {
    //                 title: "YouTube",
    //                 icon: <Icons.youtube className="h-4 w-4" />,
    //                 href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //             },
    //             {
    //                 title: "Source",
    //                 icon: <Icons.github className="h-4 w-4" />,
    //                 href: "https://github.com/dillionverma/pocketdoc-react-native",
    //             },
    //         ],
    //     },
    //     {
    //         title: "SpaceApps Waterloo",
    //         dates: "April 28th - 30th, 2017",
    //         location: "Waterloo, Ontario",
    //         description:
    //             "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
    //         image:
    //             "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
    //         links: [
    //             {
    //                 title: "Source",
    //                 icon: <Icons.github className="h-4 w-4" />,
    //                 href: "https://github.com/dillionverma/earthwatch",
    //             },
    //         ],
    //     },
    //     {
    //         title: "MHacks 9",
    //         dates: "March 24th - 26th, 2017",
    //         location: "Ann Arbor, Michigan",
    //         description:
    //             "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
    //         image:
    //             "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    //         mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //         links: [
    //             {
    //                 title: "Source",
    //                 icon: <Icons.github className="h-4 w-4" />,
    //                 href: "https://github.com/dillionverma/threejs-planes",
    //             },
    //         ],
    //     },
    //     {
    //         title: "StartHacks I",
    //         dates: "March 4th - 5th, 2017",
    //         location: "Waterloo, Ontario",
    //         description:
    //             "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //         image:
    //             "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //         win: "1st Place Winner",
    //         mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //         links: [
    //             {
    //                 title: "Source (Mobile)",
    //                 icon: <Icons.github className="h-4 w-4" />,
    //                 href: "https://github.com/mattBlackDesign/recipic-ionic",
    //             },
    //             {
    //                 title: "Source (Server)",
    //                 icon: <Icons.github className="h-4 w-4" />,
    //                 href: "https://github.com/mattBlackDesign/recipic-rails",
    //             },
    //         ],
    //     },
    //     {
    //         title: "QHacks II",
    //         dates: "February 3rd - 5th, 2017",
    //         location: "Kingston, Ontario",
    //         description:
    //             "Developed a mobile game which enables city-wide manhunt with random lobbies",
    //         image:
    //             "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
    //         mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //         links: [
    //             {
    //                 title: "Source (Mobile)",
    //                 icon: <Icons.github className="h-4 w-4" />,
    //                 href: "https://github.com/dillionverma/human-huntr-react-native",
    //             },
    //             {
    //                 title: "Source (API)",
    //                 icon: <Icons.github className="h-4 w-4" />,
    //                 href: "https://github.com/mattBlackDesign/human-huntr-rails",
    //             },
    //         ],
    //     },
    //     {
    //         title: "Terrible Hacks V",
    //         dates: "November 26th, 2016",
    //         location: "Waterloo, Ontario",
    //         description:
    //             "Developed a mock of Windows 11 with interesting notifications and functionality",
    //         image:
    //             "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
    //         links: [
    //             {
    //                 title: "Source",
    //                 icon: <Icons.github className="h-4 w-4" />,
    //                 href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
    //             },
    //         ],
    //     },
    //     {
    //         title: "Portal Hackathon",
    //         dates: "October 29, 2016",
    //         location: "Kingston, Ontario",
    //         description:
    //             "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //         image:
    //             "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //         links: [
    //             {
    //                 title: "Source",
    //                 icon: <Icons.github className="h-4 w-4" />,
    //                 href: "https://github.com/UWPortalSDK/crowmark",
    //             },
    //         ],
    //     },
    // ],
} as const;
