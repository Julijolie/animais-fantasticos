function initTabNav(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if(tabMenu.length && tabContent.length){ /*para garantir que só funcione se as duas opções forem true: verifica que os itens existem na página*/
        tabContent[0].classList.add('ativo');
        
        function activeTab(index){
            tabContent.forEach((section) =>{
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index)=>{
            itemMenu.addEventListener ('click', () => {
                activeTab(index);
            });
        })
    }
}
initTabNav();

function initAccordion(){
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';
    if(accordionList.length){
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAction(event){
            this.classList.toggle('ativo');
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item)=>{
            item.addEventListener('click', activeAction);
        });
    }
}
initAccordion();

function initScrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    
    function scrollToSection(event){
        event.preventDefault();
        
        const href = event.currentTarget.getAttribute('href'); // 2. Pegar o ID do link clicado (ex: #contato)
        const section = document.querySelector(href); // 3. Selecionar a seção que tem esse ID

        section.scrollIntoView({
            behavior: 'smooth', /*comportamento */
            block: 'start', /*para alinhar o bloco ao inicio*/
        });
    }

    linksInternos.forEach((link)=>{
        link.addEventListener('click', scrollToSection);
    });
}
initScrollSuave();

function initAnimacaoScroll(){
    const sections = document.querySelectorAll('.js-scroll');
    if(sections.length){ //verifico se sections existe
        const windoMetade = window.innerHeight * 0.6;

        function animaScroll(){
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windoMetade) < 0
                if (isSectionVisible){
                    section.classList.add('ativo');
                }
                else{
                    section.classList.remove('ativo'); //pra que a animação não ocorra só 1 vez (eu achei lindo!! )
                }

            })
        }
        animaScroll(); //pra carregar a primeira info do site, sem precisar do scroll
        window.addEventListener('scroll', animaScroll);
    }
}
initAnimacaoScroll()