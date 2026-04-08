
function UserProfile({anyData}){
    console.log(anyData)
    return (
        <div>
            <h1>Name:{anyData.name}</h1>
            <h1>age:{anyData.age}</h1>
            <h1>Email:{anyData.email}</h1>
        </div>
    )
}
export default UserProfile