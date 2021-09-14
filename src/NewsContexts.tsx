import {createContext, ReactNode, useState,useRef,useEffect} from 'react'

interface NewsProps{
    id:number;
    urlToImage:string;
    title?:string;
    author?:string;
    publishedAt:string;
    

}

interface NewsProviderProps{
    children: ReactNode
    news:NewsProps[]
    busca:string
    updateBusca(valor:string):void;
    filterArray():void;
    resultsList():void;
}

export const NewsContext = createContext<NewsProviderProps>({} as NewsProviderProps);

export const NewsProvider:React.FC = ({children}) =>{

    let [news, setNews] = useState<NewsProps[]>([])
    function resultsList(){
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4e630719d22344ef95dca3383b92cf97')
        .then(response => response.json())
        .then(data =>setNews(data.articles))
    }

    const [busca, setBusca] = useState('')
    function filterArray(){
        const lowerBusca = busca.toLowerCase()
        
        const filtro =  news.filter((notice)=>{  
            if(notice.author){
                return notice.author.toLowerCase().includes(lowerBusca) 
            }
        })
        setNews(filtro)
    }

    function updateBusca(valor:string){
        setBusca(valor)
        filterArray()
    }

    const buscaRef = useRef<string>()

    useEffect(() => {
      buscaRef.current = busca
    
    },[])

    const valorAnterior = buscaRef.current ?? busca
    console.log(busca)

    useEffect(() => {
        if(valorAnterior !== busca){
            updateBusca(busca)
        }
      
      },[busca,valorAnterior])

    
    return (
        <NewsContext.Provider value = {{updateBusca,busca,children,news,resultsList,filterArray}}>
            {children}
        </NewsContext.Provider>
    )

}