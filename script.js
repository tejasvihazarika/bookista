document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section.book'); 

    sections.forEach(section => {
        const container = section.querySelector('.book-container'); 
        const nxtBtn = section.querySelector('.nxt-btn'); 
        const preBtn = section.querySelector('.pre-btn'); 
        
        let containerWidth = container.offsetWidth;

        nxtBtn.addEventListener('click', () => {
            container.scrollBy({
                left: containerWidth,
                behavior: 'smooth'
            });
        });

        preBtn.addEventListener('click', () => {
            container.scrollBy({
                left: -containerWidth,
                behavior: 'smooth'
            });
        });
    });
});


function searchBooks(event) {
    event.preventDefault();
    const query=document.getElementById('search').value.toLowerCase();
    const genreSections=['romance', 'fiction','non-fiction','fantasy']; 
    if (genreSections.includes(query)){
        document.getElementById(query).scrollIntoView({ behavior: 'smooth' });
    } 
    else {
        document.getElementById('bestSeller').scrollIntoView({ behavior: 'smooth' });
    }
}
