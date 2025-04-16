function spinImage() {
    document.getElementById("space-image").addEventListener('click', function() {
        this.classList.toggle('spin');
    });
}

spinImage();
