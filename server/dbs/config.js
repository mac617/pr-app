module.exports = {
  dbs: "mongodb://localhost:27017/prprpr",
  redis: {
    get host() {
      return "localhost";
    },
    get port() {
      return 6379;
    }
  },
  smtp: {
    get host() {
      return "smtp.qq.com";
    },
    get user() {
      return "550272221@qq.com";
    },
    get pass() {
      return "wqndjfrfjgaebcac";
    },
    get code() {
      return () => {
        return Math.random()
          .toString(16)
          .slice(2, 6)
          .toUpperCase();
      };
    },
    get expire() {
      return () => {
        return new Date().getTime() + 60 * 1000 * 2;
      };
    }
  }
};
