export const toggleModalBg = (action) => {
  if (action === 'open') {
    document.body.classList.add('power-menu-open')
  } else if (action === 'close') {
    document.body.classList.remove('power-menu-open')
  }
}

export const addLeadingZeros = (num, numberOfZeros) => {
  num = num.toString()
  while (num.length < numberOfZeros) num = '0' + num
  return num
}
