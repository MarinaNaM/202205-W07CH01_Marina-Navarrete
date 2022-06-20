import http from 'http';
import url from 'url';
// import fs from 'fs/promises';
import { validar } from './calculator.js';

const PORT = process.env.PORT || 3204;

export const server = http.createServer((req, res) => {
    const path = url.parse(req.url as string).path;
    const numbers = validar(path as string);
    if (numbers) {
        const template = `<h1>Resultados:</h1>
<p>${numbers[0]} + ${numbers[1]} = ${numbers[0] + numbers[1]}</p>
<p>${numbers[0]} - ${numbers[1]} = ${numbers[0] - numbers[1]}</p>
<p>${numbers[0]} * ${numbers[1]} = ${numbers[0] * numbers[1]}</p>
<p>${numbers[0]} / ${numbers[1]} = ${numbers[0] / numbers[1]}</p>`;
        res.end(template);
    } else {
        res.end('404 - Vuelve a intentarlo, majo');
    }
});

server.listen(PORT);
console.log(`Server de listening in port ${PORT}`);
