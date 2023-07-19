const menu = [

    {
        id: 1,
        title: "chocolate cake",
        category: "chocolate",
        price: 15.99,
        img: "images/chocolate/chocolate-truffle-cream-cake-half-kg_1.webp",
        desc: "chocolate truflle cream cake"
    },

    {
        id: 2,
        title: "butterscotch cake",
        category: "butterscotch",
        price: 15.99,
        img: "images/butterscotch/delicious-butterscotch-cake-cake2282butt-AA.avif",
        desc: "delicious butterscotch cake"
    },

    {
        id: 3,
        title: "red-velvet cake",
        category: "red-velvet",
        price: 15.99,
        img: "images/red-velvet/sq-red-velvet-cake-with-choco-sticks-cake1630redv-A_0.avif",
        desc: "rred velvet cake with choco sticks"
    },
    
    {
        id: 4,
        title: "chocolate cake",
        category: "chocolate",
        price: 15.99,
        img: "images/chocolate/chocolaty-truffle-cake-half-kg_1.webp",
        desc: "chocolate truffle cake"
    },

    {
        id: 5,
        title: "chocolate cake",
        category: "chocolate",
        price: 15.99,
        img: "images/chocolate/cute-panda-chocolate-cake-half-kg_1.webp",
        desc: "cute panda chocolate cake"
    },

    {
        id: 6,
        title: "butterscotch cake",
        category: "butterscotch",
        price: 15.99,
        img: "images/butterscotch/sq-butterscotch-cake0003butt-AA.avif",
        desc: "butterscotch cake"
    },
    
    {
        id: 7,
        title: "chocolate cake",
        category: "chocolate",
        price: 15.99,
        img: "images/chocolate/decorated-chocolate-truffle-cake-half-kg_1.webp",
        desc: "decorated chocolate truffle cake"
    },
    
    {
        id: 8,
        title: "butterscotch cake",
        category: "butterscotch",
        price: 15.99,
        img: "images/butterscotch/sq-heart-shaped-butterscotch-cake-3-cake0622hbut-A_0.avif",
        desc: "heart shaped butterscotch cake"
    },

    {
        id: 9,
        title: "chocolate cake",
        category: "chocolate",
        price: 15.99,
        img: "images/chocolate/fudge-brownie-cake-half-kg_1.webp",
        desc: "fudge brownie cake"
    },

    {
        id: 10,
        title: "red-velvet cake",
        category: "red-velvet",
        price: 15.99,
        img: "images/red-velvet/sq-red-velvet-cake0027reex-AA_0.avif",
        desc: "red velvet cake"
    },
    
    {
        id: 11,
        title: "chocolate cake",
        category: "chocolate",
        price: 15.99,
        img: "images/chocolate/tic-tac-toe-pineapple-cake-for-mom-half-kg_1.webp",
        desc: "tic tac toe pineapple cake for mom"
    },
    
    {
        id: 12,
        title: "red-velvet cake",
        category: "red-velvet",
        price: 15.99,
        img: "images/red-velvet/sq-red-velvet-fruit-cake0037refr-A_0.avif",
        desc: "red velvet fruit cake"
    },
    
    {
        id: 13,
        title: "butterscotch cake",
        category: "butterscotch",
        price: 15.99,
        img: "images/butterscotch/sq-round-shaped-butterscotch-cake-1-cake0617butt-A_0.avif",
        desc: "round shaped butterscotch cake"
    }
]

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.onload = () => {
    displayMenuItems(menu);
    displayMenuButtons();
        
};

displayMenuItems = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
displayMenuButtons = () => {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map((category) => {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem) => {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}