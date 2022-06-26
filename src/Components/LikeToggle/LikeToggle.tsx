import React,{useState} from 'react';
import  { LIKE_TOGGLE } from '../../Constants/Constants';

const LikeToggle = () => {
    const [isLike, setLike] = useState(true);

    const likeToggleHandler = () => {
        setLike(!isLike)
        
    } 
    return(
        <button 
            onClick={() => likeToggleHandler() }>
                { isLike ? LIKE_TOGGLE.LIKE : LIKE_TOGGLE.UNLIKE }
        </button>
    )
}
export default LikeToggle;