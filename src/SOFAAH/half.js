import Img from "../SOFAAH/Man.jpeg"


function Half(){
    return(
        <>
        <div className="container">
            <div className="text">
            <button>Front-End Developer</button>
                <h1>Talk Is Cheap.</h1>
                <h2>Show Me The Code!</h2>
                <p>i design and code beatiful simple things , and i love what i do.</p>


            </div>
            <div className="photo">
                <img src={Img} alt="" />
            </div>
        </div>
        </>
    )
} 
export default Half;