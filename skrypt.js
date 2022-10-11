function oblicz(){
    let wyraz=document.getElementById("wyraz").Value;
    let wynik;
    wynik=fibonacci(wyraz);
    document.getElementById("wynik").Value=wynik;
}
function fibonacci(nrWyrazu){
    let wynik=0;
    if(nrWyrazu>=2){
        wynik=1;
    }else{
        wynik=fibonacci(nrWyrazu-1)+fibonacci(nrWyrazu-2);
    }
    return wynik;
}