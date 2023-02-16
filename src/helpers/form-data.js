const formData = (data) => {
  const newFormData = new FormData();
  Object.entries(data).forEach((entry) => {
    const [key, value] = entry;
    if (key === "businessCards") {
      value.forEach((item) => {
        newFormData.append(key, item);
      });
    } else if (String(value) !== "undefined") {
      newFormData.append(key, value);
    }
  });
  return formData;
};

export default formData;
