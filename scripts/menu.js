class Menu {
    constructor(elem) {
        this._elem = elem;
        this._btnMobile = elem.querySelector('.hamburger');
        elem.onclick = this.onClick.bind(this)
    }

    open() {
        this.btnClick()
        document.body.style.overflow = 'hidden'
    }

    close() {
        this.btnClick()
        document.body.style.overflow = ''
    }

    btnClick() {
        this._btnMobile.classList.toggle('is-active')
        this._elem.classList.toggle('is-active')
        this._btnMobile.dataset.action = (this._action === 'open') ? 'close' : 'open';
    }

    onClick(event) {
        this._action = event.target.dataset.action || event.target.parentElement.dataset.action;
        if (this._action) {
            this[this._action]();
        }
    }
}

const mobMenu = document.querySelector('.mobile-menu')

new Menu(mobMenu)