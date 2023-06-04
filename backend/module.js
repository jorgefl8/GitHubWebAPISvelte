const ruta = "/api/v1";
//import Datastore from 'nedb';
//var db = new Datastore();

function loadBackend(app) {
    app.get(ruta + '/getAccessTokenGH', async function (req, res) {
        console.log("New GET to /market-prices-stats/getAccessTokenGH");
        const params = '?client_id=' + req.query.client_id + '&client_secret=' + req.query.client_secret + '&code=' + req.query.code;
        await fetch('https://github.com/login/oauth/access_token'+params, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {return response.json()})
        .then(data => {    
            res.status(200).json(data);
        });
    });
    app.get(ruta + '/getGH_info', async function (req, res) {
        console.log("New GET to /market-prices-stats/getGH_info");
        const result = await fetch(req.query.url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + req.query.access_token
            }
        });
        const data = await result.json();
        res.status(200).json(data);
    });

};
export { loadBackend };
