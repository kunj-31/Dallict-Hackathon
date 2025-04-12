const skillData = {
    "React": {
      growth: [40, 52, 60, 70, 85],
      companies: ["Meta", "Netflix", "Airbnb", "TCS", "Infosys"],
      salary: "₹26 LPA",
      tips: "Learn Next.js and TypeScript with React. Build real projects. Explore frontend architecture and SSR."
    },
    "Python": {
      growth: [45, 55, 62, 68, 75],
      companies: ["Google", "Microsoft", "Zomato", "Swiggy", "Flipkart"],
      salary: "₹35 LPA",
      tips: "Master libraries like Pandas, Django, NumPy. Contribute to open source and build ML mini-projects."
    },
    "Java": {
      growth: [35, 45, 50, 60, 68],
      companies: ["Infosys", "Wipro", "IBM", "Oracle", "TCS"],
      salary: "₹24 LPA",
      tips: "Deep dive into Spring Boot, DSA, and system design. Practice coding rounds from LeetCode."
    },
    "SQL": {
      growth: [30, 40, 50, 60, 65],
      companies: ["Accenture", "TCS", "Capgemini", "Amazon", "Flipkart"],
      salary: "₹18 LPA",
      tips: "Focus on advanced joins, indexing, query optimization, and DBMS concepts."
    },
    "JavaScript": {
      growth: [40, 50, 60, 72, 80],
      companies: ["Google", "Paytm", "Flipkart", "Zerodha", "BrowserStack"],
      salary: "₹28 LPA",
      tips: "Master ES6+, async/await, closures, and build SPA using JS frameworks."
    },
    "Node.js": {
      growth: [42, 50, 58, 66, 78],
      companies: ["Paytm", "Swiggy", "Zerodha", "CRED", "Groww"],
      salary: "₹30 LPA",
      tips: "Learn REST APIs, Express.js, MongoDB. Deploy fullstack apps and master async concepts."
    },
    "Cybersecurity": {
      growth: [35, 45, 55, 67, 78],
      companies: ["Cisco", "HCL", "TCS", "EY", "KPMG"],
      salary: "₹40 LPA",
      tips: "Get certified (CEH, OSCP), do ethical hacking, participate in bug bounty programs."
    },
    "Cloud Computing": {
      growth: [38, 50, 65, 78, 85],
      companies: ["AWS", "Azure", "Google Cloud", "IBM", "Oracle"],
      salary: "₹45 LPA",
      tips: "Certify in AWS, GCP or Azure. Deploy scalable apps and understand cloud security."
    },
    "Data Science": {
      growth: [42, 56, 68, 77, 88],
      companies: ["Google", "LinkedIn", "Fractal", "MuSigma", "Tiger Analytics"],
      salary: "₹48 LPA",
      tips: "Learn ML, deep learning, Python, and statistics. Work on data-driven projects."
    },
    "Flutter": {
      growth: [30, 42, 50, 58, 70],
      companies: ["Dream11", "Razorpay", "CRED", "WhiteHat Jr", "Tata Digital"],
      salary: "₹22 LPA",
      tips: "Master Dart, UI design, Firebase integration, and publish apps on Play Store."
    }
  };
  
  document.getElementById('skillSelect').addEventListener('change', (e) => {
    const skill = e.target.value;
    const data = skillData[skill];
    if (!data) return;
  
    document.getElementById('result').classList.remove('hidden');
  
    // Update companies
    const companies = document.getElementById('companies');
    companies.innerHTML = '';
    data.companies.forEach(c => {
      const li = document.createElement('li');
      li.textContent = c;
      companies.appendChild(li);
    });
  
    // Update salary and tips
    document.getElementById('salary').textContent = data.salary;
    document.getElementById('tips').textContent = data.tips;
  
    // Draw chart
    const ctx = document.getElementById('growthChart').getContext('2d');
    if (window.chartInstance) window.chartInstance.destroy();
    window.chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["2021", "2022", "2023", "2024", "2025"],
        datasets: [{
          label: `${skill} Growth (%)`,
          data: data.growth,
          backgroundColor: "rgba(59,130,246,0.2)",
          borderColor: "#3B82F6",
          borderWidth: 2,
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  });
  