let express = require("express");
let app = express();

app.use(express.static('public'));

 const port = 3000;
 const address = "localhost";
 
 app.listen(port, address,()=>{
	 console.log(`Servidor executando no endereço http://${address}:${port}`);
 });
 