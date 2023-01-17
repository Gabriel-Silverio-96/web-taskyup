import { Inter, Pridi } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
const pridi = Pridi({ subsets: ["latin"], weight: "700" });

const globalCSS = `
    body, button {
        font-family: ${inter.style.fontFamily};
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: ${pridi.style.fontFamily} !important;
    }          
`;

export default globalCSS;