import React, { useState, useEffect  } from 'react';
import { QuoteResponse } from '../../Interfaces/API';
import  {API} from '../../Constants/Constants';
import Button from '../Button/Button';

interface props{}

const Quote: React.FC<props> = () => {

const [quote,setQuote] = useState("");
const [quoteAuthor,setQuoteAuthor] = useState("");

const QUOTES_URL = API.RANDOM_QUOTES_URL;

const getAPI = () => {

    fetch(QUOTES_URL).then((response : Response) => {
        return response.json()
    })
    .then((response : QuoteResponse)=>{
        setQuote(response.content);
        setQuoteAuthor(response.author);
    })
} 

useEffect(() => {
    getAPI()
},[])
    
return(
    <>
    <h1>{quote}</h1>
    <h3 data-testid="subheading">{quoteAuthor}</h3>
    <Button click={getAPI}/>
    </>
)
}

export default Quote;