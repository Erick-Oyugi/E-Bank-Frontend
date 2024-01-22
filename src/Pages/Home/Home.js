import Content from "../../Components/Content/Content"
import Header from "../../Components/Header/Header"
import HeroBack from './background.png'

const styledSection = {

  background:` url(${HeroBack})`,

} 


function Home(){
    return(

    <section style={styledSection} class="section-1">
            <Header/>
            <Content/>
    </section>


    )
}


export default Home