class slhttp {
    async get(url){
      const res=await fetch(url);
      if(res.ok){
        const data=await res.json();
        return data;
      }
      throw new Error(res.status + " " +res.statusText)
    }
  
    async post (url, data){
        const requestInfo={
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(data)
        };
        const res=await fetch(url,requestInfo)
          if(res.ok){
           const data=res.json();
           return data;
          }  throw new Error(res.status + res.statusText);
        }
  
    async put(url,data){
          const requestInfo={
            method:"PUT",
            headers:{
              'Content-type':'application/json'
            },
            body:JSON.stringify(data)
          };
         const res= await fetch(url,requestInfo)
            if(res.ok){
              const data=await res.json();
              return data;
            } throw new Error(res.status + res.statusText);
          }

   
    async delete(url){
          const requestInfo={
            method:"DELETE",
            headers:{
              'Content-Type':'application/json'
            }
          };
          const res=await fetch(url,requestInfo)
           if(res.ok){
            const data=await res.json();
            return data;
           }
           throw new Error(res.status + res.statusText);
          }
      }