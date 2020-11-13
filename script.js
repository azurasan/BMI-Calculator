let weight = document.querySelector('#weight');
let height = document.querySelector('#height');
const btn = document.querySelector('.btn');
let result = document.querySelector('.result');

btn.addEventListener('click',function(){
	let wValue = weight.value;
	let hValue = height.value / 100;
	let bmi = (wValue / (hValue * hValue));
	let category = '';
	if(bmi < 18.5){
		category = 'Berat badan kurang';
	} else if(bmi <= 22.9 ){
		category = 'Berat badan normal';
	} else if(bmi <= 29.9){
		category = 'Berat badan berlebih (kecenderungan obesitas)';
	} else {
		category = 'Obesitas'
	}
	let bmiResult = Math.floor(bmi);
	result.textContent = `${bmiResult} (${category})`;
});