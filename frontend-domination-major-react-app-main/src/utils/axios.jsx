import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjMxYWMzYjM1Njc0YzRhZWQwNTI3YTc5MGQ3NjRlYyIsIm5iZiI6MTcyNzE3Njk0Ny45ODczNTMsInN1YiI6IjY2ZjI5ZjE0MmQ5OGQ1OWNlMTNiNGRjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V7ChqPCfj3CjBoH9eegO-_C59vcTffkhlod4UfQ3j8M'
  },
});

export default instance;
