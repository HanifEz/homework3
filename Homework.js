// Generate array dengan 100 nilai random (1 sampai 50)
let randomArray = [];
for (let i = 0; i < 100; i++) {
    randomArray.push(Math.floor(Math.random() * 50) + 1);
}

// Pecah array menjadi dua array (array genap dan array ganjil)
let evenArray = [];
let oddArray = [];
for (let i = 0; i < randomArray.length; i++) {
    if (i % 2 === 0) {
        evenArray.push(randomArray[i]);
    } else {
        oddArray.push(randomArray[i]);
    }
}

// Menghitung nilai min untuk array genap
let minEven = evenArray[0];
for (let i = 1; i < evenArray.length; i++) {
    if (evenArray[i] < minEven) {
        minEven = evenArray[i];
    }
}

// Menghitung nilai max untuk array genap
let maxEven = evenArray[0];
for (let i = 1; i < evenArray.length; i++) {
    if (evenArray[i] > maxEven) {
        maxEven = evenArray[i];
    }
}

// Menghitung total untuk array genap
let totalEven = 0;
for (let i = 0; i < evenArray.length; i++) {
    totalEven += evenArray[i];
}

// Menghitung rata-rata untuk array genap
let averageEven = totalEven / evenArray.length;

// Menghitung nilai min untuk array ganjil
let minOdd = oddArray[0];
for (let i = 1; i < oddArray.length; i++) {
    if (oddArray[i] < minOdd) {
        minOdd = oddArray[i];
    }
}

// Menghitung nilai max untuk array ganjil
let maxOdd = oddArray[0];
for (let i = 1; i < oddArray.length; i++) {
    if (oddArray[i] > maxOdd) {
        maxOdd = oddArray[i];
    }
}

// Menghitung total untuk array ganjil
let totalOdd = 0;
for (let i = 0; i < oddArray.length; i++) {
    totalOdd += oddArray[i];
}

// Menghitung rata-rata untuk array ganjil
let averageOdd = totalOdd / oddArray.length;

// Bandingkan array genap dan array ganjil
let comparison = {};
comparison.min = minEven > minOdd ? "Min lebih besar pada array genap" : "Min lebih besar pada array ganjil";
comparison.max = maxEven > maxOdd ? "Max lebih besar pada array genap" : "Max lebih besar pada array ganjil";
comparison.total = totalEven === totalOdd ? "Total memiliki nilai yang sama pada array genap dan ganjil" : "Total memiliki nilai yang berbeda pada array genap dan ganjil";
comparison.average = averageEven > averageOdd ? "Rata-rata lebih besar pada array genap" : "Rata-rata lebih besar pada array ganjil";

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
