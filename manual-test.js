const fetchSiteData = require('./index.js').fetchData;

const myData = {};

fetchSiteData(myData, () => {
    console.log(myData);
}, {
    orgId: 1,
    slug: 'safe-filter-test'
});