import './Home.css'
import Printer from '../components/printer.gif'
import Rule from '../components/fight-club-rules.gif'
import AliGif from '../components/ALI.gif'


const Home = () => {
 

    return ( 
        <div className="Page">
            <div className="header">
                <h1>FightHub 🧼</h1>
                <h2> Are you interested in the world of sports? Specifically combat? Then look no further! FightHub is your online sancturary. But, you must remember the golden rule...</h2>
                <img className="gif1" src={Rule} alt="" width={800} height={500}/>
                <h2> Feel free to discuss a range of topics concerning the world of combat sports! Anything from MMA to boxing, Muy Thai, and etc.</h2>
                <img className="gif1" src={AliGif} alt="" width={800} height={500}/>
                <h2> Feel free to explore the community's punch-tastic threads!</h2>
                <img className="gif1" src={Printer} alt="" width={800} height={500}/>
            </div>
            
            
        </div>      
)
}

export default Home;