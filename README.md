# Relacionamento-entre-dados

###medico
[pacientes]
[consultas]
id
nome 
especialidade

###pacientes
[consultas]
[medicos]
id
nome
data de nascimento

 ###consultas
[medicos]
[pacientes]

id
data
medico: id
paciente: id

busca por id === busca por email



tcp = tranferencia de dados e aguarda uma resposta é a base do http

protocolo === http
https === todos os codigos são criptografados, ou seja, segurança extra
