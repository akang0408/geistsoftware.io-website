import React from "react"
import Header from '../components/header';
import Menu from '../components/menu';
import { graphql } from "gatsby";

export default ({ data }) => {
  const { node } = data.allMarkdownRemark.edges[0];
  const { html } = node;

  console.log(html);
  return (
    <div>
      <Header />
      <Menu />
      <div 
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export const pageQuery = graphql`
query connextQuery {
  allMarkdownRemark(filter: {frontmatter: {title: {eq: "connext"}}}) {
    edges {
      node {
        frontmatter {
          path
        }
        html
      }
    }
  }
}
`
