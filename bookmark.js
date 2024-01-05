let booksArr = [
  {
    id: 1,
    name: "Mehrobdan chayon",
    type: "Badiy",
    author: "Abdulla Qodiriy"
  },
  {
    id: 2,
    name: "Ikki eshik orasi",
    type: "Badiy",
    author: "O'tkir Hoshimov"
  },
  {
    id: 3,
    name: "Ijtimoiy odoblar",
    type: "Diniy",
    author: "Shayx Muhammadsodiq Muhammadyusuf"
  },
  {
    id: 4,
    name: "Dunyoning ishlari",
    type: "Badiy",
    author: "O'tkir Hoshimov"
  },
  {
    id: 5,
    name: "Saodat asri qissalari",
    type: "Diniy",
    author: "Ahmad Qozonchi"
  },
  {
    id: 7,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  }, {
    id: 8,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  },
  {
    id: 9,
    name: "Saodat asri qissalari",
    type: "Diniy",
    author: "Ahmad Qozonchi"
  },
  {
    id: 10,
    name: "Saodat asri qissalari",
    type: "Diniy",
    author: "Ahmad Qozonchi"
  },
  {
    id: 11,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  },
  {
    id: 12,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  },
  {
    id: 13,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  },
  {
    id: 14,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  },

  {
    id: 15,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  },
  {
    id: 16,
    name: "Ijtimoiy odoblar",
    type: "Diniy",
    author: "Shayx Muhammadsodiq Muhammadyusuf"
  },
  {
    id: 17,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  },
  {
    id: 18,
    name: "Ijtimoiy odoblar",
    type: "Diniy",
    author: "Shayx Muhammadsodiq Muhammadyusuf"
  },
  {
    id: 19,
    name: "Ijtimoiy odoblar",
    type: "Diniy",
    author: "Shayx Muhammadsodiq Muhammadyusuf"
  },
  {
    id: 20,
    name: "Ijtimoiy odoblar",
    type: "Diniy",
    author: "Shayx Muhammadsodiq Muhammadyusuf"
  },
  {
    id: 21,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  },
  {
    id: 22,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  },
  {
    id: 23,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  },
  {
    id: 24,
    name: "Ijtimoiy odoblar",
    type: "Diniy",
    author: "Shayx Muhammadsodiq Muhammadyusuf"
  },
  {
    id: 25,
    name: "Ijtimoiy odoblar",
    type: "Diniy",
    author: "Shayx Muhammadsodiq Muhammadyusuf"
  },
  {
    id: 26,
    name: "Ijtimoiy odoblar",
    type: "Diniy",
    author: "Shayx Muhammadsodiq Muhammadyusuf"
  },
  {
    id: 27,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  },
  {
    id: 28,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  },
  {
    id: 29,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  },
  {
    id: 30,
    name: "Ijtimoiy odoblar",
    type: "Diniy",
    author: "Shayx Muhammadsodiq Muhammadyusuf"
  },
  {
    id: 31,
    name: "Ijtimoiy odoblar",
    type: "Diniy",
    author: "Shayx Muhammadsodiq Muhammadyusuf"
  },
  {
    id: 32,
    name: "Ijtimoiy odoblar",
    type: "Diniy",
    author: "Shayx Muhammadsodiq Muhammadyusuf"
  },
  {
    id: 33,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  },
  {
    id: 34,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  },
  {
    id: 35,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  },
  {
    id: 36,
    name: "Ijtimoiy odoblar",
    type: "Diniy",
    author: "Shayx Muhammadsodiq Muhammadyusuf"
  },
  {
    id: 37,
    name: "Ijtimoiy odoblar",
    type: "Diniy",
    author: "Shayx Muhammadsodiq Muhammadyusuf"
  },
  {
    id: 38,
    name: "Ijtimoiy odoblar",
    type: "Diniy",
    author: "Shayx Muhammadsodiq Muhammadyusuf"
  },
  {
    id: 39,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  },
  {
    id: 40,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  },
  {
    id: 41,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  },
  {
    id: 42,
    name: "Ijtimoiy odoblar",
    type: "Diniy",
    author: "Shayx Muhammadsodiq Muhammadyusuf"
  },
  {
    id: 43,
    name: "Ijtimoiy odoblar",
    type: "Diniy",
    author: "Shayx Muhammadsodiq Muhammadyusuf"
  },
  {
    id: 44,
    name: "Ijtimoiy odoblar",
    type: "Diniy",
    author: "Shayx Muhammadsodiq Muhammadyusuf"
  },
  {
    id: 45,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  },
  {
    id: 46,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  },
  {
    id: 47,
    name: "Ijtimoiy odoblar",
    type: "Diniy",
    author: "Shayx Muhammadsodiq Muhammadyusuf"
  },
  {
    id: 48,
    name: "Ijtimoiy odoblar",
    type: "Diniy",
    author: "Shayx Muhammadsodiq Muhammadyusuf"
  },
  {
    id: 49,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  },
  {
    id: 50,
    name: "Shum bola",
    type: "Badiy",
    author: "G'afur G'ulom"
  },
];


let tbody = document.getElementById("tbody");
let typeSelect = document.getElementById("type");
let pageSelect = document.getElementById("page");
let prevPage = document.getElementById("prevPage");
let nextPage = document.getElementById("nextPage");
let currentPage = 1;
let pageSize = parseInt(pageSelect.value);

function getBookStore(books) {
  tbody.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `
      <th scope="row">${books[i].id}</th>
      <td>${books[i].name}</td>
      <td>${books[i].type}</td>
      <td>${books[i].author}</td>
      <td><button class="btn btn-danger" onclick="deleteBookStore(${books[i].id})">X</button></td>`;
    tbody.appendChild(tr);
  }
}

function deleteBookStore(id) {
  if (confirm("Are you sure you want to delete?")) {
    let newArr = [];
    for (let i = 0; i < booksArr.length; i++) {
      if (booksArr[i].id !== id) {
        newArr.push(booksArr[i]);
      }
    }
    booksArr = newArr;
    updatePage();
  }
}

function updatePagination() {
  let totalPages = Math.ceil(booksArr.length / pageSize);
  prevPage.classList.toggle("disabled", currentPage === 1);
  nextPage.classList.toggle("disabled", currentPage === totalPages);
}

function updatePage() {
  let startIndex = (currentPage - 1) * pageSize;
  let endIndex = startIndex + pageSize;
  let slicedBooks = booksArr.slice(startIndex, endIndex);
  getBookStore(slicedBooks);
  updatePagination();
}

typeSelect.addEventListener("change", function () {
  let selectedType = typeSelect.value;
  let filteredBooks = (selectedType === "All") ? booksArr : booksArr.filter(book => book.type === selectedType);
  booksArr = filteredBooks;
  currentPage = 1;
  updatePage();
});

pageSelect.addEventListener("change", function () {
  pageSize = parseInt(pageSelect.value);
  currentPage = 1;
  updatePage();
});

prevPage.addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    updatePage();
  }
});

nextPage.addEventListener("click", function () {
  let totalPages = Math.ceil(booksArr.length / pageSize);
  if (currentPage < totalPages) {
    currentPage++;
    updatePage();
  }
});

function changePageSize() {
  pageSize = parseInt(pageSelect.value);
  currentPage = 1;
  updatePage();
}

updatePage();