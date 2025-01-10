import type { Config } from "tailwindcss";

<<<<<<< HEAD
export default {
=======
const config: Config = {
>>>>>>> 659562be8a24cf38cc0770bc41c32cf43b60117e
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
<<<<<<< HEAD
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
=======
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
>>>>>>> 659562be8a24cf38cc0770bc41c32cf43b60117e
      },
    },
  },
  plugins: [],
<<<<<<< HEAD
} satisfies Config;
=======
};
export default config;
>>>>>>> 659562be8a24cf38cc0770bc41c32cf43b60117e
