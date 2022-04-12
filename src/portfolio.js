/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
// import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import splashAnimation from "./assets/lottie/androidDevHireMe";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 3000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Lawrence Cendaña",
  title: "Lawrence C. Cendaña",
  subTitle: emoji("I've dedicated most of my career as a native mobile application developer, with more than 8 years in Android Application development. I've worked with several industries such as Events Management, Dating Apps, and Property & Asset Management Technologies."),
  resumeLink:
    "https://drive.google.com/file/d/1ugKc0DVYqaGP_2UkKi6I9drk7a68TI2c/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dev-lcc/",
  linkedin: "https://www.linkedin.com/in/lawrence-cendana-51748989//",
  gmail: "lawrence.cendana@gmail.com",
  gitlab: "https://gitlab.com/dev-lcc",
//  facebook: "https://www.facebook.com/XXX",
//  medium: "https://medium.com/@XXX",
  stackoverflow: "https://stackoverflow.com/users/11419056/lawrence-cenda%c3%b1a",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Android Mobile Application Developer",
  subTitle: "",
  skills: [
    emoji("⚡ Kotlin Programming Language."),
    emoji("⚡ Handles concurrency using Coroutines and Flow."),
    emoji("⚡ Writes code that adheres to Clean Code Architecture using modern MVVM."),
    emoji("⚡ Has relevant experience following Test-Driven Development(TDD) and Data Driven Design."),
    emoji("⚡ Integration of third party services such as Firebase/ GraphQL"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "kotlin",
      fontAwesomeClassname: "fab fa-kickstarter-k"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github-square"
    },
    {
      skillName: "iOS",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "St. Louis University",
      logo: require("./assets/images/slu_logo.jpeg"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "June 2013 - April 2016",
      desc: "One of the team members who participated BPI Science Project Awards 2013",
      descBullets: [
        "Consistent Dean's Lister"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "System Design and Architecture", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming(Android Application Development(UI & Business Logic))",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Android Application Developer",
      company: "Inform Group Pty Ltd",
      companylogo: require("./assets/images/inform_logo.jpeg"),
      date: "June 2019 – Present",
      desc: "One of the developers who took over the mobile application development of Helium and RSVP Dating Apps.",
      descBullets: [
        "Clean Code Architecture using MVVM",
        "Used Koin Dependency Injection to manage dependencies across the project.",
        "Refactored to multiple modules(app, data, domain, commons, etc.) to improve build times and advocate code seggregation.",
        "Implement Unit Testing on each ViewModel class",
      ]
    },
    {
      role: "Freelance iOS Application Developer",
      company: "Social Network Fashion Media",
      companylogo: require("./assets/images/shift_logo.jpeg"),
      date: "April 2020 – Dec 2021",
      desc: "One of the developers who led the development of SHIFT SWIM, a fashion app that showcases a bikini fashion channel where you can watch the latest designer creations, stunning bikinis modeled by the world's most beautiful women in exotic locations.",
      descBullets: [
        "The iOS app is written using Swift 5.0 with Combine framework to achieve functional and reactive style of programming.",
        "Clean Code Architecture using MVVM",
        "Used Swinject Framework to manage dependencies across the project.",
      ]
    },
    {
      role: "Android SDK Developer",
      company: "Sportstalk 24/7",
      companylogo: require("./assets/images/sportstalk_logo.jpeg"),
      date: "May 2020 – May 2021",
      desc: "Took part in the development of Sportstalk SDK for Android using Kotlin Programming language. The library is composed of Kotlin Coroutine and RxJava implementation modules."
    },
    {
      role: "Senio Mobile Application Developer",
      company: "Towa Technologies",
      companylogo: require("./assets/images/towa_logo.jpeg"),
      date: "May 2018 – May 2019",
      desc: "One of the pioneer contributors of the development of 2 Android Applications primarily using Google's Firebase SDK, Architecture Components Framework, and Kotlin as programing language of choice.",
      descBullets: [
        "Clean Code Architecture using MVVM",
        "Used Dagger2 Dependency Injection to manage dependencies across the project.",
        "Refactored to multiple modules(app, data, domain, commons, etc.) to improve build times and advocate code seggregation.",
        "Implement Unit Testing on each ViewModel class",
      ]
    },
    {
      role: "Project Lead/Fullstack Mobile Application Developer",
      company: "Hello Media Ltd.",
      companylogo: require("./assets/images/afterparty_logo.png"),
      date: "September 2017 – April 2018",
      desc: "",
      descBullets: [
        "Managed a team of four to deliver a new version of Afterparty app(android/iOS), one-stop app for events that also connects people and event goers thru matchmaking, and CMS(Content Management System) which allows event organizers and artists to manage their events, keep track of their followers, create their own contests, and other administrative features within 2 months.",
        "Acted as a fullstack developer jumping from android app development(primary skill), to backend server(Firebase Functions) using NodeJS Typescript, to setting up Firebase Firestore(document-based) Database Structure, collaborate on iOS app development with a freelancer, collaborate on CMS development with Web Developers mostly on backend server dependencies, to managing task deliverables and sprints with the QA making sure that everything is on-track.",
      ]
    },
    {
      role: "Android Application Developer",
      company: "PouchNATION",
      companylogo: require("./assets/images/pouchnation_logo.jpeg"),
      date: "January 2016 – August 2017",
      desc: "",
      descBullets: [
        "RFID/NFC technologies such as the use of Mifare Ultralight C, Mifare Ultralight EV1, and Mifare DESFire EV2. Also familiar with standalone NFC/RFID hardware such as ACS 1222L Smart Card Reader and Shenzen SmartCard Tech./T80 POS Terminal.",
        "Collaborated with API design and structure to be able to communicate mobile and backend system.",
        "Refactored the existing mobile app codebase to optimize performance and apply best coding practices and code patterns.",
        "Worked with operations during events using the mobile application which provides cashless payment experience and access control capabilities.",
        "Collaborated with the development of table top readers, similar to how the company's android application works, using external smart card reader.",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach me out 👌"),
  subtitle: emoji("I'm open for Freelance Projects."),
  number: "(+63)97******60",
  email_address: "lawrence.cendana@gmail.com",
  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
