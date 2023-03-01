const fetchAll = () => {
    return fetch('https://api.magicthegathering.io/v1/cards')
    .then(response => response.json())
}


export default fetchAll