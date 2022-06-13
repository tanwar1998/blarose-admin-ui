import styled from 'styled-components';

export const NavigationBarContainer = styled.div`
    position: sticky;
    top: -1px;
    z-index: 2;
    background: #fff;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    text-align: center;

    .menu-button{
        float: right;
        font-size: 40px;
    }

`;


export const NavigationBarContent = styled.div`
    display: inline-block;
    float: none;
    max-width: 1240px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    box-sizing: border-box;    
    position: relative;


    .close-icon{
        position: absolute;
        position: absolute;
        right: 20px;
        z-index: 3;
        top: 20px;
    }

    .nav-content-main, .mobile-nav-bar{
        display: grid;
        padding: 10px 20px 8px;
        width: 100%;
        float: none;
        box-sizing: border-box;
        grid-template-columns: 200px auto;
        top: 0;
        max-width: 1240px;
        box-sizing: border-box;
    }

    .logo-container{
        img{
            max-width: 200px;
            width: calc(100% - 35px);
            float: left;
        }
    }

    .nav-item-container{
        text-align: right;

        .nav-item{
            display: inline-block;
            transition: all ease-in 0.3s;
            padding: 20px 10px 10px;
            color: #000;
            cursor: pointer;
            font-size: 14px;
            line-height: 40px;

            &:hover{
                color: #FA4DAC;
            }
        }
    }

    .mobile-block{
        display: none;
    }

    @media only screen and (max-width: 768px){ 
        .mobile-block{
            display: block;    

            .nav-item-container{
                text-align: left;
        
                .nav-item{
                    width: 100%;
                    line-height: 20px;
                }
            }
        }
        .desktop-block{
            display: none;
        }
    }

`;