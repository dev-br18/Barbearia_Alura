const html = document.querySelector('html');


const checkbox = document.querySelector('input[name=theme]');

const getStyle = (element, style) => 
    window
    .getComputedStyle(element)
    .getPropertyValue(style)


const initialColors = {
    pn: getStyle(html, '--pn'),
    bn: getStyle(html, '--bn'),
    txt: getStyle(html, '--txt'),
    pl: getStyle(html, '--pl')
}

const darkmode = {
    pn: '#414141',
    bn: '#414141',
    txt: '#FEFEFE',
    pl: '#000000'
}

const transformKey = key => '--' + key.replace(/([A-Z])/, '-$1').toLowerCase()

const changeColors = (colors) => {
    console.log(colors)
    Object.keys(colors).map(key => {
        html.style.setProperty(transformKey(key), colors[key])
    })
}

checkbox.addEventListener('change', ({ target }) => {
    target.checked ? changeColors(darkmode) : changeColors(initialColors)
})