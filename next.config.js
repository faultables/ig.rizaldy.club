module.exports = {
  output: "export",
  env: {
    COMMIT_SHORT_SHA: process.env.COMMIT_SHORT_SHA || "HEAD",
  },
};
