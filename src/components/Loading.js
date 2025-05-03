import Throbber from '../assets/throbber.svg';
class Loading extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.render();
	}
	
	render() {
		const styles =`
			.modal_content_loading{
				display: flex;
				justify-content: center;
				margin-top: 41px;
			}
			
			.throbber {
				animation: rotate 2s linear infinite;
				transform-origin: center;
			}
			
			@keyframes rotate {
				from {
					transform: rotate(0deg);
				}
				to {
					transform: rotate(360deg);
				}
			}
		`;

		this.shadowRoot.innerHTML = `
			<div class='modal_content_loading'>
				<img src="${Throbber}" class='throbber' alt='throbber' />
			</div>
			<style>${styles}</style>
		`;
	}
}

customElements.define('loading-element', Loading);
