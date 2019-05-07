const mdLinks = require("../src/validatePath.js");

describe("Path", () =>{
  it("The relative path was converted to absolute", () =>{
    expect(mdLinks.validatePathAbsolute("./ReadMe.md")).toEqual(false);
  });
  it("It´s a path absolute", () =>{
    expect(mdLinks.validatePathAbsolute("C:/Users/PERSONAL/Laboratoria/GDL002-md-links/src/Prueba.md")).toEqual(true);
  });
});

describe("Function transform relative path", () =>{
  it("Transform a absolute path to relative path", () => {
    expect(mdLinks.transformRelativePath("kitten.png"))
    .toEqual("C:\\Users\\PERSONAL\\Laboratoria\\GDL002-md-links\\kitten.png");
  });
});

describe("The file in a current directory", () =>{
  test("File exist in a directory", () =>{
    mdLinks.checkIfTheFileExistInADirectory("./README.md").then((result) =>{
      expect(result).toBe(true);
    });
  });
  test("The file doen´t exist in a directory", () =>{
    mdLinks.checkIfTheFileExistInADirectory("./zoo.md").then((result) =>{
      expect(result).toEqual(false);
    });
  });
});


