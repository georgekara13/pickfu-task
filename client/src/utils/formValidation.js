/**
 * Matching for empty strings
 * @param {string} value
 * @returns boolean - if value is empty, returns true, otherwise, returns false
 */
const isEmptyString = (value) => {
  return !value || value.match(/^\s*$/) ? true : false;
};

/**
 * Case insensitive matching for disallowed answers
 * @param {string} value
 * @returns boolean - if value is one of yes/no/I don't know, returns true, otherwise, returns false
 */
const isDisallowedAnswer = (value) => {
  const regex = /^\s*(yes|I\s*don'?t\s*know|no)\s*$/i;
  return value.match(regex) ? true : false;
};

export { isEmptyString, isDisallowedAnswer };
