const capitalLetter = /[A-Z]/g;

const toSnakeCaseQuery = props => Object.keys(props).reduce((acc, prop) => {
  if (capitalLetter.test(prop)) {
    const toSnakeCase = prop.split(/(?=[A-Z])/).join('_').toLowerCase();
    acc[toSnakeCase] = props[prop];
  } else {
    acc[prop] = props[prop];
  }
  return acc;
}, {});

module.exports = {
  toSnakeCaseQuery,
};
