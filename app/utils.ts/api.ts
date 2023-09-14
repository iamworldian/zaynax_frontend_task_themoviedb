import axios from "axios";

const BASE_URL: string = "https://api.themoviedb.org/3/";
const TMDB_TOKEN: string | undefined = process.env.TMDB_TOKEN;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetcher = async (url:string, params?:Object) => {
    try {
        const {data} = await axios.get(BASE_URL + url , {
            headers,
            params
        });
        return data;
    } catch (error) {
        return error;
    }
}