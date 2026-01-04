/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    for(let i = 0; i<heights.length; i++){
        for(let j = i+1; j<heights.length; j++){
            if(heights[i]<heights[j]){
                let temp = 0;
                temp = heights[i];
                heights[i]=heights[j];
                heights[j]=temp;

                let str = "";
                str = names[i];
                names[i]=names[j];
                names[j]=str;
            }
        }
    }return [...names];
};