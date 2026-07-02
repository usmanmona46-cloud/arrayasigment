
function duplicates(arr) {
    let seen = new Set();

    return arr.filter(item => {
        let lowerItem = item.toLowerCase();

        if (seen.has(lowerItem)) {
            return false;
        }

        seen.add(lowerItem);
        return true;
    });


let arr = ["Apple", "Banana", "apple", "Orange", "BANANA", "Mango"];
}

console.log(duplicates(arr));









//