const numbers = [48, 87, 25, 41, 69, 91, 42, 75, 95, 67, 19, 4, 17, 29, 5, 9, 50];

const sortNumber = numbers.sort(function(first, secound){
    return first - secound;
}); 

console.log(sortNumber);
