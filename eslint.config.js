import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";


// eslint.config.js
export default [
  {
    // 1. まず全体で無視するファイルを指定
    ignores: ["dist/**", "node_modules/**", "**/*.css"],
  },
  {
    // 2. Reactの設定を追加
    files: ["**/*.{js,jsx,ts,tsx}"],
    settings: {
      react: {
        version: "detect", // これで Warning が消えます
      },
    },
    // ...ここに plugins や rules の設定があるはずです
  }
];

