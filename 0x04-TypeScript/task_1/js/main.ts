// -----------------------------
// Task 1: Teacher Interface
// -----------------------------

// Define the Teacher interface
interface Teacher {
  readonly firstName: string; // Only modifiable when initialized
  readonly lastName: string;  // Only modifiable when initialized
  fullTimeEmployee: boolean;  // Always defined
  yearsOfExperience?: number; // Optional
  location: string;           // Always defined
  [key: string]: any;         // Allow any additional property
}

// Example Teachers
const teacher1: Teacher = {
  firstName: "Hana",
  lastName: "Tesfaye",
  fullTimeEmployee: true,
  location: "Dembi Dolo",
  yearsOfExperience: 2,
};

const teacher2: Teacher = {
  firstName: "Abebe",
  lastName: "Kebede",
  fullTimeEmployee: false,
  location: "Addis Ababa",
};

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

console.log(teacher3);
