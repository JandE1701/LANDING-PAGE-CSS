(function () {
    // Creamos un array de 3 elementos que creamos en el documento HTML y accedemos a el
    const sliders = [...document.querySelectorAll(".testimony__body")];

    // Tomamos lo valores de los botones de NEXT y BEFORE
    const buttonNext = document.querySelector("#next");
    const buttonBefore = document.querySelector("#before");

    let value;

    // Creamos el evento de click al buttonNext
    buttonNext.addEventListener("click", () => {
        changePosition(1);
    });

    // Creamos el evento de click al buttonBefore
    buttonBefore.addEventListener("click", () => {
        changePosition(-1);
    });

    /* Creamos la funcion para hacer que le slider cambie de imagen y texto mediante las flechas, 
        las flechas estan ubicadas a los lado de los textos */
    const changePosition = (add) => {
        const currentTestimony = document.querySelector(".testimony__body--show")
            .dataset.id;

        value = Number(currentTestimony);
        value += add;

        sliders[Number(currentTestimony) - 1].classList.remove(
            "testimony__body--show"
        );
        if (value === sliders.length + 1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value - 1].classList.add("testimony__body--show");
    };
})();
