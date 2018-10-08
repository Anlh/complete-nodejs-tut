console.log('Starting app');

setTimeout(() => {
    console.log('Inside of callback');
}, 5000);

setTimeout(() => {
    console.log('Inside of callback with 0 seconds');
}, 0);

console.log('Finishing app');