window.onload = () => {
    const background = document.getElementById("background");

    const static = document.querySelector('.static');
    const animation = document.querySelector('.animation');
    
    resizeCanvas()
    const ctx = static.getContext('2d');
    const atx = animation.getContext('2d');

    ctx.lineWidth = 8;
    ctx.strokeStyle = "grey";

    


    function resizeCanvas() {
        static.width = static.offsetWidth;
        static.height = static.offsetHeight;
        animation.width = static.offsetWidth;
        animation.height = static.offsetHeight;
    }
    var int2 = 0

    const dots = [];
    const dots2 = [];
    const dots3 = [];
    const numDots = 26;
    

    function drawDot(d) {
        atx.beginPath();
        atx.arc(d.x, d.y, d.radius, 0, Math.PI * 2, false);
        atx.fillStyle = d.color;
        atx.fill();
    }

    let lastTimestamp = 0; // Track the last frame's timestamp

    async function animateDots(x, y, int2, timestamp) {        atx.clearRect(0, 0, animation.width, animation.height); // Clear the canvas
        let animationInProgress

        if(dots.length === 0){
            for (let i = 0; i < int2+1; i++) {
                dots.push({ x: x + 50 * i, y: y + 12.5 + (int2 + 1) * 40, radius: 8, color: 'white', direction: 'down-right', targetX: x + 50 * i, targetY: y + 12.5 + (int2 + 1) * 40+40, speed: 2 });
                dots.push({ x: x - 50 * i, y: y + 12.5 + (int2 + 1) * 40, radius: 8, color: 'white', direction: 'down-left', targetX: x - 50 * i, targetY: y + 12.5 + (int2 + 1) * 40+40, speed: 2 });
                if (i < int2) {
                    dots.push({ x: x + 50 * i, y: y + 12.5 + (int2 + 1) * 40, radius: 8, color: 'white', direction: 'horizontal-right', targetX: x + 50 * i+50, targetY: y + 12.5 + (int2 + 1) * 40, speed: 2 });
                    dots.push({ x: x - 50 * i, y: y + 12.5 + (int2 + 1) * 40, radius: 8, color: 'white', direction: 'horizontal-left', targetX: x - 50 * i-50, targetY: y + 12.5 + (int2 + 1) * 40, speed: 2 });
                }
            }
        }

        dots.forEach(async (dot, i) => {

            // compute vector toward target
            let dx = dot.targetX - dot.x;
            let dy = dot.targetY - dot.y;
            let dist = Math.sqrt(dx*dx + dy*dy);

            if (dist > dot.speed) {
                // move along vector
                dot.x += (dx / dist) * dot.speed;
                dot.y += (dy / dist) * dot.speed;
                animationInProgress = true; // At least one dot is still moving

            }

            if(!animationInProgress && i === dots.length - 1) {
                dots.length = 0; // Clear the dots array when all dots have reached their targets
                animationInProgress = true;
            }

            drawDot(dot);
        });
        setTimeout(() => {
            // Recursive call for smooth animation
            if (int2 < 6 && animationInProgress) {

                requestAnimationFrame((newTimestamp) => animateDots(x, y, int2+1, newTimestamp)); // Continue the animation
            } else {
                // Reset int2 and restart the animation
                requestAnimationFrame((newTimestamp) => animateDots(x, y, 1, newTimestamp));
            }
        }, 1000);
    }

    // Start the animation safely
    function startAnimation() {
        animateDots(static.width / 2, 0, 1, performance.now());
    }

    startAnimation();

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    
    function recursiveDraw(x, y, int2) {
        for (let i = 0; i < int2; i++) {
            const greyValue = Math.floor(255 - 32.5 * int2);
            const alpha = Math.max(0, Math.min(1, int2 / 8)); // Calculate alpha based on int2 (clamped between 0 and 1)

            ctx.strokeStyle = `rgba(
            ${greyValue}, ${greyValue}, ${greyValue}, ${alpha})`;

            ctx.beginPath();
            ctx.moveTo(x - 50 * i, y + 12.5 + int2 * 40);
            ctx.lineTo(x - 50 * i, y + 12.5 + (int2 + 1) * 40); // Top line
            ctx.moveTo(x - 50 * i, y + 12.5 + int2 * 40);
            ctx.lineTo(x + 50 * i, y + 12.5 + int2 * 40); // Vertical line
            ctx.moveTo(x + 50 * i, y + 12.5 + int2 * 40);
            ctx.lineTo(x + 50 * i, y + 12.5 + (int2 + 1) * 40); // Bottom line
            ctx.stroke();
        }

        int2++;

        if (int2 < 7) {
            requestAnimationFrame(() => recursiveDraw(x, y, int2)); // Continue the animation loop
        }
    }
    recursiveDraw(static.width / 2, 0, 0);


    const anim = document.querySelector(".animation-box")
    const canvas = document.querySelector(".canvas")


    if(anim != null){
        document.body.style.backgroundAttachment = 'scroll';
        document.body.style.backgroundPosition = '0px 560px';
    }else{
        document.body.style.backgroundAttachment = 'fixed';
    }
    console.log("hello");

    const btx = canvas.getContext("2d")
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
            for(let i = 0; i < 250; i++) {

                let randCir = Math.floor(Math.random() * 40)
                var theta = Math.random()*Math.PI*2;

                x = Math.cos(theta)*randCir;
                y = Math.sin(theta)*randCir;

                btx.beginPath();
                btx.arc(x+randWi, y+randHi, 1.5, 0, 2 * Math.PI);
                btx.fillStyle = rgb[randCol];
                btx.lineWidth = 0;
                btx.fill();  
            }
            
            randHi = Math.floor(Math.random() * h)
            randWi = Math.floor(Math.random() * w)
            if(b > 7){
                b = 0;
                btx.clearRect(0, 0, w, h);
            }
        }, 500)
            
        
    }

}
