import styled from 'styled-components';
import Client from '../../assets/img/clients.jpg';

export const ClientContainer = styled.div`
    width: 100%;
    text-align: center;
    float: left;

    .client-us-container-main{

        .client-us-back-image{
            background: url(${Client});  
            background-size: cover;
            min-height: 300px;
            background-position: right;
            height: calc(100vh - 200px);
            box-sizing: border-box;

            .client-content-back{
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
        .client-us-content-main{
            text-align: center;
            padding: 20px 0;
            box-sizing: border-box;

            h3{
                color: #333;
                text-align: center;
                font-size: 22px;
                margin-bottom: 0;
            }

            .under-line-content{
                text-align: center;

                span{
                    display: inline-block;
                    width: 40px;
                    height: 6px;
                    background: #cccccc;
                    margin: 20px auto 0px;
                    border-radius: 3px;
                }
            }
            .client-content{
                display: grid;
                grid-template-columns: auto auto auto auto auto;
                grid-gap: 35px 15px;
                padding: 50px 0;

                .content-card{
                    max-width: 240px;

                    img{
                        width: 100%;
                        border-radius: 10px;
                        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0,  0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
                        transition: all ease-in 0.3s;

                        &:hover{
                            transform: scale(1.1);
                        }
                    }
                }
            }

        }

    }


    @media only screen and (max-width: 768px){
        .client-us-container-main .client-us-content-main .client-content {
            grid-template-columns: auto auto;
        }
    }
    @media only screen and (max-width: 576px){
        .client-us-container-main .client-us-back-image {
            min-height: 250px;
            height: 250px;

            .client-content-back div {
                top: calc(50% - 50px);
            }
        }
    }
`;