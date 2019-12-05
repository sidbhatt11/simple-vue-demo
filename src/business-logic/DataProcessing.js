export default class  {

    static processData (dataToProcess) {

        // eslint-disable-next-line no-console
        console.log("Processing data..");

        // This one is super long running.
        let count = 1;
        while (count < 2000000000) {
            if (count % 2) {
                count += 2;
            } else {
                count -= 1;
            }
        }

        return dataToProcess;
    }

}
