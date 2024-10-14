# Conversor XLSX para JSON

Este projeto é um conversor simples de arquivos Excel (XLSX) para JSON, desenvolvido em Node.js. Ele lê um arquivo Excel e o converte para um formato JSON, facilitando a manipulação e o uso dos dados em aplicações web ou serviços.

## Funcionalidades

- Lê arquivos Excel (XLSX).
- Converte a primeira planilha do arquivo Excel para formato JSON.
- Salva o JSON resultante em um arquivo com um nome gerado automaticamente baseado no timestamp atual.

## Pré-requisitos

Antes de começar, você precisa ter o Node.js e o npm (Node Package Manager) instalados em sua máquina. Você pode baixá-los em [nodejs.org](https://nodejs.org/).

## Instalação

1. Clone este repositório:

   ```bash
     git clone https://github.com/seu-usuario/conversor-xlsx-para-json.git
   ```
   ```
   cd conversor-xlsx-para-json
   ```
   ```
    npm install
   ```
Uso
Para usar o conversor, execute o seguinte comando no terminal, substituindo <caminhoDoArquivo> pelo caminho do seu arquivo Excel:
```
node main.js <caminhoDoArquivo>
```
```
node main.js excel_file/doc1.xlsx
```
Após a execução, um arquivo JSON será gerado no diretório atual com um nome baseado no timestamp.
## Estrutura do Projeto
```
conversor-xlsx-para-json/
├── srcs/
│   └── utils.js          # Funções utilitárias
├── main.js               # Arquivo principal do projeto
├── package.json          # Dependências do projeto
└── .gitignore            # Arquivos e diretórios a serem ignorados pelo Git
```
## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request ou relatar problemas.

1. Fork este repositório.
2. Crie uma nova branch para suas alterações.
3. Faça suas alterações e commit.
4. Envie um pull request.
