import React from "react"
import Header from '../components/header';
import Menu from '../components/menu';

export default ({ data }) => {
  const { node } = data.allMarkdownRemark.edges[0];
  const { html } = node;

  console.log(html);
  return (
    <div>
      <div 
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export const pageQuery = graphql`
query dirextQuery {
  allMarkdownRemark(filter: {frontmatter: {title: {eq: "dirext"}}}) {
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