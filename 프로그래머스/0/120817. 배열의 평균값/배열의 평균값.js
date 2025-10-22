function solution(numbers) {
    var answer = 0;
    numbers.forEach((i) => {
        answer += i;
    })
    answer = answer / numbers.length;
    return answer;
}