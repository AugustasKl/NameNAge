
import './Error.css'

const Error =(props)=>{
    console.log(props.age);
    console.log(props.name);

    if (props.age.length === 0 || props.name.length === 0) {
        return(  
        <div className='error-message'>
                <div className='error-message__header'>
                    <h2>Invalid input</h2>
                </div> 
                <div className="error-message__text">
                    <p>Please enter a valid name and age (not empty values)</p>
                </div>
                <div className='error-message-actions'>
                    <button type='button' onClick={props.onCancel}>Okay</button>
                </div>
            </div>
        )
        

    }
     else if (props.age<0){
        return ( 
        <div className='error-message'>
                <div className='error-message__header'>
                    <h2>Invalid input</h2>
                </div> 
                <div className="error-message__text">
                    <p>Please enter a valid age (>0)</p>
                </div>
                <div className='error-message-actions'>
                    <button type='button' onClick={props.onCancel}>Okay</button>
                </div>
            </div>
        )
        
    }

   
}

export default Error