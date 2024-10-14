export function check(ac) {
    if (ac.length !== 1) {
        console.log("Error: Comando invalido");
        console.log("Exemplo: node main.js caminhoDoArquivo/arquivo.xlsx");
        process.exit(1);
    }
}
