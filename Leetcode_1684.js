// Count the number of consistent strings
var countConsistentStrings = function (allowed, words) {
    const re = new RegExp(`^[${allowed}]+$`);
    let count = 0

    words.forEach(word => {
        if (word.match(re)) count++
    })

    return count;
};

console.log(countConsistentStrings("ab",["ad","bd","aaab","baa","badab"]))