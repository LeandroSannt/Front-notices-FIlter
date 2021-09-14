import {Container,Content,FormContainer} from './styles'
import {NewsContext} from '../../NewsContexts'
import {useContext} from 'react'
import loupImg from '../../assets/loupe.png'

export function Header(){

    const {updateBusca,busca} = useContext(NewsContext)

    return(
        <Container>
            <Content>
                <h1>Front-<strong>Notices</strong></h1>
                <FormContainer>
                    <span>
                        <img src={loupImg} alt="" />
                    </span>
                    <input 
                    type="text" 
                    placeholder="Procure por uma noticia"
                    value={busca}
                    onChange={(e) => updateBusca(e.target.value)} />
                </FormContainer>  
            </Content>
              
        </Container>
    )
}