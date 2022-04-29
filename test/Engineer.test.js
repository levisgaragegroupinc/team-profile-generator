// ENGINEER TEST
const NewEngineer = require("../lib/classes/engineer");

// INITALIZE
describe("NewEngineer", () => {
  describe("Initialization", () => {
    it("should return an object with engineer properties", () => {
      const engineerObj = new NewEngineer(
        "Joran",
        1218,
        "joran@skiforce.com",
        "joransmith"
      );
      expect(engineerObj.name).toEqual("Joran");
      expect(engineerObj.id).toEqual(1218);
      expect(engineerObj.email).toEqual("joran@skiforce.com");
      expect(engineerObj.github).toEqual("joransmith");
    });
  });
  describe("methods", () => {
    it("should return role with getRole()", () => {
      const engineerObj = new NewEngineer(
        "Joran",
        1218,
        "joran@skiforce.com",
        "joransmith"
      );
      expect(engineerObj.getRole()).toEqual("Engineer");
    });
    it("should return Github with getGithub()", () => {
      const engineerObj = new NewEngineer(
        "Joran",
        1218,
        "joran@skiforce.com",
        "joransmith"
      );
      expect(engineerObj.getGithub()).toBe("joransmith");
    });
  });
});
