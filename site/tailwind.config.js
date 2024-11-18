/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
      ],
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          primary: {
            200: "#d9f99d",
            300: "#bef264",
            400: "#a3e635",
            500: "#84cc16",
            600: "#65a30d",
            700: "#4d7c0f",
            800: "#3f6212",
            900: "#365314",
          },
          neutral: {
            50: "#f9fafb",
            100: "#f3f4f6",
            200: "#e5e7eb",
            300: "#d1d5db",
            400: "#9ca3af",
            500: "#6b7280",
            600: "#4b5563",
            700: "#374151",
            800: "#1f2937",
            900: "#111827",
          },
        },
        typography: {
          DEFAULT: {
            css: {
              "code::before": { content: "" },
              "code::after": { content: "" },
              "blockquote p:first-of-type::before": { content: "none" },
              "blockquote p:last-of-type::after": { content: "none" },
            },
          },
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: "0", transform: "translateY(10px)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
          },
          slideUpFade: {
            "0%": {
              transform: "translateY(100%)",
              opacity: "0",
            },
            "100%": {
              transform: "translateY(0)",
              opacity: "1",
            },
          },
        },
        animation: {
          fadeIn: "fadeIn 0.5s ease-out",
          slideUpFade: "slideUpFade 0.5s ease-out",
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }