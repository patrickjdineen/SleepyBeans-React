export const createAccount = {
    create: async (data={}) =>{
        const response = await fetch(`/signup`,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error ('We could not create your new hero')
        } 
        return await response.json()
    },
};

export const login = {
    create: async (data={}) =>{
        const response = await fetch(`/login`,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error ('We could not create your new hero')
        } 
        return await response.json()
    },
};