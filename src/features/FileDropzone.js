import Dir from '../assets/dir.svg';
import File_back from '../assets/file_back.svg';
import File_front from '../assets/file_front.svg';

import {date as dateFormat} from '../shared/constants';

class FileDropzone extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.render();
		
		this.fileData = {
			uploadedFile: null,
			error: false,
			errorMsg: ''
		};
		
		this.initializeElements();
		this.setupEventListeners();
	}
	
	render() {
		const styles =`
			p{
			 	margin: 0;
				padding: 0;
			}
			
			.block_uploading_file{
				margin-top: 26.33px;
				padding: 39px 29px 31.24px 27px;
				box-sizing: border-box;
				width: 100%;
				height: 229px;
				border: 1px solid #A5A5A5;
				border-radius: 30px;
				background-color: rgba(255, 255, 255, 0.4);
				transition: border 400ms ease;
			}
			.block_uploading_file.block_uploading_file_active{
				border: 1px solid #5F5CF0;
			}
			
			.dropzone{
				position: relative;
				display: flex;
				justify-content: center;
				cursor: pointer;
			}

			.img_dir{
				position: absolute;
			}
			
			.img_back{
				position: absolute;
				left: 38px;
				top: 24px;
			}
			
			.img_front{
				position: absolute;
				right: 48px;
				top: 22px;
			}

			.dropzone_blur{
				position: absolute;
				margin-top: 41px;
				width: 170.84px;
				height: 84.06px;
				border-radius: 15.77px;
				backdrop-filter: blur(1px);
				background-color: rgba(44, 44, 44, 0.2);
				box-shadow: inset 0 2.52px 2.52px 0  rgba(255, 255, 255, 0.25);
				z-index: 1;
			}
			
			.dropzone_description{
				display: flex;
				justify-content: center;
				margin-top: 140px;
				font-weight: 600;
				font-size: 14px;
				color: #5F5CF0;
			}
			
			.file_uploaded{
				display: flex;
				flex-direction: column;
				justify-content: center;
				opacity: 0;
				transition: opacity 400ms ease;
			}
			
			.file_uploaded_title{
				display: flex;
				justify-content: center;
				font-weight: 600;
				font-size: 18px;
				color: #5F5CF0;
			}
			
			.file_uploaded_container{
				display: flex;
				flex-direction: column;
				justify-content: center;
				margin-top: 31px;
				font-weight: 600;
				font-size: 14px;
				color: #5F5CF0;
				gap: 9px;
			}
			
			.file_uploaded_name{
				font-weight: 500;
				font-size: 12px;
				color: #5F5CF0;
			}
			
			.file_uploaded_description{
				display: flex;
				flex-direction: column;
				gap: 5px;
			}
			
			.file_uploaded_description_container{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}
			
			.file_uploaded_description_title{
				font-weight: 400;
				font-size: 12px;
				color: #5F5CF0;
			}
			
			.file_uploaded_description_value{
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				width: 70px;
				font-weight: 400;
				font-size: 12px;
				color: #5F5CF0;
			}
		`;
		
		this.shadowRoot.innerHTML = `
			<div class="block_uploading_file">
				<input type="file" id="fileInput" accept=".csv" style="display: none" />
				<div class="dropzone">
					<img src="${Dir}" alt='dir' class="img_dir"/>
					<img src="${File_back}" alt='file' class="img_back"/>
					<img src="${File_front}" alt='file' class="img_front"/>
					<span class="dropzone_blur"></span>
				</div>
				<p class="dropzone_description">Перенесите ваш файл сюда</p>
				
				<div class="file_uploaded">
					<p class="file_uploaded_title">Успешно добавлен</p>
					<div class="file_uploaded_container">
						<p class="file_uploaded_name"></p>
						<div class="file_uploaded_description">
							<div class="file_uploaded_description_container">
								<p class="file_uploaded_description_title">Размер файла:</p>
								<p class="file_uploaded_description_value file_uploaded_description_size"></p>
							</div>
							<div class="file_uploaded_description_container">
								<p class="file_uploaded_description_title">Дата изменения:</p>
								<p class="file_uploaded_description_value file_uploaded_description_lastModified"></p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<style>${styles}</style>
		`;
		
		this.startAnimation();
	}
	
	startAnimation() {
		this.offset = 0;
		this.direction = 1;
		
		this.animationInterval = setInterval(() => {
			this.offset += this.direction * 0.5;
			if (Math.abs(this.offset) >= 5) {
				this.direction *= -1;
			}
			
			const imgBack = this.shadowRoot.querySelector('.img_back');
			const imgFront = this.shadowRoot.querySelector('.img_front');
			
			imgBack.style.transform = `translateY(${this.offset * 0.5}px)`;
			imgFront.style.transform = `translateY(${-this.offset * 1.3}px)`;
		}, 50);
	}
	
	initializeElements() {
		this.blockUploadingFile = this.shadowRoot.querySelector('.block_uploading_file');
		this.dropzone = this.shadowRoot.querySelector('.dropzone');
		this.fileInput = this.shadowRoot.querySelector('#fileInput');
	}
	
	setupEventListeners() {
		this.dropzone.addEventListener('click', () => this.fileInput.click());
		this.fileInput.addEventListener('change', (event) => this.handleFileUpload(event.target.files));
		
		this.dropzone.addEventListener('dragover', (event) => {
			event.preventDefault();
			this.blockUploadingFile.classList.add('block_uploading_file_active');
		});
		this.dropzone.addEventListener('dragleave', () => {
			this.blockUploadingFile.classList.remove('block_uploading_file_active')
		});
		this.dropzone.addEventListener('drop', (event) => {
			event.preventDefault();
			this.blockUploadingFile.classList.remove('block_uploading_file_active');
			this.handleFileUpload(event.dataTransfer.files);
		});
	}
	
	handleFileUpload(files) {
		if (files.length === 0) return;
		const file = files[0];
		
		if (this.isValidFile(file)) {
			if(files.length > 1){
				this.fileData = {
					uploadedFile: null,
					error: true,
					errorMsg: 'Загрузить можно только один файл'
				};
			}
			else {
				if (file.size > 1073741824) {
					this.fileData = {
						uploadedFile: null,
						error: true,
						errorMsg: 'Размер файла не должен превышать 1ГБ'
					};
				}
				else {
					this.fileData = {
						uploadedFile: file,
						error: false,
						errorMsg: ''
					};
					this.displayFileInfo(file);
				}
			}
		} else {
			this.fileData = {
				uploadedFile: null,
				error: true,
				errorMsg: 'Неправильный формат файла'
			};
		}
		this.dispatchFileUploadedEvent(file);
	}
	
	isValidFile(file) {
		return file.type === 'text/csv' || file.name.endsWith('.csv');
	}
	
	displayFileInfo(file) {
		const date = new Date(file.lastModified);
		const fileTimestamp = date.toLocaleString('en-GB', dateFormat).replace(',', '');

		this.shadowRoot.querySelector('.file_uploaded_name').textContent = file.name;
		this.shadowRoot.querySelector('.file_uploaded_description_size').textContent = `${file.size}б`;
		this.shadowRoot.querySelector('.file_uploaded_description_lastModified').textContent = fileTimestamp;
		
		this.shadowRoot.querySelector('.dropzone').style.display = 'none';
		this.shadowRoot.querySelector('.dropzone_description').style.display = 'none';
		this.shadowRoot.querySelector('.file_uploaded').style.opacity = "1";
	}
	
	dispatchFileUploadedEvent(file) {
		const fileEvent = new CustomEvent('file-uploaded', {
			detail: { file },
			bubbles: true,
			composed: true
		});
		this.dispatchEvent(fileEvent);
	}
	
	getUploadedFile() {
		return this.fileData;
	}
}

customElements.define('file-dropzone', FileDropzone);
