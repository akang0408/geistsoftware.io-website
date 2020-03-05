import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import Menu from '../components/menu';
import Bio from '../components/bio';
import BackButton from '../components/backButton';

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

  return (
    <div>
      <div className="ingridPage">
        <img src="https://i.ibb.co/XjjVB8z/Ingrid-Big-BG.png" />
        {/* <img src="https://karandeepahluwalia.github.io/face.jpg" /> */}
      </div>
      <p className="headingText">GEIST</p>
      <div className="packageWrapper">
        <div className="packageClass">
          <BackButton />
          {bioArr}
        </div>
      </div>
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
