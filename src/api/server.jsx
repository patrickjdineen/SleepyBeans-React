const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvd25lciI6IjA0OGYyYzIyYzBmMTgxMDM0NmI1YTQzMjg3MjJjM2JjNTJiMmVjM2FjNGQzNDc0MSIsImFjY2Vzc190aW1lIjoiXCIyMDIxLTAyLTIyIDAwOjU4OjMzLjgyMDQxOVwiIn0.ofcPEQVCSWWy_2WbC05KJJj4AbnuzGbUE1rOd9AgzEM"


//Create api route methods of CREATE, UPDATE, GET, DELETE to backend created in flask
export const serverCalls = {
    get: async () =>{
        const response = await fetch(`/signin`,{
            method:'GET',
            headers:{
                'Content-type':'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error ('We could not get your heroes')
        } 
        return await response.json()
    },
    create: async (data={}) =>{
        const response = await fetch(`https://marvel-api-pjd.herokuapp.com/hero`,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error ('We could not create your new hero')
        } 
        return await response.json()
    },
    delete: async (id) =>{
        const response = await fetch(`https://marvel-api-pjd.herokuapp.com/hero/${id}`,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error ('We could not delete your hero')
        } 
        return await response.json()
    },
    update: async(id,data={}) =>{
        console.log("check1")
        const response = await fetch(`https://marvel-api-pjd.herokuapp.com/hero/${id}`,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body:JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error ('We could not update your hero')
        } 
        return await response.json()
    },

};