function factorial_print(){
    var n = parseInt(document.getElementById("n").value)
    if (0 <= n && n <= 1000){
        var footer = document.getElementById("footer")
        footer.innerHTML = factorial(n)
    }
}
function ncr(){
    var ncrn = parseInt(document.getElementById("ncrn").value)
    var ncrr = parseInt(document.getElementById("ncrr").value)
    var footer = document.getElementById("footer")
    if ((0 <= ncrn && ncrn <= 100) && (0 <= ncrr && ncrn <= 100) && (ncrn >= ncrr)){
        footer.innerHTML = factorial(ncrn) / (factorial(ncrr) * factorial(ncrn - ncrr))
    }
}
function npr(){
    var nprn = parseInt(document.getElementById("nprn").value)
    var nprr = parseInt(document.getElementById("nprr").value)
    var footer = document.getElementById("footer")
    if ((0 <= nprn && nprn <= 100) && (0 <= nprr && nprr <= 100) && (nprn >= nprr)){
        footer.innerHTML = factorial(nprn) / factorial(nprn - nprr)
    }
}
function factors(){
    var n = parseInt(document.getElementById("nn").value)
    if (0 <= n && n <= 1000000000000){
        var a = [];
        for (var i = 1 ; i <= parseInt(Math.sqrt(n)) ; i = i + 1){
            if ((n % i) == 0){
                a.push(parseInt(i));
                if (i != Math.sqrt(n)){
                    a.push(parseInt(n / i));
                }
            }
        }
        var footer = document.getElementById("footer")
        footer.innerHTML = a.sort(function(a,b){return(a - b)})
    }
}
function prime_factors(){
    var n = parseInt(document.getElementById("nnpf").value)
    if (0 <= n && n <= 1000000000000000000000){
        var a = [];
        while (n % 2 == 0){
            a.push(2)
            n = parseInt(n / 2)
        }
        for (var i = 3 ; i <= parseInt(Math.sqrt(n)) ; i = i + 2){
            while ((n % i) == 0){
                a.push(parseInt(i));
                n = parseInt(n / i);
            }
        }
        if (n > 2){
            a.push(n);
        }
        var footer = document.getElementById("footer")
        footer.innerHTML = a.sort(function(a,b){return(a - b)})
    }
}
function power(){
    var a = parseInt(document.getElementById("a").value)
    var b = parseInt(document.getElementById("b").value)
    if ((-1000 <= a && a <= 1000) && (-100 <= b && b <= 100)){
        var footer = document.getElementById("footer")
        footer.innerHTML = Math.pow(a,b)
    }
}
function factorial(userInt)
{
  if(userInt===0)
    return '1'

  if(!userInt)
    return ''

  var i, nextNumber, carret,

  result = userInt.toString().split('').reverse().map(Number)

  while(--userInt){
    i = carret = 0

    while((nextNumber = result[i++]) !== undefined || carret) {
      carret = (nextNumber || 0) * userInt + carret
      result[i-1] = carret % 10
      carret = parseInt(carret/10)
    }
  }




  return result.reverse().join('')
}
