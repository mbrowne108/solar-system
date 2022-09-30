const FPS = 60
const sun = document.querySelector('.sun')
const sunX = window.innerWidth / 2 - 50
const sunY = window.innerHeight / 2 - 50

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext("2d");

sun.style.left = `${sunX}px`
sun.style.top = `${sunY}px`

const mercury = {
    speed: 0.004787,
    theta: Math.random() * 2 * Math.PI,
    radius: 80,
    el: document.querySelector('.mercury')
}

const venus = {
    speed: -(0.003502),
    theta: Math.random() * 2 * Math.PI,
    radius: 110,
    el: document.querySelector('.venus')
}

const earth = {
    speed: 0.002978,
    theta: Math.random() * 2 * Math.PI,
    radius: 150,
    el: document.querySelector('.earth'),
    hasMoon: true
}

const mars = {
    speed: 0.0024077,
    theta: Math.random() * 2 * Math.PI,
    radius: 180,
    el: document.querySelector('.mars')
}

const jupiter = {
    speed: 0.001307,
    theta: Math.random() * 2 * Math.PI,
    radius: 235,
    el: document.querySelector('.jupiter')
}

const saturn = {
    speed: 0.000969,
    theta: Math.random() * 2 * Math.PI,
    radius: 280,
    el: document.querySelector('.saturn')
}

const uranus = {
    speed: -(0.000681),
    theta: Math.random() * 2 * Math.PI,
    radius: 330,
    el: document.querySelector('.uranus')
}

const neptune = {
    speed: 0.000543,
    theta: Math.random() * 2 * Math.PI,
    radius: 385,
    el: document.querySelector('.neptune')
}

const pluto = {
    speed: 0.000474,
    theta: Math.random() * 2 * Math.PI,
    radius: 450,
    el: document.querySelector('.pluto')
}

const moon = {
    speed: 0.002978 * 12,
    theta: Math.random() * 2 * Math.PI,
    radius: 15,
    el: document.querySelector('.moon')
}

const planets = [
    mercury, 
    venus, 
    earth, 
    mars, 
    jupiter, 
    saturn, 
    uranus, 
    neptune, 
    pluto
]

function update(planet) {
    ctx.beginPath();
    ctx.moveTo(parseInt(planet.el.style.left), parseInt(planet.el.style.top))

    planet.theta -= planet.speed
    planet.el.style.left = `${Math.cos(planet.theta) * planet.radius + sunX + 50}px`
    planet.el.style.top = `${Math.sin(planet.theta) * planet.radius + sunY + 50}px`

    ctx.lineTo(parseInt(planet.el.style.left), parseInt(planet.el.style.top))
    ctx.strokeStyle = "#ffffff"
    ctx.stroke()

    if (planet.hasMoon) {
        moon.theta -= moon.speed
        moon.el.style.left = `${Math.cos(moon.theta) * moon.radius + parseInt(planet.el.style.left)}px`
        moon.el.style.top = `${Math.sin(moon.theta) * moon.radius + parseInt(planet.el.style.top)}px`
    }

}

setInterval(() => {
    planets.forEach(update)
}, 1000 / FPS)