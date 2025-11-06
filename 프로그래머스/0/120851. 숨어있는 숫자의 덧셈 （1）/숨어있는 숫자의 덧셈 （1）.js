function solution(my_string) {
    const numbers = my_string.split('').filter(char => !isNaN(char));
    return numbers.reduce((sum, num) => sum + Number(num), 0);
}