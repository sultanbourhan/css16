const box = document.querySelector(".box_3D .box")


window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    console.log(scrollPosition)
    box.style.transform = `perspective(1000px) rotateY(${scrollPosition / 6}deg)`

  });