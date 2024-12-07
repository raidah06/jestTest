//import "./style.css"

function cap(str) {
    if (!str) return ''; // Handle empty string
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports=cap;