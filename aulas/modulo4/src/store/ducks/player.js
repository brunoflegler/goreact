import Sound from 'react-sound';

export const Types = {
  SET_LOAD: ':player/SET_LOAD',
  SET_PLAY: ':player/SET_PLAY',
  SET_PAUSE: ':player/SET_PAUSE',
  SET_PREV: ':player/SET_PREV',
  SET_NEXT: ':player/SET_NEXT',
  SET_PLAYING: ':player/SET_PLAYING',
  SET_POSITION: ':player/SET_POSITION',
  SET_VOLUME: ':player/SET_VOLUME',
  HANDLE_POSITION: ':player/HANDLE_POSITION',
};

const INITIAL_STATE = {
  song: null,
  songs: [],
  position: null,
  positionShow: null,
  duration: null,
  status: Sound.status.PLAYING,
  volume: 100,
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_LOAD:
      return {
        ...state,
        current: action.payload.song,
        songs: action.payload.songs,
        position: 0,
        status: Sound.status.PLAYING,
      };
    case Types.SET_PLAY:
      return { ...state, status: Sound.status.PLAYING };
    case Types.SET_PAUSE:
      return { ...state, status: Sound.status.PAUSED };
    case Types.SET_PREV: {
      const currentIndex = state.songs.findIndex(s => s.id === state.current.id);
      const prev = state.songs[currentIndex - 1];

      if (prev) {
        return {
          ...state,
          current: prev,
          status: Sound.status.PLAYING,
          position: 0,
        };
      }

      return state;
    }
    case Types.SET_NEXT: {
      const currentIndex = state.songs.findIndex(s => s.id === state.current.id);
      const next = state.songs[currentIndex + 1];

      if (next) {
        return {
          ...state,
          current: next,
          status: Sound.status.PLAYING,
          position: 0,
        };
      }
      return state;
    }
    case Types.SET_PLAYING:
      return { ...state, ...action.payload };
    case Types.HANDLE_POSITION:
      return { ...state, positionShow: state.duration * action.payload.percent };
    case Types.SET_POSITION:
      return { ...state, position: state.duration * action.payload.percent, positionShow: null };
    case Types.SET_VOLUME:
      return { ...state, volume: action.payload.volume };
    default:
      return state;
  }
}

export const Creators = {
  setLoad: (song, songs) => ({ type: Types.SET_LOAD, payload: { song, songs } }),
  setPlay: () => ({ type: Types.SET_PLAY }),
  setPause: () => ({ type: Types.SET_PAUSE }),
  setPrev: () => ({ type: Types.SET_PREV }),
  setNext: () => ({ type: Types.SET_NEXT }),
  setPlaying: ({ position, duration }) => ({
    type: Types.SET_PLAYING,
    payload: { position, duration },
  }),
  setPosition: percent => ({
    type: Types.SET_POSITION,
    payload: { percent },
  }),
  handlePosition: percent => ({
    type: Types.HANDLE_POSITION,
    payload: { percent },
  }),
  setVolume: volume => ({
    type: Types.SET_VOLUME,
    payload: { volume },
  }),
};
