// nav scroll
let header = document.querySelector(".header");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

// Side Bar
const menuItems = document.querySelectorAll('.left .sidebar .menu-item');
const notificationsPopup = document.querySelector('.left .notifications-popup');
const notificationsCount = document.querySelector('#notifications .notification-count');
const homePage = document.querySelector('#home');

// messages
const messageNotifications = document.querySelector('#message-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageNotification = document.querySelector('#message-notifications .notification-count');
const messageSearch = document.querySelector('#message-search');

// Theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
/* root */
var root = document.querySelector(':root');
/* Font Size */
const fontSizes = document.querySelectorAll('.choose-size span');
/* Colors */
const colors = document.querySelectorAll('.choose-color span');
/* Background-Colors */
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');



// ============ Left Side (remove and add classes) ============
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(item => {
            item.classList.remove('active')
        })
        item.classList.add('active');
        if (item.id !== 'notifications') {
            notificationsPopup.style.display = 'none'
        } else {
            notificationsPopup.style.display = 'block';
            notificationsCount.style.display = 'none'
        }
    })
})

// ============ Messages ============

// searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    })
}

// search chat
messageSearch.addEventListener('keyup', searchMessage)

// highlight messages
messageNotifications.addEventListener('click', () => {
    message.forEach(message => {
        message.style.boxShadow = '0 0 12px var(--color-primary)'
    })
    messages.style.boxShadow = '0 0 15px var(--color-primary)';
    messageNotification.style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
        message.forEach(message => {
            message.style.boxShadow = 'none'
        })
    }, 2000);
});

// ============ Themes ============

// Theme Display
// open the the themes
theme.addEventListener('click', () => {
    themeModal.style.display = 'grid'
});

// close themes
themeModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
        theme.classList.remove('active');
        homePage.classList.add('active')
    }
});

// Change Fonts
fontSizes.forEach(size => {
    let fontSize;

    size.addEventListener('click', () => {
        fontSizes.forEach(size => {
            size.classList.remove('active');
        });
        size.classList.add('active')
        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }

        // change font-size of HTML page
        document.querySelector('html').style.fontSize = fontSize;
    });
});

// Change Colors
colors.forEach(color => {
    color.addEventListener('click', () => {
        colors.forEach(color => {
            color.classList.remove('active');
        });
        color.classList.add('active');

        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }

        root.style.setProperty('--primary-color-hue', primaryHue);
    });
});

// Change The Background
let lightCorlor;
let whiteColor;
let darkColor;

const changeBg = () => {
    root.style.setProperty('--light-color-lightness', lightCorlor);
    root.style.setProperty('--white-color-lightness', whiteColor);
    root.style.setProperty('--dark-color-lightness', darkColor);
}

bg1.addEventListener('click', () => {
    darkColor = '17%';
    whiteColor = '100%';
    lightCorlor = '95%';

    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    changeBg()
});

bg2.addEventListener('click', () => {
    darkColor = '95%';
    whiteColor = '20%';
    lightCorlor = '15%';

    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    changeBg();
});

bg2.addEventListener('click', () => {
    darkColor = '95%';
    whiteColor = '20%';
    lightCorlor = '15%';

    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    changeBg();
});

bg3.addEventListener('click', () => {
    darkColor = '95%';
    whiteColor = '10%';
    lightCorlor = '0%';

    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    changeBg()
})