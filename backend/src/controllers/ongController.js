const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
        
    },

    async create(request, response) {
        const { name , email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
        return response.json({ id });
    }
    
    /*async raiz(request, response){

        return response.json({
            evento: 'Semana Omnistack 11',
            aluno: 'Ednaldo Lima'
        });
    } */
};