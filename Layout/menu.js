((d) => {
	const $btnMenu = d.querySelector('.menu-btn');
	const $menu = d.querySelector('.enlaces-header');
	$btnMenu.addEventListener('click', () => {
		$btnMenu.firstElementChild.classList.toggle('none');
		$btnMenu.lastElementChild.classList.toggle('none');
		$menu.classList.toggle('is-active');
	});

	d.addEventListener('click', (e) => {
		if (!e.target.matches('.enlaces-header a')) return false;
		$btnMenu.firstElementChild.classList.remove('none');
		$btnMenu.lastElementChild.classList.add('none');
		$menu.classList.remove('is-active');
		return true;
	});
})(document);
