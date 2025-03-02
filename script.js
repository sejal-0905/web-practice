document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const bar = document.getElementById("bar");
    const close = document.getElementById("close");
    const mobile = document.getElementById("mobile");

    if (bar) {
        bar.addEventListener("click", () => {
            navbar.classList.add("active");
            mobile.style.display = "none"; 
        });
    }

    if (close) {
        close.addEventListener("click", () => {
            navbar.classList.remove("active");  
            setTimeout(() => {
                mobile.style.display = "flex";  
            }, 300); 
        });
    }
});

