//@ts-ignore
import axios from "axios";

class SongsApi {
  API_URL = "http://localhost:3001/songs";

  instance = axios.create({
    baseURL: this.API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  getAllSongs = async () => {
    const response:any = await this.instance.get(`${this.API_URL}/test`);
    return response.data;
  };

  isAxiosError = (error:any) => axios.isAxiosError(error);
}

export default SongsApi;
