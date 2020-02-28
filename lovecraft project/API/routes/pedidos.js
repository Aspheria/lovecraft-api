const express = require('express');
const router = express.Router();

//retorna todos os pedidos
router.get('/',(req, res, next) => {
    res.status(200).send({
        mensagem: 'usando o GET dentro da rota de pedidos. O pedido foi retornado'
    });
});

//INSERE UM PEDIDO
router.post('/', (req, res, next) => {
    const pedido = {
        id_pedido: req.body.id_pedido,
        quantidade: req.body.quantidade
    }
    res.status(201).send({
        mensagem: 'usando o POST dentro da rota de pedidos. Insere um pedido ',
        pedidoCriado: pedido
    })  
});
//RETORNA OS DADOS DE UM PEDIDO
    router.get('/:id_pedido', (req, res, next)=> {
        const id= req.params.id_pedido

        if (id === 'especial' ) {
            res.status(200).send({
                mensagem: 'detalhes do pedido',
                id_pedido: id
            });
        }
    });

    //ALTERA UM PRODUTO
    router.patch('/', (req, res, next) => {
        res.status(201).send({
            mensagem: 'produto alterado'
        })
    });

//EXCLUI UM PEDIDO
    router.delete('/',(req, res, next) => {
        res.status(201).send({
            mensagem: 'pedido excluido'
        })
    });    


    module.exports= router;