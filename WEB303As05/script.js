/*
    Assignment 5
    {Yashvi Brijmohan Raja}
*/

$(document).ready(function(){
    
    class ContentCard {
        
        constructor(id, title, description, catType) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.catType = catType;
        }
        
        updateContent(title, description, catType) {
            if(title !== null) {
                this.title = title;
            }
            if(description !== null) {
                this.description = description;
            }
            if(catType !== null) {
                this.catType = catType;
            }
        }
        
        toString() {
            return `<div id="content-${this.id}" style="border: 1px solid red; margin: 5px; padding-left: 10px;">
            <h4>${this.title}</h4>
            <p>${this.description}</p>
            <div>${this.catType}</div>`;
            
        }
    }
    
    let myCard = new Array();
    console.log(myCard);
    
    myCard[0]= new ContentCard(0,"Aero","As a brilliant Chinese architect and rising young elite, Lei Ling wants to build a better, balanced and more beautiful Shanghai.","Secret");
    
    myCard[1]= new ContentCard(1,"3D  Man","The 3-D Man was a 1950's hero who came about through the unique merger of two brothers, Hal and Chuck Chandler.","Secret");
    
    myCard[2]= new ContentCard(2,"Spider man","In an alternate reality, Miles Morales follows in the footsteps of the slain Peter Parker to become the masked Super Hero known as Spider-Man.","Comics");
    
    myCard[3]= new ContentCard(3,"Abyss","Sealed in a coffin-like prison, Abyss was taken to the edge of the universe to a place called Knowhere to end his reign of terror once and for all.","Secret");
    
    myCard[4]= new ContentCard(4,"Ben Parker","Ben Parker was a boy around the time of World War II. He was in love with May Parker, who was in love with a criminal. ","No dual identity");
    
    $('#content-list').append(myCard[0]+"<br>");
    $('#content-list').append(myCard[1]+"<br>");
    $('#content-list').append(myCard[2]+"<br>");
    $('#content-list').append(myCard[3]+"<br>");
    $('#content-list').append(myCard[4]+"<br>");
});