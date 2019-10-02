import { createStore } from 'redux';

function reducer(){
    return [
        state = {
            modules:[
              { id: 1,image: "",title: "Instituto Bulla",desc: "Essa é a descrição da Aplicacao 1.Feito A asdadsadasdsada sad sad as dasd asd asd sad as dsad.",link: [{id: 1,link: "",},],},
              { id: 2,image: "",title: "Gestor Bulla WEB",desc: "Essa é a descrição da Aplicacao 1.Feito A asdadsadasdsada sad sad as dasd asd asd sad as dsad.",link: [{id: 1,link: "",},],},
              { id: 3,image: "",title: "Dr. Bulla",desc: "Essa é a descrição da Aplicacao 1.Feito A asdadsadasdsada sad sad as dasd asd asd sad as dsad.",link: [{id: 1,link: "",},],},
              { id: 4,image: "",title: "Cadastro Bulla",desc: "Essa é a descrição da Aplicacao 1.Feito A asdadsadasdsada sad sad as dasd asd asd sad as dsad.",link: [{id: 1,link: "",},],},
              { id: 5,image: "",title: "Facebook Instituto Bulla",desc: "Essa é a descrição da Aplicacao 1.Feito A asdadsadasdsada sad sad as dasd asd asd sad as dsad.",link: [{id: 1,link: "",},],},
              { id: 6,image: "",title: "Instagram Instituto Bulla",desc: "Essa é a descrição da Aplicacao 1.Feito A asdadsadasdsada sad sad as dasd asd asd sad as dsad.",link: [{id: 1,link: "",},],},
              { id: 7,image: "",title: "Youtube do Instituto Bulla",desc: "Essa é a descrição da Aplicacao 1.Feito A asdadsadasdsada sad sad as dasd asd asd sad as dsad.",link: [{id: 1,link: "",},],},
              { id: 8,image: "",title: "Suporte do Instituto Bulla",desc: "Essa é a descrição da Aplicacao 1.Feito A asdadsadasdsada sad sad as dasd asd asd sad as dsad.",link: [{id: 1,link: "",},],},
              { id: 9,image: "",title: "Gestor Bulla Mobile",desc: "Essa é a descrição da Aplicacao 1.Feito A asdadsadasdsada sad sad as dasd asd asd sad as dsad.",link: [{id: 1,link: "",},],},
            ]
        }
    ];
}
const store= createStore(reducer);

export default store;   