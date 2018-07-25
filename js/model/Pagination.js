class Pagination{
	
	constructor(){

		this.pagination = [];
		this.quantidade = 3;

		this.container =[];
		this.handler();

	}


	handler(itens){
		
			
		this.pagination = [].concat(itens);

		console.log(this.pagination);

	}

}