const catchFile = require("..");

const arrayResult = [
  {
    FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList",
  },
];

describe("catchFile:", () => {
  it("array string result", async () => {
    const result = await catchFile(
      "C:/Users/mayza/source/repos/learningNode/test/files/text.md"
    );
    expect(result).toEqual(arrayResult);
  });
  it("array null:", async () => {
    const result = await catchFile(
      "C:/Users/mayza/source/repos/learningNode/test/files/textWithoutLinks.md"
    );
    expect(result).toBe("Without links");
  });
});
