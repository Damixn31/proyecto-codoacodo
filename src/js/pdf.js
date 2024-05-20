pdfjsLib.GlobalWorkerOptions.workerSrc =
	"https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js";

const pdfContainer = document.getElementById("pdf-container");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

let currentBookIndex = 0;
let currentPage = 1;
let pdfDoc = null;
//const books = [
//	"../books/traduccionrust2018vol1.pdf",
//	"../books/docker_para_devops_r1.pdf",
//	"../books/02-ShellScripts.pdf",
//];

//async function loadBook(index) {
//	const url = books[index];
//console.log(url);

//	try {
//		pdfDoc = await pdfjsLib.getDocument(url).promise;
//console.log("PDF cargado exitosamente!", pdfDoc);
//		renderPage(1);
//	} catch (err) {
//		console.error("error al cargar el libro", err);
//	}
//}

async function renderPage(pageNum) {
	try {
		pdfContainer.innerHTML = "";
		const page = await pdfDoc.getPage(pageNum);
		console.log(page);
		const scale = 1.6;
		const viewport = page.getViewport({ scale: scale });
		const outputScale = window.devicePixelRatio || 1;

		const canvas = document.createElement("canvas");
		const context = canvas.getContext("2d");

		canvas.height = viewport.height;
		canvas.width = viewport.width;

		//
		canvas.width = Math.floor(viewport.width * outputScale);
		canvas.height = Math.floor(viewport.height * outputScale);
		canvas.style.width = Math.floor(viewport.width) + "px";
		canvas.style.height = Math.floor(viewport.height) + "px";

		const renderContext = {
			canvasContext: context,
			viewport: viewport,
		};

		await page
			.render(renderContext)
			.promise.then(() => {
				console.log("render page", pageNum);
				pdfContainer.appendChild(canvas);
			})
			.catch((e) => {
				console.error("Error al renderizar la pagina", pageNum, e);
			});
	} catch (e) {
		console.error("error rendering page:", pageNum, e);
	}
}

prevButton.disable = true;

prevButton.addEventListener("click", async () => {
	if (currentPage > 1) {
		currentPage--;
		await renderPage(currentPage);
	}
	updateButtonStates();
});

nextButton.addEventListener("click", async () => {
	if (currentBookIndex < pdfDoc.numPages) {
		currentPage++;
		await renderPage(currentPage);
	}
	updateButtonStates();
});

function updateButtonStates() {
	prevButton.disabled = currentPage === 1;
	nextButton.disabled = currentPage === pdfDoc.numPages;
}

loadBook(currentBookIndex);

// scroll nav in the page

let prevScrollPos = window.scrollY;
window.onscroll = function () {
	let currentScrollPos = window.scrollY;
	if (prevScrollPos > currentScrollPos) {
		document.getElementById("navbar").classList.remove("scrolled");
	} else {
		document.getElementById("navbar").classList.add("scrolled");
	}
	prevScrollPos = currentScrollPos;
};
