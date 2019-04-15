const mdLinks = require("../src/index.js");
const pathAbsolute = "/foo/bar";
const pathNotAbsolute = ".";


describe("validatePathExist" , () => {
  it("vlaidatePathExist is a function", () => {
    expect(typeof (mdLinks.validatePathExist)).toBe("function");
  });

  it("Validate path exist" , () => {
    expect(mdLinks.validatePathExist(pathAbsolute)).toEqual(true);
  });

  it("Validate path doesn't exist" , () => {
    expect(mdLinks.validatePathExist()).toEqual(false);
  });

});

describe("validatePathAbsolute", () => {
  it("validatePathAbsolute is a function", () =>{
    expect(typeof (mdLinks.validatePathAbsolute)).toBe("function");
  });

  it("It's a absolute path", () =>{
    expect(mdLinks.validatePathAbsolute(pathAbsolute)).toEqual(true);
  });

  it("It isn't a absolute path", () =>{
    expect(mdLinks.validatePathAbsolute(pathNotAbsolute)).toEqual(false);
  });

});