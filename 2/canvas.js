var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var x = 200, // initial x cordinate
    dx = 4, // increment of an x gordiante / moving speed
    y = 200, // initial y cordinate
    dy = 4, // increment of an y gordiante / moving speed
    radius = 30; // circle radius

function animate() {
    requestAnimationFrame(animate);
    //clearing canvas
    c.clearRect(0, 0, innerWidth, innerHeight);

    //drawing circle every time at new place
    c.beginPath(); //avoiding line merges with previous stroke
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();

    if(x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }
    if(y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }
    //adding one to cordinate to move circle to left
    x += dx;
    y += dy;
}

animate();