export default class {

    static fetchData () {
        return new Promise((resolve) => {
            // eslint-disable-next-line no-console
            console.log("Fetching data..");
            // Resolving after a second to simulate a network call
            setTimeout(() => {
                resolve({ 'some': 'data' });
            }, 1000);
        });
    }

}
