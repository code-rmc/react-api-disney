const url = "https://challenge-alkemy-rmc.herokuapp.com/api/";

export function getAll(path) {
    return fetch(`${url}${path}`)
    .then((data) => data.json())
}

export function getById(path, id) {
    return fetch(`${url}${path}/${id}`)
    .then((data) => data.json())
}

export function getCharacterById(path, id) {
    return fetch(`${url}${path}/${id}`)
    .then((data) => data.json())
}

export function searchAPI({type, name, genre = "", ord = "ASC"}) {
    return fetch(`${url}${type}/filter?search[name]=${name}&options[genre]=${genre}&options[sort]=${ord}`)
    .then((data) => data.json())
}