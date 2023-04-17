const blob = document.getElementById('blob');

let clientX = 0;
let clientScrollY = 0;
let totalScrollY = 0;

function updateTotalScrollY(){
    totalScrollY = window.scrollY + clientScrollY;

    if ((totalScrollY > 1220 && totalScrollY < 2120)) {
        blob.animate({
            left: `${clientX}px`,
            top: `${totalScrollY - 980}px`
        }, {
            duration: 3000,
            fill: 'forwards'
        });
    }
}

document.addEventListener('mousemove', event => {
    clientX = event.clientX;
    clientScrollY = event.clientY;
    updateTotalScrollY();
})
document.addEventListener('scroll', (e) => {
    updateTotalScrollY();
})
