import {Globalstyle} from './styles/global'
import {Header} from './components/header'
import {Content} from './components/content'
import {NewsProvider} from './NewsContexts'
export function App() {
  return (
    <NewsProvider>
      <Header/>
      <Content/>
      <Globalstyle/>
    </NewsProvider>
  );
}

