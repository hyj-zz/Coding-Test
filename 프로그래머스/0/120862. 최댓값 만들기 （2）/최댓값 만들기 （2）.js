function solution(numbers) {
    numbers.sort((a, b) => a - b);
    const n = numbers.length;

    const product1 = numbers[0] * numbers[1];
    const product2 = numbers[n - 1] * numbers[n - 2];

    return Math.max(product1, product2);
}