let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');
document.addEventListener('scroll', function(){
    TweenMax.set(element, {
        left: window.pageXOffset,
        top: window.pageYOffset,
        scale: 1 / ($document.width() / innerWidth),
    })
})
window.addEventListener('DOMContentLoaded', ()=>{
    
    setTimeout(()=>{
        console.log("DOM fully loaded and parsed");
        
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            },(idx+1)*400)
        });
        
        setTimeout(()=>{
            logoSpan.forEach((span,idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx+1)*50)
            })
        },2000)

        setTimeout(()=>{
            intro.style.top = '-100vh';
        },2300)

    })
})