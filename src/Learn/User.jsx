const User = (properties) => {
    return (
            <tr>
                <td>{properties.username}</td>
                <td>{properties.useremail}</td>
                <td>{properties.userage}</td>
                <td>{properties.usergender}</td>
            </tr>
    );
}
export default User;