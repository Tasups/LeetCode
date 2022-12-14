const fs = require('fs')

/*
--- Day 2: Rock Paper Scissors ---
The Elves begin to set up camp on the beach. To decide whose tent gets to be closest to the snack storage, a giant Rock Paper Scissors tournament is already in progress.

Rock Paper Scissors is a game between two players. Each game contains many rounds; in each round, the players each simultaneously choose one of Rock, Paper, or Scissors using a hand shape. Then, a winner for that round is selected: Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock. If both players choose the same shape, the round instead ends in a draw.

Appreciative of your help yesterday, one Elf gives you an encrypted strategy guide (your puzzle input) that they say will be sure to help you win. "The first column is what your opponent is going to play: A for Rock, B for Paper, and C for Scissors. The second column--" Suddenly, the Elf is called away to help with someone's tent.

The second column, you reason, must be what you should play in response: X for Rock, Y for Paper, and Z for Scissors. Winning every time would be suspicious, so the responses must have been carefully chosen.

The winner of the whole tournament is the player with the highest score. Your total score is the sum of your scores for each round. The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

Since you can't be sure if the Elf is trying to help you or trick you, you should calculate the score you would get if you were to follow the strategy guide.

For example, suppose you were given the following strategy guide:

A Y
B X
C Z
This strategy guide predicts and recommends the following:

In the first round, your opponent will choose Rock (A), and you should choose Paper (Y). This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).
In the second round, your opponent will choose Paper (B), and you should choose Rock (X). This ends in a loss for you with a score of 1 (1 + 0).
The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.
In this example, if you were to follow the strategy guide, you would get a total score of 15 (8 + 1 + 6).

What would your total score be if everything goes exactly according to your strategy guide?
*/


function rockPaperScissorsGame(arr){
  // store the total and add to it for each type (rock, paper, scissors, and if you won or drew)
  let subtotal = 0

  for(let i = 0; i < arr.length; i++){
  
  // OPP ROCK PERMUTATIONS
  // rock and rock = draw rock(1) and draw(3) = 1 + 3 = 4
  if(arr[i][0] === 'A' && arr[i][2] === 'X') subtotal += 4
  // rock and paper = win; paper(2) and win(6) = 2 + 6 = 8
  if(arr[i][0] === 'A' && arr[i][2] === 'Y') subtotal += 8
  // rock and scissors = lose; scissors(3) and lose(0) = 3 + 0 = 3
  if(arr[i][0] === 'A' && arr[i][2] === 'Z') subtotal += 3
  
  // OPP PAPER PERMUTATIONS
  // paper and rock = lose rock(1) and lose(0) = 1 + 0 = 1
  if(arr[i][0] === 'B' && arr[i][2] === 'X') subtotal += 1
  // paper and paper = tie; paper(2) and draw(3) = 2 + 3 = 5
  if(arr[i][0] === 'B' && arr[i][2] === 'Y') subtotal += 5
  // paper and scissors = win; scissors(3) and win(6) = 3 + 6 = 9
  if(arr[i][0] === 'B' && arr[i][2] === 'Z') subtotal += 9
  
  // OPP SCISSORS PERMUTATIONS
  // scissors and rock = win rock(1) and win(6) = 1 + 6 = 7
  if(arr[i][0] === 'C' && arr[i][2] === 'X') subtotal += 7
  // scissors and paper = lose; paper(2) and lose(0) = 2 + 0 = 2
  if(arr[i][0] === 'C' && arr[i][2] === 'Y') subtotal += 2
  // scissors and scissors = draw; scissors(3) and draw(3) = 3 + 3 = 6
  if(arr[i][0] === 'C' && arr[i][2] === 'Z') subtotal += 6
  }
  return subtotal
}



//console.log(lines)

// console.log(rockPaperScissorsGame(lines))

/*
1 for Rock      A,X
2 for Paper     B,Y
3 for Scissors  C,Z

0 if you lost 
3 if you draw 
6 if you won
*/

// answer to the first part of the question was 14163, I had an error with the subtotal on paper v paper, a 2 instead of a 5


/*
--- Part Two ---
The Elf finishes helping with the tent and sneaks back over to you. "Anyway, the second column says how the round needs to end: X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"

The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated. The example above now goes like this:

A Y
B X
C Z

In the first round, your opponent will choose Rock (A), and you need the round to end in a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.
In the second round, your opponent will choose Paper (B), and you choose Rock so you lose (X) with a score of 1 + 0 = 1.
In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.
Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of 12.

Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide?
*/

const input = fs.readFileSync('./input.txt', 'utf-8')

const lines = input.split('\n')

function cheatRPS(arr){
  
  let subtotal = 0
  let result
  
  for(let i = 0; i < arr.length; i++){
    
    // draw scenario, just match arr[i][0]
    if(arr[i][2] === 'Y' && arr[i][0] === 'A') result = 'X'
    if(arr[i][2] === 'Y' && arr[i][0] === 'B') result = 'Y'
    if(arr[i][2] === 'Y' && arr[i][0] === 'C') result = 'Z'
    // lose scenario, filter for arr[i][0] and match to lose
    if(arr[i][2] === 'X' && arr[i][0] === 'A') result = 'Z'
    if(arr[i][2] === 'X' && arr[i][0] === 'B') result = 'X'
    if(arr[i][2] === 'X' && arr[i][0] === 'C') result = 'Y'
    // win scenario, filter for arr[i][0] and match to win
    if(arr[i][2] === 'Z' && arr[i][0] === 'A') result = 'Y'
    if(arr[i][2] === 'Z' && arr[i][0] === 'B') result = 'Z'
    if(arr[i][2] === 'Z' && arr[i][0] === 'C') result = 'X'
    
    
    // change all arr[i][2] to be the result
    // OPP ROCK PERMUTATIONS
    // rock and rock = draw rock(1) and draw(3) = 1 + 3 = 4
    if(arr[i][0] === 'A' && result === 'X') subtotal += 4
    // rock and paper = win; paper(2) and win(6) = 2 + 6 = 8
    if(arr[i][0] === 'A' && result === 'Y') subtotal += 8
    // rock and scissors = lose; scissors(3) and lose(0) = 3 + 0 = 3
    if(arr[i][0] === 'A' && result === 'Z') subtotal += 3
    
    // OPP PAPER PERMUTATIONS
    // paper and rock = lose rock(1) and lose(0) = 1 + 0 = 1
    if(arr[i][0] === 'B' && result === 'X') subtotal += 1
    // paper and paper = tie; paper(2) and draw(3) = 2 + 3 = 5
    if(arr[i][0] === 'B' && result === 'Y') subtotal += 5
    // paper and scissors = win; scissors(3) and win(6) = 3 + 6 = 9
    if(arr[i][0] === 'B' && result === 'Z') subtotal += 9
    
    // OPP SCISSORS PERMUTATIONS
    // scissors and rock = win rock(1) and win(6) = 1 + 6 = 7
    if(arr[i][0] === 'C' && result === 'X') subtotal += 7
    // scissors and paper = lose; paper(2) and lose(0) = 2 + 0 = 2
    if(arr[i][0] === 'C' && result === 'Y') subtotal += 2
    // scissors and scissors = draw; scissors(3) and draw(3) = 3 + 3 = 6
    if(arr[i][0] === 'C' && result === 'Z') subtotal += 6
  }
  return subtotal
}

console.log(cheatRPS(lines))

