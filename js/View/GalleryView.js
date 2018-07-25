class GalleryView extends ViewEnginer{
	

	constructor(elemento){

		super(elemento);

	}


	template(model){
		      	let array = [].concat(model.results);


		return `
			
      
       
		
      ${

      	array.map(lista=>{

      return `
      	 <div class="col-lg-3 col-md-3 col-xs-6">
          <a href="#" class="d-block mb-3 h-50">
            <img class="img-fluid img-thumbnail" src="${lista.image}" alt="">
          </a>
        </div>`;

      	}).join('')}
      
      `;

	}


}