import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as ErrorActions } from '../../store/ducks/error';
import CloseIcon from '../../assets/images/close.svg';
import { Container } from './styles';

const ErrorBox = ({ error: { message, visible }, setHideError }) => visible && (
<Container>
  <p>{message}</p>
  <button type="button" onClick={setHideError}>
    <img src={CloseIcon} alt="Fechar" />
  </button>
</Container>
);

ErrorBox.propTypes = {
  setHideError: PropTypes.func.isRequired,
  error: PropTypes.shape({
    visible: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(ErrorActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorBox);
