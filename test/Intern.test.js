// INTERN TEST
const NewIntern = require("../lib/classes/intern");

// INITALIZE
describe("NewIntern", () => {
  describe("Initialization", () => {
    it("should return an object with intern properties", () => {
      const internObj = new NewIntern(
        "Mike",
        1220,
        "mike@skiforce.com",
        "South Carolina University"
      );
      expect(internObj.name).toEqual("Mike");
      expect(internObj.id).toEqual(1220);
      expect(internObj.email).toEqual("mike@skiforce.com");
      expect(internObj.school).toEqual("South Carolina University");
    });
  });
  describe("methods", () => {
    it("should return role with getRole()", () => {
      const internObj = new NewIntern(
        "Mike",
        1220,
        "mike@skiforce.com",
        "South Carolina University"
      );
      expect(internObj.getRole()).toEqual("Intern");
    });
    it("should return school with getSchool()", () => {
      const internObj = new NewIntern(
        "Mike",
        1220,
        "mike@skiforce.com",
        "South Carolina University"
      );
      expect(internObj.getSchool()).toEqual("South Carolina University");
    });
  });
});
