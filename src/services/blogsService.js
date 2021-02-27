import tokenService from "../services/tokenService";
const BASE_URL = '/blogs';

export function getAll(){
    return fetch(BASE_URL, {mode: "cors"})
    .then(res => res.json())
}

export function create(story) {
    return fetch(
      BASE_URL,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + tokenService.getToken(),
        },
        body: JSON.stringify(story),
      },
      { mode: "cors" }
    ).then((res) => res.json());
  }