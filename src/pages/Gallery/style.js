import styled from 'styled-components';
import Gallery from '../../assets/img/gallery.jpg';

export const GalleryContainer = styled.div`
    width: 100%;
    text-align: center;
    float: left;

    .gallery-us-container-main{

        .gallery-us-back-image{
            background: url(${Gallery});  
            background-size: cover;
            min-height: 300px;
            background-position: right;
            height: calc(100vh - 200px);
            box-sizing: border-box;

            .gallery-content-back{
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
        .gallery-us-content-main{
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
            .gallery-content{
                display: grid;
                grid-template-columns: auto auto auto auto;
                grid-gap: 40px 25px;
                padding: 50px 0;

                .content-card{

                    img{
                        width: 100%;
                        cursor: pointer;
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
        .gallery-us-container-main .gallery-us-content-main .gallery-content {
            grid-template-columns: auto auto;
        }
    }
    @media only screen and (max-width: 576px){
        .gallery-us-container-main .gallery-us-back-image{
            min-height: 250px;
            height: 250px;

            .gallery-content-back div {
                top: calc(50% - 100px);
            }
        }
    }
`;