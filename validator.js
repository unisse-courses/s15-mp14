const { body } = require('express-validator');

const registerValidation = [
  // First Name should not be empty
  body('regname').not().isEmpty().withMessage("First Name is required."),
  //Last Name Should not be empty
  body('reglast').not().isEmpty().withMessage("Last Name is required."),
  // Email should not be empty and must be a valid email
  body('regEmail').not().isEmpty().withMessage("Email is required.")
    .isEmail().withMessage("Please provide a valid email."),
// Address should not be empty
  body('regad').not().isEmpty().withMessage("Addrerss is required."),
//Username should not be empty
body('reguser').not().isEmpty().withMessage("Username is required."),
//Gender should not be empty
body('sex').not().isEmpty().withMessage("Please Select Gender."),
//Birthday
body('regbday').not().isEmpty().withMessage("Birth Date is required."),
// Password needs to be min 6 chars

  body('regpass').not().isEmpty().withMessage("Password is required.").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long."),

  // Confirm Password needs to be min 6 chars AND must match the req.body.password field
  body('confirmPass').isLength({ min: 6 }).withMessage("Password must be at least 6 characters long.")
    .custom((value, { req }) => {
      if (value !== req.body.regpass) {
        throw new Error("Passwords must match.");
      }
      return true;
    })
];

module.exports = { registerValidation };

//add lahat ng nasa form dito.