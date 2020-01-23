

    // wait function waits an amount of milliseconds before resolving
    let wait = (milliseconds) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(milliseconds);
            }, milliseconds);
        });
    };
    console.log(`You'll see this after ${milliseconds / 1000} second(s)`);

