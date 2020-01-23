axios.get('https://api.github.com/users/mhme2000')
   .then(function(response){
       console.log(response)
   }) 
   .catch(function(error){
       console.log(error)
   })