import "./Modal.js";

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
					height: 56px;
					max-width: 277px;
					width: 100%;
					border: none;
					border-radius: 30px;
					font-size: 20px;
					font-weight: 500;
					color: #ffffff;
					background-color: #5F5CF0;
					cursor: pointer;
				}
		`;
		
		this.shadowRoot.innerHTML =`
			<button class="btn_open_modal">Загрузить</button>
			${this.isOpen ? '<modal-window></modal-window>' : ''}
			<style>${styles}</style>
		`;
		
		const openButton = this.shadowRoot.querySelector('.btn_open_modal');
		openButton.addEventListener('click', this.handleOpenModal);
		
		if (this.isOpen) {
			const modal = this.shadowRoot.querySelector('modal-window');
			modal.addEventListener('close', this.handleCloseModal);
		}
	}
}

customElements.define('btn-open', ButtonOpenModal);

