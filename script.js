const productContainers = [...document.querySelectorAll('.book-container')];
const nxtBtn=[...document.querySelectorAll('.nxt-btn')];
const preBtn=[...document.querySelectorAll('.pre-btn')];
productContainers.forEach((item, i) => {
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth=containerDimensions.width;
    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft+=containerWidth;
    })
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft-=containerWidth;
    })
})

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
