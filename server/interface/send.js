let Send = require('./email')

let mail = {
  from: "<550272221@qq.com>",
  subject: "测试",
  to: "genggaogengfugengshuai@gmail.com",
  text: "点击激活:xxx"
};

Send(mail);
