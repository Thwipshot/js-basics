let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
}

function showAddress(address) {
    for (key in address)
        console.log(key, address[key]);
}

showAddress(address);