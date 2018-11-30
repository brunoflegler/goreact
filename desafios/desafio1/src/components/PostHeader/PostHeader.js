import React from 'react';
import './postHeader.scss';

const PostHeader = ({ post }) => (
  <div className="post-header">
    <img src="./images/avatar.png" alt="avatar" />
    <div className="post-profile">
      <span>{post.name}</span>
      <strong>{post.date}</strong>
    </div>
  </div>
);

export default PostHeader;
