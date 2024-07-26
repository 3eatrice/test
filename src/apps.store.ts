import axios from "axios";
import { makeAutoObservable } from "mobx"
import { IMovieData } from "./interface";

class AppStoreClass {

    public movieName: string = "";
    public movieData: IMovieData[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    public async getMovieData(movieName: string): Promise<void> {
        try {
            const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${movieName}`)
            this.movieData = response.data;

            console.log(this.movieData);
            
        } catch (error) {
            console.log("Fehler beim Aurufen der Schnittstelle", error)
        }
    }
}

export const AppStore = new AppStoreClass()