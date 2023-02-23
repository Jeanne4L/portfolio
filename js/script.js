let menu = document.querySelector('.menu');
let menuItems = document.querySelectorAll('.menu-item')
let openMenuBtn = document.querySelector('.menu-icon');
let closeMenuBtn = document.querySelector('.close-cross');
let overlay = document.querySelector('.overlay');
let anchor = document.querySelector('.anchor-up');

// display and hide menu
if(openMenuBtn) {
    let isOpenedMenu = false;

    menu.classList.add('hidden');

    displayMenu(isOpenedMenu);
};

function displayMenu(isOpenedMenu) {
    openMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        openMenuBtn.classList.add('hidden');
        closeMenuBtn.classList.remove('hidden');
        overlay.classList.remove('hidden');
        menu.classList.remove('hidden');
        menu.setAttribute('aria-expanded', 'true');

        // timer to display animation
        setTimeout(()=>{
            menu.classList.add('display')
        },150);

        isOpenedMenu = true;

        hideMenu(isOpenedMenu);
    })
};

function hideMenu(isOpenedMenu) {
    if(isOpenedMenu) {
        // keep focus into menu
        for(let i=0; i<menuItems.length; i++) {
            menuItems[menuItems.length-1].onblur = () => {
                closeMenuBtn.focus();
            }
        }
        // close menu with btn, click off the menu or escape key
        closeMenuBtn.addEventListener('click', () => {
            changeAttrCloseMenu();
        })
        document.addEventListener('click', ()=> {
            changeAttrCloseMenu();
        })
        document.onkeydown = function(e) {
            if (e.key == 'Escape') {
                changeAttrCloseMenu();
            }
        };
    }
};
function changeAttrCloseMenu() {
    closeMenuBtn.classList.add('hidden');
    openMenuBtn.classList.remove('hidden');
    overlay.classList.add('hidden');
    menu.classList.remove('display');
    menu.setAttribute('aria-expanded', 'false');

    // timer to display animation
    setTimeout(()=>{
        menu.classList.add('hidden')
    },405);

    isOpenedMenu = false;
}

// display anchor with scroll
window.addEventListener('scroll', () => {
    if(window.scrollY == 0) {
        anchor.classList.add('hidden');
    } else {
        anchor.classList.remove('hidden');
    }
})

// check inputs value
if(document.querySelector('form')) {
    checkInputValue();
};

function checkInputValue() {
    let nameInput = document.querySelector('#name');
    let emailInput = document.querySelector('#email');
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    nameInput.addEventListener('change', (e)=> {
        if(/[^A-Za-zéêèÉÊÈ\s]/.test(e.target.value)){
            document.querySelector('#name__error').classList.remove('hidden');
            nameInput.classList.add('error');
        } else {
            document.querySelector('#name__error').classList.add('hidden');
            nameInput.classList.remove('error');
        };
    });

    emailInput.addEventListener('change', (e)=> {
        if(emailRegex.test(e.target.value)){
            document.querySelector('#email__error').classList.add('hidden');
            emailInput.classList.remove('error');
        } else {
            document.querySelector('#email__error').classList.remove('hidden');
            emailInput.classList.add('error');
        };
    });
};

// get id of clicked job span and display assigned div
let jobDetails = document.querySelectorAll('.job');

for(let i=0; i<jobDetails.length; i++) {
    let isDisplayedDiv = false;

    jobDetails[i].onclick = function(e) {
        e.stopPropagation();

        let elementId = this.getAttribute('id');
        let div = document.querySelector('.'+ elementId);
        let closeModalBtn = div.querySelector('.close-cross');

        displayJobDivDetails(isDisplayedDiv, div, closeModalBtn);
    };
};

function displayJobDivDetails(isDisplayedDiv, div, closeModalBtn) {
    overlay.classList.remove('hidden');
    div.classList.remove('hidden');
    closeModalBtn.focus();
    isDisplayedDiv = true;

    hideJobDivDetails(isDisplayedDiv, div, closeModalBtn);
};

function hideJobDivDetails(isDisplayedDiv, div, closeModalBtn) {
    // keep focus into div
    if(isDisplayedDiv) {
        closeModalBtn.onblur = () => {
            closeModalBtn.focus();
        }
        // close div with escape key, button or click off the div
        document.onkeydown = function(e) {
            if (e.key == 'Escape') {
                changeAttrCloseModal(div);
            }
        };
        document.body.addEventListener('click', ()=> {
            changeAttrCloseModal(div);
        });
        closeModalBtn.addEventListener('click', ()=> {
            changeAttrCloseModal(div);
        })
    };
};
function changeAttrCloseModal(div) {
    overlay.classList.add('hidden');
    div.classList.add('hidden');
    isDisplayedDiv = false;
};