exports.isPrivate = (req, res, next) => {
    // Must be authenticated to go to the next function
    if (req.session.user) {
      return next()
    } else {
      res.redirect('/login');
    }
  };
  
  exports.isPublic = (req, res, next) => {
    // If authenticated, go to home page
    if (req.session.user) {
        if(req.session.prov == true)
      res.redirect('/admin-home');
      else
      res.redirect('/client-home');
    } else {
      return next();
    }
  } 