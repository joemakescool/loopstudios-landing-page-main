import anime from 'animejs/lib/anime.es.js';

const duration= 500
const easing= 'easeOutQuint'

function mouseOverSocialIcon(el, done) {
    const child = el.target.children
    anime({
        targets: [child[0], child[1]],
        backgroundColor: '#EEEEEE',
        width: [0, '100%'],

        duration: duration,
        easing: easing,
        complete: done
    })

}

function mouseLeavesSocialIcon(el, done) {
    const child = el.target.children
    anime({
        targets: [child[0], child[1]],
        backgroundColor: '#EEEEEE',
        width: ['100%', 0],

        duration: duration,
        easing: easing,
        complete: done
    })
}

export { mouseOverSocialIcon, mouseLeavesSocialIcon }
