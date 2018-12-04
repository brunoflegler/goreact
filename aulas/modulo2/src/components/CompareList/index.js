import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository, Tools } from './syles';

const CompareList = ({ repositories, trash, refresh }) => (
  <Container>
    {repositories
      && repositories.map(repository => (
        <Repository key={repository.id}>
          <header>
            <img src={repository.owner.avatar_url} alt="avatar" />
            <strong>{repository.name}</strong>
            <small>{repository.owner.login}</small>
          </header>

          <ul>
            <li>
              {repository.stargazers_count}
              {' '}
              <small>stars</small>
            </li>

            <li>
              {repository.forks_count}
              {' '}
              <small>forks</small>
            </li>

            <li>
              {repository.open_issues_count}
              {' '}
              <small>issues</small>
            </li>

            <li>
              {repository.lastCommit}
              {' '}
              <small>commit</small>
            </li>
          </ul>

          <Tools>
            <button type="button" onClick={trash.bind(this, repository)}>
              <i className="trash fa fa-trash-o fa-lg" />
            </button>
            <button type="button" onClick={refresh.bind(this, repository)}>
              <i className="refresh fa fa-refresh fa-lg" />
            </button>
          </Tools>
        </Repository>
      ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      owner: PropTypes.shape({
        avatar_url: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
      }),
      name: PropTypes.string.isRequired,
      stargazers_count: PropTypes.number.isRequired,
      forks_count: PropTypes.number.isRequired,
      open_issues_count: PropTypes.number.isRequired,
      lastCommit: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  trash: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,
};

export default CompareList;
