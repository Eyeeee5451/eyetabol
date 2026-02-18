// ฟังก์ชันสร้างตัวชินจังวิ่งไปมา
function createShinchan() {
    const container = document.getElementById('animation-container');
    const shin = document.createElement('img');
    
// แก้ไขบรรทัดนี้ในไฟล์ script.js
shin.src = 'https://p1.hiclipart.com/preview/677/263/683/picsart-background-png-clipart-thumbnail.jpg'; // ใส่ที่อยู่ไฟล์รูปที่คุณโหลดมาเก็บไว้
    shin.classList.add('shinchan-sprite');
    
    // สุ่มตำแหน่งเริ่มต้น
    let posX = Math.random() * window.innerWidth;
    let posY = Math.random() * window.innerHeight;
    let speedX = (Math.random() - 0.5) * 4;
    let speedY = (Math.random() - 0.5) * 4;

    shin.style.left = posX + 'px';
    shin.style.top = posY + 'px';
    
    container.appendChild(shin);

    function move() {
        posX += speedX;
        posY += speedY;

        // ชนขอบแล้วเด้งกลับ
        if (posX + 80 > window.innerWidth || posX < 0) speedX *= -1;
        if (posY + 80 > window.innerHeight || posY < 0) speedY *= -1;

        shin.style.left = posX + 'px';
        shin.style.top = posY + 'px';

        requestAnimationFrame(move);
    }
    move();
}

// สร้างชินจัง 5 ตัวเมื่อโหลดหน้าเว็บ
window.onload = () => {
    for(let i=0; i<5; i++) {
        createShinchan();
    }
};