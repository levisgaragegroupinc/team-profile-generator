// INTERN TEST
const NewIntern = require("../lib/classes/intern");

// Edit code below
describe("NewIntern", () => {
  describe("Initialization", () => {
    // Positive test
    it("should return an object with intern properties", () => {
      const internObj = new NewIntern(
        "Mike",
        1220,
        "mike@skiforce.com",
        "South Carolina University"
      );
      // expect(internObj).toEqual(true);
      expect(internObj.name).toEqual("Mike");
      expect(internObj.id).toEqual(1220);
      expect(internObj.email).toEqual("mike@skiforce.com");
      expect(internObj.school).toEqual("South Carolina University");
    });
    // it('', () => {
    //   // Arrange
    //   // Act
    //   // Assert
    // });
  });
});
