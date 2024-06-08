let string = "";
const buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('#input').value = "";
        }
        else {
            if (e.target.innerHTML == '=') {
                string = eval(string);
                document.querySelector('#input').value = string;
            }
            else {
                if (e.target.innerHTML == 'pi') {
                    string = string + "3.14";
                    document.querySelector('#input').value = string;
                }
                else {
                    string = string + e.target.innerHTML;
                    document.querySelector('#input').value = string;
                }
            }
        }
    })
}
document.querySelector('#square').addEventListener('click', () => {
    string = Math.pow(parseFloat(string), 2);
    document.querySelector('#input').value = string;
})
document.querySelector('#cube').addEventListener('click', () => {
    string = Math.pow(parseFloat(string), 3);
    document.querySelector('#input').value = string;
})
document.querySelector('#root').addEventListener('click', () => {
    string = Math.sqrt(parseFloat(string));
    document.querySelector('#input').value = string;
})
document.querySelector('#sin').addEventListener('click', () => {
    string = Math.sin(parseFloat(string) * (Math.PI / 180));
    document.querySelector('#input').value = string;
})
document.querySelector('#cos').addEventListener('click', () => {
    string = Math.cos(parseFloat(string) * (Math.PI / 180));
    document.querySelector('#input').value = string;
})
document.querySelector('#tan').addEventListener('click', () => {
    string = Math.tan(parseFloat(string) * (Math.PI / 180));
    document.querySelector('#input').value = string;
})