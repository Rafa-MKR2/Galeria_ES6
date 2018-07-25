
class ViewEnginer{
	
	constructor(elemento){

	this._elemento = elemento;
	
	}

template(model){
		// Obrigatório o instanciamento desse metodo nas classes filhas da mesma,
		// Esse metodo template é substituido depois de instanciado.
		throw new Error('Metado template Deve ser implementado');
	}


	update(model){

	this._elemento.innerHTML = this.template(model);

		}


	}