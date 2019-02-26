const Koa = require("koa");
const users = require("./interface/users");
const mongoose = require("mongoose");
const dbConfig = require("./dbs/config");
const bodyparser = require("koa-bodyparser");
const session = require("koa-generic-session");
const json = require("koa-json");
const Redis = require("koa-redis");
const passport = require("./interface/utils/passport");
const app = new Koa();

app.keys = ["pr", "keyskeys"];
app.use(
  session({
    key: "pr",
    prefix: "prpr",
    store: new Redis()
  })
);

app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"]
  })
);
app.use(json());
mongoose.connect(dbConfig.dbs, { useNewUrlParser: true });

app.use(passport.initialize());
app.use(passport.session());
app.use(users.routes()).use(users.allowedMethods());
app.listen(3000);
console.log("监听3000");
