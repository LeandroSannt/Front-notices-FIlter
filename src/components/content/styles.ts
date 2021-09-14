import styled from 'styled-components'

export const Container = styled.main`


width:100%;
max-width:1280px;
margin: auto;
padding:2rem;

button{
        padding:0 1.5rem;
        background: var(--background);
        border:0;
        margin:0 0 0.9rem 2rem;
        cursor:pointer;
        transition: filter .2s;
        border-radius:5px;
        padding:.4rem;

        &:hover{
            filter:brightness(0.9)
        }

        span{
            color:#969CB2;
            
        }

        img{
            width:8px;
            height:8px;
            margin-left:10px;
        }
    }   

    .card{
        display:grid;
        grid-template-columns:1fr 40rem 1fr;
        gap:40px;
        background-color:white;
        padding:1.2rem 2rem ;
        border-radius:5px;

        margin-bottom:1.2rem;

        img{
            width:15.25rem;
            height:8rem;
            border-radius:5px;
        }  
        
        div{
            width:100%;
            max-width:30rem;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:flex-start;

            h4{
                font-size:1.25rem;
                color:#363F5F;
                margin-bottom:15px;
            }
            
            p{
                color:rgba(54, 63, 95, 0,79);
                background: rgba(150, 156, 178, 0.4);
                border-radius: 2px;
                padding:.2rem .5rem;
            }


        }

        span{
            display:flex;
            justify-content:center;
            align-items:center;
            color:rgba(150, 156, 178, 1);
            font-weight:400;
        }


    }


`