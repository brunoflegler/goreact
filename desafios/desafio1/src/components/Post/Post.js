import React from 'react';
import './post.scss';

import PostHeader from '../PostHeader/PostHeader';

const Post = ({ posts }) => (
  <div className="wrapper-content content">
    <ul>
      {posts.map(post => (
        <li>
          <PostHeader post={post} />
          <div className="post-description">
            <span>{post.description}</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Post;
