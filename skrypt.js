var iloscZn=8;
var iloscWolnychZnakow=0;
var iloscDuzeL=0;
var iloscMaleL=0;
var iloscZnakowSpecjalnych=0;
var iloscLiczb=0;

function iloscZnakow(){
    iloscZn=document.getElementById("iloscZnakow").value;
    ustawWolne()
}
function ustawWolne(){
    iloscWolnychZnakow=+iloscZn-(+iloscDuzeL+ +iloscMaleL+ +iloscZnakowSpecjalnych+ +iloscLiczb);

    if(iloscWolnychZnakow<0){
        reset();
        alert("Funkcja idiotoodporna - za mało znaków");
    }

    document.getElementById("iloscDuzeL").max=+iloscWolnychZnakow+ +iloscDuzeL;
    document.getElementById("iloscMaleL").max=+iloscWolnychZnakow+ +iloscMaleL;
    document.getElementById("iloscZnakowSpecjalnych").max=+iloscWolnychZnakow+ +iloscZnakowSpecjalnych;
    document.getElementById("iloscLiczb").max=+iloscWolnychZnakow+ +iloscLiczb;
}
function reset(){
    iloscLiczb=0;
    document.getElementById("iloscLiczb").value=0;
    document.getElementById("wybLiczb").value=0;
    iloscDuzeL=0;
    document.getElementById("iloscDuzeL").value=0;
    document.getElementById("wybDuzeL").value=0;
    iloscMaleL=0;
    document.getElementById("iloscMaleL").value=0;
    document.getElementById("wybMaleL").value=0;
    iloscZnakowSpecjalnych=0;
    document.getElementById("iloscZnakowSpecjalnych").value=0;
    document.getElementById("wybZnakowSpecjalnych").value=0;
    iloscWolnychZnakow-iloscZn;


}

function wybieranieDuzeL(){
    iloscDuzeL=document.getElementById("iloscDuzeL").value;
    document.getElementById("wybDuzeL").value=iloscDuzeL;
    ustawWolne()
}
function wybieranieMaleL(){
    iloscMaleL=document.getElementById("iloscMaleL").value;
    document.getElementById("wybMaleL").value=iloscMaleL;
    ustawWolne()
}
function wybieranieMaleL(){
    iloscMaleL=document.getElementById("iloscMaleL").value;
    document.getElementById("wybMaleL").value=iloscMaleL;
    ustawWolne()
}
function wybieranieZnakowSpecjalnych(){
    iloscZnakowSpecjalnych=document.getElementById("iloscZnakowSpecjalnych").value;
    document.getElementById("wybZnakiSpecjalne").value=iloscMaleL;
    ustawWolne()
}
function wybieranieLiczb(){
    iloscLiczb=document.getElementById("iloscLiczb").value;
    document.getElementById("wybLiczb").value=iloscMaleL;
    ustawWolne()
}
function generujHaslo(){
    let haslo="";
    const alfabetMale="abcdefghijhklmnoprstuvwxyz";
    const alfabetDuze='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alfabetZnakiSpecjalne='!@#$%^&*()-={}[];:,.<>?';
    const alfabetLiczb='1234567890';

    //losowanie malych liter
    for(let i=0;i<iloscMaleL;i++){
        haslo+=alfabetMale.charAt(Math.floor(Math.random()*alfabetMale.length));
    }
    //losowanie duzych liter
    for(let i=0;i<iloscDuzeL;i++){
        haslo+=alfabetDuze[Math.floor(Math.random()*alfabetDuze.length)];
    }
    //losowanie znakowspecjalnych
    for(let i=0;i<iloscZnakowSpecjalnych;i++){
        haslo+=alfabetZnakiSpecjalne[Math.floor(Math.random()*alfabetZnakiSpecjalne.length)];
    }
    //losowanie liczb
    for(let i=0;i<iloscLiczb;i++){
        haslo+=alfabetLiczb[Math.floor(Math.random()*alfabetLiczb.length)];
    }
    //losowanie dodatkowych znakow
    for(let i=0;i<iloscWolnychZnakow;i++){
        haski+=alfabetMale.charAt(Math.floor(Math.random()*alfabetMale.length));
    }
    
   // let dane=zmianaKolejnosci(haslo);
    document.getElementById("haslo").value=zmianaKolejnosci(haslo);
}
function zmianaKolejnosci(haslo){
    let wynik=haslo.split('');
    for(let i=0;i<wynik.length;i++){
        let los=Math.floor(Math.random()*wynik.length);
        let tmp=wynik[i];
        wynik[i]=wynik[los];
        wynik[los]=tmp;
    }
    haslo=wynik.join('');
    return haslo;
}