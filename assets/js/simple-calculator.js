window.addEventListener("load", function () {
    let firstNumber = document.getElementById('first-number');
    let selectOperand = document.getElementById('operation')
    let secondNumber = document.getElementById('second-number')
    let result = document.getElementById('result')
    let btn = document.getElementById('button1')

    

    let count = () => {
        let answer = null

        let num1 = parseFloat(firstNumber.value)
        let num2 = parseFloat(secondNumber.value)

        switch (selectOperand.value) {
            case '+':
                answer = num1 + num2;
                break;
            case '-':
                answer = num1 - num2;
                break;
            case '*':
                answer = num1 * num2;
                break;
            case '/':
                answer = num1 / num2;
                break;
        }


        result.setAttribute('value', answer)
        // console.log('masuk');

    }

    btn.addEventListener("click", count)
    // selectOperand.addEventListener("change", count)
});
