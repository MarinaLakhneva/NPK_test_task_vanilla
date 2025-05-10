import '../shared/components/Modal';

class ButtonOpenModal extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		
		this.isOpen = false;
		
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
		
		this.render();
	}
	
	handleOpenModal() {
		const table = document.getElementById('table');
		while (table.rows.length > 0) {
			table.deleteRow(0);
		}
		
		this.isOpen = true;
		this.render();
	}
	
	handleCloseModal() {
		this.isOpen = false;
		this.render();
	}
	
	render() {
		const styles =`
			.btn_open_modal {
					max-width: 277px;
					width: 100%;
					height: 56px;
					border: none;
					border-radius: 30px;
					font-size: 20px;
					font-weight: 500;
					color: #ffffff;
					background-color: #5F5CF0;
					transition: opacity 400ms ease;
					cursor: pointer;
			}
			
			.btn_open_modal:hover {
				opacity: 0.8;
			}
		`;
		
		this.shadowRoot.innerHTML =`
			<button class="btn_open_modal">Загрузить</button>
			${this.isOpen ? '<modal-window></modal-window>' : ''}
			<style>${styles}</style>
		`;
		
		this.shadowRoot.querySelector('.btn_open_modal').addEventListener('click', this.handleOpenModal);
		if (this.isOpen) {
			this.shadowRoot.querySelector('modal-window').addEventListener('close', this.handleCloseModal);
		}
	}
}

customElements.define('btn-open', ButtonOpenModal);
