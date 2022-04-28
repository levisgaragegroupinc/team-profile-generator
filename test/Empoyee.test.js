// EMPLOYEE TEST
const NewEmployee = require("../lib/classes/employee");

// Edit code below
describe("NewEmployee", () => {
  describe("Initialization", () => {
    // Positive test
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
    it("should return get name", () => {
      // Arrange
      const employeeObj = new NewEmployee(
        "Jarvis",
        1010,
        "jarvis@skiforce.com"
      );
      expect(employeeObj.getName()).toEqual("Jarvis");
      // Act
      // Assert
    });
    it("should return get id", () => {
      // Arrange
      const employeeObj = new NewEmployee(
        "Jarvis",
        1010,
        "jarvis@skiforce.com"
      );
      expect(employeeObj.getId()).toEqual(1010);
      // Act
      // Assert
    });
    it("should return get role", () => {
      // Arrange
      const employeeObj = new NewEmployee(
        "Jarvis",
        1010,
        "jarvis@skiforce.com"
      );
      expect(employeeObj.getRole()).toEqual("Employee");
      // Act
      // Assert
    });

    it("should return get email", () => {
      // Arrange
      const employeeObj = new NewEmployee(
        "Jarvis",
        1010,
        "jarvis@skiforce.com"
      );
      expect(employeeObj.getEmail()).toEqual("jarvis@skiforce.com");
      // Act
      // Assert
    });
  });
});
