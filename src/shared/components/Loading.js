import Throbber from '../../assets/throbber.svg';

class Loading extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.render();
	}
	
	render() {
		const styles =`
			.throbber {
				display: flex;
				align-items: center;
			  width: 63px;
        height: 63px;
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
			<img src="${Throbber}" class='throbber' alt='throbber'/>
			<style>${styles}</style>
		`;
	}
}

customElements.define('loading-content', Loading);
