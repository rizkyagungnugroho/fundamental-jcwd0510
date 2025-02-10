/* Asynchronous VS Synchronous
asynchronous
misal
        task1 > 3 sec
        task2 > 2 sec
        task3 > 4 sec
jadi sistem dari asynchronous dia menyelesaikan tanpa menunggu waktu tersebut jadi dia buat perintah abis itu langsung ke task sesudahnya
kalo Synchronous dia menyelesai kan tasknya tersebut sampai waktu selesai

*/
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const succes = true;
            if (succes) {
                resolve("joko");
            }
            else {
                reject("terjadi kesalahan!");
            }
        }, 2000);
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
const getDataUser = async () => {
    try {
        const data = await fetchData();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
};
getDataUser();
const getData = async () => {
    try {
        const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
        const users = await response.json();
        console.log(response.ok);
        if (!response.ok) {
            throw new Error("terjadi kesalahan");
        }
        console.log(users);
    }
    catch (error) {
        console.log(error);
    }
};
getData();
export {};
