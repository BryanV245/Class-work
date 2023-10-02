const express= require('express');
const app = express();

const PORT = 3000;

app.get('/', (req,res) => {
    res.end('Hello World\n');
});

    console.log('1: server is running...');
app.listen(PORT, () => {
    console.log('2: server is running at http://localhost:${PORT}');
});

console.log('3: END OF FILE');


