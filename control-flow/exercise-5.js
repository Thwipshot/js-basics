
showNumbers(5);

function showNumbers(limit) {
    for (let i=0; i <= limit; i++){
        if (i % 2 === 0)
            console.log(i, 'EVEN');
        else
            console.log(i, 'ODD');

        // alternate cleaner method
        // const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
        // console.log(i, message);
    }
}