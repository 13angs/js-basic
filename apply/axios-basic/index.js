const axios = require('axios').default;

const fetchData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.table(res.data.slice(0, 5));
    return res.data[0];
}

const data = fetchData();

