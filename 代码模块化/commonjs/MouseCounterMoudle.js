let numClicks = 0
const handleClick = function () {
  alert(++numClicks)
}

module.exports={
    countClicks: function () {
        document.addEventListener('click', handleClick)
      }
}