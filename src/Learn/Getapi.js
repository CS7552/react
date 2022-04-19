import React,{useEffect,useState} from 'react';
import './App.css';

function App(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        // fetch("https://jsonplaceholder.typicode.com/photos").then((result)=>{
        //     result.json().then((res)=>{
        //         // console.log(res);
        //         setData(res);
        //     })
        // })
    },[])
    return(
        <>
            <h1>Get Api</h1>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>ALBUMID</td>
                        <td>TITLE</td>
                        <td>URL</td>
                        <td>THUMBNAIL</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((i,j)=>
                        <tr key={j}>
                            <td>{i.id}</td>
                            <td>{i.albumId}</td>
                            <td>{i.title}</td>
                            <td>{i.url}</td>
                            <td><img src={i.thumbnailUrl}/></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}


export default App;

// https://jsonplaceholder.typicode.com/photos