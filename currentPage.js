window.addEventListener("load", function () {
    let linksArray = document.querySelectorAll("nav.menuOfPage a")
    console.log(linksArray)

    function active() {
        let path = window.location.href;
        let currentElement = path.split('#');
        if (currentElement.length > 1) {
            currentElement = currentElement[1]
        } else {
            currentElement = currentElement[0]
        }

        for (let i = 0; i < linksArray.length; ++i) {
            let el = linksArray[i].href.split('#')[1]
            if (el === currentElement) {
                linksArray[i].style.color = '#7000de';
            }
        }
    }

    window.addEventListener("scroll", active)
    active()
})