const routes = {
    product: '/product'
}

class API {
    /**
     * ### Get all something
     * config:
     * - params:
     *   - id
     *   - filter
     * - body:
     *   - name
     * - formData: FormData
     */
    request(config, url=routes.product){
        const {params, body, formData} = config;
        const {id, filter} = params;
        const {name} = body;
        
        // the rest of code here
        console.log(id, filter, name, formData);
    }

    prevRequest(id, name, filter){
        console.log(id);
        console.log(name);
        console.log(filter);
    }
}



const formData = new API();

const obj = {
    params: {
        filter: 'is',
        id: '1',
    },
    body: {
        name: 'don',
        categoryId: 'kdlsjfla'
    },
    formData: formData
}

const api = new API();
api.request(obj)