function solution(n, k) {
    var answer = 0;
    let service = parseInt(n / 10);
    answer += 12000 * n;
    answer += 2000 * (k - service);
    return answer;
}