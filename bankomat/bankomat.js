//Aleksander Sysio
//Pin = 1234

alert("Wybierz kartę")
function ukrycie(){
    document.getElementById("bankomat").hidden = true
}
ukrycie()

document.getElementById("button").onclick = function(){
    alert("Niestety nie obsługujemy innych kart");
}

var hajs=" "
document.getElementById("cards").onclick = function(){
    hajs = prompt("Wpisz kwote do wypłaty(zł) i zatwierdź, a następnie PIN")
    document.getElementById("bankomat").hidden = false
}

document.getElementById("1").onclick = function(){
    a = parseFloat(document.getElementById("1").value)
    document.getElementById("wyswietlacz").innerHTML += a
}
document.getElementById("2").onclick = function(){
    a = parseFloat(document.getElementById("2").value)
    document.getElementById("wyswietlacz").innerHTML += a
}
document.getElementById("3").onclick = function(){
    a = parseFloat(document.getElementById("3").value)
    document.getElementById("wyswietlacz").innerHTML += a
}
document.getElementById("4").onclick = function(){
    a = parseFloat(document.getElementById("4").value)
    document.getElementById("wyswietlacz").innerHTML += a
}
document.getElementById("5").onclick = function(){
    a = parseFloat(document.getElementById("5").value)
    document.getElementById("wyswietlacz").innerHTML += a
}
document.getElementById("6").onclick = function(){
    a = parseFloat(document.getElementById("6").value)
    document.getElementById("wyswietlacz").innerHTML += a
}
document.getElementById("7").onclick = function(){
    a = parseFloat(document.getElementById("7").value)
    document.getElementById("wyswietlacz").innerHTML += a
}
document.getElementById("8").onclick = function(){
    a = parseFloat(document.getElementById("8").value)
    document.getElementById("wyswietlacz").innerHTML += a
}
document.getElementById("9").onclick = function(){
    a = parseFloat(document.getElementById("9").value)
    document.getElementById("wyswietlacz").innerHTML += a
}
document.getElementById("0").onclick = function(){
    a = parseFloat(document.getElementById("0").value)
    document.getElementById("wyswietlacz").innerHTML += a
}

document.getElementById("red").onclick = function(){
    document.getElementById("wyswietlacz").innerHTML = ""
}
document.getElementById("green").onclick = function(){
    var pin = parseFloat(document.getElementById("wyswietlacz").innerHTML)
    if(pin==1234){
        document.getElementById("wyswietlacz").innerHTML = "Poprawny PIN"
        alert("Wypłacono " + hajs)
    }
    else{
        document.getElementById("wyswietlacz").innerHTML = ""
        alert("Niepoprawny PIN")
    }
}

