const router = require("koa-router")();
const Redis = require("koa-redis");
const User = require("../dbs/models/users");

const Store = new Redis().client;

router.prefix("/users");

router.get("/", function(ctx, next) {
  ctx.body = "this is a users response!";
});

router.get("/bar", function(ctx, next) {
  ctx.body = "this is a users/bar response";
});

router.get("/fix", async function(ctx) {
  const st = await Store.hset("fix", "name", Math.random());
  ctx.body = {
    code: 0
  };
});

router.post("/addPerson", async function(ctx) {
  const user = new User({
    username: ctx.request.body.username,
    password: ctx.request.body.password
  });
  let code;
  try {
    await user.save();
    code = 0;
  } catch (e) {
    code = -1;
  }
  ctx.body = {
    code: code
  };
});

router.post("/getPerson", async function(ctx) {
  const result = await User.findOne({ username: ctx.request.body.username });
  const results = await User.find({ username: ctx.request.body.username });
  ctx.body = {
    code: 0,
    result,
    results
  };
});

router.post("/updatePerson", async function(ctx) {
  const result = await User.where({
    username: ctx.request.body.username
  }).update({
    password: ctx.request.body.password
  });
  ctx.body = {
    code: 0
  };
});

router.post("/removePerson", async function(ctx) {
  const result = await Person.where({
    name: ctx.request.body.name
  }).remove();

  ctx.body = {
    code: 0
  };
});

//reids提取
router.post("/bar", async function(ctx, next) {
  let saveCode = await Store.hget(
    `nodemail:${ctx.request.body.username}`,
    "code"
  );
  ctx.body = saveCode;
});

//redis存储
router.post("/fix", async function(ctx) {
  Store.hmset(
    `nodemail:${ctx.request.body.username}`,
    "code",
    ctx.request.body.code
  );
  ctx.body = {
    code: 0
  };
});
module.exports = router;
