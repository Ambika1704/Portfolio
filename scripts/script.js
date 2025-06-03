// This script initializes the EmailJS service and handles form submission
  (function() {
    emailjs.init("hrLM5-R8VkrzXHR-V"); 
  })();

// Add event listener to the form submission
  window.onload = function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("service_bmlfu44", "template_ltos228", this)
        .then(function () {
          alert("Message sent successfully!");
          document.getElementById("contactForm").reset(); 
        }, function (error) {
          alert("Failed to send message. Please try again.");
          console.log(error);
        });
    });
  };


// Function to toggle the visibility of the navigation menu

function toggleDetails(event, id) {
  event.preventDefault();
  event.stopPropagation();

  const detailsBox = document.getElementById(id);

  const allBoxes = document.querySelectorAll('.edu-details-box');
  allBoxes.forEach(box => {
    if (box !== detailsBox) box.classList.remove('show');
  });

  detailsBox.classList.toggle('show');
}

document.addEventListener('click', function (e) {

  const openBox = document.querySelector('.edu-details-box.show');
  if (openBox) {
    const clickedInsideBox = openBox.contains(e.target);
    const clickedLink = e.target.closest('.view-more-link');

    if (!clickedInsideBox && !clickedLink) {
      openBox.classList.remove('show');
    }
  }
});

// Function to handle the modal for certificates
const certificates = {
  ml: {
    title: "Machine Learning & AI",
    list: [
    {
        title: "Machine Learning with Python: Foundations",
        skills: "Data Preprocessing & Feature Engineering, Python, Reinforcement Learning",
        credential: "https://www.linkedin.com/learning/certificates/f2e67f8ce3ce8e1d79f3140cce0f6e7d6cd6b87a4080ede4857a390f706bd079?trk=share_certificate",
    },
    {
        title: "Getting and Cleaning Data",
        skills: "Data Management, Data Cleaning, Data Manipulation, Data Import and Export",
        credential: "https://coursera.org/share/dc246314ba88e4e10ddd3fe603ef0ab0"
    }
  ]
},
  da: {
    title: "Data Analytics & Visualization",
    list: [
    {
      title:"Tableau",
      skills: "Tableau",
      credential: "https://www.linkedin.com/learning/certificates/e14d920733860bf40684d5cfd459e276567a396d7e4ba67bda64ee2cca13ae0b?trk=share_certificate"
    },
    {
      title: " Certifying Organization- Professional Certifications and Continuing Education Units (CEUs)",
      skills: "Tableau",
      credential: "https://www.linkedin.com/learning/certificates/567dc6301483f3c4bb980c4b483e63f3321939179cd92e9039739a32d3d05d45?trk=share_certificate"
    },
    {
      title: "Introduction to Data Analytics",
      skills: "Data Analysis,Data Warehousing, Data Collection, Microsoft Excel,Data Cleansing, Data Lakes, Data Science",
      credential: "https://coursera.org/share/d0215fdb99f971c91b6ef21dcd7dc037"
    },
    {
      title: "The Structured Query Language (SQL)",
      skills: "Data Analysis, Data Manipulation, Query Languages, Data Integrity, Relational Databases, database administration, Database Theory, SQL, Database Application",
      credential: "https://coursera.org/share/e1b0c230fd208d20c60c381abd845988"
    },
    {
      title: "Certifying Organization Meta- Statistics Foundations",
      skills: "Spreadsheet Software, Data Analysis, Time Series Analysis and Forecasting, Descriptive Statistics, Probability & Statistics, Tableau Software",
      credentials: "https://coursera.org/share/aff326672d0799b8f501ce44f15f008e"
    }
  ]
  },
  sd: {
    title: "Software Development",
    list: [
    {
    title: "Introduction to HTML, CSS, & JavaScript",
    skills: "Html, CSS, JavaScript, Bootstrap (Front-End Framework)",
    credential: "https://coursera.org/share/43b6f1ffa97204fc4852c6884c9931e2"
    },
    {
    title: "Software Engineering: Implementation and Testing",
    skills: "Project Management, Software Testing, Unit Testing, Unified Modeling Language, Requirements Analysis, Configuration Management, Software Development Life Cycle",
    credential: "https://coursera.org/share/22b157a74b488b6a2e318ad37693286d"
    },
    {
      title: "Certifying Organization Google- Crash Course on Python",
      skills: "Development Environment, Computational Thinking, Scripting, Algorithms, Computer Programming, Programming Principles, Debugging, Integrated Development Environments",
      Credential: "https://coursera.org/share/ffa655216c123e328eab21c2733a3e5d"
    }
    ]
  },
  ns: {
    title: "Networking & Security",
    list:[
    {
      title: "Basics of Cisco Networking",
      skills: "Command-Line Interface, OSI Models, Network Infrastructure, Network Routing, Network Security, General Networking, Local Area Networks, Network Administration",
      credential: "https://coursera.org/share/d8cdc63ed283f39a790cf2e6497165d9"
    },
    {
      title: "Introduction to TCP/IP",
      skills: "File Transfer Protocol (FTP), Intrusion Detection and Prevention, Network Security, Network Routing, System Configuration, General Networking, Dynamic Host Configuration Protocol (DHCP)",
      credential: "https://coursera.org/share/4ce81a9c775e2b395de7b881f9e8d9d6"
    }
    ]
  }
};
function openModal(category) {
  const modal = document.getElementById("certModal");
  const title = document.getElementById("modalTitle");
  const list = document.getElementById("modalList");

  const data = certificates[category];
  title.textContent = data.title;
  list.innerHTML = "";

  if (data.list) {
    data.list.forEach(cert => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${cert.title}</strong><br>
        Skills Gained: ${cert.skills}<br>
        <button class="credential-btn" onclick="window.open('${cert.credential}', '_blank')">Credential</button>`;
      list.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${data.title}</strong><br>
      Skills Gained: ${data.skills}<br>
      <button class="credential-btn" onclick="window.open('${data.credential}', '_blank')">Credential</button>`;
    list.appendChild(li);
  }

  modal.style.display = "flex";
}



function closeModal() {
  document.getElementById("certModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("certModal");
  if (event.target === modal) {
    closeModal();
  }
};

// Function to handle the scroll to top button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        
        console.log("Navigating to:", target); 
        
        if (target) {
            const headerHeight = document.querySelector(".header").offsetHeight;
            window.scrollTo({
                top: target.offsetTop - headerHeight - 20,
                behavior: "smooth"
            });
        }
    });
});

// Function to handle the scroll to top button
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section"); 

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate"); 
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
});

// Function to handle the scroll to top button
function toggleDetails() {
  const box = document.getElementById("bcaDetails");
  box.style.display = box.style.display === "block" ? "none" : "block";
}