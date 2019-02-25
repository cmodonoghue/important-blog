import React from "react";
import { Link } from "gatsby";

const PostLink = ({ post }) => (
  <div className="post-link">
    <Link to={post.frontmatter.path}>
      <h2 className="post-link__heading">{post.frontmatter.title}</h2>
      <p className="post-link__text">{post.excerpt}</p>
      <img className="post-link__image" src={post.frontmatter.image}></img>
    </Link>
  </div>
)

export default PostLink;