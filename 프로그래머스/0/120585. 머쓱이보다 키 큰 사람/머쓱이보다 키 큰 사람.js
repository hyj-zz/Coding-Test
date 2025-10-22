function solution(array, height) {
    let taller = [];
    array.forEach(i => {
        if (i > height) {
            taller.push(i);
        }
    });
    return taller.length;
}
