# Tutorial de MySQL

Bem-vindo ao tutorial de MySQL! Neste guia, você aprenderá os conceitos fundamentais do MySQL, como instalar, configurar e usar o banco de dados. Além disso, abordaremos operações básicas de banco de dados, como criar tabelas, inserir dados, realizar consultas e muito mais.

## Índice

1. [Introdução ao MySQL](#introdução-ao-mysql)
2. [Instalação do MySQL](#instalação-do-mysql)
3. [Conectando-se ao MySQL](#conectando-se-ao-mysql)
4. [Comandos Básicos](#comandos-básicos)
5. [Criando e Manipulando Tabelas](#criando-e-manipulando-tabelas)
6. [Consultas SQL](#consultas-sql)
7. [Funções e Operadores](#funções-e-operadores)
8. [Gerenciamento de Usuários e Permissões](#gerenciamento-de-usuários-e-permissões)
9. [Backup e Restauração](#backup-e-restauração)
10. [Projeto](#projeto)
---

## Introdução ao MySQL

O MySQL é um dos sistemas de gerenciamento de bancos de dados relacionais (RDBMS) mais utilizados no mundo. Antes de começarmos, é essencial entender alguns conceitos fundamentais:

### 1. Database
Uma **database** (banco de dados) é uma coleção organizada de dados armazenados e gerenciados por um sistema de banco de dados. Ela é usada para armazenar informações de forma estruturada, permitindo fácil acesso, manipulação e gerenciamento.

### 2. Table
Uma **table** (tabela) é uma estrutura dentro de um banco de dados que organiza os dados em linhas e colunas. Cada tabela representa uma entidade ou objeto, como usuários, produtos ou transações.

### 3. Column
Uma **column** (coluna) define um campo específico em uma tabela. Ela representa uma propriedade ou atributo de uma entidade, como "Nome", "Idade" ou "Endereço".

### 4. Row
Uma **row** (linha), também chamada de registro, é uma única entrada em uma tabela que contém dados relacionados. Por exemplo, em uma tabela de "Usuários", uma linha pode representar um usuário específico com seus detalhes.

### 5. Primary Key
A **Primary Key** (chave primária) é um campo ou conjunto de campos que identifica exclusivamente cada registro em uma tabela. Ele garante que não existam registros duplicados e é essencial para a integridade dos dados.

### 6. Foreign Key
A **Foreign Key** (chave estrangeira) é um campo em uma tabela que estabelece um relacionamento com a chave primária de outra tabela. Ela é usada para garantir a integridade referencial entre tabelas relacionadas.

### 7. Compound Key
Uma **Compound Key** (chave composta) é uma chave primária formada por dois ou mais campos. Ela é usada quando nenhum campo individual pode identificar exclusivamente um registro, mas a combinação deles pode.

### 8. Index
Um **index** (índice) é uma estrutura usada para melhorar a performance de consultas no banco de dados. Ele permite que os dados sejam localizados de forma rápida sem a necessidade de varrer toda a tabela.

### 9. Redundancy
A **redundancy** (redundância) ocorre quando os mesmos dados são armazenados em vários locais no banco de dados. Embora a redundância possa ser útil em algumas situações, ela pode levar a inconsistências e desperdício de espaço se não for gerenciada adequadamente.

---

Agora que você conhece os conceitos fundamentais, podemos seguir para os próximos passos no tutorial.

## Instalação do MySQL

Para começar a usar o MySQL, você precisa instalá-lo. Abaixo estão as instruções para a instalação no sistema operacional de sua preferência.

### Linux

1. **Atualize o repositório de pacotes**:
   ```bash
   sudo apt update
   sudo apt upgrade
   ```

2. **Instale o MySQL Server**:
   ```bash
   sudo apt install mysql-server
   ```
   
3. **Verifique se o serviço está em execução**:
   ```bash
   sudo systemctl status mysql
   ```

4. **Configure a segurança do MySQL**:
   ```bash
   sudo mysql_secure_installation
   ```

5. **Verificando a instalação**:
   ```
   mysql -u root -p
   ```

---

Agora que o MySQL está instalado, você está pronto para aprender a se conectar e começar a usá-lo!

## Comandos básicos 

## 1. Gerenciamento de Bancos de Dados

### Listar bancos de dados
```sql
SHOW DATABASES;
```

### Selecionar um banco de dados para usar
```sql
USE nome_do_banco;
```

### Criar um banco de dados
```sql
CREATE DATABASE nome_do_banco;
```

### Apagar um banco de dados
```sql
DROP DATABASE nome_do_banco;
```

---

## 2. Gerenciamento de Tabelas

### Mostrar tabelas no banco atual
```sql
SHOW TABLES;
```

### Criar uma tabela
```sql
CREATE TABLE nome_da_tabela (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    idade INT
);
```

### Exibir estrutura de uma tabela
```sql
DESCRIBE nome_da_tabela;
```
ou
```sql
SHOW COLUMNS FROM nome_da_tabela;
```

### Apagar uma tabela
```sql
DROP TABLE nome_da_tabela;
```

### Renomear uma tabela
```sql
RENAME TABLE nome_atual TO novo_nome;
```

---

## 3. Manipulação de Dados

### Inserir dados
```sql
INSERT INTO nome_da_tabela (nome, idade) VALUES ('João', 30);
```

### Selecionar dados
```sql
SELECT * FROM nome_da_tabela;
```

### Atualizar dados
```sql
UPDATE nome_da_tabela SET idade = 31 WHERE nome = 'João';
```

### Deletar dados
```sql
DELETE FROM nome_da_tabela WHERE nome = 'João';
```

---

## 4. Informações sobre o Servidor

### Versão do MySQL
```sql
SELECT VERSION();
```

### Estado do servidor
```sql
SHOW STATUS;
```

### Configurações atuais do servidor
```sql
SHOW VARIABLES;
```

---

## 5. Usuários e Permissões

### Listar usuários
```sql
SELECT User, Host FROM mysql.user;
```

### Criar usuário
```sql
CREATE USER 'usuario'@'localhost' IDENTIFIED BY 'senha';
```

### Conceder privilégios
```sql
GRANT ALL PRIVILEGES ON nome_do_banco.* TO 'usuario'@'localhost';
```

### Remover privilégios
```sql
REVOKE ALL PRIVILEGES ON nome_do_banco.* FROM 'usuario'@'localhost';
```

### Apagar usuário
```sql
DROP USER 'usuario'@'localhost';
```

---

