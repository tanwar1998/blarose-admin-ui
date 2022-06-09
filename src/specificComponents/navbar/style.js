import styled from 'styled-components';

export const NavigationBarContainer = styled.div`
    display: grid;
    padding: 10px 20px;
    width: 100%;
    float: left; 
    box-sizing: border-box;
    grid-template-columns: 200px auto;
    position: sticky;
    top: 0;
    z-index: 2;
    background: #fff;

    .logo-container{
        img{
            width: calc(100% - 35px);
        }
    }

    .nav-item-container{
        text-align: right;

        .nav-item{
            display: inline-block;
            transition: all ease-in 0.3s;
            padding: 16px 10px 10px;
            color: #000;
            cursor: pointer;
            font-size: 14px;
            line-height: 40px;

            &:hover{
                color: #FA4DAC;
            }
        }
    }
`;