import Prism from "prism-react-renderer/prism";
import "nextra-theme-docs/style.css";
import "../styles/styles.css";

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-javascript");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-typescript");
require("prismjs/components/prism-markdown");
require("prismjs/components/prism-graphql");
require("prismjs/components/prism-typescript");

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
