class ErrorView extends ViewEnginer{
	

	constructor(elemento){

		super(elemento);

	}


	template(model){
		    

		return ` <div class="col-lg-12 col-md-12 col-xs-12 alert alert-danger">${model}</div>`;
	}


}