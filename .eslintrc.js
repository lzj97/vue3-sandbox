module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parser: "vue-eslint-parser",    //parse the .vue file
    parserOptions: {
        parser: "@typescript-eslint/parser",    //eslint-plugin-vue option
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: [
        "vue",
        "@typescript-eslint"
    ],
    rules: {
        // https://eslint.org/docs/rules/
    }
};
