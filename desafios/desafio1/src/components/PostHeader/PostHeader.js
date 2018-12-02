import React from 'react';
import PropTypes from 'prop-types';

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

PostHeader.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostHeader;
