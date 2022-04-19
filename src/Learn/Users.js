import {useParams} from 'react-router-dom'
function User(){
    let params = useParams();
    console.log(params);
    return (
        <>
            <p>User {params.id}</p>
            <p>User {params.name}</p>
            <p>User {params.age}</p>
            <p>User {params.educated}</p>
        </>
    )
}
export default User;