class User {
  constructor(firstName, lastName) {
    console.log(firstName, lastName);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const myname = new User("Ricardo", "Aguiar");

// console.log(ricardo instanceof User);

// const rasmus = { name: "rasmus"};

// console.log(rasmus instanceof User);
// console.log(typeof rasmus);

console.log(myname.firstName);

console.log(myname.getFullName());

class CV {
  constructor(jobs, educations, email) {
    this.jobs = jobs;
    this.educations = educations;
    this.email = email;
  }

  addJob(job) {
    this.jobs.push(job); // add functionality here
  }
  removeJob(job) {
    let jobs = this.jobs;
    for (i = 0; i < job.length; i++) {
      if (jobs[i].title.toLowercase === job.toLowercase);
      this.jobs.splice(i, 1);
    }

    // add functionality here
  }
  addEducation(education) {
    // add functionality here
    this.education.push[this.education];
  }

  removeEducation(education) {
    // add functionality here
  }
}

class Job {
  constructor(id, title, description, startDate, endDate) {
    // console.log(id, title, description, startDate, endDate);
    this.id = id;
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
class Education {
  constructor(id, title, school, address, startDate, endDate) {
    // console.log(id, title,, startDate, endDate);
    this.id = id;
    this.title = title;
    this.school = school;
    this.address = address;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

const job = new Job(
  222,
  "WebDev",
  "JavaScript Developer",
  new Date(2020, 01, 31),
  "current"
);
const education = new Education(
  111,
  "teacher",
  "hfy",
  { street: "main street", number: "123", city: "Odense" },
  new Date(1970, 10, 31),
  "octorber, 31 ,1975"
);

const cv = new CV([job]);

console.log(job);
console.log(education);
console.log(cv);
