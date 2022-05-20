import axios from 'axios'

export default {
    getBTCPrice: () =>
        axios({
            'method': 'GET',
            'url': 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd',
            'headers': {
                'contet-type': 'application/json',
                'x-rapidapi-host': 'us-real-estate.p.rapidapi.com',
                'x-rapidapi-key': 'b78c224b40msh2778da856559f80p1476ffjsna5564f499581',
            },
        })
}