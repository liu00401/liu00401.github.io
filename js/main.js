var images = document.querySelectorAll(".imageJs");

var closeText = "Close";



for (single of images) {
	single.addEventListener("click", function () {
		var popup = document.getElementById("popup");
		popup.innerHTML = `<img src="${this.src}"><span id="closeMe">${closeText}</span>`;
		var closeButton = document.getElementById('closeMe');
		closeButton.addEventListener("click", function () {
			var popup = document.getElementById("popup");
			popup.innerHTML = ` `;
		})
	})

}
