document.addEventListener('DOMContentLoaded', function() {
    // Q1) Remove all names starting with vowels from an array of states in India
    const statesQ1 = ["Kerala", "Gujarat", "Odisha", "Assam", "Uttar Pradesh", "Goa", "Haryana"];

    const startsWithVowel = str => {
        const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        return vowels.includes(str.charAt(0));
    };

    const filteredStatesQ1 = statesQ1.filter(state => !startsWithVowel(state));

    const stateListQ1 = document.getElementById('stateListQ1');
    filteredStatesQ1.forEach(state => {
        const li = document.createElement('li');
        li.textContent = state;
        stateListQ1.appendChild(li);
    });

    // Q2) Reverse the order of words in a string
    const strQ2 = 'I love my India';
    const reversedStrQ2 = strQ2.split(' ').reverse().join(' ');
    document.getElementById('reversedStringQ2').textContent = reversedStrQ2;

    // Q3) Replace part of a string using splice
    let stringQ3 = 'INDIA';
    const insertionQ3 = 'ONES';
    const indexQ3 = 3;
    stringQ3 = stringQ3.split('');
    stringQ3.splice(indexQ3, 0, ...insertionQ3);
    stringQ3 = stringQ3.join('');
    document.getElementById('modifiedStringQ3').textContent = stringQ3;

    // Q4) Count vowels and consonants in a string
    const countVowelsAndConsonants = str => {
        const vowels = 'aeiouAEIOU';
        let vowelCount = 0;
        let consonantCount = 0;

        for (let char of str) {
            if (vowels.includes(char)) {
                vowelCount++;
            } else if (char.match(/[a-zA-Z]/)) {
                consonantCount++;
            }
        }

        return { vowels: vowelCount, consonants: consonantCount };
    };

    const sentenceQ4 = "This is a sample sentence with vowels and consonants.";
    const countsQ4 = countVowelsAndConsonants(sentenceQ4);
    document.getElementById('countResultQ4').textContent = `Vowels: ${countsQ4.vowels}, Consonants: ${countsQ4.consonants}`;

    // Q5) Replace wrong word with correct word in a sentence using string.replace
    const correctfn = (sentence, wrong, correct) => {
        const regex = new RegExp(`\\b${wrong}\\b`, 'gi'); // Match whole word, case insensitive
        return sentence.replace(regex, correct);
    };

    const sentenceQ5 = "This sentance has some wrong words.";
    const correctedSentenceQ5 = correctfn(sentenceQ5, 'sentance', 'sentence');
    document.getElementById('correctedSentenceQ5').textContent = correctedSentenceQ5;

    // Q6) Filter numbers greater than 5 from an array using array.filter
    const inputArrQ6 = [1, 2, 3, 9, 10, 7, 5, 4, 3];
    const filteredNumbersQ6 = inputArrQ6.filter(num => num > 5);
    document.getElementById('filteredNumbersQ6').textContent = filteredNumbersQ6.join(', ');

    // Q7) Calculate average scores for students using array.map and array.reduce
    const studentsQ7 = [
        { name: "Ram", scores: [80, 70, 60] },
        { name: "Mohan", scores: [80, 70, 90] },
        { name: "Sai", scores: [60, 70, 80] },
        { name: "Hemang", scores: [90, 90, 80, 80] }
    ];

    const averageScoresQ7 = studentsQ7.map(student => {
        const averageScore = student.scores.reduce((total, score) => total + score, 0) / student.scores.length;
        return { name: student.name, average: averageScore };
    });

    const averageScoresListQ7 = document.getElementById('averageScoresQ7');
    averageScoresQ7.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `${student.name}: ${student.average.toFixed(2)}`;
        averageScoresListQ7.appendChild(li);
    });

    // Q8) Find repeated sum of digits until there is a single digit in a number
    const repeatedSumOfDigits = num => {
        while (num >= 10) {
            num = String(num).split('').reduce((sum, digit) => sum + parseInt(digit), 0);
        }
        return num;
    };

    const numQ8 = 456;
    const singleDigitSumQ8 = repeatedSumOfDigits(numQ8);
    document.getElementById('singleDigitSumQ8').textContent = singleDigitSumQ8;

    // Q9) Count the number of words in a paragraph
    const countWords = paragraph => {
        const words = paragraph.split(' ').filter(word => word.trim() !== '');
        return words.length;
    };

    const paragraphQ9 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula tellus id.";
    const wordCountQ9 = countWords(paragraphQ9);
    document.getElementById('wordCountQ9').textContent = `Word count: ${wordCountQ9}`;

    // Q10) Reverse a string
    const reverseString = str => str.split('').reverse().join('');
    const inputStringQ10 = "Hello";
    const reversedStringQ10 = reverseString(inputStringQ10);
    document.getElementById('reversedStringQ10').textContent = reversedStringQ10;

    // Q11) Calculate average scores for students from structured input
    const studentsQ11 = [
        { student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
        { student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
        { student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } }
    ];

    const averageScoresQ11 = studentsQ11.map(student => {
        const [studentName, scores] = Object.entries(student)[0];
        const averageScore = Object.values(scores).reduce((total, score) => total + score, 0) / Object.values(scores).length;
        return { [studentName]: { average: averageScore.toFixed(2) } };
    });

    const averageScoresListQ11 = document.getElementById('averageScoresStructuredQ11');
    averageScoresQ11.forEach(student => {
        const li = document.createElement('li');
        const studentName = Object.keys(student)[0];
        const averageScore = student[studentName].average;
        li.textContent = `${studentName}: ${averageScore}`;
        averageScoresListQ11.appendChild(li);
    });
});