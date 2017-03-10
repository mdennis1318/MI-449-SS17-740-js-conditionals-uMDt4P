var startButton = document.getElementById('start-button')

startButton.addEventListener('click', function () {
  var name = window.prompt('What\'s your name?')
  var randomNumber = Math.random()

  if (name) {
    name = name.trim()
    window.alert('Hello, ' + name + '! Welcome to the adventure!')
  } else {
    if (randomNumber > 0.5) {
      window.alert('Okay... we\'ll call you Jimmy')
      name = 'Jimmy'
    } else {
      window.alert('Entering nothing eh? Your name must be "Nothing"')
      name = 'Nothing'
    }
  }

  var age = window.prompt('What\'s your age?')
  age = age || ''
  age = parseInt(age)
  age = age || 0
  if (age < 10) {
    window.alert('WARNING: Adventure intended for ages 10 and up!')
    var confirmation = window.confirm('Do you want to continue?')
    if (confirmation) {
      window.alert('Alright, continue at your own risk!')
    } else {
      window.alert('This adventure stops for no one!')
    }
  } else {
    window.alert('Alright, continue at your own risk!')
  }

  var location = window.prompt('Where do you want to begin your adventure(desert, mountain, plains)?')
  location = location || ''
  location = location.trim().toLowerCase()
  if (location === 'desert') {
    window.alert('Correct choice! welcome to the desert!')
  } else if (location === 'mountain') {
    window.alert('Well that is nice but this adventure takes place in the desert.')
  } else if (location === 'plains') {
    window.alert('Plains? What interesting happens in the plains? Nah, you want the desert.')
  } else {
    window.alert('Well that wasn\'t one of the choices. Have fun in the desert!')
  }

  var firstChoice = window.prompt('Upon entering the desert you see sand to the left and sand to the right. Which way will you travel?')
  firstChoice = firstChoice || ''
  firstChoice = firstChoice.trim().toLowerCase()
  if (firstChoice === 'left') {
    window.alert('Walking for days in the desert leaves you weak and dehydrated. You do not recover. Game. Over.')
  } else if (firstChoice === 'right') {
    var temple = window.prompt('Walking along to the right you come upon a temple. It looks to hold great treasures will you enter (yes or no)?')
    temple = temple || ''
    temple = temple.trim().toLowerCase()
    if (temple === 'yes') {
      window.alert('You enter the temple, dodge a couple of traps and find the treasure! Well done you win the game!')
    } else if (temple === 'no') {
      window.alert('You do not enter the temple. As you keep walking you notice a band of bandits approaching from the North. They ask you for all your money and when you have nothing they kill you. Game. Over.')
    } else {
      window.alert('You choose neither yes nor no. The boolean gods are angry. They strike you with lightning killing you. Game. Over.')
    }
  } else {
    window.alert('You sit in one spot deciding between left and right until your death.')
  }
})
