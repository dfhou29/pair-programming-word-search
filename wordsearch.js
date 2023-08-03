const flip = function(matrix) {
    let transposed = [];

    for (let column = 0; column < matrix[0].length; column++) {
        transposed.push([]);
    }

    for (let row of matrix) {
        for (let transposedColumn = 0; transposedColumn < transposed.length; transposedColumn++) {
            transposed[transposedColumn].push(row[transposedColumn]);
        }
    }

    return transposed;
};

const wordSearch = (letters, word) => {
    let wordLists = [];
    const horizontalJoin = letters.map(ls => ls.join(''));
    horizontalJoin.forEach((element) => {
        wordLists.push(element);
    });

    const horizontalReversedJoin = letters.map(ls => ls.reverse().join(''));
    horizontalReversedJoin.forEach((element) => {
        wordLists.push(element);
    });

    const verticalJoin = flip(letters).map(ls => ls.join(''));
    verticalJoin.forEach((element) => {
        wordLists.push(element);
    });

    const verticalReversedJoin = flip(letters).map(ls => ls.reverse().join(''));
    verticalReversedJoin.forEach((element) => {
        wordLists.push(element);
    });


    for (const l of wordLists) {
        if (l.includes(word)) return true;
    }

    return false;
};

module.exports = wordSearch;