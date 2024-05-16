import { SONGS_TYPES } from "./SongsProvider";
export const SongsReducer = (state: any, action: any) => {
  switch (action.type) {
    case SONGS_TYPES.GET_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };
    case SONGS_TYPES.GET_SONGS_LIST:
      return {
        ...state,
        songs: action.payload,
      };
    case SONGS_TYPES.ADD_SONG:
      return {
        ...state,
        songs: [...state.songs, action.payload],
      };
    case SONGS_TYPES.DELETE_SONG:
      return {
        ...state,
        songs: state.songs.filter((song: any) => song.id !== action.payload),
      };
    case SONGS_TYPES.UPDATE_SONG:
      const updatedSong = action.payload;
      const updatedSongs = state.songs.map((song: any) =>
        song.id === updatedSong.id ? updatedSong : song
      );
      return {
        ...state,
        songs: updatedSongs,
      };
    default:
      return state;
  }
};
