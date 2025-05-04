import './FileDropzone';
import './InputDesign';

class Modal extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.render();
	}
	
	connectedCallback() {
		const uploadedFile = this.shadowRoot.querySelector('file-dropzone');
		uploadedFile.addEventListener('file-uploaded', (event) => {
			const uploadedFile = event.detail.file;
		});

		
		const inputDesign = this.shadowRoot.querySelector('input-design');
		inputDesign.addEventListener('input-change', (event) => {
			const inputDesign = event.detail.value;
		});
	}
	
	render() {
		const styles =`
			.background_blur{
				position: fixed;
				display: flex;
				justify-content: center;
				align-items: center;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: rgba(68, 68, 68, 0.77);
				backdrop-filter: blur(7.2px);
				opacity: 1; //1->0
				transition: opacity 400ms linear 1ms, transform 400ms linear 1ms;
				z-index: 1000;
			}

			.modal{
				display: flex;
				flex-direction: column;
				padding: 21.5px 20px;
				box-sizing: border-box;
				width: 342px;
				height: 549px;
				border-radius: 20px;
				background-color: rgba(204, 204, 206, 0.28);
				transition: all ease 400ms;
			}

			.modal_container{
				position: relative;
				width: 100%;
				height: 100%;
			}

			.modal_background {
				position: relative;
				width: 100%;
				height: 100%;
			}

			.background_color_default {
				position: absolute;
				width: 100%;
				height: 100%;
				border-radius: 22px;
				background: linear-gradient(to bottom, #5F5CF0, #DDDCFC);
				transition: opacity 1s ease;
				opacity: 1;
			}
			
			.modal_header{
				position: absolute;
				display: flex;
				justify-content: flex-end;
				top: 14px;
				right: 12.5px;
			}
			
			.btn_close_modal{
				border: none;
				display: flex;
				align-items: center;
				justify-content: center;
				box-sizing: border-box;
				width: 34px;
				height: 34px;
				border-radius: 100%;
				background-color: rgba(204, 204, 206, 0.28);
				cursor: pointer;
				transition: all ease-out 0.6s;
			}
			
			.btn_close_modal:hover{
				background-color: #F1F1F1;
			}
			
			.btn_close_modal:hover svg path {
				fill: #5F5CF0;
			}
			
			.modal_content_header{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 7px;
			}

			.modal_title{
				margin: 0;
				padding: 0;
				font-weight: 600;
				font-size: 20px;
				line-height: 24px;
				color: #ffffff;
			}
			
			.modal_description{
			  margin: 0;
				padding: 0;
				font-weight: 300;
				font-size: 14px;
				color: #ffffff;
			}

			.modal_content{
				position: absolute;
				display: flex;
				flex-direction: column;
				top: 45px;
				left: 12.5px;
				right: 12.5px;
				z-index: 1000;
			}
			
			.modal_content_content{
				margin-top: 26.33px;
			}
			
			.modal_footer{
				position: absolute;
				padding: 0 12.5px 14px 12.5px;
				box-sizing: border-box;
				bottom: 0;
				right: 0;
				width: 100%;
			}
			
			.btn_download{
				border: none;
				padding: 16px 88px;
				box-sizing: border-box;
				height: 56px;
				width: 100%;
				border-radius: 30px;
				background: #BBB9D2;
				color: #ffffff;
				transition: background-color 400ms ease;
				cursor: auto;
			}
		`;
		
		this.shadowRoot.innerHTML = `
			<div class="background_blur">
				<div class='modal'>
					<div class="modal_container">
						<div class="modal_background">
							<div class="background_color_default"></div>
						</div>
						<div class="modal_header">
							<button class="btn_close_modal">
							<svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.571083 15.5711C-0.0916244 14.9083 -0.0916258 13.8339 0.571082 13.1712L12.3133 1.42892C12.976 0.766208 14.0505 0.766209 14.7132 1.42892C15.3759 2.09162 15.3759 3.16609 14.7132 3.82879L2.97096 15.5711C2.30825 16.2338 1.23379 16.2338 0.571083 15.5711ZM0.571084 3.8288C-0.0916247 3.16609 -0.0916251 2.09163 0.571083 1.42892C1.23379 0.766209 2.30825 0.766209 2.97096 1.42892L14.7132 13.1712C15.3759 13.8339 15.3759 14.9083 14.7132 15.5711C14.0505 16.2338 12.976 16.2338 12.3133 15.5711L0.571084 3.8288Z" fill="white"/>
							</svg>
						</button>
						</div>
						<div class="modal_content">
							<div class="modal_content_header">
								<p class="modal_title">Загрузочное окно</p>
								<p class="modal_description">Перед загрузкой дайте имя файлу</p>
							</div>
							<div class="modal_content_content">
								<input-design></input-design>
								<file-dropzone></file-dropzone>
							</div>
						</div>
						<div class="modal_footer">
							<button class="btn_download">Загрузить</button>
						</div>
					</div>
				</div>
			</div>
			<style>${styles}</style>
		`;
		
		const closeButton = this.shadowRoot.querySelector('.btn_close_modal');
		closeButton.addEventListener('click', () => {
			this.dispatchEvent(new Event('close'));
		});
	}
}

customElements.define('modal-window', Modal);
