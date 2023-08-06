const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const passportStrategy = require("./passport");

const { AppError } = require("./utility/appError");
const { globalErrController } = require("./controllers/errorController");

const authRoute = require("./routes/auth");
const userRouter = require("./routes/userRoutes");
const searchRouter = require("./routes/search");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.set("trust proxy", 1);

// Set up session middleware
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: "none",
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7 // One Week
    }
  }))


app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get("/", (req, res) => {
  res.send(
    "<button><a href='/auth/google/callback'>Login With Google</a></button>"
  );
});

// Use the authentication routes
app.use("/auth/", authRoute);

app.use("/api/", userRouter);

//wikipedia-search API
app.use("/api/", searchRouter);

//here app.all use for all method(get,post,put,delete)
//Unhandled Routes Handling
app.all("*", (req, res, next) => {
  next(
    new AppError(`Can not find route ${req.originalUrl} on this server.`, 404)
  );
});

//Global error Middleware 
app.use(globalErrController);

module.exports = app;
