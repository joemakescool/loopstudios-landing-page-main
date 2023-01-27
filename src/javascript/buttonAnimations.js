import anime from 'animejs/lib/anime.es.js';

const easing = 'easeOutQuint'

let timelineEnter = anime.timeline({
    easing: easing,
    duration: 500
});

let timelineLeave = anime.timeline({
    easing: easing,
    duration: 500
});

function mouseEntersButton(el) {
    console.log('mouseenters')

    // const target = el.target
    // console.log({ target })
    const child = el.target.children
    const top = child[0]
    const bottom = child[1]
    const left = child[2]
    const right = child[3]
    const background = child[4]
    const button = child[5]
    // console.log( { child })
    // console.log({ el })
    timelineEnter.add(
        {
            targets: [button],
            color: '#FFFFFF',
        }, 0)

    timelineEnter.add({
        targets: [top, bottom, left, right],
        opacity: [1, 0],
    }, 10)

    timelineEnter.add({
        targets: [background],
        width: [0, '100%'],
        left: 0,
        opacity: [0, 1]
    }, 0)
}

function mouseLeavesSocialIcons(el) {
    console.log('mouseLeavesSocialIcons')

    const child = el.target.children
    const top = child[0]
    const bottom = child[1]
    const left = child[2]
    const right = child[3]
    const background = child[4]
    const button = child[5]

    timelineLeave.add(
        {
            targets: [button],
            color: '#000000',
        }, 0)

    timelineLeave.add({
        targets: [top, bottom, left, right],
        opacity: [0, 1],
    }, 100)

    timelineLeave.add({
        targets: [background],
        width: ['100%', 0],
    }, 0)
}

export {mouseEntersButton, mouseLeavesSocialIcons}
