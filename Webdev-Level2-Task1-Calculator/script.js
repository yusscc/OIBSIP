document.addEventListener('DOMContentLoaded', () => {
    const expressionEl = document.getElementById('expression');
    const resultEl = document.getElementById('result');
    const buttons = document.querySelectorAll('.btn');
    const menuIcon = document.getElementById('menu-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const themeBtn = document.getElementById('theme-btn');

    let currentExpression = '';
    let isEvaluated = false;

    menuIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        if (!menuIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });

    themeBtn.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.body.setAttribute('data-theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
        }
        dropdownMenu.classList.remove('show');
    });
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            const action = button.getAttribute('data-action');

            if (value !== null) {
                if (isEvaluated) {
                    if (!isNaN(value) || value === '.') {
                        currentExpression = value;
                    } else {
                        currentExpression += value;
                    }
                    isEvaluated = false;
                } else {
                    currentExpression += value;
                }
            } else if (action) {
                handleAction(action);
            }
            updateDisplay();
        });
    });
    function handleAction(action) {
        switch (action) {
            case 'clear':
                currentExpression = '';
                isEvaluated = false;
                break;
            case 'backspace':
                if (isEvaluated) {
                    currentExpression = '';
                    isEvaluated = false;
                } else {
                    currentExpression = currentExpression.slice(0, -1);
                }
                break;
            case 'calculate':
                evaluateExpression(true);
                break;
            case 'paren':
                if (isEvaluated) {
                    currentExpression = '(';
                    isEvaluated = false;
                } else {
                    const openCount = (currentExpression.match(/\(/g) || []).length;
                    const closeCount = (currentExpression.match(/\)/g) || []).length;
                    const lastChar = currentExpression.slice(-1);

                    if (openCount > closeCount && lastChar !== '(' && !['+', '-', '*', '/'].includes(lastChar)) {
                        currentExpression += ')';
                    } else {
                        currentExpression += '(';
                    }
                }
                break;
            case 'percent':
                if (isEvaluated) {
                    isEvaluated = false;
                }
                currentExpression += '%';
                break;
        }
    }

    function updateDisplay() {
        let displayStr = currentExpression
            .replace(/\*/g, '×')
            .replace(/\//g, '÷');
        expressionEl.textContent = displayStr || '';
        if (!isEvaluated && currentExpression) {
            evaluateExpression(false);
        } else if (!currentExpression) {
            resultEl.textContent = '';
        }
        
        expressionEl.scrollTop = expressionEl.scrollHeight;
    }
    function evaluateExpression(final) {
        try {
            let evalStr = currentExpression.replace(/%/g, '/100');
            if (/[+\-*/.]$/.test(evalStr)) {
                if (final) return;
                resultEl.textContent = '';
                return;
            }
            if (/\/(?:\s*)0+(?!\.)/.test(evalStr)) {
                if (final) {
                    expressionEl.textContent = "Error";
                    currentExpression = '';
                    isEvaluated = true;
                    resultEl.textContent = '';
                } else {
                    resultEl.textContent = "Error";
                }
                return;
            }
            const openCount = (evalStr.match(/\(/g) || []).length;
            const closeCount = (evalStr.match(/\)/g) || []).length;
            for (let i = 0; i < (openCount - closeCount); i++) {
                evalStr += ')';
            }
            evalStr = evalStr.replace(/(\d)(\()/g, '$1*$2');
            evalStr = evalStr.replace(/(\))(\d)/g, '$1*$2');
            if (!evalStr.trim()) return;
            const result = new Function('"use strict";return (' + evalStr + ')')();
            if (!isFinite(result)) {
                throw new Error("Division by zero");
            }
            const formattedResult = Number.isInteger(result) ? result : parseFloat(result.toFixed(8));
            if (final) {
                currentExpression = formattedResult.toString();
                expressionEl.textContent = currentExpression;
                resultEl.textContent = '';
                isEvaluated = true;
            } else {
                resultEl.textContent = formattedResult;
            }
        } catch (e) {
            if (final) {
                expressionEl.textContent = 'Error';
                currentExpression = '';
                isEvaluated = true;
                resultEl.textContent = '';
            } else {
                resultEl.textContent = 'Error';
            }
        }
    }
});
