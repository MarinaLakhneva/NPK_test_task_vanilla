class RequestResponse extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
	
	static get observedAttributes() {
		return ['data-file', 'filename', 'error', 'error-msg'];
	}
	
	render() {
		const dataFile = JSON.parse(this.getAttribute('data-file'));
		const filename = this.getAttribute('filename');
		const error = this.getAttribute('error');
		const errorMsg = this.getAttribute('error-msg');
		
		const date = new Date(dataFile.timestamp);
		const timestamp = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}
															${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
		
		const styles =`
			.modal_content_request_response {
					padding: 10px 8px 0 8px;
					box-sizing: border-box;
			}
			
			.request_response {
					margin-top: 11px;
			}
			
			.request_response_description {
					font-weight: 300;
					font-size: 14px;
					color: #ffffff;
			}
		`;
		
		let content;
		if(error){
			content = `
				<div class="request_response">
					<p class="request_response_description">${errorMsg}</p>
				</div>`
		}else {`
			<p class="request_response_description">filename:</p>
			<p class="request_response_description">${filename}</p>
			<div class="request_response">
				<p class="request_response_description">name: ${dataFile.name}</p>
				<p class="request_response_description">timestamp: ${timestamp}</p>
				<p class="request_response_description">message: ${dataFile.message}</p>
			</div>`
		}
		
		this.shadowRoot.innerHTML =`
			<div class="modal_content_request_response">
				${content}
			</div>
			<style>${styles}</style>
		`;
	}
	
	attributeChangedCallback(name, oldValue, newValue) {
		this.render();
	}
	
	connectedCallback() {
		this.render();
	}
}

customElements.define('request-response-element', RequestResponse);
