import {readCsvFile} from "../app/fileProcessing";

class CsvDisplay extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		
		this.file = null;
		
		this.render();
	}
	
	render() {
		const styles =`
			.table{
			  display: flex;
			  width: 200px;
			  height: 200px;
			  background-color: #F1F1F1;
			}
		`;
		
		this.shadowRoot.innerHTML = `
			<div class="table"></div>
			<style>${styles}</style>
		`;
	}
	
	setFile(file) {
		this.file = file;
		this.render();
	};
}

customElements.define('csv-display', CsvDisplay);
