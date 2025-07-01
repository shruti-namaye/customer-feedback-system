const auth = (req, res, next) => {
  if (req.session && req.session.user) {
    req.user = req.session.user;
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

const adminAuth = (req, res, next) => {
  if (req.session && req.session.user?.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Admin access required" });
  }
};

module.exports = { auth, adminAuth };
