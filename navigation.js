function hamburgerMenu(buttonId, menuId) {

    var button = document.getElementById(buttonId), // het html element van de toggle knop
        menu = document.getElementById(menuId), // het html element van het menu
        isOpen = false; // het menu is standaard dicht.

    function open() {
        menu.classList.add('open'); // eerst voegen we de klassificeren het menu als 'open'
        button.classList.add('expanded'); // we klassificeren de button als 'expanded'
        isOpen = true; // en we onthouden dat het menu open is
    }

    function close() {
        menu.classList.remove('open'); // eerst verwijderen we de klassificereng 'open' weg van het menu
        button.classList.remove('expanded'); // eerst verwijderen we de klassificereng 'expanded' weg van de button
        isOpen = false;  // en we onthouden dat het menu dicht is.
    }


    function toggle() {
        isOpen ? close(): open(); // als het menu open is, sluiten we het, anders openen we het
    }


    // Nu koppelen we de functies van ons hamburger menu aan events.

    // Het eerste event waar we naar luisteren is de klik op de toggle knop
    button.addEventListener('click', function(event) {
        toggle(); // Die toggled.... tjah
    });

    // Daarnaast nog een gebruikers-vriendelijk foefje, als je buiten het menu klikt, sluit het ook.
    document.addEventListener('click', function(event) {
       if(event.target != button && isOpen) // Zolang de klik niet op de toggle knop plaats vindt, en het menu open is
           close(); // sluiten we het menu.
    });
}