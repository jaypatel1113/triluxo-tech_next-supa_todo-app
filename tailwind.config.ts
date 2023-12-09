import { fontFamily } from "tailwindcss/defaultTheme";

import { type Config } from "tailwindcss";

export default {
    content: ['./src/**/*.tsx'],
    plugins: [],
    theme: {
        extend: {
            fontFamily: {
                thunder: ['thunder', ...fontFamily.sans],
            },
        },
    },
} satisfies Config;
