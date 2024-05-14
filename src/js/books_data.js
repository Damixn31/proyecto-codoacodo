const books = {
	libros: [
		{
			id: 1,
			titulo: "Título del Libro 1",
			autor: "Autor del Libro 1",
			paginas: 12,
			imagen_portada: "../../public/img/book1.jpg",
			descripcion: "Breve descripción del Libro 1",
			contenido_paginas: [
				"Contenido de la página 1 del Libro 1",
				"Contenido de la página 2 del Libro 1",
				"Contenido de la página 3 del Libro 1",
				"Contenido de la página 4 del Libro 1",
				"Contenido de la página 5 del Libro 1",
			],
		},
		{
			id: 2,
			titulo: "Título del Libro 2",
			autor: "Autor del Libro 2",
			paginas: 5,
			imagen_portada: "../../public/img/book2.jpg",
			descripcion: "Breve descripción del Libro 2",
			contenido_paginas: [
				"Contenido de la página 1 del Libro 2",
				"Contenido de la página 2 del Libro 2",
				"Contenido de la página 3 del Libro 2",
				"Contenido de la página 4 del Libro 2",
				"Contenido de la página 5 del Libro 2",
			],
		},
		{
			id: 3,
			titulo: "Título del Libro 3",
			autor: "Autor del Libro 3",
			paginas: 10,
			imagen_portada: "../../public/img/book3.jpg",
			descripcion: "Breve descripción del Libro 3",
			contenido_paginas: [
				"Contenido de la página 1 del Libro 3",
				"Contenido de la página 2 del Libro 3",
				"Contenido de la página 3 del Libro 3",
				"Contenido de la página 4 del Libro 3",
				"Contenido de la página 5 del Libro 3",
			],
		},
	],
};

console.log(typeof books);

for (let i = 0; i < books.libros.length; i++) {
	console.log("ID", books.libros[i].id);
}

function viewBooks() {
	const bookListElement = document.getElementById("bookList");

	//limpia la lista antes de agregar los libros
	bookListElement.innerHTML = "";

	if (books.libros) {
		books.libros.forEach((book) => {
			const listItem = document.createElement("li");
			//listItem.textContent = `ID: ${book.id} - Titulo: ${book.titulo}`;
			//bookListElement.appendChild(listItem);

			const coverImage = document.createElement("img");
			coverImage.src = book.imagen_portada;
			coverImage.alt = book.titulo + "Portada";
			listItem.appendChild(coverImage);

			const titleSpan = document.createElement("span");
			titleSpan.textContent = book.titulo;
			listItem.appendChild(titleSpan);

			bookListElement.appendChild(listItem);
		});
	} else {
		const listItem = document.createElement("li");
		listItem.textContent = "No se encuentran los libros.";
		bookListElement.appendChild(listItem);
	}
}

viewBooks();
