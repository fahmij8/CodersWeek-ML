function loadImage(url) {
  return new Promise(function(resolve, reject) {
    const img = new Image()
    img.src = url
    img.addEventListener('load', () => resolve(img))
  })
}

const modelPromise = tf.loadModel('./model/model.json')

document.addEventListener('DOMContentLoaded', async () => {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const file = document.getElementById('file')
  const output = document.getElementById('output')

  file.addEventListener('change', async () => {
    const dataURL = URL.createObjectURL(file.files[0])
    const img = await loadImage(dataURL)
    ctx.drawImage(img, 0, 0, 250, 250)

    const model = await modelPromise

    const prediction = tf.tidy(() => {
      let input = tf.fromPixels(ctx.getImageData(0, 0, 150, 150))
      input = tf.cast(input, 'float32').div(tf.scalar(255))
      input = input.expandDims()
      return model.predict(input).dataSync()[0]
    })

    if (prediction <= 0.5) {
      pred = (1 - prediction) * 100
      fine = pred.toFixed(2)
      output.innerHTML = `<h6 class="red-text"><b>Pneumonia!</b></h6><h6>Model prediction confidence : ${fine}%</h6>`
    } else {
      pred = prediction * 100
      fine = pred.toFixed(2)
      output.innerHTML = `<h6 class="yellow-text"><b>Healthy!</b></h6><h6>Model prediction confidence : ${fine}%</h6>`
    }
  })
})
