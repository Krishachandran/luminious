document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    const cursorBorder = document.querySelector('.cursor-border');

    document.addEventListener('mousemove', (e) => {
        // Update both inner and outer circle positions
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        cursorBorder.style.left = e.clientX + 'px';
        cursorBorder.style.top = e.clientY + 'px';
    });
}); 