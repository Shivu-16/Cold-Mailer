const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const path = require("path"); // To handle file paths

const CLIENT_ID =
  "192599778045-3b5ldr3r0qsr710h08n0ui679jb4cked.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04nIkeAZgm-WzCgYIARAAGAQSNwF-L9IrnXQPkLvXV7zP2e05wnPF_b4Lrv5JAxnKCbWvou4H2cbGVFB5Ebnzkcfoe5a-w9Z2WKE";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendZeptoEmail(recipients) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "shivam16.09sharma@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    // Path to the PDF file
    const resumePath = path.join(__dirname, "ShivamResume.pdf");

    // Loop through recipients
    for (const recipient of recipients) {
      const { firstName, lastName, salutation } = recipient;

      const mailOptions = {
        from: '"Shivam Sharma" <shivam16.09sharma@gmail.com>',
        to: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@cred.club`,
        subject: "Application for Web Dev Intern at Cred || Shivam Sharma",
        html: `
          <p>Dear ${firstName} ${lastName} ${salutation},</p>
          <p>
    I am Shivam Sharma, a final-year B.Tech student in Electronics and Communication Engineering at NSUT, New Delhi. 
    I am writing to express my interest in the Web Intern role at CRED.
  </p>

  <p>
    During my internship at Gravi Digital, I worked on real-world projects involving large datasets, which honed my technical 
    and problem-solving skills. Additionally, I’ve developed numerous projects, including:
  </p>
  <ul>
    <li><strong>OneStop:</strong> A job search web scraper with intuitive UI and seamless functionality.</li>
    <li><strong>CodeLab:</strong> An integrated coding platform optimized for user experience.</li>
    <li><strong>Genious AI:</strong> A multimedia generative SaaS solution with an interactive frontend.</li>
  </ul>

  <p>
    With 500+ DSA problems solved on LeetCode (twice achieving a top 1,000 rank), I am proficient in C++, JavaScript, React.js, 
    Tailwind CSS, and Next.js. My expertise in frontend frameworks and clean coding aligns with CRED's focus on delivering 
    exceptional user experiences.
  </p>

  <p>
    I am excited about CRED's innovative culture and am available for a six-month internship starting January 2025. 
    My CV is attached for your review.
  </p>

  <p>Thank you for considering my application. I look forward to the opportunity to contribute to your team.</p>

  <p>Best regards,
    Shivam Sharma<br>
    7357622773<br>
    <a href="mailto:shivam16.09sharma@gmail.com" style="color: #1a73e8; text-decoration: none;">shivam16.09sharma@gmail.com</a>
  </p>
        `,
        attachments: [
          {
            filename: "ShivamResume.pdf",
            path: resumePath,
          },
        ],
      };

      const result = await transporter.sendMail(mailOptions);
      console.log(
        `Email sent to ${firstName.toLowerCase()}.${lastName.toLowerCase()}@cred.club: ${
          result.response
        }`
      );
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// Example recipient
const recipients = [
  // {
  //   firstName: "Shivam",
  //   lastName: "Sharma",
  //   // email: "shivam.sharma.ug21@nsut.ac.in",
  //   salutation: "sir",
  // },
  {
    firstName: "Harish",
    lastName: "Bajiya",
    salutation: "sir",
  },
  {
    firstName: "Bala",
    lastName: "Nadella",
    salutation: "sir",
  },
  {
    firstName: "Ayush",
    lastName: "Singla",
    salutation: "sir",
  },
  {
    firstName: "Abhinav",
    lastName: "Singh",
    salutation: "sir",
  },
  {
    firstName: "Sayan",
    lastName: "Ghanti",
    salutation: "sir",
  },
  {
    firstName: "Naman",
    lastName: "Taneja",
    salutation: "sir",
  },
  {
    firstName: "Abhay",
    lastName: "Garg",
    salutation: "sir",
  },
  {
    firstName: "Kishan",
    lastName: "Nigam",
    salutation: "sir",
  },
  {
    firstName: "Chetan",
    lastName: "Dashora",
    salutation: "sir",
  },
  {
    firstName: "Shubham",
    lastName: "Sharma",
    salutation: "sir",
  },
  {
    firstName: "Shashank",
    lastName: "Gupta",
    salutation: "sir",
  },
  {
    firstName: "Sarthak",
    lastName: "Gupta",
    salutation: "sir",
  },
  {
    firstName: "Prakash",
    lastName: "Iyer",
    salutation: "sir",
  },
  {
    firstName: "Appunni",
    lastName: "M",
    salutation: "sir",
  },
  {
    firstName: "Vinay",
    lastName: "Suresh",
    salutation: "sir",
  },
  {
    firstName: "Anuj",
    lastName: "Kumar",
    salutation: "sir",
  },
  {
    firstName: "Aditya",
    lastName: "Kaithwas",
    salutation: "sir",
  },
  {
    firstName: "Tarun",
    lastName: "Saraswat",
    salutation: "sir",
  },
  {
    firstName: "Srinivas",
    lastName: "Iyengar",
    salutation: "sir",
  },
  {
    firstName: "Nishit",
    lastName: "Sharma",
    salutation: "sir",
  },
  {
    firstName: "Siddhant",
    lastName: "Srivastava",
    salutation: "sir",
  },
  {
    firstName: "Shubham",
    lastName: "Mehra",
    salutation: "sir",
  },
  {
    firstName: "Aman",
    lastName: "Malhotra",
    salutation: "sir",
  },
  {
    firstName: "Nitish",
    lastName: "Choudhary",
    salutation: "sir",
  },
  {
    firstName: "Aditya",
    lastName: "Nahak",
    salutation: "sir",
  },
  {
    firstName: "Shivam",
    lastName: "Gupta",
    salutation: "sir",
  },
  {
    firstName: "Vipul",
    lastName: "Rathore",
    salutation: "sir",
  },
  {
    firstName: "Anubhav",
    lastName: "Yadav",
    salutation: "sir",
  },
  {
    firstName: "Farees",
    lastName: "Hussain",
    salutation: "sir",
  },
  {
    firstName: "Fiery",
    lastName: "Vashi",
    salutation: "sir",
  },
  {
    firstName: "Shubham",
    lastName: "Aggarwal",
    salutation: "sir",
  },
  {
    firstName: "Rithik",
    lastName: "Jain",
    salutation: "sir",
  },
  {
    firstName: "Uttam",
    lastName: "Rana",
    salutation: "sir",
  },
  {
    firstName: "Naman",
    lastName: "Taneja",
    salutation: "sir",
  },
  {
    firstName: "Manan",
    lastName: "Jethwani",
    salutation: "sir",
  },
  {
    firstName: "Sourav",
    lastName: "Raveendran",
    salutation: "sir",
  },
  {
    firstName: "Manish",
    lastName: "Jagnani",
    salutation: "sir",
  },
  {
    firstName: "Vinay",
    lastName: "Suresh",
    salutation: "sir",
  },
  {
    firstName: "Kiran",
    lastName: "Biliyawala",
    salutation: "sir",
  },
  {
    firstName: "Kunal",
    lastName: "Barman",
    salutation: "sir",
  },
  {
    firstName: "Chirag",
    lastName: "Mittal",
    salutation: "sir",
  },
  {
    firstName: "Saket",
    lastName: "Mayank",
    salutation: "sir",
  },
  {
    firstName: "Vishal",
    lastName: "Sharma",
    salutation: "sir",
  },
  {
    firstName: "Bibin",
    lastName: "Sebastian",
    salutation: "sir",
  },
  {
    firstName: "Bhavesh",
    lastName: "Shukla",
    salutation: "sir",
  },
  {
    firstName: "Soukarja",
    lastName: "Dutta",
    salutation: "sir",
  },
  {
    firstName: "Guneet",
    lastName: "Garg",
    salutation: "sir",
  },
  {
    firstName: "Sameep",
    lastName: "Sehgal",
    salutation: "sir",
  },
  {
    firstName: "Surendra",
    lastName: "Singh",
    salutation: "sir",
  },
  {
    firstName: "Yash",
    lastName: "Gupta",
    salutation: "sir",
  },
  {
    firstName: "Prashant",
    lastName: "Pandey",
    salutation: "sir",
  },
  {
    firstName: "Anagha",
    lastName: "Joshi",
    salutation: "ma'am",
  },
  {
    firstName: "Manan",
    lastName: "Gautam",
    salutation: "sir",
  },
  {
    firstName: "Saurabh",
    lastName: "Verma",
    salutation: "sir",
  },
  {
    firstName: "Kanhaiya",
    lastName: "Agarwal",
    salutation: "sir",
  },
  {
    firstName: "Hasan",
    lastName: "Zahidi",
    salutation: "sir",
  },
  {
    firstName: "Satya",
    lastName: "Shivam",
    salutation: "sir",
  },
  {
    firstName: "Abhishek",
    lastName: "Varshney",
    salutation: "sir",
  },
  {
    firstName: "Gowtham",
    lastName: "Putti",
    salutation: "sir",
  },
  {
    firstName: "Akshay",
    lastName: "Agarwal",
    salutation: "sir",
  },
  {
    firstName: "Mohit",
    lastName: "Khare",
    salutation: "sir",
  },
  {
    firstName: "Nikhil",
    lastName: "Malviya",
    salutation: "sir",
  },
  {
    firstName: "Divyansh",
    lastName: "Garg",
    salutation: "sir",
  },
  {
    firstName: "Shweta",
    lastName: "Gulyani",
    salutation: "ma'am",
  },
  {
    firstName: "Rishabh",
    lastName: "Bisht",
    salutation: "sir",
  },
  {
    firstName: "Rahuk",
    lastName: "Chugh",
    salutation: "sir",
  },
  {
    firstName: "Suhas",
    lastName: "Kashyap",
    salutation: "sir",
  },
  {
    firstName: "Abhishek",
    lastName: "N",
    salutation: "sir",
  },
  {
    firstName: "Surbhi",
    lastName: "Airan",
    salutation: "ma'am",
  },
];

sendZeptoEmail(recipients).then(() =>
  console.log("Zepto email has been processed.")
);
