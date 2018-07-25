class Controller{

	constructor(){
	 let get = document.querySelector.bind(document);

	 	// Carrega todas as classes da View 
		this.Galeria = new GalleryView(get('#galeria'));
		this.Error = new ErrorView(get('#galeria'));

		//inicializa todos os metodos iniciais
		this.init();
		this.pagination = new Pagination();


		}


		init(){
			let promise = this.import();
			promise.then(lista =>{
				this.Galeria.update(lista);
				 this.pagination.handler(lista.results)})
					.catch(erro=>this.Error.update(erro));

		}

		


	  import(){
	  	return new Promise((resolve,reject)=>{

	  		let xhr = new XMLHttpRequest();
		 		xhr.open('GET', 'https://rickandmortyapi.com/api/character');
		 		xhr.onreadystatechange = ()=>{
			 		if(xhr.readyState == 4){
			 			if(xhr.status == 200){
			 				resolve(JSON.parse(xhr.responseText));
			 			}else{
			 				reject('Houve problemas de conexão com o servidor, não foi possível obter dados');
			 				console.log('não foi possível obter dados ');

					 	  }
			 		}};
		       
		       xhr.send();
		   });

	// fim do metodo Import
	} 



}