function showTopBar(){
    const country = "France";
    const vat = 20;
    const bar = document.querySelector("section.country-bar");

    if (bar) {
        bar.innerHTML = `<p>Orders to <b>${country}</b> are subject to <b>${vat}%</b> VAT</p>`;
        bar.classList.remove("hidden");
    }
}



document.addEventListener("DOMContentLoaded", showTopBar);




