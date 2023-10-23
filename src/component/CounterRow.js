import React from 'react';

function CounterRow(props) {

    const [count, setCount] = React.useState(0);

    function handleClick(){
        setCount(count + 1);

    }
    return(
       <div className="row">
            
            <button className="green-button" onClick={handleClick}>Button 1</button>
            
            <div className="counter">{count}</div>
        </div>

    );
}


export default CounterRow;