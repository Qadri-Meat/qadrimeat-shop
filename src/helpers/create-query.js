const createQuery = (params) => {
  for (const propName in params) {
    if (
      params[propName] === null ||
      params[propName] === undefined ||
      params[propName] === ""
    ) {
      delete params[propName];
    }
  }

  return params;
};

export default createQuery;
