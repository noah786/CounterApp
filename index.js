// fetching the numeral waala div and storing it into a variable
const countValue = document.querySelector('#counter');

decrement = () =>{
    // taking out that zero value form div element and converting it to int through parseInt
    let value = parseInt(countValue.innerText);
    // Updating the value
    value = value - 1;
    //now sending back the value to that div
    countValue.innerText = value;
}

increment = () =>{
    // taking out that zero value form div element and converting it to int through parseInt
    let value = parseInt(countValue.innerText);
    // Updating the value
    value = value + 1;
    //now sending back the value to that div
    countValue.innerText = value;
}