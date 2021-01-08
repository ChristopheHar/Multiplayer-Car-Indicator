class Form
{
    constructor()
    {
        this.title=createElement("h1");
        this.input=createInput("name");
        this.button=createButton("play");
        this.greeting=createElement("h2");
        this.reset=createButton("reset");

    }
    display()
    { 
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2-100,100);
        this.input.position(displayWidth/2-100,displayHeight/2-20);
        this.button.position(displayWidth/2-100,displayHeight/2+20);
        this.reset.position(200,100);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello "+ player.name);
            this.greeting.position(displayWidth/2-100,200);
        })
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        })



        
    }
    
    hide()
    {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    
}