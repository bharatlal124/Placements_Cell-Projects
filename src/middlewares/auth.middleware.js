// Example middleware that redirects to login if not authenticated
export const auth = (req, res, next) => {
  if (!req.session.userEmail) {
    return res.redirect("/login");
  }
  next();
};
