#!/usr/bin/env node

import {getName} from "../src/cli.js"
import readlineSync from "readline-sync"

console.log("Welcome to the Brain Games!")

const name = getName()

console.log(`Hello, ${name}!`)

console.log('Answer "yes" if the number is even, otherwise answer "no".')

let rightAnswers = 0

const minInt = Math.ceil(0);
const maxInt = Math.floor(100);
while(rightAnswers < 3) {
	const randomNum = Math.floor(Math.random() * (maxInt - minInt + 1) + minInt)
	console.log(`Question: ${randomNum}`)
	const answer = readlineSync.question('Your answer: ')
	if ((randomNum %2 === 0 && answer === "yes") || (randomNum %2 !== 0 && answer === "no")) {
		console.log('Correct!')
		rightAnswers += 1
	} else {
		const correctAnswer = answer === "yes" ? "no" : "yes"
		console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
		console.log(`Let's try again, ${name}!`)
		break
	}
}
if (rightAnswers === 3) console.log(`Congratulations, ${name}!`)




