function calculateFactorial(){
    let num = document.getElementById("numberInput").value;
    let factorial = 1;
    if(num < 0){
        document.getElementById("result").innerText = "Factorial not defined for negative numbers";
        return;
    }
    for(let i = 1; i <= num; i++){
        factorial = factorial * i;
    }
    document.getElementById("result").innerText = "Factorial of " + num + " is " + factorial;
}