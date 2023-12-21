var minimumTotal = function(triangle) {
    for (let index = triangle.length-2; index >=0; index--) {
        for (let index2 = 0; index2 <= index; index2++) {
            triangle[index][index2] += Math.min(triangle[index+1][index2],triangle[index+1][index2+1])
        }
    }
    return triangle[0][0];
};
console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))