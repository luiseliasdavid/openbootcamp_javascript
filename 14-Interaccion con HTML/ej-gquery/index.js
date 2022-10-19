let boton = document.querySelector("input")
console.log(boton.value)
boton.addEventListener("click", () => alert("click en el botón"))

$(document).ready(function(){


    $("h1").css({"color":"red"})
    $(".btn1").click(()=>{
        alert("click en el boton")
        console.log("Hola, estoy utilizando jQuery")
    })
})