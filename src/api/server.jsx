const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiJlMWZkM2I5My1iNjRhLTQyMDctOThhMC0zYWUwZjg4MzFmZDYiLCJpc3N1ZV90aW1lIjoiXCIyMDIxLTAzLTA5IDE2OjU1OjQ0LjI0NzM5NFwiIn0.NRp4iHGxz3dMf70F3WYeB-KL3QymBTuYcP5uLSze4dk"


export const babyServerCalls = {
    get: async () =>{
        const response = await fetch(`/baby`,{
            method:'GET',
            headers:{
                'Content-type':'application/json',
                'x-access-token': `${token}`
            }
        });
        if (!response.ok){
            throw new Error ('We could not get your baby')
        } 
        return await response.json()
    },
    create: async (data={}) =>{
        const response = await fetch(`/baby`,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'x-access-token': `${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error ('We could not create your new baby')
        } 
        return await response.json()
    },
    delete: async (id) =>{
        const response = await fetch(`/baby/${id}`,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json',
                'x-access-token': `${token}`
            }
        });
        if (!response.ok){
            throw new Error ('We could not delete your baby')
        } 
        return await response.json()
    },
    update: async(id,data={}) =>{
        console.log("check1")
        const response = await fetch(`/baby/${id}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json',
                'x-access-token': `${token}`
            },
            body:JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error ('We could not update your baby')
        } 
        return await response.json()
    },

};

//Sleep server calls
export const sleepServerCalls = {
    get: async (baby_id) =>{
        const response = await fetch(`/baby/${baby_id}/sleep`,{
            method:'GET',
            headers:{
                'Content-type':'application/json',
                'x-access-token': `${token}`
            }
        });
        if (!response.ok){
            throw new Error ('We could not get your baby')
        } 
        return await response.json()
    },
    create: async (baby_id,data={}) =>{
        const response = await fetch(`/baby/${baby_id}/sleep`,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'x-access-token': `${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error ('We could not create your new baby')
        } 
        return await response.json()
    },
    delete: async (baby_id,id) =>{
        const response = await fetch(`/baby/${baby_id}/sleep/${id}`,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json',
                'x-access-token': `${token}`
            }
        });
        if (!response.ok){
            throw new Error ('We could not delete your baby')
        } 
        return await response.json()
    },
    update: async(baby_id,id,data={}) =>{
        console.log("check1")
        const response = await fetch(`/baby/${baby_id}/sleep/${id}`,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'x-access-token': `${token}`
            },
            body:JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error ('We could not update your baby')
        } 
        return await response.json()
    },

};