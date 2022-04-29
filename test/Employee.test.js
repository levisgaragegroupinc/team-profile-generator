// EMPLOYEE TEST
const NewEmployee = require("../lib/classes/employee");

// INITIALLIZE
describe("NewEmployee", () => {
  describe("Initialization", () => {
    it("should return an object containing employee properties.", () => {
      const employeeObj = new NewEmployee(
        "Jarvis",
        1010,
        "jarvis@skiforce.com"
      );
      expect(employeeObj.name).toEqual("Jarvis");
      expect(employeeObj.id).toEqual(1010);
      expect(employeeObj.email).toEqual("jarvis@skiforce.com");
    });
  });
  describe("methods", () => {
    it("should return employee name with getName()", () => {
      const employeeObj = new NewEmployee(
        "Jarvis",
        1010,
        "jarvis@skiforce.com"
      );
      expect(employeeObj.getName()).toEqual("Jarvis");
    });
    it("should return employee id with getId()", () => {
      const employeeObj = new NewEmployee(
        "Jarvis",
        1010,
        "jarvis@skiforce.com"
      );
      expect(employeeObj.getId()).toEqual(1010);
    });
    it("should return employee role with getRole()", () => {
      const employeeObj = new NewEmployee(
        "Jarvis",
        1010,
        "jarvis@skiforce.com"
      );
      expect(employeeObj.getRole()).toEqual("Employee");
    });
    it("should return employee email with getEmail()", () => {
      const employeeObj = new NewEmployee(
        "Jarvis",
        1010,
        "jarvis@skiforce.com"
      );
      expect(employeeObj.getEmail()).toEqual("jarvis@skiforce.com");
    });
  });
});
