export const Request = async (url, HttpMethod, dataToSave = "", files = false) => {
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
        if(files){
            options = {
                method: HttpMethod,
                body: dataToSave,
                // Remove Content-Type header for files
                // The browser will automatically set the correct Content-Type with boundary
            }
        } else {
            options = {
                method: HttpMethod,
                body: JSON.stringify(dataToSave),
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        }
    }

    const response = await fetch(url, options);
    const data = await response.json();

    loading = false;

    return {
        data,
        loading
    }
}