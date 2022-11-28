let scoreBoard1 = document.getElementById("scoreboard1")
let scoreBoard2 = document.getElementById("scoreboard2")
let leading_Team = document.getElementById("leadingboard")
let count1 = 0
let count2 = 0



function plusOne() {
    count1 += 1
    scoreBoard1.textContent = count1
    leadingTeam()
}
function plusTwo() {
  count1 += 2
  scoreBoard1.textContent = count1
  leadingTeam()
}

function plusThree() {
  count1 += 3
  scoreBoard1.textContent = count1
  leadingTeam()
}

function plus1() {
  count2 += 1
  scoreBoard2.textContent = count2
  leadingTeam()
}

function plus2() {
  count2 += 2
  scoreBoard2.textContent = count2
  leadingTeam()
}

function plus3() {
  count2 += 3
  scoreBoard2.textContent = count2
  leadingTeam()
}

function leadingTeam () {
  if (count1 > count2) {
    leading_Team.textContent = "The HOME team is Leading"
  } else if (count1 < count2) {
    leading_Team.textContent = "The GUEST is Leading"
  } else {
    leading_Team.textContent = "It's a tie now"
  }
}

function newGame() {
  count1 = 0
  count2 = 0
  scoreBoard1.textContent = count1
  scoreBoard2.textContent = count2
  leading_Team.textContent = "The Game is about to start"
}