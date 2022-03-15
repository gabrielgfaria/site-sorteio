const limite = 30;

var botao_enviar = document.querySelector("#botao_enviar");
var qte_inserida = document.querySelector("#campo_qte");
var botao_reiniciar = document.querySelector("#botao_reiniciar");
var botao_sortear = document.querySelector("#botao_sortear")

botao_reiniciar.addEventListener("click", apagar_dados);
botao_enviar.addEventListener("click", criar_form);
botao_enviar.addEventListener("click", gerenciar_entradas);
botao_sortear.addEventListener("click", sortear);


function sortear() {
    var sorteio = document.getElementsByClassName("lista_nomes")
    var numero_sorteado
    while(1) {
        numero_sorteado = Math.floor(Math.random() * sorteio.length);
        if(sorteio[numero_sorteado].value =="") {}
        else break
    }
    var seletor_paragrafo_sorteado = document.querySelector("#paragrafo_sorteado")
    seletor_paragrafo_sorteado.innerHTML = sorteio[numero_sorteado].value;
    seletor_paragrafo_sorteado.style.padding ="10px";
}

function criar_form() {
    var check_form = document.querySelector(".form_dados")
    if (check_form == null) {
        let criacao_inicial_form = document.createElement("form")
        criacao_inicial_form.classList = "form_dados"
        var nomes = document.querySelector("#container_nomes")
        nomes.appendChild(criacao_inicial_form);
        localStorage.setItem("form_criado", "true");
    }
}

function gerenciar_entradas() {
    if (isNaN(qte_inserida.value) == true || qte_inserida.value < 2 || qte_inserida.value > 30) alert("insira um numero de 2 a " + limite)


    else {
        var check_form = document.querySelector(".form_dados")
        if (qte_inserida.value < check_form.length) {
            var lista_nomes = document.getElementsByClassName("lista_nomes");
            for (var i = lista_nomes.length; i > qte_inserida.value; i--) {
                check_form.removeChild(lista_nomes[i - 1]);
            }

        }

        else {

            var novas_adicoes = qte_inserida.value - check_form.length;
            for (var i = 0; i < novas_adicoes; i++) {
                let lista_de_nomes = document.createElement("input")
                lista_de_nomes.classList = "lista_nomes"
                var seletor_form = document.querySelector(".form_dados")
                seletor_form.appendChild(lista_de_nomes);
            }

        }

    }
}

function apagar_dados() {
    var check_form = document.querySelector(".form_dados");
    var seletor_paragrafo_sorteado = document.querySelector("#paragrafo_sorteado")
    seletor_paragrafo_sorteado.innerHTML = "";
    seletor_paragrafo_sorteado.style.padding ="0px";
}
