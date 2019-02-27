import React from "react";
import { Link } from "gatsby";

const PostLink = ({ post }) => (
  <div className="post-link">
    <Link to={post.frontmatter.path}>
      <h1 className="post-link__heading">{post.frontmatter.title}</h1>
      <p className="post-link__text">{post.excerpt}</p>
      <img className="post-link__image" src={post.frontmatter.image}></img>
    </Link>
  </div>
)

export default PostLink;