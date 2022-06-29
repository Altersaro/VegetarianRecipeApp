import styled from 'styled-components';


export const FormStyle = styled.form`
    margin: 2rem 2rem;
    display:flex;
    justify-content:center;

    div{
       width:80%;
       position:relative;

      }
    input{
        border:none;
        background: rgb(164,238,195);
        background: linear-gradient(304deg, rgba(164,238,195,1) 0%, rgba(222,78,78,1) 100%);
        color:white;
        padding: 1rem 3rem;
        outline: none;
        border-radius: 2rem;
        width:100%;
        font-size: 16px;
        text-transform: capitalize;

    }
    svg{
        position:absolute;
        left: 50%;
        right:50%;
        transform: translate(-50%, -50%);
        color:white;
    }

    button{
        width: 50px;
        height: 52px;
        position:absolute;
        border-radius:2rem;
        border: none;
        background-color: transparent;
    }

`