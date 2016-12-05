/**
 * Created by zhenglu on 12/4/16.
 */
var CircleMath;
(function (CircleMath) {
    var PI = 3.14;
    function calcCircumference(diameter) {
        return diameter * PI;
    }
    CircleMath.calcCircumference = calcCircumference;
})(CircleMath || (CircleMath = {}));
console.log(CircleMath.calcCircumference(3));
