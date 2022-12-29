export const randomID = (length) => {

    // setting length as 
    const len = length ? length : 10;
    let output = '';

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxuz1234567890_-'.split('');

    // generates random id
    for (let i = 0; i < len; i++) {
        output += chars[Math.floor(Math.random() * chars.length)];
    };

    //...
    return output;
};

