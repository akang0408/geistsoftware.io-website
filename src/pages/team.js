import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import Menu from '../components/menu';
import Bio from '../components/bio';

const TeamPage = ({ data }) => {
  const bioArr = data.allMarkdownRemark.edges.map((bio) => {
    const { name, image, text } = bio.node.frontmatter;
    const { html } = bio.node;
    return (
      <Bio
        name={name}
        image={image}
        text={text}
      />
    );
  });

  return (<div>
    <Header />
    <Menu />
    {bioArr}
  </div>
  );
};

export const pageQuery = graphql`
query BioQuery {
  allMarkdownRemark(filter: {
    frontmatter: {
      title: {eq: "bio"}
    }
  }) {
    edges {
      node {
        frontmatter {
          path
          image
          name
          text
        }
        html
      }
    }
  }
}
`;

export default TeamPage;
