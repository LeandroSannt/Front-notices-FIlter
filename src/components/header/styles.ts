import styled from 'styled-components'

export const Container = styled.header`

background:var(--blue);

`

export const Content = styled.div`

    width:100%;
    max-width:1280px;
    height:15rem;
    margin:0 auto;
    padding:0 2rem 0 2rem;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:flex-start;

    

    h1{
        font-weight:600;
        background-color:#3688D3;
        filter:brightness(0.9);
        padding:1.5rem;
        border-radius:10px;

        strong{
            color:white;
        }
    }


`

export const FormContainer = styled.form`
    display:flex;
    width:100%;
    max-width:1280px;
    margin:-4rem auto -4rem auto;

    span {
        img{
            width:20px;
            height:20px;
        }
    }
    
    input{
        width:100%;
        padding:1.2rem;
        border-radius:0 5px 5px 0 ;
        border:none;
        outline:none;

        &::placeholder{
            font-size:rem;
        }
    }

    span{

        padding:1.2rem;
        border-radius:5px 0 0 5px;
        border:none;
        background-color:white;

    }

    

`