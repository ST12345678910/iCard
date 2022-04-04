const withAuth = (req, res, next) => {
  if (!req.session.userId) {
    res.render('login', { layout: 'index' });
    // res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;