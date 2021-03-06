// //SERVICES TABS
class TabLink {
    constructor(element) {
       this.element = element;
       this.tabData = this.element.dataset.tab;
       if(this.tabData === 'all') {
           this.content = document.querySelectorAll('.content');
       } else {
           this.content = document.querySelectorAll(`.content[data-tab = "${this.tabData}"]`);
       }

    this.content = Array.from(this.content).map((el) => {
        return new TabItem(el);
    });
    this.element.addEventListener('click', () => {
        this.select();
    });
};
        


    
    select() {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach((el) => {
            el.classList.remove('active-tab');
        });
        this.element.classList.add('active-tab');

        const content = document.querySelectorAll('.content');
        content.forEach((el) => {
            el.style.display = 'none';
        });

        this.content.forEach(content => content.select());
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    };

    select() {
        this.element.style.display = '';
    };
}

let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map((el) => {
    return new TabLink(el);
});

tabs[0].select();



