const main = () => {
  const swatch = document.querySelector('div.swatch')
  // let hidden = document.querySelector('div.hidden')
  let hueValue = Math.round(Math.random() * 360)
  let saturationValue = 50
  let lightnessValue = 50
  let alphaValue = 1
  const hueSlider = document.querySelector('input[name=hue]')
  // const hueNumber = document.querySelector('div.hueColor')
  const colorBar = document.querySelector('.colorBar')
  hueSlider.addEventListener('input', (event) => {
    hueValue = event.target.value
    // hueNumber.textContent = hueValue
    updateColor()
  })

  const saturationSlider = document.querySelector('input[name=saturation]')
  // const saturationNumber = document.querySelector('div.saturationColor')
  saturationSlider.addEventListener('input', (event) => {
    saturationValue = event.target.value
    // saturationNumber.textContent = saturationValue + '%'
    updateColor()
  })

  const lightnessSlider = document.querySelector('input[name=lightness]')
  // const lightnessNumber = document.querySelector('div.lightnessColor')
  lightnessSlider.addEventListener('input', (event) => {
    lightnessValue = event.target.value
    // lightnessNumber.textContent = lightnessValue + '%'
    updateColor()
  })

  const alphaSlider = document.querySelector('input[name=alpha]')
  // const alphaNumber = document.querySelector('div.alphaColor')
  alphaSlider.addEventListener('input', (event) => {
    alphaValue = event.target.value / 100
    // alphaNumber.textContent = alphaValue
    updateColor()
  })

  const updateColor = () => {
    let color
    if (alphaValue < 1) {
      color = `hsla(${hueValue}, ${saturationValue}%, ${lightnessValue}%, ${alphaValue})`
    } else {
      color = `hsl(${hueValue}, ${saturationValue}%, ${lightnessValue}%)`
    }
    swatch.style.backgroundColor = color
    colorBar.textContent = color
  }
  updateColor()
}

// document.querySelector('h1').textContent += '!'
document.addEventListener('DOMContentLoaded', main)
