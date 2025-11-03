function solution(hp) {
    var answer = 0;
    const generalAnt = Math.floor(hp / 5);
    const soldierAnt = Math.floor((hp - generalAnt * 5) / 3);
    const workerAnt = hp - (generalAnt * 5) - (soldierAnt * 3);
    answer = generalAnt + soldierAnt + workerAnt;
    return answer;
}