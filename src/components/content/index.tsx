import { useEffect, useMemo, useState ,useContext} from 'react'
import DownArrowImg from '../../assets/down-arrow.png'
import { NewsContext } from '../../NewsContexts'
import {Container} from './styles'
import { Pagination } from '@material-ui/lab';



interface NewsProps{
    id:number
    urlToImage:string
    title?:string
    author?:string
    publishedAt:string
}


export function Content(){
    
  const {news,resultsList,busca} = useContext(NewsContext)

  useEffect(() =>{
      
      resultsList()
  },[])



    return (
        <Container>
            <button>
                <span>News</span>
                <img src={DownArrowImg} alt="Seta para baixo" />
            </button>


            {news.map(notice =>(
                <div className="card">
                    <img key = {notice.id} src={notice.urlToImage} alt="" />
                    <div>
                        <h4>{notice?.title} </h4>
                        <p>{notice?.author}</p>
                    </div>
                    <span>
                        {new Intl.DateTimeFormat('pt-BR').format(new Date(notice.publishedAt))}
                    </span>
                </div>
            ))}
            <Pagination count={11} defaultPage={6} boundaryCount={2} />

        </Container>
    )
}