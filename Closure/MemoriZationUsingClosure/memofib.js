

// we can do memrixation using closure means we can store a va;ue at once and after that we will access it we 
// not need to calculate same opreation again and again

// here is the example of memorization 


function memoFib() {
    let memo = [];
    return function fibbonaci(num) {
        if (memo[num] == true) {
            return memo[num];
        }

        else {
            if (num < 2) {
                return num;
            }
            else {
                let ans = fibbonaci(num - 1) + fibbonaci(num - 2);
                memo[num] = ans;
                return ans;
            }
        }

    }
}

let f = memoFib();
console.log(f(3));



























