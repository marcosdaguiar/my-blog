export const Request = async (url, HttpMethod, dataToSave = "") => {

    let loading = true;

    let options = {
        method: 'GET',
    }

    if (HttpMethod == 'GET' || HttpMethod == 'DELETE') {
        options = {
            method: HttpMethod,
        };
    }


    if (HttpMethod == 'POST' || HttpMethod == 'PUT') {
        options = {
            method: HttpMethod,
            body: JSON.stringify(dataToSave),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }

    const response = await fetch(url);
    const data = await response.json();

    loading = false;



    return {
        data,
        loading
    }
}
