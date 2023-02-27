class Api {
  constructor({ baseUrl, headers, api_key }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._api_key = api_key;
  }

  _handleResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  fetchTrending() {
    return fetch(
      `${this._baseUrl}/trending/all/week?api_key=${this._api_key}&language=en-US`,
      {
        headers: this._headers,
      }
    ).then((res) => this._handleResponse(res));
  }
  fetchNetflixOriginal() {
    return fetch(
      `${this._baseUrl}/discover/tv?api_key=${this._api_key}&with_network=213`,
      {
        headers: this._headers,
      }
    ).then((res) => this._handleResponse(res));
  }
  fetchTopRated() {
    return fetch(
      `${this._baseUrl}/movie/top_rated?api_key=${this._api_key}&language=en-US`,
      {
        headers: this._headers,
      }
    ).then((res) => this._handleResponse(res));
  }
  fetchActionMovies() {
    return fetch(
      `${this._baseUrl}/discover/movie?api_key=${this._api_key}&with_genres=28`,
      {
        headers: this._headers,
      }
    ).then((res) => this._handleResponse(res));
  }
  fetchComedyMovies() {
    return fetch(
      `${this._baseUrl}/discover/movie?api_key=${this._api_key}&with_genres=35`,
      {
        headers: this._headers,
      }
    ).then((res) => this._handleResponse(res));
  }
  fetchRomanticMovies() {
    return fetch(
      `${this._baseUrl}/discover/movie?api_key=${this._api_key}&with_genres=10749`,
      {
        headers: this._headers,
      }
    ).then((res) => this._handleResponse(res));
  }
  fetchDocumentaries() {
    return fetch(
      `${this._baseUrl}/discover/movie?api_key=${this._api_key}&with_genres=99`,
      {
        headers: this._headers,
      }
    ).then((res) => this._handleResponse(res));
  }
}
const api = new Api({
  baseUrl: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
  },
  api_key: "fb3f81d85d2eabbafe617fd79ae67b65",
});

export default api;
