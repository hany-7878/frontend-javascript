/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

// -----------------------------
// Advanced types - Part 1
// -----------------------------
// 3️⃣ Director Class implementing DirectorInterface
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
// 4️⃣ Teacher Class implementing TeacherInterface
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
// 5️⃣ Function createEmployee
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
// 6️⃣ Example test logs
console.log(createEmployee(200).constructor.name); // Teacher
console.log(createEmployee(1000).constructor.name); // Director
console.log(createEmployee('$500').constructor.name); // Director

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdDQUFnQztBQUNoQywwQkFBMEI7QUFDMUIsZ0NBQWdDO0FBZ0JoQyxvREFBb0Q7QUFDcEQ7SUFBQTtJQVlBLENBQUM7SUFYQywrQkFBWSxHQUFaO1FBQ0UsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBRUQsaUNBQWMsR0FBZDtRQUNFLE9BQU8sd0JBQXdCLENBQUM7SUFDbEMsQ0FBQztJQUVELG9DQUFpQixHQUFqQjtRQUNFLE9BQU8sMkJBQTJCLENBQUM7SUFDckMsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDO0FBRUQsa0RBQWtEO0FBQ2xEO0lBQUE7SUFZQSxDQUFDO0lBWEMsOEJBQVksR0FBWjtRQUNFLE9BQU8sdUJBQXVCLENBQUM7SUFDakMsQ0FBQztJQUVELGdDQUFjLEdBQWQ7UUFDRSxPQUFPLHFCQUFxQixDQUFDO0lBQy9CLENBQUM7SUFFRCxrQ0FBZ0IsR0FBaEI7UUFDRSxPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQztBQUVELDhCQUE4QjtBQUM5QixTQUFTLGNBQWMsQ0FBQyxNQUF1QjtJQUM3QyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDL0MsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7U0FBTSxDQUFDO1FBQ04sT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBQ3hCLENBQUM7QUFDSCxDQUFDO0FBRUQsd0JBQXdCO0FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFHLFVBQVU7QUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUUsV0FBVztBQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEFkdmFuY2VkIHR5cGVzIC0gUGFydCAxXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyAx77iP4oOjIERpcmVjdG9yIEludGVyZmFjZVxyXG5pbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xyXG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XHJcbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xyXG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZztcclxufVxyXG5cclxuLy8gMu+4j+KDoyBUZWFjaGVyIEludGVyZmFjZVxyXG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XHJcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcclxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XHJcbiAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIDPvuI/ig6MgRGlyZWN0b3IgQ2xhc3MgaW1wbGVtZW50aW5nIERpcmVjdG9ySW50ZXJmYWNlXHJcbmNsYXNzIERpcmVjdG9yIGltcGxlbWVudHMgRGlyZWN0b3JJbnRlcmZhY2Uge1xyXG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdXb3JraW5nIGZyb20gaG9tZSc7XHJcbiAgfVxyXG5cclxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdHZXR0aW5nIGEgY29mZmVlIGJyZWFrJztcclxuICB9XHJcblxyXG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ0dldHRpbmcgdG8gZGlyZWN0b3IgdGFza3MnO1xyXG4gIH1cclxufVxyXG5cclxuLy8gNO+4j+KDoyBUZWFjaGVyIENsYXNzIGltcGxlbWVudGluZyBUZWFjaGVySW50ZXJmYWNlXHJcbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcclxuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnQ2Fubm90IHdvcmsgZnJvbSBob21lJztcclxuICB9XHJcblxyXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ0Nhbm5vdCBoYXZlIGEgYnJlYWsnO1xyXG4gIH1cclxuXHJcbiAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdHZXR0aW5nIHRvIHdvcmsnO1xyXG4gIH1cclxufVxyXG5cclxuLy8gNe+4j+KDoyBGdW5jdGlvbiBjcmVhdGVFbXBsb3llZVxyXG5mdW5jdGlvbiBjcmVhdGVFbXBsb3llZShzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IERpcmVjdG9yIHwgVGVhY2hlciB7XHJcbiAgaWYgKHR5cGVvZiBzYWxhcnkgPT09ICdudW1iZXInICYmIHNhbGFyeSA8IDUwMCkge1xyXG4gICAgcmV0dXJuIG5ldyBUZWFjaGVyKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBuZXcgRGlyZWN0b3IoKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDbvuI/ig6MgRXhhbXBsZSB0ZXN0IGxvZ3NcclxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMjAwKS5jb25zdHJ1Y3Rvci5uYW1lKTsgICAvLyBUZWFjaGVyXHJcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDEwMDApLmNvbnN0cnVjdG9yLm5hbWUpOyAgLy8gRGlyZWN0b3JcclxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoJyQ1MDAnKS5jb25zdHJ1Y3Rvci5uYW1lKTsgLy8gRGlyZWN0b3JcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==