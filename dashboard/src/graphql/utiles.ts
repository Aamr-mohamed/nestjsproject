export const removeTypename = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(removeTypename);
  }

  if (typeof obj === "object" && obj !== null) {
    const newObj = { ...obj };
    delete newObj.__typename;

    Object.keys(newObj).forEach((key) => {
      newObj[key] = removeTypename(newObj[key]);
    });

    return newObj;
  }

  return obj;
};
