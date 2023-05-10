//Luis Chavez Delgado
import React from "react";
import "../csscomponents/Presentation.css";
import person1 from "../imgs/image-colton.jpg"
import person2 from "../imgs/image-irene.jpg"
import person3 from "../imgs/image-anne.jpg"
import estrellas from "../imgs/5estrellas.png"

//Exportamos la funcion Login
export function Presentation() {

    //Retorna las acciones de la funcion Login
    return (
        <div className="backgroundwebpage">
            <div className="presentationwebpage">
                <div class="container1">
                    <div class="row align-items-start">
                        <div class="col container1">
                            <h1 className="text1">
                                10,000+ of our user love products.
                            </h1>
                            <p class="text2">
                                We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.
                            </p>
                        </div>
                        <div class="col">
                            <div class="row align-items-start">
                                <div class="squarestar1 rounded border-2">
                                    <img src={estrellas}></img>Rated 5 Stars in Reviews
                                </div>
                                <p></p>
                                <div class="squarestar2 rounded border-2">
                                    <img src={estrellas}></img>Rated 5 Stars in Report Guru
                                </div>
                                <div class="squarestar3  rounded border-2">
                                    <img src={estrellas}></img>Rated 5 Stars in BestTexh
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="container">
                    <div class="row align-items-center">
                        <div class="col">
                            
                        </div>
                    </div>
                </div>


                <p></p>

                <div class="containerperson1 shadow rounded border-2">
                    <div class="container">
                        <div class="row align-items-start">
                            <div class="col">
                                <img src={person1}></img>
                            </div>
                            <div class="col">
                                <h5 className="information1">Colton Smith</h5>
                                <h5 className="information2">Verified Buyer</h5>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-start">
                        <p class="text-justify" className="text3">
                            -We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! "
                        </p>
                        <div class="col-3">
                        </div>
                    </div>
                </div>

                <p></p>
                <div class="containerperson2 shadow rounded border-2">
                    <div class="container">
                        <div class="row align-items-start">
                            <div class="col">
                                <img src={person2}></img>
                            </div>
                            <div class="col">
                                <h5 className="information1">Irene Roberts</h5>
                                <h5 className="information2">Verified Buyer</h5>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <p class="text-justify" className="text4">
                            -Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. "
                        </p>
                        <div class="col-3">
                        </div>

                    </div>
                </div>
                <p></p>
                <div class="containerperson3 shadow rounded border-2">
                    <div class="container">
                        <div class="row align-items-start">
                            <div class="col">
                                <img src={person3}></img>
                            </div>
                            <div class="col">
                                <h5 className="information1">Anne Wallace</h5>
                                <h5 className="information2">Verified Buyer</h5>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-end">
                        <p class="text-justify" className="text4">
                            -Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! "
                        </p>
                        <div class="col-3">

                        </div>
                    </div>
                </div>

            </div>

            <p></p>
        </div>
    );
}

