window.onload = () => {
    const anim = document.querySelector(".animation-box")
    const canvas = document.querySelector(".canvas")


    if(anim != null){
        document.body.style.backgroundAttachment = 'scroll';
        document.body.style.backgroundPosition = '0px 560px';
    }else{
        document.body.style.backgroundAttachment = 'fixed';
    }
    console.log("hello");

    const ctx = canvas.getContext("2d")
    let w, h, splatter = [];
    let rgb = [
        "rgb(26, 188, 156)",
        "rgb(46, 204, 113)",
        "rgb(52, 152, 219)",
        "rgb(155, 89, 182)",
        "rgb(241, 196, 15)",
        "rgb(230, 126, 34)",
        "rgb(231, 76, 60)"
    ]

    
    resizeReset();
    animationLoop();
    

    function resizeReset() {
        w = canvas.width = anim.clientWidth;
        h = canvas.height = anim.clientHeight;
    }

    function animationLoop() {
        let b = 0;
        setInterval(function() {
            let randHi = Math.floor(Math.random() * h);
            let randWi = Math.floor(Math.random() * w);
            let randCol = Math.floor(Math.random() * 7);
            b++;
            for(let i = 0; i < 100; i++) {

                let randCir = Math.floor(Math.random() * 35)
                var theta = Math.random()*Math.PI*2;

                x = Math.cos(theta)*randCir;
                y = Math.sin(theta)*randCir;

                // splatter.push(new Spaltters())
                // splatter[i].draw()
                ctx.beginPath();
                ctx.arc(x+randWi, y+randHi, 1, 0, 2 * Math.PI);
                ctx.fillStyle = rgb[randCol];
                ctx.lineWidth = 0;
                ctx.fill();  
            }
            
            randHi = Math.floor(Math.random() * h)
            randWi = Math.floor(Math.random() * w)
            if(b > 7){
                b = 0;
                ctx.clearRect(0, 0, w, h);
            }
        }, 500)
            
        
    }

}

class Splatters {
    constructor() {
        this.x = getRandomInt(0, w);
        this.y = getRandomInt(0, h);
        this.size = getRandomInt(30, 40)
        this.style = rgb[getRandomInt(0, rgb.length - 1)];
    }

    draw() {
        ctx.fillStyle = this.style;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}