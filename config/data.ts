const env = process.env.NODE_ENV;

const pre = {
  users: {
    userStore: {
      username: "malik.bruen@yahoo.com",
      password: "Qwerty123!"
    }
  }
};
const qc = {
  users: {
    userStore: {
      username: "malik.bruen@yahoo.com",
      password: "Qwerty123!"
    }
  }
};

let data = pre;
if (env === "QC") {
  data = qc;
} else if (env === "PRE") data = pre;

export default data;
