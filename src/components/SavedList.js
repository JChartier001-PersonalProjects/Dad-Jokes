import React from "react";


const SavedList = (props) => {


    return(
        <div>
            {props.saved && props.saved.length ? 
            props.saved.map(saved =>{
                return(
                <div key={saved.id}>
                    <div>{saved.joke}
                        </div>
                    </div>
            )}): null}
        </div>
    )
}

export default SavedList;