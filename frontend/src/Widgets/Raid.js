import axios from "axios";

export default function Raid() 
{

    const getRaid = async() => {
        //Initialisation URL API
        const url_raid = "https://pokemon-go1.p.rapidapi.com/raid_exclusive_pokemon"
       
        let result_url = null;
        const{Raid} = this.state;
    
    
        try{
                result_url= await axios(url_raid, {
                headers: {
                    'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com',
                    'x-rapidapi-key': 'bc4edf657cmsh2cbf34710c41280p11e9d8jsn5ba7414043d2'
                        }
                                           })

              

                console.log(result_url) } catch(e) {
                console.log(e)
                    }
                    
                //Set score match 
                this.setState({match1_homeTeam: result_url.data.id[144]})
                
                   }

    return(
        <div>
            {getRaid}
        </div>
    );
}