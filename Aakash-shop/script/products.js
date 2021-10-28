var items = [
  {
    img: 'img/item01.jpg',
    name: 'Leather shoes',
    cost: '30'
  },
  {
    img: 'img/item02.jpg',
    name: 'Leather bag',
    cost: '25'
  },
  {
    img: 'img/item03.jpg',
    name: 'Office chair',
    cost: '15'
  },
  {
    img: 'img/item04.jpg',
    name: 'Gel pen',
    cost: '24'
  },
  {
    img: 'img/item05.jpg',
    name: 'Silver pen',
    cost: '16'
  },
  {
    img: 'img/item06.jpg',
    name: 'Tie',
    cost: '17'
  },
  {
    img: 'img/item07.jpg',
    name: 'Pen stand',
    cost: '15'
  },
  {
    img: 'img/item08.jpg',
    name: 'Neeb pen',
    cost: '25'
  },
  {
    img: 'img/item09.jpg',
    name: 'Stamps',
    cost: '26'
  },
  {
    img: 'img/item10.jpg',
    name: 'Office bag',
    cost: '28'
  },
  {
    img: 'img/item11.jpg',
    name: 'Law stamps',
    cost: '29'
  },
  {
    img: 'img/item12.jpg',
    name: 'Silver pen',
    cost: '30'
  }
];

function makeItem(item) {
  let parent = document.querySelector(".prod-container");
  let prod = document.createElement("div");
  parent.appendChild(prod);

  prod.outerHTML = `<div class="prod rel">
  <div class="img-container">
    <a href="#"><img class="img" src="${item.img}" alt="img"/></a>
  </div>
  <div class="prod-btn flex abs">
    <button title="Add to Wishlist" class="fa fa-heart-o"></button>
    <button title="Add to Cart" class="fa fa-cart-plus"></button>
    <button onclick="window.open('#quick-view','_self')" title="Quick View" class="fa fa-eye"></button>
  </div>
  <p><a class="large" href="#">${item.name}</a></p>
  <span class="prod-cost">$${item.cost}</span>
</div>`;
}