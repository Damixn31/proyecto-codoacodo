const jsonFileUrl = "../books/catalogs_books.json";

// nota tuve que instalar globalmente npm i -g http-server y lo mevante dentro del mismo directorio donde tengo el index.html el comando -> http-server
// solicitud HTTP para obtener el archivo JSON
fetch(jsonFileUrl)
	.then((response) => {
		if (!response.ok) {
			throw new Error("No se pudo obtener el archivo JSON");
		}
		return response.json();
	})
	.then((data) => {
		data.libros.forEach((libro) => {
			console.log(libro.titulo);
			libro.contenido_paginas.forEach((pagina, indice) => {
				console.log(`Página ${indice + 1}: ${pagina}`);
			});
		});
	})
	.catch((error) => {
		console.error("Error:", error);
	});
