/**
 * Created by zhenglu on 12/5/16.
 */
// Generic Function

function betterEcho<T> (data: T) {
    return data;
}

// Build-in Generic
const numberArray: Array<number> = [1.98, 2.1];
numberArray.push(-2.2);
// numberArray.push(''); // Error