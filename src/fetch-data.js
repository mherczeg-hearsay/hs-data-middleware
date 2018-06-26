'use strict';
const fetch = require('isomorphic-fetch');
const API_URL = 'http://mherczeg.dev.hearsaylabs.com:9084';

const fetchData = (req, next,  siteParams) => {
    const {orgId, slug} = siteParams;
    const url = `${API_URL}/v2/org/${orgId}/sites/data/${slug}/`;
    fetch(url)
        .then((response) => {
            response.json().then(({data}) => {
                console.log(`data received for org:${orgId} slug:${slug}`, data);
                req.renderData = data;
                return next();
            });
        }, (error) => {
            console.log(`error fetching data ${error.message}`);
            return next(new Error(`Data for slug ${slug} not found`));
        });
};

module.exports = fetchData;