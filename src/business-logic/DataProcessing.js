export default class  {

    static processData (dataToProcess) {
        return new Promise((resolve) => {
            // eslint-disable-next-line no-console
            console.log("Processing data..")

            // Resolving after a second to simulate heavy number crunching
            setTimeout(() => {
                resolve(dataToProcess)
            }, 1000)
        })
    }

}
