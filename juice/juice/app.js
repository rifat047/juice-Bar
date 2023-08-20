const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Lemon Mint",
    price: 60,
    colors: [
      {
        code: "small",
        img: "/img/mint.png",
      },
      {
        code: "Medium",
        img: "/img/mint.png",
      },
      {
        code: "Large",
        img: "/img/mint.png",
      },
      {
        code: "Extra laarge",
        img: "/img/mint.png",
      },
    ],
  },
  {
    id: 2,
    title: "Apple Orange Fizz",
    price: 70,
    colors: [
      {
        code: "small",
        img: "/img/appleorange.png",
      },
      {
        code: "Medium",
        img: "/img/appleorange.png",
      },
      {
        code: "Large",
        img: "/img/appleorange.png",
      },
      {
        code: "Extra laarge",
        img: "/img/appleorange.png",
      },
    ],
  },
  {
    id: 3,
    title: "Strawberry Milk Shakes",
    price: 80,
    colors: [
      {
        code: "small",
        img: "/img/strawberry.png",
      },
      {
        code: "Medium",
        img: "/img/strawberry.png",
      },
      {
        code: "Large",
        img: "/img/strawberry.png",
      },
      {
        code: "Extra laarge",
        img: "/img/strawberry.png",
      },
    ],
  },
  {
    id: 4,
    title: "Raw Fruite Juice",
    price: 80,
    colors: [
      {
        code: "small",
        img: "/img/Fruit+juice.png",
      },
      {
        code: "Medium",
        img: "/img/Fruit+juice.png",
      },
      {
        code: "Large",
        img: "/img/Fruit+juice.png",
      },
      {
        code: "Extra laarge",
        img: "/img/Fruit+juice.png",
      },
    ],
  },
]
  

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "tk" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

// work input field clear..
document.querySelector('.payButton').addEventListener('click', function(){
  let inputName = document.getElementsByClassName('payInput');
  for(let inputFild of inputName){
    inputFild.value = '';
  }
})