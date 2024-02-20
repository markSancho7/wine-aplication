import { useEffect, useState } from "react";
import { URLS } from "../../constants/urls";
import { getData } from "../../utils/api";

const AllOpinions = (wine) =>{
const [opinions, setOpinions]= useState([])

useEffect(() => {
    chargeOpinions(setOpinions);
}, []);


const wineOpinion = filterWineOpinion(opinions, wine)

return(<>
    {wineOpinion.map(opinion=>(
        <div key={opinion._id}>
        <p>{opinion.userName}</p>
        <p >{opinion.opinion}</p>
        </div>
    ))}
</>)

}
const filterWineOpinion =(opinions, wine)=>{
    return opinions.filter(opinion=> opinion.wineId === wine.wine._id)
 }
const chargeOpinions = async setWines => {
	const data = await getData(URLS.API_OPINIONS);
	setWines(data);
};
export default AllOpinions