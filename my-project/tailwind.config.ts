import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1440px",
      // smOnly: { max: "767.98px" },
      // mdOnly: { min: "768px", max: "1439.98px" },
      // notXl: { max: "1439.98px" },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "64px",
          sm: "64px",
          md: "64px",
          xl: "64px",
        },
      },
      colors: {
        primary: "#13447E",
        black: "#000",
        white: "#FFF",
        accent: "#EE1D23",
        success: "#00C48C",
        primary_dark: "#014081",
        primary_input: "#2F67AA9C",
        border: "#9C9C9C",
        bg_grey: "#F1F3F6",
        blued: "#1A4599DE",
        gree: "#333333",
      },
      fontSize: {
        t15: [
          "15px",
          {
            fontWeight: "200",
          },
        ],
        t16: [
          "16px",
          {
            fontWeight: "400",
          },
        ],
        t24: ["24px", { fontWeight: "700" }],
        t24l: ["24px", { fontWeight: "300" }],
        t26: [
          "26px",
          {
            fontWeight: "300",
          },
        ],
        t26h: [
          "26px",
          {
            fontWeight: "700",
          },
        ],
        t32l: [
          "32px",
          {
            fontWeight: "400",
          },
        ],
        t32: [
          "32px",
          {
            fontWeight: "700",
          },
        ],
        t34: [
          "34px",
          {
            fontWeight: "300",
          },
        ],
        t36l: [
          "36px",
          {
            fontWeight: "400",
          },
        ],
        t36: [
          "36px",
          {
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
