import { useReducer } from "react";
import { SongsContext, SongsReducer  } from ".";
import { getSongs } from "../../api/songsApi/getSongs";

const SONGS_INITIAL_STATE = {
  songs: ([] = []),
};


export const SONGS_TYPES={
    GET_SONGS_LIST: "GET_SONGS_LIST",
    ADD_SONG: "ADD_SONG",
    DELETE_SONG: "DELETE_SONG",
    UPDATE_SONG: "UPDATE_SONG",
    GET_SONG: "GET_SONG",
}

export const SongsProvider = ({ children }:any) => {
    const [state, dispatch] = useReducer(
        SongsReducer,
         SONGS_INITIAL_STATE
        ); 

        //get songs list
        const getSongsList = async () => {
          const songs = await getSongs();
            dispatch({ type: SONGS_TYPES.GET_SONGS_LIST, payload: songs });
        };

        //add song
        const addSong = (song:any) => {
            if (!state.songs.some((s: any) => s.id === song.id))
                dispatch({ type: SONGS_TYPES.ADD_SONG, payload: song });
            console.log(state)
        };

        //add song level
        const addLevel = (level:any, songId: any) => {
            const song = state.songs.find((s: any) => s.id === songId);
            if (song.levels.some((l: any) => l.id === level.id)) return;
            song.levels.push(level);
            song.levels = song.levels.sort((a: any, b: any) => a.level - b.level); //Order by difficulty
            
            dispatch({ type: SONGS_TYPES.UPDATE_SONG, payload: song });
        };

    return (
        <SongsContext.Provider 
        value={{
            ...state,
            getSongsList,
            addSong,
            addLevel
        }}
        
        >
           
            {children}
        </SongsContext.Provider>
    )
  
    }