const mdLinks = require("../src/validatePath.js");
const pathAbsolute = "/foo/bar";
const pathNotAbsolute = ".";
const pathMd = "ReadMe.md";
const pathNotMd = "validate.js";

describe("validatePathExistWithExtensionMd" , () => {
  it("vlaidatePathExist is a function", () => {
    expect(typeof (mdLinks.validatePathExistWithExtensionMd)).toBe("function");
  });

  it("Validate path exist" , () => {
    expect(mdLinks.validatePathExistWithExtensionMd(pathMd)).toEqual(true);
  });

  it("Validate path doesn't exist" , () => {
    expect(mdLinks.validatePathExistWithExtensionMd(pathNotMd)).toEqual(false);
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

describe("transformRelativePath", () => {
  it("transformRelativePath is a function", () => {
    expect(typeof (mdLinks.transformRelativePath)).toBe("function");
  });

  it("Transform a absolute path to relative path", () => {
    expect(mdLinks.transformRelativePath("kitten.png"))
    .toEqual("C:\\Users\\PERSONAL\\Laboratoria\\GDL002-md-links\\kitten.png");
  });
});

describe("checkIfTheFileExistInADirectiry", () =>{
  it("Check if the file exist in a directory", () => {
    expect(mdLinks.checkIfTheFileExistInADirectiry("prueba.md"))
    .toBe("El archivo existe en el directorio");
  });
});

describe("Should read a file", () =>{
  test ("should read a file",()=>{
    mdLinks.readFileMd("prueba.md").then((result) => {
      expect(result).toBe("Test correcto");
    });
  });
});