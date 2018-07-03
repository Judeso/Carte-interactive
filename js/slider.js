function Slider() {



    // Initialise l'objet
    this.init = function () {

        this.i = 0;
        this.imgArray = [];
        this.myImg;


        console.log(Array.isArray(this.imgArray));

        var imageUn = new Image();
        imageUn.src = 'welcome.jpg';
        this.imgArray.push(imageUn);

        var imageDeux = new Image();
        imageDeux.src = 'bike.png';
        this.imgArray.push(imageDeux);

        var imageTrois = new Image();
        imageTrois.src = 'vélo.jpg';
        this.imgArray.push(imageTrois);

        this.insert();
        this.total = this.imgArray.length;
        console.log(this.total);
        console.log(imageDeux.src)

        
    }

    // Insertion DOM
    this.insert = function () {

        var sliderElt = document.createElement("div");
        sliderElt.id = "slider";

        this.myImg = document.createElement("IMG");
        this.myImg.src = this.imgArray[this.i].src;

        document.body.appendChild(sliderElt);
        document.getElementById("slider").appendChild(this.myImg);
        
        // Gestion du diaporama avec touche 
        window.onkeydown = function (e) {
            var key = e.keyCode;

            if ((key === 37) && (this.i > 0)) {

                this.myImg.src = this.imgArray[this.i - 1].src;
            
                console.log(this.i);


            } else if ((key === 39) && (this.i <= this.total)) {

                this.myImg.src = this.imgArray[this.i++].src;
                
                console.log(this.i);



            }
        }


    };


};
