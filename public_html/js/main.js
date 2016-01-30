/* 
 *  Created on : 29/01/2016, 05:23:53
 *  Author     : Wander
 * 
 */

$(document).ready(main);

//contador para verificar se o menu está aberto ou não
var cont = 1;

//metodo principal que executará assim q o documento for carregado
function main()
{
    //mostra o menu, mas totalmente a esqueda
    $('.btn-menu2').css('display', 'block');
    $('nav').css('left', '-100%');

    //chamada do metodo para o clique no menu
    $('.menu_bar').click(function ()
    {

        //verifica se ja esta aberto, caso esteja executa
        if (cont === 1)
        {
            //anima o texto para posição original
            $('nav').animate({
                left: '0'
            });
            
            //atualiza o menu icone do menu principal corretamente
            $('.btn-menu1').css('display', 'block');
            $('.btn-menu2').css('display', 'none');
            cont = 0;
        }
        else
        {
            cont = 1;
            //atualiza o menu icone do menu principal corretamente
            $('.btn-menu1').css('display', 'none');
            $('.btn-menu2').css('display', 'block');
            
            //anima os icones do menu para a esquerda totalmente
            $('nav').animate({
                left: '-100%'
            });
        }

    });

    //contador para verificar se ja foi clicado
    var i = 1;

    //chamada do metodo para o mouse encima do elemento
    $('.foto-com-legenda > img').hover(function () {

        //caso esteja em cima abre a legenda, senão oculta
        if (i === 1)
        {
            $('.foto-com-legenda figcaption').toggle();
            i = 0;
        }
        else
        {
            i = 1;
            $('.foto-com-legenda figcaption').toggle();
        }
    });
}//fim metodo main


