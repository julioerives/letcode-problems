var letterCombinations = function(digits) {
    const phone_combinations = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    var combinations = [];

    if (!digits.length) return combinations;

    const dfs = (index, currentCombination) => {
        if (index === digits.length) {
            combinations.push(currentCombination);
            return;
        }

        const digit = digits[index];
        const letters = phone_combinations[digit];

        for (const letter of letters) {
            dfs(index + 1, currentCombination + letter);
        }
    };

    dfs(0, '');

    return combinations;
};

console.log(letterCombinations("23"));