const fetchAll = (number) => {
    return fetch(`https://api.magicthegathering.io/v1/cards?page=${number}`)
        .then(response => response.json())
}

export const fetchCard = (id) => {
    return fetch(`https://api.magicthegathering.io/v1/cards/${id}`)
        .then(response => response.json())
}


export default fetchAll