require("dotenv").config();

module.exports = {
  app: {
    port: process.env.PORT || 2000,
  },
  mysql: {
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASS || "root",
    database: process.env.MYSQL_DATABASE || "",
  },
};
