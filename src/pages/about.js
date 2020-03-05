/*eslint-disable*/
import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import Menu from '../components/menu';
import BackButton from '../components/backButton';
import backButton from '../components/backButton';


export default ({ data }) => {
  const { node } = data.allMarkdownRemark.edges[0];
  const { html } = node;

  console.log(html);
  return (
    <div>
      <div className="ingridPage">
        <img src="https://i.ibb.co/XjjVB8z/Ingrid-Big-BG.png" />
        {/* <img src="https://karandeepahluwalia.github.io/face.jpg" /> */}
      </div>
      <div className="packageWrapper">
        <div className="packageClass">
          <BackButton />
          {/* <div id="aboutImage">
            <img src="https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
          </div> */}
          <div
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  );
};

export const pageQuery = graphql`
query aboutQuery {
  allMarkdownRemark(filter: {frontmatter: {title: {eq: "about"}}}) {
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
`;
