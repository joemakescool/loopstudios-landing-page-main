import anime from 'animejs/lib/anime.es.js';

const duration= 500
const easing= 'easeOutQuint'

function mouseEnters(el, done) {
    console.log('mouse enters')
    // const target = el.target
    // console.log({ target })
    const child = el.target.children
    // console.log( { child })
    // console.log({ el })
    anime({
        targets: child[0],
        backgroundColor: '#EEEEEE',
        width: [0, '65%'],

        duration: duration,
        easing: easing,
        complete: done
    })
}

function mouseLeaves(el, done) {
    console.log('mouse leaves')
    const child = el.target.children

    anime({
        targets: child[0],
        backgroundColor: '#EEEEEE',
        width: ['65%', 0],

        duration: duration,
        easing: easing,
        complete: done
    })
}

export { mouseEnters, mouseLeaves }
