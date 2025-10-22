function solution(num1, num2) {
    var answer = 0;
    if(num1 <= 100 && num1 >= 0 && num2 <= 100 && num2 >= 0) {
        answer = num1 * num2;
    }
    return answer;
}

solution(12, 8)