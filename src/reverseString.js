
function reverse(str) {
    if (!str) return ''; // Handle empty string
    return str.split("").reverse().join("");
}

module.exports=reverse;