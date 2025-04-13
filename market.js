// Top 25 Trending Skills Data
const skills = [
  { name: "Machine Learning", description: "Algorithms that allow systems to learn from data.", highestPackage: "$200,000", companies: ["Google", "Amazon", "Microsoft"], jobTips: "To break into Machine Learning, start with Python and TensorFlow, and build a strong foundation in data structures and algorithms." },
  { name: "Artificial Intelligence", description: "Creating systems that mimic human intelligence.", highestPackage: "$210,000", companies: ["Facebook", "Apple", "Tesla"], jobTips: "Study deep learning, neural networks, and NLP. Contribute to open-source AI projects to get noticed." },
  { name: "Cloud Computing", description: "Managing cloud infrastructure and services.", highestPackage: "$180,000", companies: ["AWS", "Google Cloud", "IBM"], jobTips: "Gain certifications from AWS or Azure. Knowledge of infrastructure as code (IaC) is highly valued." },
  { name: "Cybersecurity", description: "Protecting systems from digital attacks.", highestPackage: "$180,000", companies: ["Crowdstrike", "Palo Alto Networks", "FireEye"], jobTips: "Learn about firewalls, intrusion detection systems, and ethical hacking. Cybersecurity certifications like CISSP are valuable." },
  { name: "Data Science", description: "Data analysis and predictive analytics.", highestPackage: "$220,000", companies: ["Netflix", "LinkedIn", "Spotify"], jobTips: "Master Python, SQL, and data visualization tools. Participate in data science competitions like Kaggle." },
  { name: "Deep Learning", description: "Advanced machine learning with neural networks.", highestPackage: "$230,000", companies: ["Nvidia", "OpenAI", "Google"], jobTips: "Focus on neural networks, especially convolutional and recurrent networks. Experience with GPUs will boost your profile." },
  { name: "Blockchain", description: "Developing decentralized applications.", highestPackage: "$250,000", companies: ["Ethereum", "Blockchain Inc.", "IBM"], jobTips: "Understand blockchain architecture and smart contract development. Contribute to blockchain projects and participate in hackathons." },
  { name: "Web Development", description: "Building websites using various technologies.", highestPackage: "$120,000", companies: ["GitHub", "Stack Overflow", "Trello"], jobTips: "Become proficient in HTML, CSS, JavaScript, and frameworks like React or Vue.js. Build projects to showcase your skills." },
  { name: "Mobile App Development", description: "Creating applications for mobile platforms.", highestPackage: "$150,000", companies: ["Apple", "Uber", "Lyft"], jobTips: "Master Swift for iOS and Kotlin for Android. Build and publish your own apps on app stores." },
  { name: "Robotic Process Automation", description: "Automating repetitive tasks using bots.", highestPackage: "$170,000", companies: ["UiPath", "Automation Anywhere", "Blue Prism"], jobTips: "Get certified in RPA tools and learn how to integrate RPA with AI and ML." },
  { name: "DevOps", description: "Combining development and IT operations for efficiency.", highestPackage: "$160,000", companies: ["Netflix", "Uber", "Airbnb"], jobTips: "Familiarize yourself with CI/CD pipelines, Docker, Kubernetes, and cloud services like AWS and Azure." },
  { name: "AR & VR", description: "Creating immersive environments for various purposes.", highestPackage: "$200,000", companies: ["Oculus", "Microsoft", "Sony"], jobTips: "Work on projects involving Unity or Unreal Engine and explore ARKit/ARCore for mobile development." },
  { name: "Big Data", description: "Managing large volumes of structured and unstructured data.", highestPackage: "$190,000", companies: ["Hadoop", "Cloudera", "Deloitte"], jobTips: "Learn Hadoop, Spark, and data warehousing. Understand how to work with both batch and real-time data." },
  { name: "IoT", description: "Connecting physical devices to the internet.", highestPackage: "$180,000", companies: ["Cisco", "GE", "Intel"], jobTips: "Gain experience in embedded systems, sensor networks, and cloud integration for IoT solutions." },
  { name: "Quantum Computing", description: "Using quantum mechanics for complex computing.", highestPackage: "$300,000", companies: ["IBM", "Google", "Microsoft"], jobTips: "Start with quantum programming languages like Q# and familiarize yourself with quantum algorithms." },
  { name: "Edge Computing", description: "Processing data closer to the source of data generation.", highestPackage: "$200,000", companies: ["Amazon", "Microsoft", "EdgeX"], jobTips: "Understand edge device programming, cloud integration, and data processing in real-time." },
  { name: "NLP", description: "Teaching computers to understand human language.", highestPackage: "$200,000", companies: ["Google", "IBM", "Amazon"], jobTips: "Learn about text classification, sentiment analysis, and language models like GPT and BERT." },
  { name: "5G Technology", description: "Next-gen wireless technology for faster speeds.", highestPackage: "$180,000", companies: ["Qualcomm", "Huawei", "Nokia"], jobTips: "Stay up-to-date with 5G standards and network management. Expertise in mobile networks will help you get hired." },
  { name: "Agile Project Management", description: "Iterative approach to software development.", highestPackage: "$150,000", companies: ["Scrum Alliance", "Atlassian", "Trello"], jobTips: "Get certified in Agile and Scrum methodologies. Prior experience leading Agile teams will make you stand out." },
  { name: "Digital Marketing", description: "Using digital channels for product promotion.", highestPackage: "$140,000", companies: ["Google", "Facebook", "HubSpot"], jobTips: "Become proficient in SEO, SEM, social media marketing, and email campaigns. Google Analytics certification is a plus." },
  { name: "Data Engineering", description: "Designing and maintaining data pipelines.", highestPackage: "$180,000", companies: ["Netflix", "Airbnb", "Spotify"], jobTips: "Master tools like Apache Kafka, Spark, and SQL to build scalable data pipelines." },
  { name: "Business Intelligence", description: "Analyzing business data for decision making.", highestPackage: "$160,000", companies: ["Tableau", "Power BI", "SAP"], jobTips: "Learn data visualization tools like Tableau, Power BI, and gain expertise in SQL for data querying." },
  { name: "Salesforce Development", description: "Customizing and developing Salesforce applications.", highestPackage: "$170,000", companies: ["Salesforce", "Accenture", "Deloitte"], jobTips: "Get Salesforce certified and learn Apex, Lightning, and Visualforce." },
  { name: "UX/UI Design", description: "Designing user interfaces for better experiences.", highestPackage: "$150,000", companies: ["Adobe", "Figma", "Slack"], jobTips: "Create interactive designs and master tools like Figma, Sketch, or Adobe XD. Keep user experience at the forefront of your designs." },
  { name: "Video Production", description: "Creating and editing high-quality videos.", highestPackage: "$130,000", companies: ["YouTube", "Vimeo", "Netflix"], jobTips: "Learn video editing software like Adobe Premiere or Final Cut Pro and build a portfolio of your work." }
];

// Populate skills list on page load
const skillsListElement = document.getElementById("skillsList");
skills.forEach(skill => {
  const skillElement = document.createElement("li");
  skillElement.classList.add("p-4", "bg-white", "rounded-lg", "shadow-md", "cursor-pointer", "hover:bg-gray-200");
  skillElement.innerText = skill.name;
  skillElement.onclick = () => displaySkillDetails(skill);
  skillsListElement.appendChild(skillElement);
});

// Function to display skill details
function displaySkillDetails(skill) {
  const detailsSection = document.getElementById("skillDetails");
  const resultsSection = document.getElementById("resultsSection");
  detailsSection.innerHTML = `
    <h3 class="text-xl font-semibold">${skill.name}</h3>
    <p class="text-gray-700 mb-4">${skill.description}</p>
    <p><strong>Highest Package:</strong> ${skill.highestPackage}</p>
    <p><strong>Top Companies Hiring:</strong></p>
    <ul class="list-disc pl-6">
      ${skill.companies.map(company => `<li>${company}</li>`).join("")}
    </ul>
    <h4 class="mt-4 font-semibold">AI Job Prediction</h4>
    <p class="text-gray-700">${skill.jobTips}</p>
  `;
  resultsSection.classList.remove("hidden");
}

// Function to search for a skill
function searchSkill() {
  const skillInput = document.getElementById("skillInput").value.toLowerCase();
  const skill = skills.find(s => s.name.toLowerCase().includes(skillInput));
  if (skill) {
    displaySkillDetails(skill);
  } else {
    alert("Skill not found. Please try again.");
  }
}
