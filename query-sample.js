const SELECT_QUERY_COUNT = "SELECT COUNT(id) FROM usuarios"

const QUERY_AVG = "SELECT AVG(salario) FROM usuarios"

const QUERY_SUM = "SELECT SUM(salario) FROM usuarios"

const QUERY_MAX = "SELECT MAX(salario) FROM usuarios"

const QUERY_MIN = "SELECT MIN(salario) FROM usuarios"

const SELECT_QUERY = "SELECT id, nome, telefone FROM usuarios"

const SELECT_QUERY_LIMIT = "SELECT id, nome, telefone FROM usuarios LIMIT 10"

const SELECT_SUBQUERY_SALARIO = "SELECT id, nome, telefone, salario FROM usuarios WHERE salario > 500"

const SELECT_QUERY_ORDER_BY_SALARIO_DESC = "SELECT id, nome, telefone, salario FROM usuarios ORDER BY salario DESC"

const SELECT_QUERY_ORDER_BY_SALARIO_ASC = "SELECT id, nome, telefone, salario FROM usuarios ORDER BY salario ASC"

const SELECT_QUERY_LIMIT_ORDER_BY_SALARIO = "SELECT id, nome, telefone, salario FROM usuarios ORDER BY salario DESC LIMIT 5"

const SELECT_QUERY_LIKE_NOME = "SELECT id, nome, telefone FROM usuarios WHERE nome LIKE 'A%'"

const SELECT_QUERY_COUNT_SEXO = "SELECT sexo, COUNT(*) AS total FROM usuarios GROUP BY sexo"

const SELECT_QUERY_JOIN = `
    SELECT u.id, u.nome, p.id AS pedido_id, p.valor
    FROM usuarios u
    JOIN pedidos p ON u.id = p.usuario_id
`

const SELECT_QUERY_IN = "SELECT id, nome, telefone FROM usuarios WHERE id IN (1, 2, 3, 5)"

const SELECT_QUERY_BETWEEN_SALARIO = "SELECT id, nome, telefone, salario FROM usuarios WHERE salario BETWEEN 2000 AND 5000"

const SELECT_QUERY_IS_NULL = "SELECT id, nome, telefone FROM usuarios WHERE telefone IS NULL"

const SELECT_QUERY_NOT_LIKE_NOME = "SELECT id, nome, telefone FROM usuarios WHERE nome NOT LIKE 'A%'"

const UPDATE_SALARIO = "UPDATE usuarios SET salario = 6000 WHERE id = 1"

const DELETE_USUARIO = "DELETE FROM usuarios WHERE id = 1"

const SELECT_SUBQUERY_SALARIO_COM_SUBQUERY = `
    SELECT id, nome, salario
    FROM usuarios
    WHERE salario > (SELECT salario FROM usuarios WHERE id = 1)
`

const SELECT_QUERY_LIMIT_OFFSET = "SELECT id, nome, telefone FROM usuarios LIMIT 10 OFFSET 20"

const SELECT_QUERY_DISTINCT = "SELECT DISTINCT estado FROM usuarios"

export { 
  SELECT_QUERY, SELECT_QUERY_LIMIT, SELECT_SUBQUERY_SALARIO, 
  SELECT_QUERY_ORDER_BY_SALARIO, SELECT_QUERY_LIMIT_ORDER_BY_SALARIO,
  SELECT_QUERY_LIKE_NOME, SELECT_QUERY_COUNT_SEXO, SELECT_QUERY_JOIN,
  SELECT_QUERY_IN, SELECT_QUERY_BETWEEN_SALARIO, SELECT_QUERY_IS_NULL, 
  SELECT_QUERY_NOT_LIKE_NOME, UPDATE_SALARIO, DELETE_USUARIO, 
  SELECT_SUBQUERY_SALARIO_COM_SUBQUERY, SELECT_QUERY_LIMIT_OFFSET, SELECT_QUERY_DISTINCT 
}
