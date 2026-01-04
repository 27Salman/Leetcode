/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    return names.map( (names,i) => ( {names, heights:heights[i]} ) )
                .sort( (a,b) => b.heights-a.heights )
                .map( person => person.names )
};