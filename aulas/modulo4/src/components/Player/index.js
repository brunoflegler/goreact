import React, { Fragment } from 'react';
import Slider from 'rc-slider';
import Sound from 'react-sound';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Container, Current, Volume, Progress, Controls, Time, ProgressSlider,
} from './styles';

import { Creators as PlayerActions } from '../../store/ducks/player';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = ({
  player,
  position,
  positionShow,
  progress,
  duration,
  setPlay,
  setPause,
  setPrev,
  setNext,
  setPlaying,
  setPosition,
  handlePosition,
  setVolume,
}) => (
  <Container>
    {!!player.current && (
      <Sound
        url={player.current.file}
        playStatus={player.status}
        onFinishPlaying={setNext}
        onPlaying={setPlaying}
        position={player.position}
        volume={player.volume}
      />
    )}

    <Current>
      {!!player.current && (
        <Fragment>
          <img src={player.current.thumbnail} alt={player.current.title} />
          <div>
            <span>{player.current.title}</span>
            <small>{player.current.author}</small>
          </div>
        </Fragment>
      )}
    </Current>

    <Progress>
      <Controls>
        <button type="button">
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button type="button" onClick={setPrev}>
          <img src={BackwardIcon} alt="Backward" />
        </button>
        {!!player.current && player.status === Sound.status.PLAYING ? (
          <button type="button" onClick={setPause}>
            <img src={PauseIcon} alt="Pause" />
          </button>
        ) : (
          <button type="button" onClick={setPlay}>
            <img src={PlayIcon} alt="Play" />
          </button>
        )}
        <button type="button" onClick={setNext}>
          <img src={ForwardIcon} alt="Forward" />
        </button>
        <button type="button">
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>

      <Time>
        <span>{positionShow || position}</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ED760' }}
            handleStyle={{ border: 0 }}
            max={1000}
            onChange={value => handlePosition(value / 1000)}
            onAfterChange={value => setPosition(value / 1000)}
            value={progress}
          />
        </ProgressSlider>
        <span>{duration}</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#fff' }}
        handleStyle={{ display: 'none' }}
        value={player.volume}
        onChange={setVolume}
      />
    </Volume>
  </Container>
);

Player.propTypes = {
  player: PropTypes.shape({
    current: PropTypes.shape({
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      file: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
  position: PropTypes.number,
  positionShow: PropTypes.number,
  duration: PropTypes.string,
  setPlay: PropTypes.func.isRequired,
  setPause: PropTypes.func.isRequired,
  setPrev: PropTypes.func.isRequired,
  setNext: PropTypes.func.isRequired,
  setPlaying: PropTypes.func.isRequired,
  setPosition: PropTypes.func.isRequired,
  handlePosition: PropTypes.func.isRequired,
  setVolume: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
};

Player.defaultProps = {
  position: null,
  positionShow: null,
  duration: null,
};

function msTotime(duration) {
  if (!duration) return null;

  let seconds = parseInt((duration / 1000) % 60, 10);
  const minutes = parseInt((duration / (1000 * 60)) % 60, 10);
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${seconds}`;
}

const mapStateToProps = state => ({
  player: state.player,
  position: msTotime(state.player.position),
  duration: msTotime(state.player.duration),
  positionShow: msTotime(state.player.positionShow),
  progress:
    parseInt(
      (state.player.positionShow || state.player.position) * (1000 / state.player.duration),
      10,
    ) || 0,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);
