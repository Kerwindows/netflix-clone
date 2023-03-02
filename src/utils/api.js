class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._token = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjNmODFkODVkMmVhYmJhZmU2MTdmZDc5YWU2N2I2NSIsInN1YiI6IjYzZmI2ZTAyNmFhOGUwMDBjNjJjYjRmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.24kSvTzs3X3JYqb5LhUG_M8wiGILsTWgL_Kn4bxdrfs`;
  }

  _handleResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  fetchTrending() {
    return fetch(`${this._baseUrl}/trending/all/week?language=en-US`, {
      headers: {
        Authorization: `Bearer ${this._token}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((res) => this._handleResponse(res));
  }
  fetchNetflixOriginal() {
    return fetch(`${this._baseUrl}/discover/tv?with_network=213`, {
      headers: {
        Authorization: `Bearer ${this._token}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((res) => this._handleResponse(res));
  }
  fetchTopRatedMovies() {
    return fetch(`${this._baseUrl}/movie/top_rated?language=en-US`, {
      headers: {
        Authorization: `Bearer ${this._token}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((res) => this._handleResponse(res));
  }
  fetchTopRatedTvShows() {
    return fetch(`${this._baseUrl}/tv/top_rated?language=en-US`, {
      headers: {
        Authorization: `Bearer ${this._token}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((res) => this._handleResponse(res));
  }
  fetchActionMovies() {
    return fetch(`${this._baseUrl}/discover/movie?with_genres=28`, {
      headers: {
        Authorization: `Bearer ${this._token}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((res) => this._handleResponse(res));
  }
  fetchComedyMovies() {
    return fetch(`${this._baseUrl}/discover/movie?with_genres=35`, {
      headers: {
        Authorization: `Bearer ${this._token}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((res) => this._handleResponse(res));
  }
  fetchRomanticMovies() {
    return fetch(`${this._baseUrl}/discover/movie?with_genres=10749`, {
      headers: {
        Authorization: `Bearer ${this._token}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((res) => this._handleResponse(res));
  }
  fetchDocumentaries() {
    return fetch(`${this._baseUrl}/discover/movie?&with_genres=99`, {
      headers: {
        Authorization: `Bearer ${this._token}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((res) => this._handleResponse(res));
  }

  fetchTvShow(mediaType, tvId) {
    return fetch(`${this._baseUrl}/${mediaType}/${tvId}?language=en-US`, {
      headers: {
        Authorization: `Bearer ${this._token}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((res) => this._handleResponse(res));
  }
}
const api = new Api({
  baseUrl: "https://api.themoviedb.org/3",
});

export default api;
