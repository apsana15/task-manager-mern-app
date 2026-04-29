const validator = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, { abortEarly: true });

  if (error) {
    error.status = 400;
    return next(error); // ✅ stop execution here
  }

  req.body = value;
  next();
};

export default validator;