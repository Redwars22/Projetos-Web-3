function drawSquare(code) {
    document.getElementById('square').style['background-color'] = code
    document.getElementById('code-show').innerText = code.toUpperCase()
}

function generate_HEX() {
    const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    let index = 0
    let code = ""

    for (i = 0; i < 6; i++) {
        index = parseInt(Math.random() * 16)
        code += hex[index]
    }

    code = "#" + code
    drawSquare(code)
}

function drawSquareRGB(red, green, blue) {
    let RGB = "rgb(" + red.toString() + ',' + green.toString() + ',' + blue.toString() + ")"
    document.getElementById('square').style['background-color'] = RGB
    document.getElementById('code-show').innerText = RGB
}

function generate_RGB() {
    let red = 0
    let green = 0
    let blue = 0

    red = parseInt(Math.random() * 257)
    green = parseInt(Math.random() * 257)
    blue = parseInt(Math.random() * 257)

    drawSquareRGB(red, green, blue)
}

function aboutBox() {
    window.alert('Project Behemoth. Gerador de cores criado por André Pereira usando HTML, JavaScript e CSS (com um pouco de FluentUI).')
}