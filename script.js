console.log("Let's write Javascript");
async function main(){
   let a = await fetch("http://127.0.0.1:3000/songs/")
   let response = await a.text();
   console.log(response);
}
main();