const isEmptyString = (value) => {
  return !value || value.match(/^\s*$/) ? true : false;
};

const isDisallowedAnswer = (value) => {
  const regex = /^\s*(yes|I\s*don'?t\s*know|no)\s*$/i;
  return value.match(regex) ? true : false;
};

export { isEmptyString, isDisallowedAnswer };
