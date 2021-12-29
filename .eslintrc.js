module.exports = {
  root: true,
  parser: "babel-eslint",
  extends: ["prettier"],
  plugins: [
    "react-hooks",
    "import"
  ],
  rules: {
    "linebreak-style": [0, "error", "windows"],
    semi: ["error", "always"],
    "no-cond-assign": ["error", "always"],
    "no-console": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before"
          }
        ],
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true
        },
        "newlines-between": "always"
      }
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [
          ".js",
          ".jsx"
        ]
      }
    }
  }
};
