const headline = document.getElementById('headline');
const btn = document.getElementById('btn');
const output = document.getElementById('output')
const copy = document.getElementById('copy')
let div = null;
const output_rgb = document.getElementById('output_rgb')
const copy_rgb = document.getElementById('copy_rgb')

btn.addEventListener('click',function(){
    let red = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let colorFormat = '#';
    color = colorFormat+red.toString(16)+blue.toString(16)+green.toString(16)
    headline.style.backgroundColor = color;
    colorOutput = color.substring(1)
    output.value = colorOutput;
    output_rgb.value = 'rgb'+'('+red+','+blue+','+green+')';
})
output.addEventListener('keyup', function (outputText) {
    colorFormat = '#'
    color = colorFormat+outputText.target.value;
    headline.style.backgroundColor = color;
    if (color.length == 0 ) {
        alert('your color field is null')
        headline.style.backgroundColor = null;
    }
    if (output.value === '000' || output.value === '000000'){
        document.getElementById('head').style.color = 'white'
    }else if (output.value === 'fff' || output.value === 'ffffff'){
        document.getElementById('head').style.color = '#000'
    }
});
output_rgb.addEventListener('keyup',function(rgbOutput){
    color = rgbOutput.target.value;
    headline.style.backgroundColor = color;
    if(headline.style.backgroundColor = color){
        output_rgbSubstrngOne = output_rgb.value.substring(4)
        output_rgbSubstrngtwo = output_rgbSubstrngOne.substring(0,output_rgbSubstrngOne.length-1)
        myarray = output_rgbSubstrngtwo.split(',');
        myarray[0] = parseInt(myarray[0])
        myarray[1] = parseInt(myarray[1])
        myarray[2] = parseInt(myarray[2])
        newValue = myarray[0].toString(16)+myarray[1].toString(16)+myarray[2].toString(16)
        output.value = newValue;
    }
    if(newValue = 'rgb(0,0,0)'){
        document.getElementById('head').style.color = 'white'
    }else{
        document.getElementById('head').style.color = '#000'
    }
})
copy.addEventListener('click',function(){
    colorFormat = '#'
    navigator.clipboard.writeText(output.value)
    toastMessage(colorFormat+output.value + ' Are Copied')
})
copy_rgb.addEventListener('click',function(){
    navigator.clipboard.writeText(output_rgb.value)
    toastMessage(output_rgb.value +' Are Copied')
})
function toastMessage(msg){
    div = document.createElement('div');
	div.innerText = msg;
    div.className = 'toast-message toast-message-slide-in '
    div.addEventListener('click',function(){
        div.classList.remove('toast-message-slide-in');
        div.remove()
    })
    document.body.appendChild(div);
}
