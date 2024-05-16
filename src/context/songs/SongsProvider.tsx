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

    return (
        <SongsContext.Provider 
        value={{
            ...state,
            getSongsList,
            addSong
        }}
        
        >
           
            {children}
        </SongsContext.Provider>
    )
  
    }