//Question: Second Largest no of Array


function secondLargest(arr) {
    let Largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > Largest) {
            secondLargest = Largest;
            Largest = arr[i];
        } else if (arr[i] != Largest && arr[i] > secondLargest){
            secondLargest = arr[i];
        }
        
    }
    return secondLargest;
}

console.log(secondLargest([10, 5, 11, 7, 15]));