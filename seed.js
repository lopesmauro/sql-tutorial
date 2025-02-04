import mysql from 'mysql2/promise'
import { faker } from '@faker-js/faker'
import { generate } from 'gerador-validador-cpf'

const main = async () => {
    try{
        const connection = await mysql.createConnection({
            host: 'localhost',  
            user: 'devuser',
            password: 'devpassword',
            database: 'devdatabase',
        })

        await connection.execute(`
            CREATE TABLE IF NOT EXISTS usuarios (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(255),
                email VARCHAR(255),
                endereco VARCHAR(255),
                telefone VARCHAR(255),
                salario DECIMAL(10, 2),
                data_nascimento DATE,
                sexo CHAR(1),
                cpf VARCHAR(14),
                cidade VARCHAR(100),
                estado VARCHAR(50),
                cep VARCHAR(10),
                data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                ativo BOOLEAN DEFAULT TRUE,
                ultima_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                descricao TEXT
            )`
        )

        for(let i = 0; i < 100; i++){
            const nome = faker.person.fullName()
            const email = faker.internet.email()
            const endereco = faker.location.streetAddress()
            const telefone = faker.phone.number()
            const salario = faker.finance.amount(1000, 10000, 2)
            const dataNascimento = faker.date.past(30, new Date('2000-01-01')).toISOString().split('T')[0]
            const sexo = faker.helpers.arrayElement(['M', 'F'])  
            const cpf = generate() 
            const cidade = faker.location.city()
            const estado = faker.location.state()
            const cep = faker.location.zipCode()
            const descricao = faker.lorem.sentence()
    
            await connection.execute(`
                INSERT INTO usuarios 
                    (nome, email, endereco, telefone, salario, data_nascimento, sexo, cpf, cidade, estado, cep, descricao)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `, 
                [
                    nome, email, endereco, telefone, salario, dataNascimento, sexo, cpf, cidade, estado, cep, descricao
                ]
            )
            console.log(`Inserindo usuário ${i+1}...`)
        }
        
        await connection.end()
    } catch (error) {
        console.log('Error: ', error)
    }      
    
}

main()   


