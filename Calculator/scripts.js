let incomingformula = document.querySelector("#formula")
let outgoinganswer = document.querySelector("#answer")


let firstend =''
let secondend =''
let operatorLoc=0
let formula = ''
let answer = 0 
let startpos = 0
let startfix = true

const operators = ['+','-','*','/']

function calculate(){
    formula = incomingformula.value
    console.log(formula.length)
    for (let i = 0; i <= formula.length; i++) {
       if(operators.includes(formula[i])|| i == formula.length){
            firstend = parseInt(formula.substring(startpos,i))
            console.log(formula)
            startpos = i+1
                if(!startfix){
                    switch(formula[operatorLoc]){
                        case '+':
                            answer += firstend 
                            console.log(answer)
                            break
                        case '*':
                            answer *= firstend
                            console.log(answer)
                            break
                        case '/':
                            if(firstend !== 0){
                            answer /= firstend
                            console.log(answer)
                            }
                            break
                        case '-':
                            answer -= firstend
                            console.log(answer)
                            break     
                    }
                    operatorLoc = i
                }
                else {
                    answer = firstend
                    startfix = false
                    operatorLoc = i
                    console.log(answer)
                    console.log(i)
                    console.log('1st try')
                }

        }
        
        
}

    //incomingformula.value=''
    outgoinganswer.innerHTML=answer
    answer = 0 
    startfix = true
    operatorLoc = 0
    startpos = 0
    firstend =''
    formula =''


}