// JavaScript source code
getFactorial = () => {
    const n = parseInt(document.getElementById("factorialNumber").value);
    let factorial = (n) => {
        if (n === 0) {
            return 1
        } else {
            return n * factorial(n - 1);
        }
    }
    document.getElementById("factorialAnswer").innerHTML = factorial(n);
}

findSum = (array, targetSum) => {
    // Sort array
    mergeSort(array);
    //
    let l = 0;
    let r = array.length - 1;
    let actualSum = parseInt(array[l]) + parseInt(array[r]);
    while ((r - l) > 0 && (actualSum != targetSum)){
        actualSum = parseInt(array[l]) + parseInt(array[r]);
        if (actualSum < targetSum) {
            l += 1;
        }
        else if (actualSum > targetSum) {
            r -= 1;
        }
    }
    if (actualSum === targetSum) {
        document.getElementById("findSum").innerHTML = "Yes.  Actual Sum:"+actualSum+" Target Sum:"+targetSum+".  "+array[l] + " + " + array[r] + " = " + targetSum;
    }
    else {
        document.getElementById("findSum").innerHTML = "There are no pairs in the set that equal "+targetSum+".  Actual sum is:"+actualSum;
    }
}

mergeSort = (array) => {
    // If length of 1, no sorting needed
    if (array.length === 1) {
        document.getElementById("mergeTest").innerHTML = "Array has one element: "+array;
        return array;
    }
    // arr1 = array 0-midpoint, arr2 = array midpoint-end
    const mid = Math.floor(array.length / 2);
    const arr1 = array.slice(0,mid);
    const arr2 = array.slice(mid);
    return merge(mergeSort(arr1), mergeSort(arr2));
}
    
merge = (arr1, arr2) => {
    // Create new array to store merged arrays
    let sortArray = [];
    /*
    /  While there are values in each array,
    /  compare values of first element and add the smaller value to the sorted array
    /  then remove smaller element from original array
    */
    while (arr1.length > 0 && arr2.length > 0){
        if (arr1[0] > arr2[0]) {
            sortArray.push(arr2[0]);
            arr2.splice(0, 1);
        }
        else {
            sortArray.push(arr1[0]);
            arr1.splice(0, 1);
        }
    }
    // If only one array has elements push value to sorted array and remove from original array.
    while (arr1.length > 0) {
        sortArray.push(arr1[0]);
        arr1.splice(0, 1);
    }
    while (arr2.length > 0) {
        sortArray.push(arr2[0]);
        arr2.splice(0, 1);
    }
    document.getElementById("mergeTest").innerHTML = "Sorted Array:" + sortArray;
    return sortArray;
} 

countOnes = () => {
    const n = parseInt(document.getElementById("binaryInput").value);
    let showBinary = [];
    return findOnes(n, 0, showBinary);
}

findOnes = (num, count, showBinary) => {
    // If number is odd, then it has a 1 in the last column
    if (num === 1) {
        count++;
        showBinary.push(1);
        document.getElementById("binaryAnswer").innerHTML = " Count:" + count + "Binary: "+showBinary;
        return count;
    }
    else if (Math.abs(num % 2) === 1) {
        showBinary.push(1);
        count++;
    }
    if (num % 2 === 0) {
        showBinary.push(0);
    }
    let tempNum = num / 2;
    num = parseInt(tempNum);
    findOnes(num, count, showBinary);
    return count;
}

