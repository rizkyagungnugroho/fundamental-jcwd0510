/* Asynchronous VS Synchronous
asynchronous 
misal 
        task1 > 3 sec
        task2 > 2 sec
        task3 > 4 sec
jadi sistem dari asynchronous dia menyelesaikan tanpa menunggu waktu tersebut jadi dia buat perintah abis itu langsung ke task sesudahnya 
kalo Synchronous dia menyelesai kan tasknya tersebut sampai waktu selesai 

*/ 

function fetchData(){
        return new Promise((resolve, reject) => {
        setTimeout(() => {
         const succes= true;
         if(succes) {
                resolve("joko");
         } else {
                reject("terjadi kesalahan!");
}
}, 1000);
});
}

//fetchData()
  //.then((Response) => {
        //console.log(Response);
        
  //})
  //.then((value) => {
        //console.log(value);
        
  //})

  //.catch((error) => {
        //console.log(error);
        
  //});
        
//menggunakan async await -> lebih simple
const getDataUser= async() => {
        try{
                const data= await fetchData();
                console.log(data);
                        
         } catch (error) {
                console.log(error);      
         }
        };

getDataUser();

      const getData =async () => {
      try{
            const response = await fetch("https://randomuser.me/api/");
            const users= await response.json();

            console.log(response.ok);

            if(!response.ok) {
                  throw ("terjadi kesalahan");
                  // throw new Error("terjadi kesalahan")
            }
            console.log(users);

      } catch (error) {
            console.log(error);          
      } 
      };

      getData();

      const getData2= () => {
            fetch("https://randomuser.me/api/")
            .then((response ) => {
            return response.json();
            })   
            .then((user) => {
                  console.log(user);
            })
            .catch((error) => {
                  console.log(error);    
            });
      };

      getData2();


      //JSON -> Javascript object notation
      const user= {
            name:'budi',
            age: 32,
      };

      //convert object js Ke JSON
      const userJSON=JSON.stringify(user);
      console.log(userJSON);
      
      //convert JSON ke object js
      const parseJSON= JSON.parse(userJSON);
      console.log(parseJSON);
      
      //HOISTING -> var & func declaration
      /*
            Hoisting adalah mekanisme di javascript di mana deklarasi variabel dan fungsi 
            diangkat (hoisted) ke atas dari cakupan (scope) sebelum kode dieksekusi.
      */
      //testFunchExpression(); // ini gk bakalan bisa karna tidak termasuk dalam hoisting
      const testFuncExpression =() => {};

      testFuncDeclaration();
      function testFuncDeclaration() {}