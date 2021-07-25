const photosLinks = [
	{
		label: 'Library',
		icon: './img/icons.svg#icon-library',
	},
	{
		label: 'For You',
		icon: './img/icons.svg#icon-for-you',
	},
	{
		label: 'People',
		icon: './img/icons.svg#icon-people',
	},
	{
		label: 'Places',
		icon: './img/icons.svg#icon-places',
	},
	{
		label: 'Favourites',
		icon: './img/icons.svg#icon-favourites',
		current: true,
	},
	{
		label: 'Recents',
		icon: './img/icons.svg#icon-recents',
	},
	{
		label: 'Search',
		icon: './img/icons.svg#icon-search',
	},
];

const utilitiesLinks = [
	{
		label: 'Imports',
		icon: './img/icons.svg#icon-imports',
	},
	{
		label: 'Recently Deleted',
		icon: './img/icons.svg#icon-bin',
	},
];

const mediaTypesLinks = [
	{
		label: 'Videos',
		icon: './img/icons.svg#icon-videos',
	},
	{
		label: 'Selfies',
		icon: './img/icons.svg#icon-selfies',
	},
	{
		label: 'Live Photos',
		icon: './img/icons.svg#icon-live-photos',
	},
	{
		label: 'Slo-mo',
		icon: './img/icons.svg#icon-slo-mo',
	},
	{
		label: 'Screenshots',
		icon: './img/icons.svg#icon-screenshots',
	},
];

// =========================================
// photos links markup
// =========================================
const initPhotosLinksMarkup = () => {
	const photosLinksParent = document.querySelector('.sidebar__menu-list--photos');
	const photosLinksMarkup = photosLinks
		.map((link) => {
			return `<li>
            <a href="#" class="${link.current ? 'active' : 'not-active'}">
               <svg>
                  <use xlink:href="${link.icon}"></use>
               </svg>
               ${link.label}
            </a>
         </li>`;
		})
		.join('');

	photosLinksParent.innerHTML = '';
	photosLinksParent.insertAdjacentHTML('afterbegin', photosLinksMarkup);
};

// =========================================
// Utilities links markup
// =========================================
const initUtilitiesLinksMarkup = () => {
	const utilitiesLinksParent = document.querySelector('.sidebar__menu-list--utilities');
	const utilitiesLinksMarkup = utilitiesLinks
		.map((link) => {
			return `<li>
           <a href="#" class="${link.current ? 'active' : 'not-active'}">
               <svg>
                  <use xlink:href="${link.icon}"></use>
               </svg>
               ${link.label}
            </a>
         </li>`;
		})
		.join('');

	utilitiesLinksParent.innerHTML = '';
	utilitiesLinksParent.insertAdjacentHTML('afterbegin', utilitiesLinksMarkup);
};

// =========================================
// MediaTypes links markup
// =========================================
const initMediaTypesLinksMarkup = () => {
	const mediaTypesLinksParent = document.querySelector('.sidebar__menu-list--media');
	const mediaTypesLinksMarkup = mediaTypesLinks
		.map((link) => {
			return `<li>
			<a href="#" class="${link.current ? 'active' : 'not-active'}">
				<svg>
					<use xlink:href="${link.icon}"></use>
				</svg>
				${link.label}
			</a>
		</li>`;
		})
		.join('');

	mediaTypesLinksParent.innerHTML = '';
	mediaTypesLinksParent.insertAdjacentHTML('afterbegin', mediaTypesLinksMarkup);
};

const init = () => {
	initPhotosLinksMarkup();
	initUtilitiesLinksMarkup();
	initMediaTypesLinksMarkup();
};

init();

// =============================================
// sidebar dropdown
// =============================================

const dropdownTriggers = document.querySelectorAll('.dropdown__trigger');

dropdownTriggers.forEach((btn) => {
	btn.addEventListener('click', function () {
		const dropdownBody = this.nextElementSibling;
		if (dropdownBody.style.maxHeight) {
			dropdownBody.style.maxHeight = null;
			dropdownBody.classList.remove('active');
		} else {
			dropdownBody.style.maxHeight = dropdownBody.scrollHeight + 'px';
			dropdownBody.classList.add('active');
		}
	});
	btn.click();
});

// ===========================================================
// sidebar toggle
// ===========================================================

const sidebarTogglers = document.querySelectorAll('.sidebar__toggler');
const sidebarIcon = document.querySelectorAll('.sidebar__toggle-icon');

sidebarTogglers.forEach((btn) => {
	btn.addEventListener('click', function () {
		document.body.classList.toggle('sidebar-active');
	});
});

window.addEventListener('load', function () {
	if (window.screen.availWidth <= 1024) {
		document.body.classList.toggle('sidebar-active');
	}
});
