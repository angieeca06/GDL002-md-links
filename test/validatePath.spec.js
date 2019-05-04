const mdLinks = require("../src/validatePath.js");

describe("Should read a file", () =>{
  test ("should read a file",() => {
    mdLinks("pruebaTest.md").then((result) => {
      expect(result).toBe("Test correcto");
    });
  });
  test("should return a error", () => {
    mdLinks().then((result) =>{
      expect(result).toBe(err);
    });
  });
});
