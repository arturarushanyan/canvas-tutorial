var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//rectangle //args// (x,y,width,height)
c.fillStyle = 'rgba(255,0,1,0.5)';
c.fillRect(100, 100, 100, 100);

c.fillStyle = 'rgba(0,255,1,0.5)';
c.fillRect(400, 200, 100, 100);

c.fillStyle = 'rgba(0,0,255,0.5)';
c.fillRect(800, 400, 100, 100);

//line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#fa34a3";
c.stroke();

//arc // circle
// c.beginPath(); //avoiding line merges with previous stroke
// c.arc(300, 300, 30, 0, Math.PI *2, false);
// c.strokeStyle = 'blue';
// c.stroke();

//generating random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//drawing multiple circles
for(var i=0; i<300; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI *2, false);
    c.strokeStyle = getRandomColor();
    c.stroke();
}