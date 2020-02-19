let targsAnimation01 = anime({
 targets: '.section_one_first_rectang',
 translateX: {
   value: 1500,
   easing: 'easeInOutQuad',
    autoplay: false
  },
 rotate: {
   value: 180,
   delay: 1000
  },
  backgroundColor: {
    value: 'rgb(241, 212, 232)',
    easing: 'easeInOutQuad',
    duration: 2000
  },
  duration: 2000
})

let targsAnimation03 = anime({
  targets: ['.section_one_cube', '.section_two_first_cube', '.section_two_second_cube'],
  translateX: {
  value: 450,
  easing: 'easeInBack',
  autoplay: false,
},
translateY: {
  value: 700,
  easing: 'easeInQuart',
  autoplay: false,
  delay: 150,

},
rotate: {
  value: 90,
  delay: 1500
},

backgroundColor: {
  value: 'rgb(212, 35, 0)',
  easing: 'easeOutQuint',
  delay: 1500
},
duration: 2000,
loop: true
})
let targsBtn03 = document.getElementById('targsBtn03')
targsBtn03.onclick = targsAnimation03.play

let targsBtn01 = document.getElementById('targsBtn01')
targsBtn01.onclick = targsAnimation01.play
