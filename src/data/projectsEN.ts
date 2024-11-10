import Project from "../types/Project"

// NOTE: File type is omitted in the paths to images.
// It is added later in the Markdown component.

export const projectsEN: Project[] = [{
	id: 'chare',
	name: 'Chare',
	title: 'How Can Ridesharing Be Made as Convenient as Booking a Train or Bus Ticket?',
	thumbnail: '../img/chare/Hero',
	colors: ['#1C1893', '#AC6649', '#332FA4'],
	content: `
	![Alttext](../img/chare/Hero "")
	## The Task
	A project in the course "Prototype Development for Mobile Applications". Our team consisted of 5 students tasked with developing a concept, a design, and an MVP for a mobile application. In other words, we were to work through the entire design process — from ideation to implementation. There were no specific requirements from the course regarding how we should've worked or which technologies we should've used.

	## Idea & Concept
	In the early stages, the process involved intense ideation, which meant exploring ideas, brainstorming, and discussing within the group. During this phase, everything from pricing models and feasibility to visual design and user flows was discussed. Unsurprisingly, this ideation led to a concept: Chare (Car + Share), an app designed to simplify ridesharing. The idea was that people planning to drive to a destination could post their trip in the app. Those who needed a ride to the same or nearby destination could then request to join for a small fee. This would benefit the driver, the passenger, and the environment.

	## Prototyping
	After the ideation phase, we moved on to rapid prototyping — a method for quickly generating a wide range of ideas. A 10-minute timer was set, and each group member sketched out how they envisioned the app's design. Each member then presented their sketches, which were discussed within the group. This process was repeated until we felt we had alignment and a solid foundation to build upon. The advantage of this method is that poor ideas and designs are quickly filtered out, making room for new ideas and further development of those that remain.

	A basic structure for the app's navigation was created together, and different areas of the app were assigned to different team members. Wireframes (Mid-Fi) of each part of the app were then created, discussed, and iteratively improved. Afterward, we developed Hi-Fi prototypes in Figma, which served as the basis for implementation.

	![Alttext](../img/chare/Search "Hi-Fi-prototypes of search, results, and filter view.")
	![Alttext](../img/chare/Profile "Hi-Fi-prototypes of profile and settings.")
	![Alttext](../img/chare/Trip Detail "Hi-Fi-prototypes of the travel detail view.")
	![Alttext](../img/chare/4-6 "Lo-Fi-prototypes, results och detail view.")
	![Alttext](../img/chare/1-3 "Lo-Fi-prototypes, search and create trip.")

	## Challenges & Solutions
	One issue we discussed was whether drivers would actually be willing to take a stranger in their car — and if passengers would be willing to ride with a stranger. The scenario of a "young woman traveling late at night in a stranger's car" showed that the idea might not work in practice.

	The solution was to create legitimacy and trust in various ways. We developed a profile section in the app that included information harder to fake, such as the number of trips taken, reviews from other users, and when the profile was created. We also discussed verifying users with BankID or other forms of ID to enhance security and trust among users on the platform.

	## Development
	During the development phase, we worked in sprints and aimed to follow agile development methodology as much as possible. We had a strict deadline for when our MVP had to be completed, so in practice, it ended up being a mix of waterfall and agile methods.

	We chose to develop the app for Android, mainly because we wanted to learn more about Android development. The backend consisted of a REST API built with .NET MVC. We used MySQL for the database, along with Entity Framework for data modeling and interfacing with the database.

	![Diagram of the data flow within the app.](../img/chare/df "Technologies used in the project (left) and a model of the data flow in the app (right).")

	## The Result
	We didn't manage to complete the MVP, but we made significant progress, which was impressive considering we had almost zero prior experience with Android development. The important thing was that we learned about mobile application development — which we certainly did.
	`,
	position: 60,
	resources: [{
		type: "figma",
		text: "Design file",
		href: "https://www.figma.com/design/UMugzTm8x48Fu1xmzCQd6I/Chare?node-id=4-190&t=ZqeKUEdO6aV3eDI9-1"
	}, {
		type: "code",
		text: "Source",
		href: "https://github.com/Savalige/Chare/"
	}]
}, {
	id: 'labplant',
	name: 'The Lab Plant',
	title: 'Smart and Connected Monitoring of Potted Plats',
	thumbnail: '../img/lab-plant/setup',
	colors: ['#428c29', '#298c4f', '#578c29', '#1bab2e'],
	content: `
	![A potted plant with sensors and electronics attatched to it](../img/lab-plant/setup "A Chinese money plant became guinea-pig for our experiments.")
	## Background
	Together with three other students, we built a system for automatic watering and monitoring of potted plants. The system was developed as part of the final project in the course “Design and Service Development for IoT,” where we were given free rein to choose our project. The only requirement was that it had to be an IoT solution.

	## The Idea
	The idea came about because we took the course in the midst of the COVID-19 pandemic. During the boredom of studying from home, I had taken an interest in plants. I suggested the idea, and the rest of the group thought it sounded fun — so we went with it.

	## The System
	The system consisted of an ESP32 microcontroller connected to various sensors (humidity, soil moisture, light intensity, etc.). It communicated with a bridge (a Raspberry Pi 4) over MQTT, a communication protocol for IoT. The bridge also provided a web interface that could be accessed via a computer or mobile phone.

	The ESP32 ran Mongoose OS, a collection of APIs on top of the built-in C ones, enabling us to program the microcontroller with JavaScript. This allowed us to use JavaScript across the entire stack, greatly simplifying the development process.

	![A diagram of the system setup](../img/lab-plant/schematic "The whole tech stack was built on JavaScript. Communication between the different parts was done via MQTT and HTTP.")

	## The Web Interface
	Through the web interface, users could view all the data collected by the sensors — but a list of data points from various sensors isn't necessarily user-friendly. Therefore, we made it possible to specify the type of plant the device was attached to. This way, the system knew exactly what the plant needed and, based on the sensor values, could provide the user with indications of whether the plant needed more or less of something.

	Using the soil moisture sensor and a water pump, the plant could also be watered automatically, based on how moist the soil was. Users could also choose to water the plant manually by specifying the number of milliliters to be dispensed.

	![Three screenshots of different parts of the user interface](../img/lab-plant/webapp "Different parts of the web interface.")

	## Takeaways
	Above all, it was a lot of fun to experiment with real electronics and hardware, rather than just software. It was exciting to see that the software and code we wrote could cause things to happen in the physical, real world.
	`,
	position: 50
}, {
	id: 'thesis',
	name: 'Thesis Project',
	title: 'Is There a Correlation Between Usability and Percieved Security?',
	thumbnail: '../img/thesis/promo',
	colors: ['#001650', '#00C2FF', '#108CFF', '#108CFF'],
	content: `
	![Different UI element hovering around the text "DinBank"](../img/thesis/promo "The fictional E-banking solution that was used as part of the work.")
	## What?
	I wrote my thesis in collaboration with Omegapoint, one of the leading IT security consulting firms in the Nordics. From their side, there were no specific requirements or requests for what my thesis should contain or focus on. However, I felt that I wanted to do something connected to their area of expertise.

	After much consideration, I decided to explore whether there is a relationship between the usability and perceived security of websites. There was no clear hypothesis about what this relationship might be, meaning whether high usability would be associated with high perceived security, or low perceived security.

	Early in the process, it was decided that a prototype would be used based on a particular scenario and then evaluated by test participants. The prototype would be an E-Banking interface, and the scenario would involve an elderly relative needing help with banking tasks.

	## How?
	The first few weeks were almost exclusively devoted to literature studies. After that, the practical part of the project took off, starting with the creation of a prototype for a fictional E-banking solution. This involved working from paper prototypes (Lo-Fi) all the way to fully developed prototypes ready for implementation (Hi-Fi). The design was further refined with the help of classmates and program alumni, who conducted heuristic evaluations.

	Based on the completed prototype, a new variant was created, which was worsened in various ways to reduce its usability. There were now two variants: one with high usability and one with low usability.

	Both were implemented as a web application in React. The web app explained the scenario and gave participants several banking tasks to complete within the fictional E-Banking solution. Every other participant used the high-usability or low-usability variant. After completing all tasks, they answered two questionnaires: one assessing the usability of the prototype and another the perceived security of the prototype.

	![Diagram showing the different stages of the process. Create prototype -> Heuristic evaluations -> Build and distribute survey.](../img/thesis/processSE "The different stages in the process.")

	## Results
	Based on questions about the usability of the prototypes, it was possible to confirm that they indeed had different usability levels — a prerequisite for examining any potential connection. Overall, it was found that participants had greater trust in the high-usability version, although the difference was small. Feedback and visibility of various security measures increased perceived security. A reflection that arose during the work was that factors like the authentication procedure and reputation likely have a greater impact on perceived security than usability does.

	## Key Takeaways
	One of the lessons from the thesis was about decision-making. Throughout the process, I considered many different approaches and alternatives — and struggled with indecision about them. While weighing and exploring all options undoubtedly served me well, I likely could have done more, faster, if I hadn't delayed certain decisions.
	`,
	position: 10,
	resources: [{
		type: "pdf",
		text: "Final Presentation (in Swedish)",
		href: "../Examensarbete slutpresentation.pdf"
	}, {
		type: "webpage",
		text: "Report in DiVA (Digitala Vetenskapliga Arkivet)",
		href: "https://urn.kb.se/resolve?urn=urn:nbn:se:umu:diva-225743"
	}]
}, {
	id: 'wiki',
	name: 'Wiki Site',
	title: 'Documentation of Roleplaying and Events on a Minecraft Server',
	thumbnail: '../img/wiki/promo',
	colors: ['#313131', '#3B97D9', '#313131', '#313131'],
	content: `
	![Image of various UI commponenets around the text "stocken.wiki"](../img/wiki/promo "The name of the wiki site is a bit unclear. It was called stocken.wiki because the server was called stocken.")
	## Wiki Site?.. Why?
	Some friends and I started a Minecraft server where we built nations, waged wars, and role-played. To document everything happening on the server, I wanted to create a custom solution instead of using a ready-made one like Fandom, and saw it as a fun challenge.

	## Development Process
	I began the project right before the semester started, setting a one-week deadline. The first day was spent brainstorming ideas and concepts, discussed with friends playing on the server. Empathy and understanding for the target group are central to interaction design, so I made sure to continuously gather feedback from them. On day two, I moved on to development and kept up the pace for the remainder of the time.

	As with many of my other projects, I used a GitHub Actions workflow to deploy the project on pushes to the main branch. This allowed my friends to follow the development live and provide feedback as features were implemented.

	A year later, I revisited the project, developing it into an open platform where anyone could create an account and build their own wiki — not just those of us playing on the server. I also decided to rewrite the backend API from REST to GraphQL, as it was something I'd wanted to try out.
	
	![](../img/wiki/hifi1 "Homepage of a Wiki.")
	![](../img/wiki/hifi2 "Search view.")
	![](../img/wiki/hifi3 "An example of a wiki page and its contents.")

	## Challenges & Solutions
	Initially, the frontend was hosted on GitHub Pages and the backend on a personal computer, which caused CORS issues since they were on different domains. Improper handling can lead to security problems, which it definitely did in my case. To avoid this, I later rewrote the code so both the frontend and backend were hosted on the same IP address, on an AWS EC2 instance.

	At first, I also tried to build the edit mode for wiki pages as a WYSIWYG editor (what you see is what you get), but this turned out to be too much to implement on my own. Achieving this would be a good opportunity for further development!

	![Comparison between a WYSIWYG editor and a regular editor."](../img/wiki/wysiwyg "The Notion WYSIWYG-editor (left), and the one on the wiki site - a normal editor (right).")

	## Present
	At the time of writing, the project is inactive and offline. It wasn't considered worthwhile to host it, as no one was using the application anymore.
`,
	position: 20,
	resources: [{
		type: 'code',
		text: 'Source',
		href: "https://github.com/ChristofferBillman/wiki-app"
	}
	]
}
	, {
	id: 'tip',
	name: 'TIP',
	title: 'Inspiration, Planning, and Travel!',
	thumbnail: '../img/tip/key',
	colors: ['#2A2A2A', '#181818', '#D8005B'],
	content: `
	![alttext](../img/tip/promo "Promo image used in our final presentation for teachers and students.")
	## The Task
	As part of the course “Service Design and Business Models in an Engineering Context,” another student and I developed a business idea, concept, and initial prototype for an app. The course focus was primarily on the business aspects, such as customer segments, value proposition, revenue model, and more.

	## Idea & Concept
	Our idea was TIP, Travel Inspire Plan! The name describes itself a bit — it's an app for finding travel inspiration, planning trips, and supporting users during their travels.

	## The Process
	The process was iterative and cyclical. Over several iterations, we improved and refined both the business model and the prototype.

	For business model development, we used the Business Model Canvas (BMC) and the Value Proposition Canvas, both frameworks for designing business models.

	After creating an initial iteration of our business model, we tested all its elements by distributing a questionnaire covering each part of our BMC. This provided valuable insights, forming the basis for the next iteration of the business model.

	![Our finalized Business Model Canvas](../img/tip/bmc_final "The last iteration of our Business Model Canvas.")

	In parallel with developing the business model, we worked on the prototype — primarily through Lo-Fis and wireframes of the application. When both the business model and wireframes were relatively polished, we moved on to creating Hi-Fi prototypes of our envisioned app.

	![Three Lo-Fi-prototypes](../img/tip/wireframes "Wireframes of a feature where the user was asked a few questions, to then be presented with travels that fit them.")
	![Tre Hi-Fi-prototyper](../img/tip/hifi "Hi-Fi-prototypes of the same feature shown prior.")

	## Pitch
	The final part of the course involved pitching the idea individually within 90 seconds, similar to Dragon's Den, to a panel of investors. In our case, we presented to a panel of 5 people from Nordea with investment experience. It was nerve-wracking, to say the least!
	
	## Takeaways
	Developing a business model was not only fun but incredibly educational. Working through all the different parts of a business model thoroughly provided insights into how to approach business models and the types of questions to ask in these contexts.

	Pitching in a real-world setting was also a valuable experience. Doing it has built confidence, helping me think, “Yes, I actually can,” even when things feel challenging.

	![Tre Hi-Fi-prototyper](../img/tip/result "Some views in the design.")
	![Tre Hi-Fi-prototyper](../img/tip/hifi1 "Some views in the design.")
	![Tre Hi-Fi-prototyper](../img/tip/hifi2 "Some views in the design.")
`,
	position: 30,
	resources: [{
		type: 'pdf',
		text: 'Final Presentation (in Swedish)',
		href: "../Affärsmässiga slutpresentation.pdf"
	}, {
		type: 'figma',
		text: 'Design file',
		href: "https://www.figma.com/design/xwBHlfcGjGoFS9eCydm8iX/Aff%C3%A4rsm%C3%A4ssiga?node-id=0-1&t=zOjFTqS7XHVp1bq5-1"
	}]
}
	, {
	id: 'transit',
	name: 'Umeå Local Transit - Redesign',
	title: 'Redesigned Transit Map for the Bus Network in Umeå',
	thumbnail: '../img/transit/hero',
	colors: ['#2C2B2B', '#E52F2F', '#E5862F', '#2F78E5', '#E9C400'],
	content: `
	![Ett diagram över Umeås lokaltrafik.](../img/transit/map_dark "")
	## Background
	Every morning on my way to university, I stood at the bus stop waiting for my bus. One day, to pass the time, I started staring at the route map displayed in the bus shelter. I noticed skewed angles, mismatched fonts, and graphical elements that weren't aligned. That's when I thought, “This is just screaming for a makeover!” — so I decided to give it one

	## A New Design and Style
	In my view, there were two possible approaches: (1) to focus on the geographic connection and emphasize it further, or (2) to detach from the geographic layout and concentrate on the relationships between bus lines and stops. Both have their pros and cons, but I chose the second option — mainly because it offers more creative freedom in how the map can be designed.

	![The London underground and the bus network in central Stockholm](../img/transit/comparison "The London underground map (left) has low geographic accuracy. The maps of the Stockholm bus network have high geographic accuracy (right).")

	I took a lot of inspiration from subway map design, particularly from the subway systems in Stockholm, Oslo, and London. I straightened bus lines as much as possible and fixed them at 45-degree angles.

	## Present & Further Development
	The map can be viewed online, though the live aspect isn't implemented yet. For now, the project is on hold, but I plan to continue it when I have time.

	If there's one thing I'd like to improve about the map, it's its recognizability and character. I want people to immediately think, “This is Umeå,” when they see it.
`,
	position: 40,
	resources: [{
		type: 'webpage',
		text: 'Live site',
		href: "https://transit.christofferbillman.se"
	},
	{
		type: 'code',
		text: 'Soruce',
		href: "https://github.com/ChristofferBillman/umea-transit-map"
	},
	]
}
	, {
	id: 'knap',
	name: 'Knåp',
	title: 'Daily Missions for the Elderly and Their Families',
	thumbnail: '../img/knap/promo',
	colors: ['#141414', '#F6B96D', '#3C3C3C'],
	content: `
	![Different views of the app.](../img/knap/showcase "")
	## What Was the Task?
	As part of the course “Innovative Mobile Services and Systems” we, a team of six, developed an app. The course theme was “agetech”, meaning technology for elderly people. Our team's specific question was, “How do we empower elderly in their daily lives?”

	## Idé & Koncept
	We developed an app called Knåp, Swedish for "Crafts" or "Potter", usually used to refer to small puzzles and challenges in magazines. In Knåp, users receive daily challenges, such as taking a walk, taking a photo with a friend, or solving a crossword puzzle. As proof, users take a photo related to the task and post it. This photo becomes visible to all of their friends. The idea was also that family members, like grandchildren, could use Knåp as well, which could strengthen family bonds and reduce loneliness among the elderly.

	## Development
	We assigned each team member a distinct role with a primary responsibility. The roles were “Scrum Master, Design Lead, Frontend, Backend, Gen. AI Prompt Expert 😎, and AI Classification Pro 😎.” Of course, people could work on other tasks as well, as long as they managed their primary responsibilities.

	![The roles Scrum Master and Frontend and their respective areas of responsibility.](../img/knap/responsibilities "The roles and responsibilities assigned to me.")

	For planning and sprint retrospectives, we frequently used FigJam in Figma, which is like a digital whiteboard. To manage and coordinate app development, we used Azure DevOps. We built the app with Expo and React Native, and for the backend, we used Google's Firebase.

	## AI Integrations
	Another course theme was AI, so we aimed to integrate various AI features into our app. For example, when users took a photo, they received a witty comment about its content. Object recognition in the image was handled by a pre-trained model running on the user's device, which returned a list of objects with confidence scores. The top object was included in a prompt to ChatGPT, which generated a witty comment.

	Another AI integration was generating the “daily missions” (or “knåpen”) with ChatGPT, so they would be new and unique each day.

	![Three prototypes in different stages of an AI feature, Lo-Fi, Mid-Fi och Hi-Fi](../img/knap/progression "The view where you can pick your daily mission. The progression from Lo-Fi, Mid-Fi, to Hi-Fi is seen from left to right.")
`,
	position: 70
}, {
	id: 'greetup',
	name: 'GreetUp',
	title: 'An App to Reduce Loneliness Among Elderly in Australia',
	thumbnail: '../img/greetup/cover',
	colors: ['#167F56', '#1EAE75', '#79C2A5'],
	content: `
	![alt](../img/greetup/promo "")
	## The Task
	Was carried out as part of the course "Technology for Social Media," where we collaborated with marketing students from Edith Cowan University in Australia. They handled market research and the business idea, while we in Sweden acted as the development team. A course requirement was that we would realize an idea that reduces loneliness among the elderly in Australia.

	All members of my team were also taking the course “Application Development for the Internet.” This allowed us to combine the final projects of both courses into one. This gave us a total of 5 full weeks to realize the idea.

	## Idea & Concept
	Our idea was GreetUp - Explore your neighborhood today! The concept was that users could create and participate in various events within the app. Since the target audience was so clear and specific, we could fully focus on tailoring the app to meet their needs. High contrast, large buttons, and clear navigation hierarchy were areas we paid extra attention to.

	## The Technical Part
	We built the frontend as a PWA (Progressive Web Application) in React. For the user, this means they can click “add to home screen” when on the website. The website then behaves much more like a native app, without the typical graphical elements of a browser, such as the search bar and navigation buttons.

	The API was built in C# using ASP.NET MVC. We also used Entity Framework, which is an ORM (Object Relational Mapper). This allowed us to write data models and their relationships in C#. Based on the data models, Entity Framework generated an SQL database for us using a method called “Code First.”

	## Reflection
	Since the project was so extensive, it required us to have more structured workflows and methods. It was the first time I worked properly with agile methodologies, such as daily standups, sprints, and retrospectives. Furthermore, it required us to use git and GitHub in a completely different way than before. We learned about merging strategies, branching, pull requests, CI/CD, and more.
`,
	position: 80,
	resources: [{
		type: 'code',
		text: 'Source',
		href: "https://github.com/emmylindgren/GreetUp"
	}, {
		type: 'figma',
		text: 'Design file',
		href: "https://www.figma.com/design/7O1ugqdH0yDd0b9ZtMeNPQ/GreetUP?node-id=2-4&t=mbe8sO5F79Lbaz3H-1"
	}]
}, {
	id: 'yotei',
	name: 'Yotei',
	title: 'Planning Tool for a Local Budo Club',
	thumbnail: '../img/yotei/promo',
	colors: ['#A73439', '#761818', '#A73439', '#282828'],
	content: `
	![alt](../img/yotei/promo_big "")
	## What?
	As part of the course “Software Engineering”, I along with 50 other students, developed a planning tool for a local Budo club. The course consisted of 3 weeks of intensive theory on software engineering and 7 weeks of development time. One unique aspect of the course was that after the theory part, the work was almost entirely managed by the students, with minimal influence from the course instructors and mentors.

	Another interesting condition was that we inherited last year's codebase. Understanding, extending, and improving an existing codebase, with minimal documentation, was an experience that was highly valuable.

	## How Did We Organize the Project?
	To organize the entire development work, we used Spotify's model for agile project management. The group was divided into different teams (or squads), each responsible for a specific part of the app, such as the main menu or settings. Members in each squad were also assigned responsibilities within a particular area of expertise, such as backend, testing/pipeline, frontend, design, etc. All the people within a specific area of expertise formed a new group, known as a “chapter”.

	This approach allowed each squad to work relatively independently while sharing knowledge and insights within their chapter.

	I was part of the squad responsible for the “techniques” part. I was part of the frontend chapter for the most part, but joined the scrum master/PO chapter during a sprint.

	## The Technology
	The frontend was a web application written in JavaScript and React. The backend was built as a REST API using Java SpringBoot. Everything was deployed in a Docker container on a server provided by the university. This server also ran the CI/CD pipeline, which included unit tests, E2E tests, and deployment scripts.

	The project was run as a multi-repo, divided into “backend,” “frontend,” “infra,” and “docs.” By the end of the course, a total of 782 (!!!) merge requests had been approved and merged across these repositories.

	## Workshop
	The vast majority of students had never worked with React or frontend development at all. This was also where the greatest need for improvement existed. With this background, I took the initiative and organized a React workshop. More than half of the students in the course participated, and many appreciated the workshop, feeling it prepared them to dive into the development work.

	## My Role
	Early on in the project, I spent some time with the design team to create a new graphic profile and identity. I had created a proposal, which ultimately was not included in the project, as prioritizing the start of the development work was considered more important.

	Since I was one of the few who knew React, I, along with another student, became de facto mentors in frontend development. We ran around a lot, helping different teams with frontend-related issues, something I believe contributed to how far we managed to get.

	![Three views of my design proposal](../img/yotei/myversion "Three views in my design proposal. A main thought of the design was to consolidate all actions on a page in an 'action strip' at the top.")

	## Takeaways
	This period during my studies might have been one of the most intense and challenging — but also one of the most fun and rewarding. I got to work with a wide variety of tasks, under significant personal responsibility, something I would gladly do again. It was also very fun and fulfilling to take on a mentoring role.

	Working with so many people on a single development project was an incredibly large organizational challenge. It's amazing that it all came together — but it did.
`,
	position: 90,
	resources: [{
		type: 'figma',
		text: 'Design file',
		href: "https://www.figma.com/design/64zymyGJSp7BuQthnOhvMt/PVT?node-id=1-68&t=BWnl0eXCgXBLfSoa-1"
	}, {
		type: 'pdf',
		text: 'Beginners guide - React Hooks (in Swedish)',
		href: "../React Hooks Cheatsheet.pdf"
	}, {
		type: 'pdf',
		text: 'Presentation - React Workshop (in Swedish)',
		href: "../React Workshop.pdf"
	}]
}
]