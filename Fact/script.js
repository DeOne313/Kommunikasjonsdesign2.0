function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
          (rect.top <= 0 && rect.bottom >= 0) || 
          (rect.top >= 0 && rect.left >= 0 &&


          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&

          rect.right <= (window.innerWidth || document.documentElement.clientWidth))
      );
    }

document.addEventListener('scroll', () => {
    const bg = document.getElementById("changingBg");

    if (isInViewport(document.getElementById("bg1"))) {
        bg.style.backgroundImage = "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    }
    if (isInViewport(document.getElementById("bg2"))) {
        bg.style.backgroundImage = "url('https://images.unsplash.com/photo-1623106405790-0ed93dd15bab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    }
    if (isInViewport(document.getElementById("bg3"))) {
        bg.style.backgroundImage = "url('https://images.unsplash.com/photo-1693359052825-e5e1c4f852d8?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    }
    if (isInViewport(document.getElementById("bg4"))) {
        bg.style.backgroundImage = "url('https://images.unsplash.com/photo-1658127847712-4d7d277e89f5?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    }
});