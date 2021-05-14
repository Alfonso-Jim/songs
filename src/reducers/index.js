import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Keep Moving",
      duration: "3:05",
    },
    {
      title: "Casio",
      duration: "2:45",
    },
    {
      title: "Julia",
      duration: "4:15",
    },
    {
      title: "Magnolia",
      duration: "2:15",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
