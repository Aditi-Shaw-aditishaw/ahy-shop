alert('welcome to ahy team web');

function myFunction() {
    alert("please fill the following field to continue shopping!!");
    // Your other JavaScript code can go here
    var address = prompt("enter address:");

    if (address = null) {
        alert("No input provided.");
    }
    var Size = prompt("enter size in XL L M S XS:");
    if (Size == null) { alert("No input provided."); }
    var productName = prompt("please carefull read and write the product name:");
    if (productName == null) { alert("No input provided."); }
    if (address !== null && Size !== null && productName !== null) {
        alert("seller is processing your order!!\n order recived.....");
    } else(alert("please enter all the values"))
}