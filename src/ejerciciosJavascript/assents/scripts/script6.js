const bubble = function(numbers){
    for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
        if (numbers[j] > numbers[j + 1]) {
            const temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
return numbers;
};

let numbers=([3, 6, 12, 5, 100, 1]);

console.log(bubble(numbers)); 
