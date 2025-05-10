class InputDesign extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.render();
		
		this.initializeElements();
		this.setupEventListeners();
	}
	
	render() {
		const styles =`
			.input_container{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 6px 9px;
				box-sizing: border-box;
				height: 35px;
				border: 1px solid #A5A5A5;
				border-radius: 10px;
				background-color: #F1F1F1;
				transition: all ease 400ms;
			}
			
			.hover{
				transition: all ease 400ms;
			}
			
			.input_container.hover {
				background-color: #BBB9D2;
			}
			
			.input_container:hover{
				border: 1px solid #5F5CF0;
			}
			
			.input_container.active {
        border-color: #5F5CF0;
      }

			.input_name_file{
				width: 100%;
			  border: none;
        outline: none;
				background-color: #F1F1F1;
				font-weight: 500;
				font-size: 17.5px;
				color: #5F5CF0;
				transition: all ease 400ms;
			}
			
			.input_name_file::placeholder {
				font-weight: 500;
				font-size: 17.5px;
				color: #A5A5A5;
			}
			
			.input_name_file.hover {
				background-color: #BBB9D2;
			}
			
			.btn_clear{
				display: flex;
				justify-content: center;
				align-items: center;
			  margin: 0;
			  padding: 0;
			  border: none;
			  font-family: 'Inter', sans-serif;
				border-radius: 33px;
				cursor: auto;
			}
			
			.btn_clear:hover{
				background-color: #F1F1F1;
			}
		`;
		
		this.shadowRoot.innerHTML = `
			<div class="input_container">
				<input
					class="input_name_file"
					placeholder="Название файла"
				/>
				<button class="btn_clear">
					<svg width="23.57" height="23.57" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.82226 18.511C6.27001 17.9588 6.27001 17.0634 6.82226 16.5111L16.6075 6.72589C17.1598 6.17363 18.0552 6.17363 18.6074 6.72589C19.1597 7.27815 19.1597 8.17354 18.6074 8.7258L8.82217 18.511C8.26991 19.0633 7.37452 19.0633 6.82226 18.511ZM6.82227 8.7258C6.27001 8.17354 6.27001 7.27815 6.82227 6.72589C7.37452 6.17363 8.26991 6.17363 8.82217 6.72589L18.6074 16.5111C19.1597 17.0634 19.1597 17.9588 18.6074 18.511C18.0552 19.0633 17.1598 19.0633 16.6075 18.511L6.82227 8.7258Z" fill="#A5A5A5"/>
					</svg>
			</button>
			</div>
			<style>${styles}</style>
		`;
	}
	initializeElements() {
		this.inputContainer = this.shadowRoot.querySelector('.input_container');
		this.inputElement = this.shadowRoot.querySelector('.input_name_file');
		this.clearButton = this.shadowRoot.querySelector('.btn_clear');
		
		this.setupEventListeners();
		this.updateClearButtonState();
	}
	
	setupEventListeners() {
		this.clearButton.addEventListener('click', () => this.clearInput());
		this.inputElement.addEventListener('input', (e) => this.handleInputChange(e));
		
		this.clearButton.addEventListener('mouseenter', () => {
			if (this.inputElement.value.trim() !== '') {
				this.inputElement.classList.add('hover');
				this.inputContainer.classList.add('hover');
			}
		});
		
		this.clearButton.addEventListener('mouseleave', () => {
			this.inputElement.classList.remove('hover');
			this.inputContainer.classList.remove('hover');
		});
	}
	
	handleInputChange(event) {
		const value = event.target.value;
		this.updateClearButtonState(value);
		
		this.dispatchEvent(new CustomEvent('input-change', {
			detail: { value },
			bubbles: true,
			composed: true
		}));
	}
	
	updateClearButtonState(value = '') {
		this.clearButton.disabled = value.trim() === '';
		this.clearButton.style.cursor = value.trim() === '' ? 'auto' : 'pointer';
		
		if (value.trim() !== '') {
			this.inputContainer.classList.add('active');
		} else {
			this.inputContainer.classList.remove('active');
		}
	}
	
	clearInput() {
		this.inputElement.value = '';
		this.updateClearButtonState();
		
		this.inputElement.classList.remove('hover');
		this.inputContainer.classList.remove('hover');
		
		this.dispatchEvent(new CustomEvent('input-change', {
			detail: { value: '' },
			bubbles: true,
			composed: true
		}));
	}
	
	getInputValue() {
		return this.inputElement.value;
	}
}

customElements.define('input-design', InputDesign);
