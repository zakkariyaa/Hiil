// open & close sidebar
let menuBtn = document.querySelector('#menu-btn').addEventListener('click', function() {
	let menu = document.querySelector('#menu-btn');
	let closeBtn = document.querySelector('#close-btn');
	let sideBar = document.querySelector('.sidebar')
	sideBar.style.display = 'block';
	closeBtn.style.display = 'inline-block';
	menu.style.display = 'none';
})


let closeBtn = document.querySelector('#close-btn').addEventListener('click', function() {
	let menu = document.querySelector('#menu-btn');
	let close = document.querySelector('#close-btn');
	let sideBar = document.querySelector('.sidebar')
	sideBar.style.display = 'none';
	close.style.display = 'none';
	menu.style.display = 'inline-block';
})


// change nav active class to clicked section
let navItems = document.querySelectorAll('.navbar ul li');

let removeActiveClass = () => {
	navItems.forEach(item => {
		let navLink = item.querySelector('a');
		navLink.classList.remove('active');
	})
}

navItems.forEach(item => {
	let navLink = item.querySelector('a');
	navLink.addEventListener('click', () => {
		removeActiveClass()
		navLink.classList.add('active');
	})
})


// open & close faqs boxes
let faqs = document.querySelectorAll('section#faqs article');

faqs.forEach(faq => {
	faq.addEventListener('click', () => {
		faq.classList.toggle('open');

		//change icon
		let icon = faq.querySelector('.icon i');
		if (icon.className === 'uil uil-plus') {
			icon.className = 'uil uil-minus';
		} else {
			icon.className = 'uil uil-plus';
		}
	})
})


// change navbar style on scroll
window.addEventListener('scroll', () => {
	document.querySelector('.navbar').classList.toggle('window-scroll', window.scrollY > 0)
})