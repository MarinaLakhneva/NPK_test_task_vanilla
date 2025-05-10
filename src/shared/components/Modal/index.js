import '../../../features/FileDropzone';
import '../../../entities/InputDesign';
import '../../../shared/components/Loading';
import '../../../shared/components/Modal/RequestResponse';

import {uploadFile} from '../../../app/api/fileUpload';
import {readCSV} from '../../../app/fileProcessing';

import {dateTime} from '../../constants';

class Modal extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.render();
		
		this.uploadedFile = null;
		this.inputFileName = '';
		this.data = null;
		
		this.initializeElements();
		this.updateValues();
	}

	render() {
		const styles =`
			p{
				margin: 0;
				padding: 0;
			}
			
			button{
				border: none;
			}
		
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
				opacity: 0;
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
			.active_default {
				opacity: 0;
			}
			
			.background_color_error {
				position: absolute;
				width: 100%;
				height: 100%;
				border-radius: 22px;
				background: linear-gradient(to bottom, #F05C5C, #8F8DF4);
				transition: opacity 1s ease;
				opacity: 0;
			}
			.active_error {
				opacity: 1;
			}
			
			.background_color_success {
				position: absolute;
				width: 100%;
				height: 100%;
				border-radius: 22px;
				background: linear-gradient(to bottom, #5F5CF0, #8F8DF4);
				transition: opacity 1s ease;
				opacity: 0;
			}
			.active_success{
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
				display: flex;
				align-items: center;
				justify-content: center;
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
				font-weight: 600;
				font-size: 20px;
				line-height: 24px;
				color: #ffffff;
			}
			
			.modal_description{
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
			
			.modal_content_loading{
				display: none;
				justify-content: center;
				margin-top: 41px;
				transition: opacity 400ms ease;
			}
			
			.modal_content_response{
				display: none;
				padding: 10px 8px 0 8px;
				box-sizing: border-box;
			}
			
			.modal_footer{
				position: absolute;
				padding: 0 12.5px 14px 12.5px;
				box-sizing: border-box;
				bottom: 0;
				right: 0;
				width: 100%;
			}
			
			.btn_submit{
				padding: 16px 88px;
				box-sizing: border-box;
				width: 100%;
				height: 56px;
				border-radius: 30px;
				background: #BBB9D2;
				font-weight: 500;
				font-size: 20px;
				color: #ffffff;
				transition: all 400ms ease;
				cursor: auto;
			}
		`;

		let responseContent;
		if(this.data){
			responseContent = `<request-response data-file='${JSON.stringify(this.data)}'></request-response>`;
		}

		this.shadowRoot.innerHTML = `
			<div class="background_blur">
				<div class='modal'>
					<div class="modal_container">
						<div class="modal_background">
							<div class="background_color_default"></div>
							<div class="background_color_error"></div>
							<div class="background_color_success"></div>
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
								<p class="modal_description"></p>
							</div>
							<div class="modal_content_content">
								<input-design></input-design>
								<file-dropzone></file-dropzone>
							</div>
							<div class='modal_content_loading'>
								<loading-content></loading-content>
							</div>
							<div class='modal_content_response'>
								${responseContent}
							</div>
						</div>
						<div class="modal_footer">
							<button class="btn_submit" onclick="this.getRootNode().host.handleSubmit()">Загрузить</button>
						</div>
					</div>
				</div>
			</div>
			<style>${styles}</style>
		`;
	}

	cacheDOMElements() {
		this.closeButton = this.shadowRoot.querySelector('.btn_close_modal');
		
		this.backgroundBlur = this.shadowRoot.querySelector('.background_blur');
		this.submitButton = this.shadowRoot.querySelector('.btn_submit');
		this.backgroundDef = this.shadowRoot.querySelector('.background_color_default');
		this.backgroundErr = this.shadowRoot.querySelector('.background_color_error');
		this.backgroundSuc = this.shadowRoot.querySelector('.background_color_success');
		this.fileDropzone = this.shadowRoot.querySelector('file-dropzone');
		this.inputDesign = this.shadowRoot.querySelector('input-design');
		
		this.closeButton.addEventListener('click', () => {
			this.backgroundBlur.style.opacity = "0";
			this.backgroundBlur.addEventListener('transitionend', () => {
				this.dispatchEvent(new Event('close'));
				readCSV(this.uploadedFile.uploadedFile);
			}, { once: true });
		});
	}

	initializeElements() {
		this.cacheDOMElements();
		setTimeout(() => {
			this.backgroundBlur.style.opacity = "1";
		}, 300);

		const handleInputChange = () => {
			this.updateSubmitButtonState();
		};
		this.fileDropzone.addEventListener('file-uploaded', handleInputChange);
		this.inputDesign.addEventListener('input-change', handleInputChange);
		this.updateSubmitButtonState();
	}

	updateSubmitButtonState = () => {
		this.updateValues();

		this.modalDescription = this.shadowRoot.querySelector('.modal_description');
		if(this.uploadedFile.error){
			this.backgroundErr.classList.add('active_error', 'active_default');
			this.modalDescription.textContent = this.uploadedFile.errorMsg;
		}
		else {
			this.backgroundErr.classList.remove('active_error', 'active_default');
			this.modalDescription.textContent = 'Перед загрузкой дайте имя файлу';
		}

		const isSubmitEnabled = this.uploadedFile.uploadedFile && this.inputFileName;
		this.submitButton.disabled = !isSubmitEnabled;
		this.submitButton.style.backgroundColor = isSubmitEnabled ? '#5F5CF0' : '';
		this.submitButton.style.cursor = isSubmitEnabled ? 'pointer' : 'auto';
	};

	updateValues() {
		this.uploadedFile = this.fileDropzone.getUploadedFile();
		this.inputFileName = this.inputDesign.getInputValue();
	}

	hideElements(selectors) {
		selectors.forEach(selector => {
			const element = this.shadowRoot.querySelector(selector);
			if (element) element.style.display = 'none';
		});
	}

	async handleSubmit() {
		this.shadowRoot.querySelector('.modal_title').textContent = 'Загрузка файла';

		this.hideElements(['.modal_description', '.modal_content_content', '.modal_footer']);

		this.shadowRoot.querySelector('.modal').style.height = '264px';
		this.shadowRoot.querySelector('.modal_content').style.top = '57px';
		this.shadowRoot.querySelector('.modal_content_loading').style.display = 'flex';

		try {
			const data = await uploadFile(this.uploadedFile.uploadedFile, this.inputFileName);
			const date = new Date(data.timestamp);
			const timestamp = date.toLocaleString('en-GB', dateTime).replace(',', '');
			
			this.data = {
				status: 'success',
				filename: ((data.filename).split('_'))[2],
				name: data.name,
				timestamp: timestamp,
				message: data.message,
				errMessage: ''
			};
		} catch (err) {
			if (err.status && err.message) {
				this.data = {
					status: 'error', filename: '', name: '', timestamp: '', message: '',
					errMessage: `Error: ${err.status} ${err.message}`
				};
			}
		}
		finally {
			this.render();
			this.cacheDOMElements()

			this.backgroundBlur.style.opacity = "1";
			this.hideElements(['.modal_description', '.modal_content_content', '.modal_content_loading', '.modal_footer']);

			this.shadowRoot.querySelector('.modal').style.height = '264px';
			this.shadowRoot.querySelector('.modal_content').style.top = '57px';
			this.shadowRoot.querySelector('.modal_content_response').style.display = 'flex';
			
			const response = this.data.status === 'success';
			this.shadowRoot.querySelector('.modal_title').textContent = response ? 'Файл успешно загружен' : 'Ошибка в загрузке файла';
			this.backgroundDef.classList.add('active_default');
			this.backgroundSuc.classList.add(response ? 'active_success' : 'active_error');
		}
	};
}

customElements.define('modal-window', Modal);
