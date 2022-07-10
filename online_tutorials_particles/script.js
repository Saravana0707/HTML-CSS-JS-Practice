document.addEventListener('mousemove',function(e){
    let body=document.querySelector('body');
    let particles=document.createElement('span');
    let x=e.offsetX;
    let y=e.offsetY;

    particles.style.left=x+'px';
    particles.style.top=y+'px';

    let size=Math.random()*8;
    particles.style.width=2+size+'px';
    particles.style.height=2+size+'px';

    let trasformValue= Math.random() * 360;
    particles.style.transform='rotate('+trasformValue+'deg)';

    body.appendChild(particles);

    setTimeout(function(){
        particles.remove()
    },2000)
})