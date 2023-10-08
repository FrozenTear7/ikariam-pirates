setInterval(() => {
  //   new Audio(chrome.runtime.getURL('dingdong.mp3')).play()

  const boardingButton = document.querySelector(
    '#pirateCaptureBox > div.content > table > tbody > tr:nth-child(2) > td.action > a'
  )

  if (boardingButton?.className === 'button capture') {
    boardingButton.click()
  }
}, 5000 + Math.random() * 10000)
