import Typewriter from "typewriter-effect"


const Home = () => {

    <div className = "typeScroll">
        
    </div>
    const typeEffect = <Typewriter options={{
        strings: ['Game Dev', 'Coder','Developer', 'Problem Solver', 'Programmer', 'Free Thinker', 'ML/AI Enthusiast'],
        autoStart: true,
        loop: true, 
        cursor: '_'
    }} />

    return (  
        <div className="home">
            <h1>Noah Gaffney</h1>
            <p> I am a <span className = "typeScroll"> {typeEffect} </span> </p>
            
            

        </div>
    );
}
 
export default Home;