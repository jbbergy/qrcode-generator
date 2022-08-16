const qrcodeDisplay = document.querySelector('.qrcode__display')
const formInput = document.querySelector('.form__text-input')
const formButton = document.querySelector('.form__generate-button')
const formSizeInput = document.querySelector('.form__size')
let qrcode = null

const generateQRCode = () => {
  if (formInput.value === '') return
  if (qrcode) {
    qrcode.clear()
    qrcodeDisplay.innerHTML = ''
  }

  qrcode = new QRCode(qrcodeDisplay, {
    text: formInput.value,
    width: formSizeInput.value,
    height: formSizeInput.value,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  })
}

formButton.addEventListener('click', generateQRCode)
