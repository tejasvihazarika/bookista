document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section.book'); // Select all sections with class 'book'

    sections.forEach(section => {
        const container = section.querySelector('.book-container'); // Find the container within each section
        const nxtBtn = section.querySelector('.nxt-btn'); // Find the next button within each section
        const preBtn = section.querySelector('.pre-btn'); // Find the previous button within each section
        
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
