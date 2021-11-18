const User = require("../models/user");

module.exports.renderRegisterForm = (req, res) => {
  res.render("users/register.ejs");
};
module.exports.registerUser = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({ email, username });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
    });
    req.flash("success", "Welcome to Yelp Camp!");
    res.redirect("/campgrounds");
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/register");
  }
};

module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.loginUser = (req, res) => {
  req.flash("success", "Welcome back!");
  const redirectTo = req.session.returnTo || "/campgrounds";
  delete req.session.returnTo;
  res.redirect(redirectTo);
};

module.exports.logoutUser = (req, res) => {
  req.logOut();
  req.flash("success", "You have been logged out");
  res.redirect("/campgrounds");
};
