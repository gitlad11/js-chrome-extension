const addbtn = document.getElementById('add-b')
const hidebtn = document.getElementById('hide-b')
const morelnk = document.getElementById('more-flex')



function showtoggler(){
	if(hidebtn.classList.contains('btn-hidden')){
		addbtn.classList.add('btn-hidden')
		hidebtn.classList.remove('btn-hidden')
		morelnk.classList.remove('btn-hidden')
		
	}

}

function hidetoggler(){
	if(addbtn.classList.contains('btn-hidden')){
		addbtn.classList.remove('btn-hidden')
		hidebtn.classList.add('btn-hidden')
		morelnk.classList.add('btn-hidden')
	}
}

addbtn.addEventListener('click', showtoggler)
hidebtn.addEventListener('click', hidetoggler)