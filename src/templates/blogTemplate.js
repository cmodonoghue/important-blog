import React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/Navbar";
import styles from '../styles/main.scss';
import { Helmet } from "react-helmet";
import Img from "gatsby-image"; 

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <Helmet  
        title={frontmatter.title}
      />
      <Navbar />
      <div className="blog-post-container"> 
        <div className="blog-post">
          <img className="blog-post-img" src={frontmatter.image}></img>
          <div className="blog-post__header">            
            <h2 className="blog-post-category">{frontmatter.category}</h2>
            <h1 className="blog-post-title">{frontmatter.title}</h1>
            <h2 className="blog-post-date">{frontmatter.date}</h2>
          </div>
          <h2 className="blog-post-author">By Christian O'Donoghue</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        image
        category
      }
    }
  }
`