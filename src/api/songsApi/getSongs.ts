import SongsApi from "./sonsgApi";

export const getSongs = async () => {
    const APIinstance = new SongsApi();


    try {
        const {data }:any = await APIinstance.getAllSongs();
        return data;
    }
    catch (error) {
    
        console.log(error);
    
        if (APIinstance.isAxiosError(error)) {
          return {
            hasError: true,
            message: "Error de Axios", //error.response?.data.message
          };
        }
        return {
          hasError: true,
          message: "Error no controlado, hable con el administrador",
        };
      }
}