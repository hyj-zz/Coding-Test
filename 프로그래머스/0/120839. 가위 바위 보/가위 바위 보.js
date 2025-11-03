function solution(rsp) {
    const answer = [...rsp].map((e) => e === '2' ? '0' : e === '0' ? '5' : '2');
    return answer.join('')
}