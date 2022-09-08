//==========DELAY==========//

// function mostrar() {
//     document.getElementById("ocutar-botao").style.display = "block";
//     document.getElementById("ocutar-botao").style.visibility = "visible";
    
//     }
//     var tempo = 1110 //tempo em segundos 
//     var res = tempo * 1000
    
//     setTimeout("mostrar()", res); 
    
//     // ===================================================//
    
//     function mostrar2() {
//     document.getElementById("ocutar-pagina").style.display = "block";
//     document.getElementById("ocutar-pagina").style.visibility = "visible";
    
//     }
//     var tempo = 1110 //tempo em segundos 
//     var res = tempo * 1000
    
//     setTimeout("mostrar2()", res); 

//==========DELAY==========//



//==========CARROSEL==========//

$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 3500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

//==========CARROSEL==========//


//==========BACKREDIRECT==========//

(function(b) {
    var a = {
        version: "0.0.1",
        history_api: typeof history.pushState !== "undefined",
        init: function() {
            b.location.hash = "#no-back";
            a.configure();
        },
        hasChanged: function() {
            if (b.location.hash == "#no-back") {
                b.location.hash = "#";
                b.location.href = "https://belezababacu.com/back01"; //LINK PARA REDIRECIONAR AQUI
            }
        },
        checkCompat: function() {
            if (b.addEventListener) {
                b.addEventListener("hashchange", a.hasChanged, false);
            } else {
                if (b.attachEvent) {
                    b.attachEvent("onhashchange", a.hasChanged);
                } else {
                    b.onhashchange = a.hasChanged;
                }
            }
        },
        configure: function() {
            if (b.location.hash == "#no-back") {
                if (this.history_api) {
                    history.pushState(null, "", "#");
                } else {
                    b.location.hash = "#";
                    b.location.href = "https://belezababacu.com/back01"; //LINK PARA REDIRECIONAR AQUI
                }
            }
            a.checkCompat();
            a.hasChanged();
        }
    };
    if (typeof define === "function" && define.amd) {
        define(function() {
            return a;
        });
    } else {
        if (typeof module === "object" && module.exports) {
            module.exports = a;
        } else {
            b.noback = a;
        }
    }
    a.init();
}(window));

//==========BACKREDIRECT==========//