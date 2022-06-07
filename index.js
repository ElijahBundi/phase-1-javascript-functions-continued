// code your solution here

function saturdayFun(activity = 'roller-skate') {
    return (`This Saturday, I want to ${activity}!`)
}

const mondayWork = function(doStuff = 'go to the office') {
    return `This Monday, I will ${doStuff}.`
}

const wrapAdjective = function(string= '*') {
    return function(wrap= 'special') {
        return `You are ${string}${wrap}${string}!`
    }
}




















