export const fetchAll = (number, type) => {
    return fetch(`https://api.magicthegathering.io/v1/cards?page=${number}&type=${type}`)
        .then(response => response.json())
}

export const fetchCard = (id) => {
    return fetch(`https://api.magicthegathering.io/v1/cards/${id}`)
        .then(response => response.json())
}