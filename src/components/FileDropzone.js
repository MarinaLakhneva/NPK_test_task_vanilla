import Dir from '../assets/dir.svg';
import File_back from '../assets/file_back.svg';
import File_front from '../assets/file_front.svg';

class FileDropzone extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.render();
		this.addEventListeners();
	}
	
	startAnimation() {
		this.offset = 0;
		this.direction = 1;
		
		this.animationInterval = setInterval(() => {
			this.offset += this.direction*0.5;
			if (Math.abs(this.offset) >= 5) {
				this.direction *= -1;
			}
			
			const imgBack = this.shadowRoot.querySelector('.img_back');
			const imgFront = this.shadowRoot.querySelector('.img_front');
			
			imgBack.style.transform = `translateY(${this.offset*0.5}px)`;
			imgFront.style.transform = `translateY(-${this.offset*1.3}px)`;
		}, 50);
	}
	
	addEventListeners() {
		const dropzone = this.shadowRoot.querySelector('.block_uploading_file');
		const fileInput = this.shadowRoot.querySelector('#fileInput');
		
		dropzone.addEventListener('click', () => {
			fileInput.click();
		});
		
		fileInput.addEventListener('change', (event) => {
			this.handleFiles(event.target.files);
		});
		
		dropzone.addEventListener('dragover', (event) => {
			event.preventDefault();
			dropzone.classList.add('drag_active');
		});
		
		dropzone.addEventListener('dragleave', () => {
			dropzone.classList.remove('drag_active');
		});
		
		dropzone.addEventListener('drop', (event) => {
			event.preventDefault();
			dropzone.classList.remove('drag_active');
			const files = event.dataTransfer.files;
			this.handleFiles(files);
		});
	}
	
	handleFiles(files) {
		if (files.length > 0) {
			const file = files[0];
			
			if (file.type === 'text/csv' || file.name.endsWith('.csv')) {
				const date = new Date(file.lastModified);
				const fileLastModified = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
				
				const uploadedContainer = this.shadowRoot.querySelector('.file_uploaded');
				uploadedContainer.style.display = 'block';
				
				const uploadedNameDisplay = this.shadowRoot.querySelector('.file_uploaded_name');
				uploadedNameDisplay.textContent = file.name;
				
				const uploadedSizeDisplay = this.shadowRoot.querySelector('.file_uploaded_description_size');
				uploadedSizeDisplay.textContent = `${file.size}б`;
				
				const uploadedLastModifiedDisplay = this.shadowRoot.querySelector('.file_uploaded_description_lastModified');
				uploadedLastModifiedDisplay.textContent = fileLastModified;
				
				const animationContainer = this.shadowRoot.querySelector('.animation_container');
				animationContainer.style.display = 'none';
				const animationDescriptionContainer = this.shadowRoot.querySelector('.animation_description');
				animationDescriptionContainer.style.display = 'none';
				
				
				
				const fileEvent = new CustomEvent('file-uploaded', {
					detail: { file },
					bubbles: true,
					composed: true
				});
				this.dispatchEvent(fileEvent);
				
			} else {
				alert('Пожалуйста, загрузите файл формата CSV.');
			}
		}
	}
	
	disconnectedCallback() {
		clearInterval(this.animationInterval);
	}
	
	render() {
		const style = document.createElement('style');
		style.textContent =`
			.block_uploading_file{
				margin-top: 26.33px;
				padding: 39px 29px 31.24px 27px;
				box-sizing: border-box;
				width: 100%;
				height: 229px;
				border-radius: 30px;
				border: 1px solid #A5A5A5;
				background-color: rgba(255, 255, 255, 0.4);
				transition: border 400ms ease;
			}
			.block_uploading_file.drag_active{
				border: 1px solid #5F5CF0;
			}
			
			.animation_container{
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

			.animation_blur{
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
			
			.animation_description{
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
				opacity: 1; //1->0
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
				margin: 0;
				padding: 0;
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
				margin: 0;
				padding: 0;
				font-weight: 400;
				font-size: 12px;
				color: #5F5CF0;
			}
			
			.file_uploaded_description_value{
				margin: 0;
				padding: 0;
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				width: 70px;
				font-weight: 400;
				font-size: 12px;
				color: #5F5CF0;
			}
		`;
		

		const container = document.createElement('div');
		container.classList.add('block_uploading_file');
		container.innerHTML =`
			<input type="file" id="fileInput" accept=".csv" style="display: none" />
			<div class="animation_container">
				<img src="${Dir}" alt='dir' class="img_dir"/>
				<img src="${File_back}" alt='file' class="img_back"/>
				<img src="${File_front}" alt='file' class="img_front"/>
				<span class="animation_blur"></span>
			</div>
			<p class="animation_description">Перенесите ваш файл сюда</p>
			
			<div class="file_uploaded" style="display:none">
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
		`;
		
		this.shadowRoot.append(style, container);
		this.startAnimation();
	}
}

customElements.define('file-dropzone', FileDropzone);
