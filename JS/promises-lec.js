function makeRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve('Here is your data: ...');
            } else {
                reject('Network Connection Error!');
            }
        }, 1500);
    });
}

// const request = makeRequest();
// console.log(request); // pending promise
// request.then(data => console.log('Promise resolved!', data));
// // if resolved, will log "Promise resolved!" and "Here is your data: ..."
// request.catch(error => console.log('Promise rejected!', error));
// // if rejected, will log "Promise rejected!" and "Network Connection Error!"

fetch('https://api.github.com/users')
    .then(response => console.log(response))
    .catch(error => console.error(error));