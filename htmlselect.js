function HtmlElement(){
    this.click = function(){
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function (){
    console.log('focused');
}

function HtmlSelectElement(array = []){
    HtmlElement.call(this);
    this.items = array;
    this.addItem = function(item){
        this.items.push(item);
    };
    this.removeItem = function(item){
        this.items.splice(this.items.indexOf(item), 1);
    }
}

HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
h = new HtmlSelectElement([1, 2, 3, 4, 5]);