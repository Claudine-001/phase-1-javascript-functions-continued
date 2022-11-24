function saturdayFun(defaultArgument="roller-skate"){
    return `This Saturday, I want to ${defaultArgument}!`
}

function mondayWork(defaultArgument='go to the office'){
    return `This Monday, I will ${defaultArgument}.`

}

function wrapAdjective(magic= "||"){
    return function(adjective = "a dedicated programmer "){
        return `You are ${magic}${adjective}${magic}!`
    }
}