const questions = [
    "what is your name?",
    'fav hobby?',
    'preferred programming language?'
];
let answer = [];

const ask = (i) => {
    console.log(`\n ${questions[i]}`);
}

process.stdin.on('data', (data) => {
    answer.push(data.toString().trim());

    if (answer.length < questions.length) {
        ask(answer.length);
    } else {
        process.exit();
    }
});

process.on('exit', () => {
    process.stdout.write('\n\n\n\n');

    process.stdout.write(`Go ${answer[0]}! Get to ${answer[1]} in ${answer[2]}`);

    process.stdout.write('\n\n\n\n\n\n');
})
ask(0);