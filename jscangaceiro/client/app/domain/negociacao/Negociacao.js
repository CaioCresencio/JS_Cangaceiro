class Negociacao{
    constructor(_data, _quantidade,_valor){
        Object.assign(this,{
            _data : new Date(_data.getTime()),
            _quantidade,
            _valor,
            
        });    
        Object.freeze(this);
    }

    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }
    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return this._data;
    }
}