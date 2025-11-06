function solution(order) {
    return [...String(order)].map(Number).filter(num => num % 3 === 0 && num !== 0).length; 
}