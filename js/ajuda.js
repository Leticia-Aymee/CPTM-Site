document.querySelector('a[href="#ajuda"]').addEventListener('click', function(event) {
    event.preventDefault(); 
    const targetSection = document.querySelector('#ajuda');

   
    if (targetSection) {
        
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth' 
        });
    }
});
