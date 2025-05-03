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
				transition: background-color 400ms ease;
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
				left: 40px;
				top: 24px;
			}
			
			.img_front{
				position: absolute;
				right: 40px;
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
		`;
		
		this.shadowRoot.append(style, container);
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
				console.log('Файл загружен:', file.name, file.size);
			} else {
				alert('Пожалуйста, загрузите файл формата CSV.');
			}
		}
	}
}

customElements.define('file-dropzone', FileDropzone);
