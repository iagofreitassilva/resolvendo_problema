
$(document).ready(function () {
    $('#carousel-imagens').slick({
    autoplay: true,
    })
})

$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 00000-0000'
})

$('#cpf').mask('000.000.000-00', {
    placeholder: '000.000.000-00'
})

$('#cep').mask('00000-000', {
    placeholder: '00000-000'
})

$('form').validate({
    rules: {
        nome: {
            requeride: true
        },
        email: {
            requeride: true,
            email: true
        },
        telefone: {
            requeride: true
        },
        cpf: {
            requeride: true
        },
        endereco: {
            requeride: true
        },
        cep: {
            requeride: true
        }
    },
        messages: {
                    nome: 'Por favor, insira seu nome'
                },
                submitHandler: function(form) {
                    console.log(form)
                },
                invalidHandler: function(evento, validador) {
                    let camposIncorretos = validador.numberOfInvalids();
                    if (camposIncorretos) {
                        alert(`Existem ${camposIncorretos} campos incorretos`)
                    }
                }
            })



