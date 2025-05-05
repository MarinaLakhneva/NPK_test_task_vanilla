class RequestResponse extends HTMLElement {
	static get observedAttributes() {
		return ['data-file'];
	}
	
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.render();
		this.error = false;
		this.initializeElements();
	}
	
	attributeChangedCallback(name, oldValue, newValue) {
		this.render();
	}
	
	render() {
		const data = JSON.parse(this.getAttribute('data-file'));
		
		const filename = data.filename || '';
		const name = data.name || '';
		const timestamp = data.timestamp || '';
		const message = data.message || '';
		const errMessage = data.errMessage || '';
		const status = data.status || '';
		
		this.error = (status === 'error');
		
		const styles =`
			.modal_content_request_response{
				display: flex;
				flex-direction: column;
			}
			
			.modal_content_request_response-error{
				display: none;
			}
			
			.request_response {
				margin-top: 11px;
			}
			
			.request_response_description {
				margin: 0;
				padding: 0;
				font-weight: 300;
				font-size: 14px;
				color: #ffffff;
			}
		`;
		
		this.shadowRoot.innerHTML =`
			<div class="modal_content_request_response">
				<p class="request_response_description">filename:</p>
				<p class="request_response_description">${filename}</p>
				<div class="request_response">
					<p class="request_response_description">name: ${name}</p>
					<p class="request_response_description">timestamp: ${timestamp}</p>
					<p class="request_response_description">message: ${message}</p>
				</div>
			</div>
			<div class="modal_content_request_response-error">
				<div class="request_response">
					<p class="request_response_description">${errMessage}</p>
				</div>
			</div>
			<style>${styles}</style>
		`;
	}
	initializeElements() {
		if(this.error){
			this.shadowRoot.querySelector('.modal_content_request_response').style.display = 'none';
			this.shadowRoot.querySelector('.modal_content_request_response-error').style.display = 'flex';
		}
	}
}

customElements.define('request-response', RequestResponse);

