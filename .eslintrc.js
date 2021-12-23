module.exports = {
  root: true,
  parser: "babel-eslint",
  rules: {
    "linebreak-style": [0, "error", "windows"],
    semi: ["error", "always"],
    "no-cond-assign": ["error", "always"],
    "no-console": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  extends: ["prettier"],
  plugins: ["react-hooks"],
};
