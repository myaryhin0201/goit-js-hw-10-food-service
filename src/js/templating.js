// method 1
// import list from '../menu.json';
// const markup = list.map(el => `
// <li class="menu__item">
//   <article class="card">
//     <img
//       src="${el.image}"
//       alt="${el.name}"
//       class="card__image"
//     />
//     <div class="card__content">
//       <h2 class="card__name">${el.name}</h2>
//       <p class="card__price">
//         <i class="material-icons"> monetization_on </i>
//         ${el.price} кредитов
//       </p>

//       <p class="card__descr">
//         ${el.description}
//       </p>

//       <ul class="tag-list">
//        ${el.ingredients.map(elem => `<li class="tag-list__item">${elem}</li>`
//        ).join('')}
//       </ul>
//     </div>

//     <button class="card__button button">
//       <i class="material-icons button__icon"> shopping_cart </i>
//       В корзину
//     </button>
//   </article>
// </li> 
// `).join('');
// const menuLIst = document.querySelector('.js-menu');
// menuLIst.insertAdjacentHTML('beforeend', markup);

// with Handlebars
import itemsTemplate from '../templates/menu.hbs';
import listItem from '../menu.json';
const menuLIst = document.querySelector('.js-menu');
const markup = itemsTemplate(listItem);
menuLIst.insertAdjacentHTML('beforeend', markup);