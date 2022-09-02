class Calculator {
    consructor(previouseOperandTextElement, currentOperandTextElement) {
        this.previouseOperandTextElement = previouseOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    
    delete() {
    
    }
    
    appendNumber(number) {
        this.currentOperand = number
    }
    
    chooseOperation(operation) {
    
    }
    
    comute() {
    
    }
    
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton =  document.querySelector('[data-equals]')
const deleteButton =  document.querySelector('[data-delete]')
const allClearButton =  document.querySelector('[data-all-clear]')
const previousOperandTextButton =  document.querySelector('[data-previous-operand]')
const currentOperandButton =  document.querySelector('[data-current-operand]')

const calculator = new Calculator(previouseOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
