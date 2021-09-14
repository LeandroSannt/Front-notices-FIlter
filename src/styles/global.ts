import {createGlobalStyle} from 'styled-components'

export const Globalstyle = createGlobalStyle`


:root{
    --blue:#3688D3;
    --background:#E5E5E5;
}

*{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    

    html{
        @media(max-width:1080px){
            font-size:93.75%;
        }
        @media(max-width:720px){
            font-size:87.5%;
        }
    }


body{
    background: var(--background);
    -webkit-font-smoothing:antialiased;

}

body,input,textarea,button{
    font-family:'Nunito',sans-serif;
    font-weight:400;
}

h1 , h2, h3, h4,h5,h6{
    font-weight:600;
}

`