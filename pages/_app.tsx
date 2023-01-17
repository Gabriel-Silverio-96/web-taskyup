import type { AppProps } from "next/app";
import globalCSS from "../styles/global";
import "../styles/default.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <style jsx global>{globalCSS}</style>          
        <Component {...pageProps} />
    </>
  )
  
}

export default MyApp;
