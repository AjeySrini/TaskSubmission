const resume= {
  "Name": "Ajey Srinivasu",
  "E-mail": "ajeysrini@gmail.com",
  "Phone": "8754070454",
  "Summary": "Experienced software engineer with expertise in Back-end development and a passion for creating innovative solutions in a simple and effective way.",
  "Education": [
    {
      "Degree": "Bachelor of Science in Civil Engineering",
      "Institution": " Builders Engineering College ",
      "Location": "Kangayam, TamilNadu",
      "Date": "May 2016"
    }
  ],
  "Experience": [
    {
      "Title": "Software Developer",
      "Company": "Tech StarIT service Pvt ltd",
      "Location": "Chennai, TamilNadu",
      "StartDate": "March 2022",
      "EndDate": "Aug 2022",
      "Description": "Develop and maintain web applications using technologies such as Spring Boot , Java, oracle Db and Postgres DB."
    },
    {
      "Title": "Technology Analyst",
      "Company": "Infosys ",
      "Location": " Chennai, TamilNadu ",
      "StartDate": "Jan 2013",
      "EndDate": "May 2015",
      "Description": " Develop and maintain web applications using technologies such as Spring Boot, Java, oracle Db and Postgres DB."
    }
  ],
  "Skills": [
    "Java",
    "MySQL",
    "Postman",
    "Spring Boot",
    "Spring MVC", 
    "PostgreSQL",
    "Oracle DB",
    "Git"
  ]
}

const keys = Object.keys(resume);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = resume[key];
  console.log(`${key}: ${JSON.stringify(value)}`);
}
// Using a for...in loop
for (let key in resume) {
  const value = resume[key];
  console.log(`${key}: ${JSON.stringify(value)}`);
}
// Using a for...of loop 
for (let [key, value] of Object.entries(resume)) {
  console.log(`${key}: ${JSON.stringify(value)}`);
}
// Using a forEach loop 
const skills = resume.Skills;
skills.forEach(skill => {
  console.log(skill);
});


