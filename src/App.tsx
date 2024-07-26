import React, { FC, useEffect } from 'react';
import './App.css';
import { observer } from 'mobx-react-lite';
import { AppStore } from './apps.store';

export const App: FC = observer(() => {
  useEffect(() => {
    // AppStore.getMovieData();
  }, []);

  return (
    <div>
      <div>
        <input
          placeholder="Such hier nach einem Film oder einer Serie"
          type="text"
          value={AppStore.movieName}
          onChange={(e) => (AppStore.movieName = e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              AppStore.getMovieData(AppStore.movieName);
            }
          }}
        />
        <button></button>
      </div>
      <div>
        {AppStore.movieData.length > 0 ? (
          AppStore.movieData.map((movieData) => (
            <div key={movieData.show.id}>
              <p>{movieData.show.name}</p>
              <p>{movieData.show.genres}</p>
              <img src={movieData.show.image.medium} alt="Movie Poster" />
            </div>
          ))
        ) : (
          <p>Keine Daten verfügbar</p>
        )}
      </div>
    </div>
  );
});
