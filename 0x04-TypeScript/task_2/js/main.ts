// -----------------------------
// Advanced types - Part 1
// -----------------------------

// 1️⃣ Director Interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// 2️⃣ Teacher Interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// 3️⃣ Director Class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// 4️⃣ Teacher Class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// 5️⃣ Function createEmployee
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// 6️⃣ Example test logs
console.log(createEmployee(200).constructor.name);   // Teacher
console.log(createEmployee(1000).constructor.name);  // Director
console.log(createEmployee('$500').constructor.name); // Director


// Function isDirector
// -----------------------------
function isDirector(employee) {
  return employee instanceof Director;
}

// -----------------------------
// Function executeWork
// -----------------------------
function executeWork(employee) {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// -----------------------------
// Example usage
// -----------------------------
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks

// -----------------------------
// String Literal Types
// -----------------------------
type Subjects = "Math" | "History";

function teachClass(todayClass:Subjects) { // no space: todayClass:Subjects
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

// -----------------------------
// Example logs
// -----------------------------
console.log(createEmployee(200).constructor.name);    // Teacher
console.log(createEmployee(1000).constructor.name);   // Director
console.log(createEmployee("$500").constructor.name); // Director

console.log(executeWork(createEmployee(200)));    // Getting to work
console.log(executeWork(createEmployee(1000)));   // Getting to director tasks

console.log(teachClass("Math"));    // Teaching Math
console.log(teachClass("History")); // Teaching History
