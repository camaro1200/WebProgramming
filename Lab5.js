function find_min(arr) {
    temp = arr[0]
    for (i = 0; i < arr.length; i++)
        if(temp > arr[i])
            temp = arr[i]
    return temp;   // The function returns the product of p1 and p2
}

function find_max(arr) {
    temp = arr[0]
    for (i = 0; i < arr.length; i++)
        if(temp < arr[i])
            temp = arr[i]
    return temp;   // The function returns the product of p1 and p2
}

function find_median(arr) {
    arr.sort(function(a, b){return a-b});
    console.log(arr);
    return arr[Math.floor(arr.length/2)];   // The function returns the product of p1 and p2
}

function partition(arr, start, end){
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            // Swapping elements
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            // Moving to next element
            pivotIndex++;
        }
    }

    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
    return pivotIndex;
};

function quickSortRecursive(arr, start, end) {
    // Base case or terminating case
    if (start >= end) {
        return;
    }

    // Returns pivotIndex
    let index = partition(arr, start, end);

    // Recursively apply the same logic to the left and right subarrays
    quickSortRecursive(arr, start, index - 1);
    quickSortRecursive(arr, index + 1, end);
}







var arr = [];
while(arr.length < 20){
    var r = Math.floor(Math.random() * 100) + 1;
    arr.push(r);
}

console.log(arr);
console.log(find_min(arr));
console.log(find_max(arr));
console.log(find_median(arr));
quickSortRecursive(arr, 0, arr.length - 1)
console.log(arr);

/*
function tag_counter() {
    let tagsCount = {}
    for (const tag of document.body.getElementsByTagName('*')) {
        if (tag.tagName in tagsCount) tagsCount[tag.tagName] += 1
        else tagsCount[tag.tagName] = 1
    }

    console.log(tagsCount);
}
tag_counter()
*/

//document.querySelectorAll("ul > li").length