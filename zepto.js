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
        to: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
        subject: "Application for Software Development Internship at Zepto",
        html: `
          <p>Dear ${firstName} ${lastName} ${salutation},</p>
          <p>I am Shivam Sharma, a final-year B.Tech student in Electronics and Communication Engineering at NSUT, New Delhi, writing to express my interest in the Software Development Internship role at Zepto.</p>
          <p>During my internship at Gravi Digital, I developed solutions to improve data processing efficiency, enhancing my technical skills and problem-solving ability. Additionally, I have independently built full-stack projects, including:</p>
          <ul>
            <li><strong>OneStop</strong>: A job search web scraper with a seamless UI and backend.</li>
            <li><strong>CodeLab</strong>: An integrated coding platform.</li>
            <li><strong>Genious AI</strong>: A SaaS solution for multimedia generation.</li>
          </ul>
          <p>With proficiency in C++, JavaScript, Node.js, and MongoDB, and experience solving 500+ DSA problems on LeetCode, I have a strong foundation in software development principles.</p>
          <p>I am impressed by Zepto’s innovation in the e-grocery space and would be excited to contribute to your development processes while gaining valuable experience.</p>
          <p>I am available for a six-month internship starting January 2025. Thank you for considering my application.</p>
          <p>Best regards,<br>Shivam Sharma<br>7357622773<br>shivam16.09sharma@gmail.com</p>
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
        `Email sent to ${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com}: ${
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
  {
    firstName: "Shivam",
    lastName: "Sharma",
    // email: "shivam.sharma.ug21@nsut.ac.in",
    salutation: "sir",
  },
  //   {
  //     firstName: "Shivraj",
  //     lastName: "Kumar",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Robin",
  //     lastName: "Saxena",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Priya",
  //     lastName: "Garg",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Varun",
  //     lastName: "Kumar",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Saurav",
  //     lastName: "Kumar",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Ashutosh",
  //     lastName: "Gupta",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Sameer",
  //     lastName: "Gupta",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Sriyank",
  //     lastName: "Suman",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Shobhit",
  //     lastName: "Agarwal",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Debmalya",
  //     lastName: "Chatterjee",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Shivang",
  //     lastName: "Agarwal",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Rajarshi",
  //     lastName: "Tiwari",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Rahul",
  //     lastName: "Shah",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Harsh",
  //     lastName: "Dohare",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Madhavi",
  //     lastName: "Parmar",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "ma'am",
  //   },
  //   {
  //     firstName: "Deepanshu",
  //     lastName: "Dhingra",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Aditya",
  //     lastName: "Garg",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Mihir",
  //     lastName: "Tripathi",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Vishwas",
  //     lastName: "Disawal",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Mohan",
  //     lastName: "Gorai",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Ankush",
  //     lastName: "Gupta",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Sakshi",
  //     lastName: "Gaur",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "ma'am",
  //   },
  //   {
  //     firstName: "Chahak",
  //     lastName: "Sharma",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Pranshu",
  //     lastName: "Awasthi",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Hardev",
  //     lastName: "Goyal",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Atishay",
  //     lastName: "Jain",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Harshit",
  //     lastName: "Garg",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Ankit",
  //     lastName: "Dutta",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Raghvendra",
  //     lastName: "Singh",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Jaimin",
  //     lastName: "Gandhi",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Abhishek",
  //     lastName: "Ove",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Mayank",
  //     lastName: "Mathur",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Kunal",
  //     lastName: "Katiyar",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Mrinal",
  //     lastName: "Biyani",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Lakshya",
  //     lastName: "Mathur",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Nikhil",
  //     lastName: "Mishra",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Hardik",
  //     lastName: "Khanchandani",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Garvit",
  //     lastName: "Sadhwani",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Rituka",
  //     lastName: "Patwal",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "ma'am",
  //   },
  //   {
  //     firstName: "Mohit",
  //     lastName: "Shukla",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //   {
  //     firstName: "Priyanshu",
  //     lastName: "Aggarwal",
  //     // email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@zeptonow.com`,
  //     salutation: "sir",
  //   },
  //list 2
//   {
//     firstName: "Ayush",
//     lastName: "Goel",
//     salutation: "sir",
//   },
//   {
//     firstName: "Pratham",
//     lastName: "Khare",
//     salutation: "sir",
//   },
//   {
//     firstName: "Anant",
//     lastName: "Mahajan",
//     salutation: "sir",
//   },
//   {
//     firstName: "Ashish",
//     lastName: "Kataria",
//     salutation: "sir",
//   },
//   {
//     firstName: "Apoorva",
//     lastName: "Verma",
//     salutation: "ma'am",
//   },
//   {
//     firstName: "Sakshi",
//     lastName: "Srivastava",
//     salutation: "ma'am",
//   },
//   {
//     firstName: "Gaurav",
//     lastName: "Tripathi",
//     salutation: "sir",
//   },
//   {
//     firstName: "Ravi",
//     lastName: "Verma",
//     salutation: "sir",
//   },
//   {
//     firstName: "Sasidhar",
//     lastName: "Gelivi",
//     salutation: "sir",
//   },
//   {
//     firstName: "Suyash",
//     lastName: "Mishra",
//     salutation: "sir",
//   },
//   {
//     firstName: "Abhishek",
//     lastName: "Gupta",
//     salutation: "sir",
//   },
//   {
//     firstName: "Prashant",
//     lastName: "Sharma",
//     salutation: "sir",
//   },
//   {
//     firstName: "Aditya",
//     lastName: "Saxena",
//     salutation: "sir",
//   },
//   {
//     firstName: "Sahil",
//     lastName: "Udayasingh",
//     salutation: "sir",
//   },
//   {
//     firstName: "Rutuja",
//     lastName: "Malani",
//     salutation: "ma'am",
//   },
//   {
//     firstName: "Harsh",
//     lastName: "Pandey",
//     salutation: "sir",
//   },
//   {
//     firstName: "Nitin",
//     lastName: "Patel",
//     salutation: "sir",
//   },
//   {
//     firstName: "Siva",
//     lastName: "Thota",
//     salutation: "sir",
//   },
//   {
//     firstName: "Yash",
//     lastName: "Jobanputra",
//     salutation: "sir",
//   },
//   {
//     firstName: "Divyansh",
//     lastName: "Kashyap",
//     salutation: "sir",
//   },
//   {
//     firstName: "Shubham",
//     lastName: "Sharma",
//     salutation: "sir",
//   },
//   {
//     firstName: "Manav",
//     lastName: "Kundra",
//     salutation: "sir",
//   },
//   {
//     firstName: "Prajjwal",
//     lastName: "Jaiswal",
//     salutation: "sir",
//   },
//   {
//     firstName: "Aditya",
//     lastName: "Menon",
//     salutation: "sir",
//   },
//   {
//     firstName: "Chnimay",
//     lastName: "Karnik",
//     salutation: "sir",
//   },
//   {
//     firstName: "Pratik",
//     lastName: "Tidke",
//     salutation: "sir",
//   },
//   {
//     firstName: "Chirag",
//     lastName: "Jain",
//     salutation: "sir",
//   },
//   {
//     firstName: "Abhinav",
//     lastName: "Gupta",
//     salutation: "sir",
//   },
//   {
//     firstName: "Anand",
//     lastName: "Jha",
//     salutation: "sir",
//   },
//   {
//     firstName: "Jaiesh",
//     lastName: "Pahlajani",
//     salutation: "sir",
//   },
//   {
//     firstName: "Dhruvil",
//     lastName: "Bhikadiya",
//     salutation: "sir",
//   },
//   {
//     firstName: "Surbhi",
//     lastName: "Agarwal",
//     salutation: "ma'am",
//   },
//   {
//     firstName: "Giriraj",
//     lastName: "Saigal",
//     salutation: "sir",
//   },
//   {
//     firstName: "Jatin",
//     lastName: "Verma",
//     salutation: "sir",
//   },
  {
    firstName: "Vikas",
    lastName: "Yadav",
    salutation: "sir",
  },
  {
    firstName: "Aman",
    lastName: "Jaiswal",
    salutation: "sir",
  },
  {
    firstName: "Nancy", //hr
    lastName: "Mittal",
    salutation: "ma'am",
  },
  {
    firstName: "Deepak",
    lastName: "Choudhary",
    salutation: "sir",
  },
  {
    firstName: "Aditya",
    lastName: "Gupta",
    salutation: "sir",
  },
  {
    firstName: "Karan",
    lastName: "Jhaveri",
    salutation: "sir",
  },
  {
    firstName: "Arpan",
    lastName: "Samariya",
    salutation: "sir",
  },
  {
    firstName: "Hari",
    lastName: "Bhaskar",
    salutation: "sir",
  },
  {
    firstName: "Gitesh",
    lastName: "Prajapati",
    salutation: "sir",
  },
  {
    firstName: "Ashish",
    lastName: "Yadav",
    salutation: "sir",
  },
  {
    firstName: "Muskan",
    lastName: "Thapar",
    salutation: "ma'am",
  },
  {
    firstName: "Piyush",
    lastName: "Raj",
    salutation: "sir",
  },
  {
    firstName: "Vikram",
    lastName: "Nande",
    salutation: "sir",
  },
  {
    firstName: "Tushar",
    lastName: "Tyagi",
    salutation: "sir",
  },
  {
    firstName: "Avichal",
    lastName: "Agrawal",
    salutation: "sir",
  },
  {
    firstName: "Sahil",
    lastName: "Yadav",
    salutation: "sir",
  },
  {
    firstName: "Priyanshi",
    lastName: "Gupta",
    salutation: "ma'am",
  },
  {
    firstName: "Rishika",
    lastName: "Patwa",
    salutation: "ma'am",
  },
  {
    firstName: "Yashi",
    lastName: "Agrawal",
    salutation: "ma'am",
  },
  {
    firstName: "Yuti",
    lastName: "Bhoir",
    salutation: "ma'am",
  },
  {
    firstName: "Mani",
    lastName: "Kaushik",
    salutation: "sir",
  },
  {
    firstName: "Prince",
    lastName: "Dholiya",
    salutation: "sir",
  },
  {
    firstName: "Shivam",
    lastName: "Arora",
    salutation: "sir",
  },
  {
    firstName: "Harshit",
    lastName: "Gupta",
    salutation: "sir",
  },
  {
    firstName: "Aakash",
    lastName: "Srivastava",
    salutation: "sir",
  },
  {
    firstName: "Rishu",
    lastName: "Sahu",
    salutation: "sir",
  },
  {
    firstName: "Rishabh",
    lastName: "Sahal",
    salutation: "sir",
  },
  {
    firstName: "Sayali",
    lastName: "Kardile",
    salutation: "ma'am",
  },
  
];

sendZeptoEmail(recipients).then(() =>
  console.log("Zepto email has been processed.")
);
