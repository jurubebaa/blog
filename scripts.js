const el = document.querySelector("#text");
const text = "< Front-end Developer />";
const interval = 100;

function showText(el, text, interval) {

    const char = text.split("").reverse();
    
    const typer = setInterval(() => {

        if(!char.length) {
            return clearInterval(typer);
        }

        const next = char.pop();

        el.innerHTML += next;

    }, interval);
}

showText(el, text, interval)

const myObserver = new IntersectionObserver((entries) =>{
    entries.forEach( (entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    }) 
})

const elements = document.querySelectorAll('.cards_four')

elements.forEach((element) => myObserver.observe(element))

