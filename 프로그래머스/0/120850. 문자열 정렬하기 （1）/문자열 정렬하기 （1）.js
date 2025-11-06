function solution(my_string) {
    var answer = [];
      [...my_string].forEach(i => {
        if (!isNaN(i)) {
          answer.push(Number(i));
        }
      });
    answer.sort((a , b) => a - b);
    console.log(answer);
    return answer;
}