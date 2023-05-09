import { getData } from './BestSellers/request';
import { renderCategoryList, sectionRef } from "./home-by-category";

const categoryList = document.querySelector('.categories-list');
document.addEventListener('click', onClickCategoryName);

export function onClickCategoryName(e) {
	if (e.target.matches('.category-name[data-category]')) {
		const categoryBook = e.target.getAttribute('data-category');
		sectionRef.innerHTML = '';

		renderCategoryList(categoryBook, sectionRef);
		isDisableCategoryItem();
		isActiveCategoryItem(categoryBook);
	};
};

export function isActiveCategoryItem(category) {
	const categoryItem = document.querySelector(`.category-name[data-category="${category}"]`);
	categoryItem.classList.add("category-is-active");
};

export function isDisableCategoryItem() {
	const activeCategoryItem = document.querySelector('.category-is-active');
	if (activeCategoryItem) {
		activeCategoryItem.classList.remove("category-is-active");
	};
};

getData('/books/category-list').then(data => {
	const markup = data.map(CategoryItem).join('');

	categoryList.insertAdjacentHTML('beforeend', markup);
});

function CategoryItem({ list_name }) {
	return `
	<li class="category-name" data-category="${list_name}">${list_name}</li>
	`;
};
