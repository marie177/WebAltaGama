window.onload = function digital_fn(){
    let toggle = document.querySelector("#nav .toggle-btn");
    let collapse = document.querySelector("#nav .collapse");

    toggle.addEventListener('click', function(event){
        collapse.classList.toggle('active');
    });

    //mansonry js
    let grid  = document.querySelector("#site-main .recent-work-area .images-flex");

    let msnry = new Masonry(grid, {
        itemSelector: '.flex-item',
        gutter: 20,
        fitWidth: true
    });
}

//rellax js code
var rellax = new Rellax('.rellax',{
    center: true
})

function goToContacto(){
    debugger;
    window.scrollTo(0, document.getElementById('contacto').offsetTop)
}