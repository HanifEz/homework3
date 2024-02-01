// Fungsi untuk mendapatkan nilai random antara min dan max
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fungsi untuk membuat array dengan nilai random dari 1 sampai 50
function createRandomArray(length) {
    let randomArray = [];
    for (let i = 0; i < length; i++) {
        randomArray.push(getRandomValue(1, 50));
    }
    return randomArray;
}

// Fungsi untuk memecah array menjadi dua array (array genap dan array ganjil)
function splitArrayByIndex(array) {
    let evenArray = [];
    let oddArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            evenArray.push(array[i]);
        } else {
            oddArray.push(array[i]);
        }
    }
    return [evenArray, oddArray];
}

// Fungsi untuk menghitung nilai min
function getMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

// Fungsi untuk menghitung nilai max
function getMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

// Fungsi untuk menghitung total
function getTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

// Fungsi untuk menghitung rata-rata
function getAverage(array) {
    let total = getTotal(array);
    return total / array.length;
}

// Fungsi untuk membandingkan array genap dan array ganjil
function compareArrays(evenArray, oddArray) {
    let comparison = {};
    comparison.min = getMin(evenArray) > getMin(oddArray) ? "Min lebih besar pada array genap" : "Min lebih besar pada array ganjil";
    comparison.max = getMax(evenArray) > getMax(oddArray) ? "Max lebih besar pada array genap" : "Max lebih besar pada array ganjil";
    comparison.total = getTotal(evenArray) === getTotal(oddArray) ? "Total memiliki nilai yang sama pada array genap dan ganjil" : "Total memiliki nilai yang berbeda pada array genap dan ganjil";
    comparison.average = getAverage(evenArray) > getAverage(oddArray) ? "Rata-rata lebih besar pada array genap" : "Rata-rata lebih besar pada array ganjil";
    return comparison;
}

// Generate array dengan 100 nilai random
let randomArray = createRandomArray(100);

// Pecah array menjadi dua array (array genap dan array ganjil)
let [evenArray, oddArray] = splitArrayByIndex(randomArray);

// Menghitung nilai min, max, total, dan rata-rata untuk array genap
let minEven = getMin(evenArray);
let maxEven = getMax(evenArray);
let totalEven = getTotal(evenArray);
let averageEven = getAverage(evenArray);

// Menghitung nilai min, max, total, dan rata-rata untuk array ganjil
let minOdd = getMin(oddArray);
let maxOdd = getMax(oddArray);
let totalOdd = getTotal(oddArray);
let averageOdd = getAverage(oddArray);

// Membandingkan array genap dan array ganjil
let comparison = compareArrays(evenArray, oddArray);

// Output
console.log("Array dengan jumlah index 100:");
console.log(randomArray);
console.log("Array genap dengan jumlah index 50:");
console.log(evenArray);
console.log("Array ganjil dengan jumlah index 50:");
console.log(oddArray);
console.log("Min, Max, Total, Rata-rata pada array genap:");
console.log(`Min: ${minEven}, Max: ${maxEven}, Total: ${totalEven}, Rata-rata: ${averageEven}`);
console.log("Min, Max, Total, Rata-rata pada array ganjil:");
console.log(`Min: ${minOdd}, Max: ${maxOdd}, Total: ${totalOdd}, Rata-rata: ${averageOdd}`);
console.log("Perbandingan nilai min, max, total, dan rata-rata:");
console.log(comparison);