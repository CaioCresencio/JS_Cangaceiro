class Negociacao{
    constructor(_data, _quantidade,_valor){
        Object.assign(this,{
            _data : new Date(_data.getTime()),
            _quantidade,
            _valor
        });    
        Object.freeze(this);
    }

    get quantidade(){
        return this._quantidade;
    }

    get volume(){
        return this._quantitade*this._valor;
    }

    get data(){
        return this._data;
    }
}