
// Define the Teacher interface
interface Teacher {
  readonly firstName: string;       // only set when initialized
  readonly lastName: string;        // only set when initialized
  fullTimeEmployee: boolean;        // always defined
  yearsOfExperience?: number;       // optional
  location: string;                 // always defined
  [key: string]: any;               // allow any other property, e.g., contract
}

// Create teachers
const teacher1: Teacher = {
  firstName: "Hana",
  lastName: "Tesfaye",
  fullTimeEmployee: true,
  location: "Dembi Dolo",
  yearsOfExperience: 2
};

const teacher2: Teacher = {
  firstName: "Abebe",
  lastName: "Kebede",
  fullTimeEmployee: false,
  location: "Addis Ababa"
};

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false
};
console.log(teacher3);

// Define Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;           // required attribute
}

// Example director
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Array of teachers
const teachersList: Teacher[] = [teacher1, teacher2, teacher3];

// Render a table in the browser
const table: HTMLTableElement = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "50%";
table.style.marginTop = "20px";

// Add table header
const headerRow = document.createElement("tr");
const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
nameHeader.style.border = "1px solid black";
nameHeader.style.padding = "8px";

const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
locationHeader.style.border = "1px solid black";
locationHeader.style.padding = "8px";

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Add teacher rows
teachersList.forEach((teacher) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = teacher.firstName;
  nameCell.style.border = "1px solid black";
  nameCell.style.padding = "8px";

  const locationCell = document.createElement("td");
  locationCell.textContent = teacher.location;
  locationCell.style.border = "1px solid black";
  locationCell.style.padding = "8px";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append table to the body
document.body.appendChild(table);

// task 3

// Define an interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Examples
console.log(printTeacher("John", "Doe"));   // Output: J. Doe
console.log(printTeacher("Hana", "Tesfaye")); // Output: H. Tesfaye


// task 4
// Interface for the constructor arguments
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface for the class itself
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Implement the class
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass({ firstName: "Hana", lastName: "Tesfaye" });

console.log(student.displayName());   // Output: Hana
console.log(student.workOnHomework()); // Output: Currently working