import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/main.scss';
import PostLink from '../components/PostLink';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  // this takes all the posts and creates a list of PostLink components for each
  // it takes category into account 
  const sciencePosts = edges
    .filter(edge => !!edge.node.frontmatter.date && edge.node.frontmatter.category === 'science')
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  const culturePosts = edges
    .filter(edge => !!edge.node.frontmatter.date && edge.node.frontmatter.category === 'culture')
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  const wisdomPosts = edges
    .filter(edge => !!edge.node.frontmatter.date && edge.node.frontmatter.category === 'wisdom')
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <div className="main">
      <Helmet
        title="The Blog Where Dreams Come Alive"
      />
      <Navbar />
      <div className="blog-index">
        <h1 className="blog-section__heading" id="science">Science</h1>
        <div className="blog-section">
          {sciencePosts}
        </div>
        <h1 className="blog-section__heading" id="culture">Culture</h1>
        <div className="blog-section">
          {culturePosts}
        </div>
        <h1 className="blog-section__heading" id="wisdom">Wisdom</h1>
        <div className="blog-section">
          {wisdomPosts}
        </div>
      </div>
    </div>
  )
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 97)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            image
            category
          }
        }
      }
    }
  }
`
