// ENGINEER TEST
const NewEngineer = require("../lib/classes/engineer");

// Edit code below
describe("NewEngineer", () => {
  describe("Initialization", () => {
    // Positive test
    it("should return an object with engineer properties", () => {
      const engineerObj = new NewEngineer(
        "Joran",
        1218,
        "joran@skiforce.com",
        "joransmith"
      );
      // expect(engineerObj).toEqual(true);
      expect(engineerObj.name).toEqual("Joran");
      expect(engineerObj.id).toEqual(1218);
      expect(engineerObj.email).toEqual("joran@skiforce.com");
      expect(engineerObj.github).toEqual("joransmith");
    });
    // it('', () => {
    //   // Arrange
    //   // Act
    //   // Assert
    // });
  });
});
