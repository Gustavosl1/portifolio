const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded','active');
    if(active){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }

}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const observer = new IntersectionObserver( entries => {
    console.log(entries)
    
    
    Array.from(entries).forEach( entry => {
        if(entry.intersectionRatio >= 1){
           entry.target.classList.add('init-hidden-off')
        }   
    })
    
   
},{
    threshold: [0, .5, 1]
}
)

Array.from(document.querySelectorAll('.init-hidden')).forEach( element => {
    observer.observe(element)
} )
