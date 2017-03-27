const main = () => {
  const swatch = document.querySelector('div.swatch')
  let hueValue = Math.round(Math.random() * 360)
  let saturationValue = 50
  let lightnessValue = 50
  let alphaValue = 1
  // hue controls
  const hueSlider = document.querySelector('input[name=hue]')
  const colorBar = document.querySelector('.colorBar')
  hueSlider.addEventListener('input', (event) => {
    hueValue = event.target.value
    updateColor()
  })
// saturation controls
  const saturationSlider = document.querySelector('input[name=saturation]')
  saturationSlider.addEventListener('input', (event) => {
    saturationValue = event.target.value
    updateColor()
  })
// lightness controls
  const lightnessSlider = document.querySelector('input[name=lightness]')
  lightnessSlider.addEventListener('input', (event) => {
    lightnessValue = event.target.value
    updateColor()
  })
// alpha controls
  const alphaSlider = document.querySelector('input[name=alpha]')
  alphaSlider.addEventListener('input', (event) => {
    alphaValue = event.target.value / 100
    updateColor()
  })
// values function
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

document.addEventListener('DOMContentLoaded', main)
