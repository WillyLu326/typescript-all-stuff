/**
 * Created by zhenglu on 12/4/16.
 */
namespace CircleMath{
    const PI = 3.14;

    export function calcCircumference(diameter: number): number {
        return diameter * PI;
    }
}

console.log(CircleMath.calcCircumference(3));