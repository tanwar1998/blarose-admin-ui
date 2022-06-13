import styled from 'styled-components';
import Back1 from '../../assets/img/back.jpg';

export const HomeContainer = styled.div`
    width: 100%;
    text-align: center;
    float: left;

    h2{
        font-size: 35px;
        color: #000;
        text-align: center;
        box-sizing: border-box;
    }
    h6{
        font-size: 15px;
        color: #888;
        text-align: center;
    }

    .landing-slider-container{
        height: calc(100vh - 95px);
        min-height: 450px;
        max-width: 100vw;
        overflow: hidden;

        .slider-img-container{
            position: relative;

            img, .img-outer{
                width: 100%;
                height: calc(100vh - 95px);
                float: left;
                min-height: 450px;
                max-width: 100vw;
                overflow: hidden;
            }
            .img-outer{
                position: absolute;
                top: 0;
                position: absolute;
                top: 0;
                background: linear-gradient(45deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));
            

                .landing-text{
                    color: #fff;
                    font-weight: bold;
                    text-align: center;
                    font-size: 35px;
                    position: absolute;
                    top: calc(50% - 10px);
                    text-shadow: 2px 2px 20px black;
                }
            }
        }
    }
    
    .container-main{
        margin: 50px auto;
        display: inline-block;
        float: none;
        max-width: 1240px;
        padding: 0 20px;
        box-sizing: border-box;
    }

    .creative-contempolary-container{

        .text-container{
            font-size: 16px;
            color: #323232;
            line-height: 30px;
            text-align: justify;
        }
    }

    .success-story-container{

        .success-story-img-container{
            img{
                width: 300px;
            }
        }
        .success-story-card-container{
            text-align: center;
            margin: 50px 0 20px;
            display: inline-table;
            justify-content: center;


            .success-story-card{
                display: inline-block;
                width: 200px;
                margin: 10px 10px;
                border: 1px solid #ebc8cf;
                border-radius: 10px;
                padding: 15px;
                float: none;

                .card-main{
                    background: rgba(255, 192, 203, 0.2);
                    padding: 20px;
                    box-sizing: border-box;
                    border-radius: 10px;
                    position: relative;
                    min-height: 151px;

                    .card-static-back{
                        width: 50%;
                        background: pink;
                        height: 100%;
                    }

                    .card-number{
                        font-size: 50px;
                        color: #f73658;
                        font-weight: bold;
                        text-align: left;
                        
                    }
                    .card-text{
                        color: #1c1c1c;
                        text-align: left;
                    }
                }
            }

        }
    }

    .premier-property-container{
        position: relative;
        overflow: hidden;

        .premier-back-container{
            background: #ffe1f2;
            position: absolute; 
            border-radius: 10px 10px 0 0;
            bottom: 0;
            height: calc(100% - 200px);
            left: 8px;
            width: calc(100% - 20px);    
            background: linear-gradient(45deg, #fa4dac, #d34090);

        }
        .premier-card-container{
            margin: 50px 0;
            display: flex;
            justify-content: center;

            .card-main{
                background: #fbf7f8;
                padding: 20px 15px;
                display: inline-block;
                width: 250px;
                border-radius: 5px;
                margin: 10px;
                box-sizing: border-box;
                box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0,  0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
                transition: all ease-in 0.3s;

                .location-icon{
                    color: #ff4a69;
                    font-size: 20px;
                    margin-right: 5px;
                }

                .city-name{
                    color: #000;
                    font-weight: bold;
                    font-size: 24px;
                    margin-bottom: 10px;

                }
                .local-address{
                    color: #444;
                    text-align: left;
                    font-size: 14px;
                    padding: 5px 0;
                    font-weight: 300;
                }
                &:hover{
                    margin-top: 0px;
                    margin-bottom: 20px;
                }
            }
        }
    }
    .service-container-main{
        .service-card-container{    
            margin: 60px 0;
            display: flex;
            justify-content: center;


            .service-card-main{
                width: 280px;
                display: inline-block;
                float: none;
                background: #fbf7f8;
                padding: 20px 15px;
                border-radius: 5px;
                border-bottom: 2px solid #f5143b;
                margin: 10px;
                transition: all ease-in 0.3s;

                &:hover{
                    margin: 0 10px 20px;
                }
            

                .heading-main{
                    font-size: 22px;
                    font-weight: bold;
                    margin: 20px 0 30px;
                }
                .info-list{
                    text-align: left;
                    margin: 5px;
                    font-weight: 300;
                    font-size: 14px;
                }
                .service-icon{
                    color: #ff4a69;
                    margin-right: 5px;
                }
            }
        }
    }

    .register-container-main{
        background: url(${Back1});  
        background-size: cover;
        padding: 10px;
        min-height: 400px;
        box-sizing: border-box;


        .register-content-main{
            display: grid;
            grid-template-columns: auto auto;
            margin: 0 auto;
            grid-gap: 45px;

            .left-side-container{
                padding: 20px 0;
                box-sizing: border-box;

                .heading{
                    font-weight: bold;
                    font-size: 20px; 
                    margin: 10px 0 40px;
                }

                .two-element-container{
                    display: grid;
                    grid-template-columns: auto auto;
                    grid-gap: 30px;
                    margin-bottom: 20px;
                }
                .button-main{    margin: 40px 0 0;
                }
            }

            .right-side-container{
                padding: 30px 20px;
                box-sizing: border-box;

                img{
                    width: 100%;
                }
            }
        }

    }

    .work-done-container-main{
        position: relative;
        color: #ffffff;
        text-align: center;
        background-color: #FA4DAC;

            .bottom-block{
                width: 50px;
                height: 50px;
                background: #fa4dac;
                position: absolute;
                bottom: -25px;
                transform: rotate(45deg);
                left: calc(50% - 25px);
                z-index: 1;
            
            }

        .work-content-main{
            display: grid;
            grid-template-columns: auto auto auto;
            grid-gap: 20px;
            margin-bottom: 80px;


            h2{
                color: #fff;
                margin-bottom: 10px;
                font-size: 45px;

            }
        }
        .work-under-line-container{

            .work-under-line{
                width: 50px;
                height: 4px;
                background: #fff;
                display: inline-block;
                margin: 0 0 15px;
            }
        }
    }

    @media only screen and (max-width: 992px){   

        .service-container-main .service-card-container{
            display: block;
            text-align: center;
        }
    }

    @media only screen and (max-width: 768px){ 
        
        .premier-property-container .premier-card-container{
            display: block;

            .card-main{
                display: inline-grid;
            }
        }
        .register-container-main{
            padding: 10px 0;

            .register-content-main{
                display: block;

                .right-side-container{
                    display: none;
                }
                .left-side-container .two-element-container{
                    grid-gap: 15px;

                }
            }
        }
    }
`;