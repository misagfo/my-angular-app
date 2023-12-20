function fetchData() {
    const url = 'https://dummyjson.com/products/1';

    fetch(url).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        }).then(data => {
            console.log('Data received:', data);
        }).catch(error => {
            console.error('Fetch error:', error);
        });
}

fetchData();





/* The required headers include Access-Control-Allow-Origin to specify which origins are permitted to access the resource.

If you re making a request that involves credentials like cookies or HTTP authentication, additional CORS headers and server-side configuration are required.
 */