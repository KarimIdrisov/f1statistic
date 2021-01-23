async function FetchRequest(url: string) {
    const request = new Request(`${"http://ergast.com/api/f1/" + url + '.json'}`);
    try {
        const resFetch = await fetch(request);
        const resJson = await resFetch.json();
        if (resJson.error && resJson.error.status === 401) {
            console.log("Error")
        }
        return resJson;
    } catch (err) {
        console.log(err);
    }
}

export default FetchRequest;