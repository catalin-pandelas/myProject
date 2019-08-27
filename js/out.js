document.addEventListener("DOMContentLoaded", function (event){
    function biggestSumOfTwoElements(array) {
        var sum = 0;
        var sorted =  array.sort(function (a,b) {
            return b-a;


        })

        sum = sorted[0] + sorted[1];
        return sum;

    }

    console.log(biggestSumOfTwoElements([1,2,3,4,0]))

});