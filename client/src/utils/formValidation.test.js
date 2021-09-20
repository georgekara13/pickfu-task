import { isDisallowedAnswer, isEmptyString } from "./formValidation";

describe("isDisallowedAnswer", () => {
  const testCases = [
    {
      message: "Rejects the 'I dont know' string",
      input: "I dont know",
      expected: true,
    },
    {
      message: "Rejects the ' i DON'T knOW ' string",
      input: " i DON'T knOW ",
      expected: true,
    },
    {
      message: "Rejects the ' i\nDON'T knOW ' string",
      input: " i DON'T knOW ",
      expected: true,
    },
    {
      message: "Rejects the 'YeS' string",
      input: "YeS",
      expected: true,
    },
    {
      message: "Rejects the 'NO' string",
      input: "NO",
      expected: true,
    },
    {
      message: "Allows the 'Who knows NO' string",
      input: "Who knows NO",
      expected: false,
    },
  ];

  testCases.forEach((testCase) => {
    test(testCase.message, () => {
      const expected = isDisallowedAnswer(testCase.input);
      expect(expected).toBe(testCase.expected);
    });
  });
});

describe("isEmptyString", () => {
  const testCases = [
    {
      message: "Rejects the '         ' string",
      input: "         ",
      expected: true,
    },
    {
      message: "Rejects the '\n\n ' string",
      input: "\n\n ",
      expected: true,
    },
    {
      message: "Allows the '\n\n true' string",
      input: "\n\n true",
      expected: false,
    },
  ];

  testCases.forEach((testCase) => {
    test(testCase.message, () => {
      const expected = isEmptyString(testCase.input);
      expect(expected).toBe(testCase.expected);
    });
  });
});
