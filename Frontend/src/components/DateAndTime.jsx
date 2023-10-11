import React,{useState,useEffect} from 'react'


function DateAndTime() {

    const [TimeUpdate,setTimeUpdate] = useState(0)
    useEffect(() => {
        setInterval(() => {
            setTimeUpdate((TimeUpdate) => TimeUpdate + 1);
          }, );
      
    }, [])
    

    
    const date = new Date()
    const today =date.getMonth() + 1

    const showdate = date.getFullYear() + ':' + today + ":" + date.getDate();
    const showTime = date.getHours()    + ':' + date.getMinutes()   + ":" + date.getSeconds();
  
    return (
        <div className="flex flex-col justify-start">
            <h2  align="left" className='text-lg text-blue font-medium'> {showTime}</h2>
            <h2 align="left"> {showdate}</h2>
        </div>
    );
}

export default DateAndTime