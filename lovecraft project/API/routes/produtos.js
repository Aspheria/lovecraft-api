const express = require('express');
const router = express.Router();

//retorna todos os produtos
router.get('/',(req, res, next) => {
    res.status(200).send({
        mensagem: 'usando o GET dentro da rota de produtos aaaaaa'
    });
});

//INSERE UM PRODUTO
router.post('/', (req, res, next) => {

    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    };
    res.status(201).send({
        mensagem: 'usando o POST dentro da rota de produtos. INSIRA O PRODUTO',
        produtoCriado: produto
    })
});
//RETORNA OS DADOS DE UM PRODUTO
    router.get('/:id_produto', (req, res, next)=> {
        const id= req.params.id_produto

        if (id === 'especial' ) {
            res.status(200).send({
                mensagem: 'vc descobriu o id especial',
                id: id
            });
        } else {
            res.status(200).send({
                mensagem: 'voce passou um  ID do id produto'
            });
        }
    });

    router.patch('/',(req, res, next) => {
        res.status(201).send({
            mensagem: 'usando o patch dentro da rota de produtos'
        })
    });

    router.delete('/',(req, res, next) => {
        res.status(201).send({
            mensagem: 'usando o delete dentro da rota de produtos'
        })
    });    






    module.exports= router;