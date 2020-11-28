import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[]}
        title="Home"
      />

      <section>
        <h2>Juiceware Gatsby Starter</h2>
      </section>
    </Layout>
  );
}

export default IndexPage;
