import CerebrumLogo from "./components/CerebrumLogo";

export default {
  projectLink: "https://github.com/cerebruminc/docs", // GitHub link in the navbar
  docsRepositoryBase: "https://github.com/cerebruminc/docs/blob/master", // base URL for the docs repository
  titleSuffix: " – Nextra",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  font: false,
  footerText: `© ${new Date().getFullYear()} Cerebrum LLC.`,
  logo: (
    <>
      <div className="md:inline object-contain hidden">
        <CerebrumLogo />
      </div>
      <span className="ml-2 mr-2 font-extrabold hidden text-lg md:inline">
        Cerebrum Documentation
      </span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="og:title" content="Nextra: the next docs builder" />
    </>
  ),
};
