const books = [
	{
		id: 1,
		titulo: "Rust 2018 vol1",
		url: "../html/pdf.html",
		portada: "../../public/img/rust.webp",
	},
	{
		id: 2,
		url: "../html/pdf.html",
		portada: "../../public/img/docker.png",
	},
	{
		id: 3,
		url: "../books/02-ShellScripts.pdf",
		portada: "../../public/img/bash.jpg",
	},
];

console.log(typeof books);

for (let i = 0; i < books.length; i++) {
	console.log("ID", books[i].id);
}

function viewBooks() {
	const bookListElement = document.getElementById("bookList");

	//limpia la lista antes de agregar los libros
	bookListElement.innerHTML = "";

	if (books) {
		books.forEach((book) => {
			//listItem.textContent = `ID: ${book[1]}`;
			//bookListElement.appendChild(listItem);

			const listItem = document.createElement("li");

			const bookPath1 = books[0].url;
			console.log(bookPath1, "esta son las pa");

			const bookLink = document.createElement("a");
			bookLink.href = book.url;

			console.log(bookLink.href, "hola");

			listItem.textContent = `ID: ${book.id}`;

			//const bookButton = document.createElement("button");
			//bookButton.textContent = "Ver Libro";
			bookLink.addEventListener("click", () => {
				bookLink.href = bookPath1;
				//bookLink.href = book.url;
				//enter_bookId(book.id, book.url);
				viewDetail(book.id);
			});

			//console.log(book);
			//listItem.appendChild(bookButton);
			listItem.appendChild(bookLink);

			const coverImage = document.createElement("img");
			coverImage.src = book.portada;
			coverImage.alt = book.titulo + "Portada";
			listItem.appendChild(coverImage);

			const titleSpan = document.createElement("span");
			titleSpan.textContent = book.titulo;
			listItem.appendChild(titleSpan);

			//listItem.appendChild(bookLink);

			bookListElement.appendChild(listItem);
			//console.log(book);
		});
	} else {
		const listItem = document.createElement("li");
		listItem.textContent = "No se encuentran los libros.";
		bookListElement.appendChild(listItem);
	}
}

function viewDetail(id) {
	const pages = document.querySelectorAll(".pagina");
	pages.forEach((pagina) => {
		pagina.classList.remove("pagina-activa");
	});

	const currentPage = document.getElementById(`pagina${id}`);
	if (currentPage) {
		currentPage.classList.add("pagina-activa");
		viewPag(1);
	}
}

function viewPag(numPag) {
	const pages = document.querySelectorAll(".pagina-activa .contenido-pagina");
	pages.forEach((pagina, index) => {
		if (index + 1 === numPag) {
			pagina.style.display = "block";
		} else {
			pagina.style.display = "none";
		}
	});
}

viewBooks();
