module.exports = (req, res, next) => {
  // simulate login user (later replace with JWT)
  req.user = {
    role: req.headers.role || "admin",   // admin / commander / logistics
    base: req.headers.base || "base1"    // base1, base2
  };

  next();
};
