export interface IMovieData {
    show: IShow;
}

export interface IShow {
    id: number;
    name: string;
    runtime: number;
    genres: string[];
    type: string;
    image: {
        medium: string;
        original: string;
        }
    premiered: string;
}
