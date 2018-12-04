import React, { Component } from 'react';
import moment from 'moment';

import { Container, Form } from './styles';
import logo from '../../assets/logo.png';

import CompareList from '../../components/CompareList';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryInput: '',
    repositories: JSON.parse(localStorage.getItem('@react02:repositories')) || [],
    repositoryError: false,
  };

  handleInput = (e) => {
    e.preventDefault();

    this.setState({
      repositoryInput: e.target.value,
    });
  };

  handleButtonOk = async (e) => {
    e.preventDefault();
    const { repositoryInput, repositories } = this.state;

    if (!repositoryInput) return;

    try {
      this.setState({
        loading: true,
      });
      const { data: repository } = await api.get(`/${repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, repository],
      });

      const { repositories: repositoriesState } = this.state;

      localStorage.setItem('@react02:repositories', JSON.stringify(repositoriesState));
    } catch (err) {
      this.setState({
        repositoryError: true,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  handleButtonTrash = ({ id }) => {
    const repositoriesLocalStorage = JSON.parse(localStorage.getItem('@react02:repositories'));

    const filters = repositoriesLocalStorage.filter(r => r.id !== id);

    this.setState({
      repositories: filters,
    });

    localStorage.setItem('@react02:repositories', JSON.stringify(filters));
  };

  handleButtonRefresh = async ({ id, full_name: fullname }) => {
    const repositoriesLocalStorage = JSON.parse(localStorage.getItem('@react02:repositories'));

    const { data: repository } = await api.get(`/${fullname}`);
    repository.lastCommit = moment(repository.pushed_at).fromNow();

    const repositoriesUpdate = repositoriesLocalStorage.map(r => (r.id === id ? repository : r));

    this.setState({
      repositories: repositoriesUpdate,
    });

    const { repositories: repositoriesState } = this.state;

    localStorage.setItem('@react02:repositories', JSON.stringify(repositoriesState));
  };

  render() {
    const { repositories, ...data } = this.state;

    return (
      <Container>
        <img src={logo} alt="logo" />
        <Form withError={data.repositoryError} onSubmit={this.handleButtonOk}>
          <input
            type="text"
            onChange={this.handleInput}
            value={data.repositoryInput}
            placeholder="usuário/repositório"
          />
          <button type="submit">
            {data.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
          </button>
        </Form>
        <CompareList
          repositories={repositories}
          trash={this.handleButtonTrash}
          refresh={this.handleButtonRefresh}
        />
      </Container>
    );
  }
}
