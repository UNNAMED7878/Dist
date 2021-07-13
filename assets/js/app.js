
if (document.querySelector('.magazins')){
  var magaz = new Splide('.magazins',{
  	type:'loop',
    perPage: 4,
    arrows: true,
    autoplay:true,
      breakpoints:{
        768:{
          perPage:2,
          type:'loop',
          pagination:false
        },
      }

    })
    magaz.on( 'autoplay:playing', function ( rate ) {
    } );
    
    magaz.mount();
}
if (document.querySelector('.links.splide')){
  new Splide('.links.splide',{
  	type:'loop',
    perPage: 3,
    arrows: false,
    pagination:false,
    autoplay:true,
      breakpoints:{
        768:{
          perPage:2,
          type:'loop',
          pagination:false
        },
      }

    }).mount()

}

let btn = document.querySelector('.header__btn')

btn.addEventListener('click',function(){
  btn.classList.toggle('active')
  document.querySelector('.header__menu').classList.toggle('active')
})