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
  subTitle: emoji("I've dedicated most of my career as a native mobile application developer, with more than 9 years in Android Application development. I've worked with several tech and startup industries such as Events Management, Dating Apps, and Property & Asset Management Technologies."),
  resumeLink:
    "https://drive.google.com/file/d/1hypD2_wqtPcP-AQ6R5d7DWCdovYNOERt/view?usp=sharing", // Set to empty to hide the button
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
  skills: [
    {
      title: "Android Application Developer",
      subTitle: "",
      bullets: [
        emoji("➡️ Kotlin Programming Language."), // ⚡
        emoji("➡️ Handles concurrency using Coroutines and Flow."),
        emoji("➡️ Writes code that adheres to Clean Code Architecture using modern MVVM."),
        emoji("➡️ Use of 3rd party library integration such as Firebase SDK, GraphQL Apollo Client, Cloudinary SDK, and more."),
        emoji("➡️ Knowledgeable with KTor, Retrofit, and OkHttp for REST API implementation."),
        emoji("➡️ Extensive knowledge in using a wide variety of AndroidX Jetpack Components(i.e. Navigation, Room, WorkManager, Lifecycle, ViewModel, etc.)."),
        emoji("➡️ Experience with UI development using AndroidX components and/or Jetpack Compose."),
        emoji("➡️ Has relevant experience following Test-Driven Development(TDD) and Data Driven Design."),
      ],
      /* Make Sure to include correct Font Awesome Classname to view your icon https://fontawesome.com/icons?d=gallery */
      softwareSkills: [
        // {
        //   skillName: "Android",
        //   fontAwesomeClassname: "fab fa-android"
        // },
        // {
        //   skillName: "Kotlin",
        //   fontAwesomeClassname: "fab fa-kickstarter-k"
        // },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "fa-solid fa-g"//"fa-solid fa-atom"
        // },
        // {
        //   skillName: "Jetpack",
        //   fontAwesomeClassname: "fa-brands fa-space-awesome"//fa-light fa-rocket"
        // },
        // {
        //   skillName: "Gradle",
        //   fontAwesomeClassname: "fa-brands fa-android"//"fa-regular fa-republican"
        // },
        // {
        //   skillName: "Github",
        //   fontAwesomeClassname: "fab fa-github-square"
        // },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "fas fa-fire"
        // }
      ],
    },
    /**
    * TODO:: Toggle iOS Skill Highlight
    */
     {
       title: "iOS Application Developer",
       subTitle: "",
       bullets: [
         emoji("➡️ Swift Programming Language."),
         emoji("➡️ Experience with UI Development using UIKit and/or SwiftUI"),
         emoji("➡️ Handles concurrency using DispatchQueue, Task, Combine, and/or Async/Await framework."),
         emoji("➡️ Writes code that adheres to Clean Code Architecture using modern MVVM."),
         emoji("➡️ Knowledgeable with Alamofire and URLSession for REST API implementation."),
         emoji("➡️ Extensive knowledge using Firebase SDK."),
         emoji("➡️ Familiar with Test-Driven Development(TDD) using XCTest framework."),
       ],
       /* Make Sure to include correct Font Awesome Classname to view your icon https://fontawesome.com/icons?d=gallery */
       softwareSkills: [
        //  {
        //    skillName: "iOS",
        //    fontAwesomeClassname: "fab fa-apple"
        //  },
        //  {
        //    skillName: "Swift",
        //    fontAwesomeClassname: "fab fa-swift"
        //  },
        //  {
        //    skillName: "UIKit",
        //    fontAwesomeClassname: "fab fa-apple"//"fa-brands fa-uikit"
        //  },
        //  {
        //    skillName: "SwiftUI",
        //    fontAwesomeClassname: "fab fa-swift"
        //  },
        //  {
        //    skillName: "Cocoapods",
        //    fontAwesomeClassname: "fab fa-apple"//"fa-solid fa-c"
        //  },
        //  {
        //    skillName: "Github",
        //    fontAwesomeClassname: "fab fa-github-square"
        //  },
        //  {
        //    skillName: "Firebase",
        //    fontAwesomeClassname: "fas fa-fire"
        //  }
       ],
     },
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
      duration: "June 2009 - April 2013",
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
      desc: "Worked on RSVP dating and Helium dating apps for Australian client.",
      descBullets: [
        "100% Kotlin source code",
        "Functional and Reactive Programming using Kotlin Coroutines and Flow",
        "MVVM Clean Code Architecture\n - Using Coroutine StateFlow and SharedFlow to manage ViewState and Side-effects",
        "Android Jetpack - Navigation, WorkManager, Room, Lifecycle, ViewModel",
        "Google Billing SDK and Google Ads Manager SDK",
        "Firebase, GraphQL, Ktor(formerly using Retrofit), OkHTTP, SocketIO, Cloudinary SDK",
        "Using Bitrise CI/CD as part of the software development pipeline to automate Android builds and app publish to Google Playstore",
        "Dependency Injection: Koin 3.x",
        "Test-Driven-Development: JUnit 4 with RoboElectric 4.x, Turbine",
      ]
    },
    // {
    //   role: "Freelance IOS Application Developer",
    //   company: "Social Network Fashion Media",
    //   companylogo: require("./assets/images/shift_logo.jpeg"),
    //   date: "Mar 2021 – October 2022",
    //   desc: "One of pioneer contributors of SHIFT SWIM iOS app, a fashion app that showcases a bikini fashion channel where you can watch the latest designer creations, stunning bikinis modeled by the world's most beautiful women in exotic locations.",
    //   descBullets: [
    //     "100% Swift 5 source code with partial migration to SwiftUI",
    //     "Functional and Reactive Programming using Combine and Async/Await framework",
    //     "MVVM Clean Code Architecture",
    //     "Firebase, Alamofire for handling REST API, Sportstalk SDK, Cloudinary SDK",
    //     "Dependency Injection: Swinject",
    //     "Test-Driven-Development: XCTest",
    //   ]
    // },
    // {
    //   role: "Freelance Android SDK Developer",
    //   company: "Sportstalk 24/7",
    //   companylogo: require("./assets/images/sportstalk_logo.jpeg"),
    //   date: "May 2020 – May 2021",
    //   desc: "Took part in the development of Sportstalk SDK which provides conversation solutions to the entertainment and sports industries. We enable high-profile brands to engage with customers, fans, and influencers to build loyalty while protecting brand interests and messaging.",
    //   descBullets: [
    //     "100% Kotlin source code",
    //     "Created and published SDK via jitpack.io with multiple artifacts to choose from:",
    //     "Sportstalk SDK artifact using Kotlin Coroutines and Flow",
    //     "Sportstalk SDK artifact using RxJava 2.0",
    //     "Documentation: Dokka Gradle Plugin and sphinx-doc",
    //     "Retrofit, OkHTTP",
    //     "Dependency Injection: Manual",
    //     "Test-Driven-Development: JUnit 4",
    //   ]
    // },
    {
      role: "Senior Android Application Developer",
      company: "TOWA Technologies Ltd",
      companylogo: require("./assets/images/towa_logo.jpeg"),
      date: "May 2018 – May 2019",
      desc: "One of pioneer contributors of TOWA internal Android application and TOWA commercial app.",
      descBullets: [
        "100% Kotlin source code",
        "Functional and Reactive Programming using Rx2Java",
        "MVVM Clean Code Architecture",
        "Android Jetpack - Navigation, WorkManager, Room, Lifecycle, ViewModel",
        "Firebase, Retrofit, OkHTTP, Cloudinary SDK, SendBird SDK",
        "Dependency Injection: Dagger 2",
        "Test-Driven-Development: JUnit 4 with RoboElectric 4.x",
      ]
    },
    {
      role: "Project Lead/Fullstack Mobile Application(Android/iOS) Developer",
      company: "Hello Media Ltd.",
      companylogo: require("./assets/images/afterparty_logo.png"),
      date: "September 2017 – April 2018",
      desc: "Managed a team of four to deliver a new version of Afterparty app(android/iOS), one-stop app for events that also connects people and event goers thru matchmaking, and CMS(Content Management System) which allows event organizers and artists to manage their events, keep track of their followers, create their own contests, and other administrative features.",
      descBullets: [
        "100% Kotlin source code",
        "Functional and Reactive Programming using Rx2Java",
        "MVP Clean Code Architecture",
        "Firebase, GraphQL, Retrofit, OkHTTP, Cloudinary SDK",
        "Dependency Injection: Dagger 2",
      ]
    },
    {
      role: "Software Engineer",
      company: "PouchNATION",
      companylogo: require("./assets/images/pouchnation_logo.jpeg"),
      date: "January 2016 – August 2017",
      desc: "Developed and maintained company's proprietary android application. The application features the use of RFID/NFC Technology.",
      descBullets: [
        "Java programming language",
        "Volley(REST API), SQLite(Local Database)",
        "Using Android built-in NFC Framework to support Mifare Ultralight C and Mifare DesFire EV2",
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
  title: "Freelance Projects",
  subtitle: "I worked with Sportstalk 24/7 and Social Network Fashion Media.",
  projects: [
    {
      image: require("./assets/images/shift_app_android.png"),
      projectName: "Shift Swim - Android Application Developer",
      projectDesc: "Pioneer developer of SHIFT SWIM Android app, a fashion app that showcases a bikini fashion channel where you can watch the latest designer creations, stunning bikinis modeled by the world's most beautiful women in exotic locations.",
      footerLink: [
        {
          name: "Google Play(Work-in-Progress)",
          url: "https://www.shiftswim.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/shift_app_ios.webp"),
      projectName: "Shift Swim - IOS Application Developer",
      projectDesc: "One of pioneer contributors of SHIFT SWIM iOS app, a fashion app that showcases a bikini fashion channel where you can watch the latest designer creations, stunning bikinis modeled by the world's most beautiful women in exotic locations.",
      footerLink: [
        {
          name: "View on Appstore",
          url: "https://apps.apple.com/us/app/shift-swim/id1560375556"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/sportstalk_logo.jpeg"),
      projectName: "Sportstalk 24/7 - Android SDK Developer",
      projectDesc: "Took part in the development of Sportstalk SDK which provides conversation solutions to the entertainment and sports industries. We enable high-profile brands to engage with customers, fans, and influencers to build loyalty while protecting brand interests and messaging.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.sportstalk247.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  // subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "The Complete 2021 Flutter Development Bootcamp with Dart",
      // subtitle: "",
      image: require("./assets/images/certifications_udemy_2021_flutter_development.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-056b0d20-0edc-4a4a-a670-d7ac9a5b8ae4/"
        },
      ]
    },
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
