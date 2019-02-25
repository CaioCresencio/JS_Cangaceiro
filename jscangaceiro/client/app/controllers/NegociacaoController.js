class NegociacaoController{

    constructor(){

        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView("#negociacoes");
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event){      
        event.preventDefault();

        this._negociacoes.adiciona(this._criarNegociacao());
        this._negociacoesView.update(this._negociacoes);
        this._limpaFormulario();

        console.log(this._negociacoes.paraArray());
    }
    _criarNegociacao(){
        let data = DateConverter.paraData(this._inputData.value);
        let negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
        return negociacao;
    }
    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0;
        this._inputData.focus();
    }
}