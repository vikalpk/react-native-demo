import React, {useEffect,useState} from 'react'
import yelp from '../api/zomato'


export default () => {

    const [results, setResults] = useState([]);
    const [errMessage, setErrMessage] = useState('')

    //https://developers.zomato.com/api/v2.1/search?entity_id=4&entity_type=city&q=whitefield&count=10
    const searchApi = async (pTerm) => {

        try{
            const resposne = await yelp.get('/search',{
                params : {
                    //count:10,
                    entity_id :pTerm,
                    entity_type :'city',
                    //q: 'whitefield' 
                }
            })
            setResults(resposne.data.restaurants)
        }catch(err){
            console.log(err);
            setErrMessage('Someting went Wrong')
        }
        
    };
    useEffect(()=>{
         searchApi('4')
     },[])

     return [searchApi, results, errMessage]
}