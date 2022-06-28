import styled from 'styled-components';
import OurTeam from '../../assets/img/our-team.jpg';
import About from '../../assets/img/about.jpg';
import ContactUS from '../../assets/img/contact-us.jpg';

export const AboutContainer = styled.div`
    width: 100%;
    text-align: center;
    float: left;

    .about-us-container-main{

        .about-us-back-image{
            background: url(${About});  
            background-size: cover;
            min-height: 300px;
            background-position: right;
            height: calc(100vh - 200px);
            box-sizing: border-box;

        }
        .about-us-content-main{
            text-align: center;
            background: linear-gradient(45deg, #f2e8de, #f8efe8);
            padding: 20px 0;
            box-sizing: border-box;

            .container-main{    
                padding: 0px 170px 0px 120px;
            }

            h2{
                color: #8e6f74;
                text-align: left;
            }

            .about-us-content{
                padding: 10px 0;
                text-align: left;
                font-size: 14px;
                line-height: 24px;
                color: #333;
                box-sizing: border-box;
                
            }
        }

        .exhibition-content-main{
            text-align: left;

            h3{
                text-align: left;
                margin: 40px 0;
            }
            .exhibition-content{
                margin: 5px 0;
                font-size: 14px;
                color: #403f3f;
                line-height: 22px;
                font-weight: 300;

                .check-icon{
                    margin: 0 4px -6px 0;
                }

                span{
                    font-weight: bold;
                    margin: 0 3px;
                }
            }
        }
    }

    .our-team-container-main{

        .our-team-back-image{
            background: url(${OurTeam});  
            background-size: cover;
            min-height: 300px;
            background-position: right;
            height: calc(100vh - 200px);
            box-sizing: border-box;

        }

        h2{
            text-transform: uppercase;
            font-size: 22px;
            font-weight: 800;
            color: #3a4145;
            line-height: 35px;
        }
        h4{
            position: relative;
            text-transform: uppercase;
            font-size: 15px;
            font-weight: 800;
            color: #646d72;
            margin-bottom: 0px;
        }
        .heading-text{
            line-height: 28px;
            font-size: 15px;
            color: #3a4145;
            margin: 0px 0 10px;
        }
        .underline-row{
            span{
                display: inline-block;
                width: 40px;
                height: 6px;
                background: #cccccc;
                margin: 20px auto 0px;
                border-radius: 3px;
            }
        }

        .team-card-container{
            display: grid;
            grid-template-columns: auto auto auto auto;
            margin: 60px auto;
            grid-gap: 25px;
            grid-gap: 55px 25px;

            .card-container{
                text-align: left;
                max-width: 300px;
                line-height: 24px;
                
                img{
                    width: 100%;
                    height: 300px;
                }
                .member-name{
                    font-size: 16px;
                    font-weight: 800;
                    color: #3a4145;
                    margin: 15px 0 5px;
                }
                .member-designation{
                    font-weight: 300;
                    font-size: 14px;
                    color: #777;
                }
                a, a:hover{
                    color: #FA4DAC;
                    font-size: 14px;
                    margin: 5px 0;
                    width: 100%;
                    display: inline-block;
                }
                .member-about{
                    font-size: 13px;
                    color: #333;
                }
            }
        }

    }
    .contact-us-container-main{

        .contact-us-back-image{
            background: url(${ContactUS});  
            background-size: cover;
            min-height: 300px;
            background-position: right;
            height: calc(100vh - 200px);
            box-sizing: border-box;

            .contact-content-back{
                background: linear-gradient(45deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
                color: #fff;
                position: relative;
                height: 100%;
                font-size: 35px;
                font-weight: bold;

                div{
                    position: absolute;
                    top: calc(50% - 20px);
                    color: #fff;
                    font-size: 50px;
                    width: 100%;
                }
            }
        }

        .contact-content-main{
            display: grid;
            grid-template-columns: auto auto;
            margin: 60px auto;
            grid-gap: 25px;

            .contact-detail-content{
                text-align: left;

                h4{
                    font-size: 15px;
                    color: #777;
                }
                h3{
                    font-size: 22px;
                    color: #444;
                }
                .under-line-row{
                    margin: -20px 0 20px 0;
                    
                    span{
                        display: inline-block;
                        width: 40px;
                        height: 6px;
                        background: #cccccc;
                        margin: 20px auto 0px;
                        border-radius: 3px;
                    }
                }
                .content-row{
                    color: #333;
                    font-size: 13px;
                    margin: 6px 0;

                    .icon{
                        margin: 0 10px -3px 0;
                        font-size: 16px;
                        color: #444;
                    }
                    a{
                        color: #ef002a;
                    }
                }
                .contact-form-content{
                    padding: 25px 20px;
                    background: #ededed;
                    border-radius: 3px;
                }
            }
        }
    }


    @media only screen and (max-width: 992px){
        .our-team-container-main .team-card-container {
            grid-template-columns: auto auto;

            .card-container{
                max-width: 100%;
            }
        }
    }

    @media only screen and (max-width: 768px){

        .about-us-container-main{

            .about-us-content-main{
    
                .container-main{    
                    padding: 0px 20px;
                }
            }
        }
        .contact-us-container-main .contact-content-main{
            grid-template-columns: auto;
        }
     }

    @media only screen and (max-width: 576px){
        .our-team-container-main .team-card-container {
            grid-template-columns: auto;
        }
        .our-team-container-main .our-team-back-image{
            min-height: 250px;
            height: 250px;
        }
        .contact-us-container-main .contact-us-back-image{
            min-height: 250px;
            height: 250px;

        }
        .about-us-container-main .about-us-back-image {
            min-height: 250px;
            height: 250px;
        }
    }
    
`;