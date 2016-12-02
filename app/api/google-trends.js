const gTrends = require('google-trends-api');

function googleTrendsApi(app) {
    app.get('/pS/g-trends/top-related/:term', function (req, res) {
        // Callback method
        gTrends.topRelated(req.params.term, function (err, response) {
            if (err) res.json({"msg": "Error Occurred"});
            else res.json(response);
        });

        // Promise method
        /*gTrends.topRelated(req.params.term)
            .then(function (response) {
                res.json(response);
            });*/
    });
}

module.exports = googleTrendsApi;
