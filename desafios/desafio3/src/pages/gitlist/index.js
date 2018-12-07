import React, { Fragment } from 'react';

import { GitList, GitItem } from './styles';

const GitHubList = () => (
  <Fragment>
    <GitList>
      <GitItem>1</GitItem>
      <GitItem>2</GitItem>
      <GitItem>3</GitItem>
    </GitList>
  </Fragment>
);

export default GitHubList;
