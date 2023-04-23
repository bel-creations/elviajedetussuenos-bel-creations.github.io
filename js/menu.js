const hamburguer = document.querySelector('.hamburger')
const menu = document.querySelector('.menu-navegacion')

// console.log(menu);
// console.log(hamburguer);


hamburguer.addEventListener('click', () => {
    menu.classList.toggle("spread") // seleccionar las clases del menu y agregar y quitar spread que es lo que hace que el menú aparezca y desaparezca. Cada vez que clickes en el menú hamburguesa, le quitarás o le pondrás la clase
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer  ){
        menu.classList.toggle("spread")
    } // si el menú tiene la clase spread y además (&&) el elemento alque estamos dándole click (.target) es diferente al menú y a hamburguer, el menú de navegación se cierre. 
})//para que se cierre el menú de navegación cada vez que clickee en alguna parte de la pantalla