// MANAGER TEST
const NewManager = require("../lib/classes/manager");

// Edit code below
describe("NewManager", () => {
  describe("Initialization", () => {
    // Positive test
    it("should return an object with manager properties", () => {
      const managerObj = new NewManager("Dave", 1214, "dave@skiforce.com", 710);
      // expect(managerObj).toEqual(true);
      expect(managerObj.name).toEqual("Dave");
      expect(managerObj.id).toEqual(1214);
      expect(managerObj.email).toEqual("dave@skiforce.com");
      expect(managerObj.officeNumber).toEqual(710);
    });
  });
  describe("methods", () => {
    it("should return employee role with getRole()", () => {
      const managerObj = new NewManager("Dave", 1214, "dave@skiforce.com", 710);
      expect(managerObj.getRole()).toEqual("Manager");
    });
  });
});
