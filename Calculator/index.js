function display(num){
    document.getElementById('textarea').value+=num
}

 function calculate()
{
    var num = document.getElementById('textarea').value
    var answer = eval(num)
    document.getElementById('textarea').value=answer
}

function clr()
{
    document.getElementById('textarea').value=''
}