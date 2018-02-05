export const loadData = function (url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send();

        if (xhr.status != 200) {
            reject(xhr.status + ': ' + xhr.statusText); 
        } else {
            resolve(xhr.responseText);
        }
    });

}