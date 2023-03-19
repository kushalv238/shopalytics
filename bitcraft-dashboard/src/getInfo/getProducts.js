const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.responseType = 'json';

        if (data) {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        };

        xhr.onerror = () => {
            reject('Something went wrong!');
        };

        xhr.send(JSON.stringify(data));
    });
    return promise;
};

const getData = async () => {
    let responseData = await sendHttpRequest('GET', 'http://localhost:3300/products');
    return responseData;
};

module.exports = { sendHttpRequest, getData }