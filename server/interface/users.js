const router = require("koa-router")();
const Redis = require("koa-redis");
const User = require("../dbs/models/users");
const Email = require("../dbs/config");
const nodeMailer = require("nodemailer");
const Passport = require("./utils/passport");
const axios = require("./utils/axios");

let Store = new Redis().client;

router.prefix("/users");

router.post("/verify", async ctx => {
  let email = ctx.request.body.email;
  const saveExpire = await Store.hget(`nodemail:${email}`, "expire");
  console.log(new Date().getTime());
  console.log(saveExpire);
  if (saveExpire && new Date().getTime() - saveExpire < 0) {
    ctx.body = {
      code: -1,
      msg: "验证请求过于频繁,1分钟内1次"
    };
    return false;
  }
  let transporter = nodeMailer.createTransport({
    host: Email.smtp.host,
    port: 587,
    secure: false,
    auth: {
      user: Email.smtp.user,
      pass: Email.smtp.pass
    }
  });
  let ko = {
    code: Email.smtp.code(),
    expire: Email.smtp.expire(),
    email: ctx.request.body.email,
    username: ctx.request.body.username
  };

  let mailOption = {
    from: `"认证邮件" <${Email.smtp.user}>`,
    to: ko.email,
    subject: "prprpr漫画网注册码",
    html: `您在prprpr漫画码注册,邀请码是${ko.code}`
  };
  await transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      return console.log("nodemail error");
    } else {
      Store.hmset(
        `nodemail:${ko.email}`,
        "code",
        ko.code,
        "expire",
        ko.expire,
        "email",
        ko.email
      );
    }
  });
  ctx.body = {
    code: 0,
    msg: "验证码已发送,有效期1分钟"
  };
});

router.post("/signup", async ctx => {
  const { username, password, email, verifyCode } = ctx.request.body;
  if (verifyCode) {
    const saveCode = await Store.hget(`nodemail:${email}`, "code");
    const saveExpire = await Store.hget(`nodemail:${email}`, "expire");
    if (saveCode === verifyCode) {
      if (new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: "验证码已过期,请重新尝试"
        };
        return false;
      }
    } else {
      ctx.body = {
        code: -1,
        msg: "请填写正确的验证码"
      };
      return false;
    }
  } else {
    ctx.body = {
      code: -1,
      msg: "请填写验证码"
    };
    return false;
  }

  let user = await User.find({ username });
  if (user.length) {
    ctx.body = {
      code: -1,
      msg: "用户名已被注册"
    };
    return;
  }

  let mail = await User.find({ email });
  if (mail.length) {
    ctx.body = {
      code: -1,
      msg: "邮箱已被注册"
    };
    return;
  }
  let nuser = await User.create({
    username,
    password,
    email
  });
  if (nuser) {
    let res = await axios.post("http://localhost:3000/users/signin", {
      username,
      password
    });
    if (res.data && res.data.code === 0) {
      ctx.body = {
        code: 0,
        msg: "注册成功",
        user: res.data.user
      };
    } else {
      ctx.body = {
        code: -1,
        msg: "error"
      };
    }
  } else {
    ctx.body = {
      code: -1,
      msg: "注册失败"
    };
  }
});

router.post("/signin", async (ctx, next) => {
  return Passport.authenticate("local", function(err, user, info, status) {
    if (err) {
      ctx.body = {
        code: -1,
        msg: err
      };
    } else {
      if (user) {
        ctx.body = {
          code: 0,
          msg: "登录成功",
          user
        };
        return ctx.login(user);
      } else {
        ctx.body = {
          code: 1,
          msg: info
        };
      }
    }
  })(ctx, next);
});

router.get("/getUser", async ctx => {
  if (ctx.isAuthenticated()) {
    // const user = ctx.session.passport.user;
    const { username, email } = ctx.session.passport.user;
    ctx.body = {
      user: username
      // email
      // user
    };
  } else {
    ctx.body = {
      user: "",
      email: ""
    };
  }
});

router.get("/exit", async (ctx, next) => {
  await ctx.logout();
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: 0
    };
  } else {
    ctx.body = {
      code: -1
    };
  }
});

router.post("/addCollect", async (ctx, next) => {
  const { username, id, comicDetail } = ctx.request.body;
  const results = await User.update(
    {
      username: username
    },
    {
      $push: {
        collect: {
          comicId: id,
          comicDetail: {
            bookImg: comicDetail.bookImg,
            bookTitle: comicDetail.bookTitle,
            bookStatus: comicDetail.bookStatus,
            bookAuthor: comicDetail.bookAuthor,
            bookYear: comicDetail.bookYear,
            bookCountry: comicDetail.bookCountry,
            bookUpdataNum: comicDetail.bookUpdataNum,
            bookUpdateTime: comicDetail.bookUpdateTime
          }
        }
      }
    }
  );
  if (results) {
    ctx.body = {
      code: 0,
      msg: "添加成功"
    };
  } else {
    ctx.body = {
      code: -1,
      msg: "添加失败"
    };
  }
});

router.post("/delCollect", async (ctx, next) => {
  const { username, id } = ctx.request.body;
  const results = await User.update(
    {
      username: username
    },
    {
      $pull: {
        collect: {
          comicId: id
        }
      }
    }
  );
  if (results) {
    ctx.body = {
      code: 0,
      msg: "删除成功"
    };
  } else {
    ctx.body = {
      code: -1,
      msg: "删除失败"
    };
  }
});

router.post("/getCollect", async (ctx, next) => {
  const { username, id } = ctx.request.body;
  const results = await User.find({ username: username });
  ctx.body = {
    code: 0,
    results
  };
});

router.post("/test", async (ctx, next) => {
  ctx.body = "请求成功";
});

module.exports = router;
