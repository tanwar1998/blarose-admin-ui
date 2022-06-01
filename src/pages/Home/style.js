import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 100%;
    float: left;

    .landing-slider-container{

        .slider-img-container{
            position: relative;

            img, .img-outer{
                width: 100%;
                height: calc(100vh - 95px);
                float: left;
                min-height: 450px;
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


`;