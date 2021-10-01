class App {
    constructor(){
        this.body = document.querySelector('body');
        this.toggle = document.getElementById('toggle');
        this.toggle.addEventListener('click',this.toggleHendle.bind(this),false);
    }
    toggleHendle(e){
        this.toggle.classList.toggle('active');
        this.body.classList.toggle('active');
    }
}

window.onload = () =>{
    new App();
}