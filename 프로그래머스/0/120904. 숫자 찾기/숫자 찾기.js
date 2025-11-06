function solution(num, k) {
    var numStr = String(num);
    var kStr = String(k);
    
    if (numStr.indexOf(kStr) !== -1) {
        return numStr.indexOf(kStr) + 1;
    } else {
        return -1;
    }
}