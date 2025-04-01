import './App.module.css'
import { Btn } from './components/btn'
import {Menu} from './components/menu'


function App() {
  return(
    <>
    <Menu />
      <nav>
        <p><a href="#s1">Primeiro</a></p>
        <p><a href="#s2">Segundo</a></p>
        <p><a href="#s3">Terceiro</a></p>
      </nav>
      <main>
        <section id='s1'>
          primeiro
          <Btn text='voltar' func="#s1"/>
          </section>
        <section id='s2'>
          segundo
          <Btn text='voltar' func="#s2"/>
          </section>
        <section id='s3'>
          terceira
          <Btn text='voltar' func="#s3"/>
          </section>
      </main>
    </>
  )
}


export default App


