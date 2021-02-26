const BASE_URL = '/blogs';

export function getAll(){
    return fetch(BASE_URL, {mode: "cors"})
    .then(res => res.json())
}