import { Link, useLocation } from "react-router-dom"
import Foro from "../foro/Foro";
import AllOpinions from "../allOpinions/AllOpinions";

const WineDetails = ()=>{

    const {state:wine} = useLocation()
    return (<>
    <Link to={'/'}>
        <button>back</button>

    </Link>
    <div>
    <p>{wine.name}</p>
    <img src={wine.ruteImg} alt="" />
    <p>{wine.countrie}</p>
    <p>{wine.grape}</p>
    <p>{wine.color}</p>
    <p>{wine.description}</p>
    </div>
    <Foro wine={wine}/>
    <AllOpinions wine={wine} ></AllOpinions>
    </>
    )
}
export default WineDetails