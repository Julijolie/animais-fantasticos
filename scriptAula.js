//  const animais = document.getElementById('animais');
//  //retorne no console todas as imagens do site
// const imagens =  document.querySelectorAll('img');
//  //retorne no console apenas as imagens que começaram com a palavra imagem
// const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');

// //selecione todos os links internos (onde o href começa com #)
// const linksInternos = document.querySelectorAll('[href^="#"]');
//  //selecione o primeiro h2 denro de .animais-descrição
// const h2Animais = document.querySelector('.animais-descricao h2');
//  //selecione o ultimo p do site
//  const ultimoP = document.querySelectorAll('p')
//  console.log(ultimoP[ultimoP.length -1]); //escrever no console

//  //para retornas todas as imagens
//  const img = document.querySelectorAll('img');

//  //Mostre no console cada parágrafo do site
// const todosp = document.querySelectorAll('p');
// todosp.forEach((item) =>{
//     console.log(item)
// })

// //Mostre o código dos parágrafos no console
// todosp.forEach((item)=>{
//     console.log(item.innerText)
// });
 
// //como corrigir os erros abaixo:
// const imgs = document.querySelectorAll('img');

// imgs.forEach((item, index) => {
//     console.log(item, index);
// });

// let i = 0;
// imgs.forEach(() => {
//     console.log(i++);
// });

// imgs.forEach(()=> i++);

// //Adicione a classe ativo a todos os itens do menu
// const itensMenu = document.querySelectorAll('.menu a');
// itensMenu.forEach((item)=> {
//     item.classList.add('ativo');
//     console.log('Classe adicionada ao item:', item);
// });
// //remove a classe ativo de todos os itens do menu e mantenha apenas o primeiro
// itensMenu.forEach((item) =>{
//     item.classList.remove('ativo');
//     console.log(item);
// });
// itensMenu[0].classList.add('ativo');

// //verifique se as imagens possuem  o atributo alt
// const imgs = document.querySelectorAll('img');
// imgs.forEach((item)=> {
//     const possuiAtributo = item.hasAttribute('alt');
//     console.log(item, possuiAtributo);
// });

// //modifique o href do link externo do menu
// const link = document.querySelector("a[href^='http']");
// link.setAttribute('href' , 'http://www.google.com.br' );

//////////////////////////////////////////306///////////////////////////////////////////////////////////
// //Verifique a distância da primeira imagem em relação ao topo da pagina
// const img = document.querySelector('img');
// const imgTop = img.offsetTop;

// //retorne a soma da largura de todas as imagens
// function somaImagens(){
//     const img = document.querySelectorAll('img');
//     let soma = 0;
//     img.forEach((imagem) =>{
//         soma = soma + imagem.offsetWidth
//     });
//     console.log(soma);
// }

// window.onload = function(){
//     somaImagens();
// }

// //verifique se os links da página possuem o mínimo recomendado para telas utilizadas com dedo. (48px/48px de acordo com o google)
// const links = document.querySelectorAll('a');

// links.forEach((link)=>{
//     let linkWidth = link.offsetWidth;
//     let linkHeigth = link.offsetHeight;
//     if(linkWidth >= 48 && linkHeigth>= 48){
//         console.log(links, 'É acessível')
//     }else{
//         console.log(links, 'Não é acessivel')
//     }
// })

// //se o browser for menor que 720px, adicione a classe menu-mobile  ao menu
// const browserSmall = window.matchMedia('(max-width: 720px)').matches;
// if(browserSmall){
//     const menu = document.querySelector('.menu');
//     menu.classList.add('menu-mobile');
// }

/////////////////////////////////////////////307////////////////////////////////
// /*Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado
// e remova dos demais itens caso eles possuam a mesma. previna o comportamento padrão desses links.*/
// const linksInternos = document.querySelectorAll('a[href^="#"]');

// function handleLink(event){
//     event.preventDefault();
//     linksInternos.forEach((link)=>{
//         link.classList.remove('ativo');
//     });
//     event.currentTarget.classList.add('ativo');
// }

// linksInternos.forEach((item) =>{
//     item.addEventListener('click',handleLink);
// })

// /*Selecione TODOS OS ELEMENTOS do site começando a partir do body, ao clicar mostre exatamente quais elementos estão sendo clicados*/
// const tdElementos = document.querySelectorAll('body *');

// function handlekElement(event){
//     console.log(event.currentTarget); 
// }

// tdElementos.forEach((item)=>{
//     item.addEventListener('click', handlekElement );
// })

// /*Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, 
// o método remove() remove um elemento */
// const tdElementos = document.querySelectorAll('body *');

// function handlekElement(event){
//     event.target.remove(); 
// }

// tdElementos.forEach((item)=>{
//     item.addEventListener('click', handlekElement );
// })

// /*Se o usuário clicar na tecla (t), almente todo o texto do site*/
// function handleClickT(event){
//     console.log(event.key);
//     if (event.key === 't' || event.key === 'T'){
//         document.documentElement.classList.toggle('textoMaior');
//     }
// }
// window.addEventListener('keydown', handleClickT);

//////////////////////////////////////////308/////////////////////////////////
// /*Duplique o menu e adicione ele em copy */
// const menu = document.querySelector('.menu');
// const copy = document.querySelector('.copy');
// const duplicaMenu = menu.cloneNode('true');
// copy.appendChild(duplicaMenu);

// /*selecione o primeiro DT do dl de faq */
// const faq = document.querySelector('.faq');
// const primeiroDt = faq.querySelector('dt');
// console.log(primeiroDt);

// /*selecione o DD referente ao primeiro DT */
// const faq = document.querySelector('.faq');
// const proximoDd = primeiroDt.nextElementSibling;
// console.log(proximoDd);

// /*Substitua o conteudo html de .faq pelo de .animais */
// const animais = document.querySelector('.animais');
// FaQ.innerHtml = animais.innerHTML;