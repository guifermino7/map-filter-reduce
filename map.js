// Solução com this
const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis (arr, thisArg) {
    return arr.map(function(item) {
        return  item * this.value;
    }, thisArg);
}

var nums = [1, 2];

console.log("this -> maçã", mapComThis(nums, maca));

console.log("this -> laranja", mapComThis(nums, laranja)); 

// Solução sem this
function mapSemThis(arr) {
    return arr.map(function (item){
        return item * 2;
    });
}

var nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));