APi Hamburgueria em Node

Api feita com Node, Insomnia, Uuid, Express. 
Um CRUD, Create, Ready(GET), Update, Delete + 1 rota de GET para mostrar os pedidos específicos e de PATCH para devolver o Status de "Pedido Pronto".
Foram feitos dois Middleweres, um que foi utilizado em todas rotas que recebem o parâmetro ID, então ele verifica se o ID passado existe. Se não existir retorna um erro, caso contrário permita a requisição continuar normalmente; E outro que  é chamado em todas requisições que tenha um console.log que mostra o método da requisiçao(GET,POST,PUT,DELETE, etc) e também a url da requisição.
Permite o usuário criar um Pedido com os dados de: Nome, Pedido, Valor e Status, qunado atualizados nas rotas de PUT ou Patch, devolve ao usuário "Pedido Atualizado" ou "Pedido Pronto", também possível deletar um pedido pelo ID e mostrar um pedido específico na rota de GET.
