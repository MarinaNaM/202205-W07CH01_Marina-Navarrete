// export function calculadora(a: number, b: number) {
//     const sum = a + b;
//     const rest = a - b;
//     const mult = a * b;
//     const div = a / b;
//     return;
// }

export function validar(path: string) {
    const trozo1 = path.split('?');
    if (trozo1.length !== 2) return;
    if (trozo1[0] !== '/calculator') return;
    // console.log(trozo1);
    const trozo2 = trozo1[1].split('&');
    if (trozo2.length !== 2) return;
    // console.log(trozo2);
    const trozo3 = trozo2[0].split('=');
    if (trozo3.length !== 2) return;
    if (Number.isNaN(Number(trozo3[1]))) return;
    // console.log(trozo3);
    const trozo4 = trozo2[1].split('=');
    if (Number.isNaN(Number(trozo4[1]))) return;
    // console.log(trozo4);

    return [Number(trozo3[1]), Number(trozo4[1])];
}
console.log(validar('/calculator?a=6&b=3'));
