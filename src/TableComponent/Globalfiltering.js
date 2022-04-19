import React,{useState} from 'react';
import {useAsyncDebounce} from 'react-table'

const Globalfiltering = ({filter,setFilter}) => {
    const [value,setValue] = useState(filter);
    const onChnage = useAsyncDebounce((value)=>{
        setFilter(value || undefined)
    },1000);
    return (
        <div>
            Search : {' '}
            <input type="text" value={ value || ''} onChange={(e)=>{
                setValue(e.target.value)
                onChnage(e.target.value)
            }} />
        </div>
    );
}

export default Globalfiltering;