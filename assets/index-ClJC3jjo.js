(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();const a="data:image/svg+xml,%3csvg%20width='171'%20height='126'%20viewBox='0%200%20171%20126'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.412386%2016.666C0.328426%207.96051%207.31278%200.832773%2016.0182%200.739843L50.8476%200.368042C55.4039%200.319404%2059.1369%203.97358%2059.1855%208.52987C59.2338%2013.049%2062.9088%2016.6882%2067.4281%2016.6922L153.034%2016.768C161.602%2016.7756%20168.597%2023.6203%20168.791%2032.1857L170.521%20108.592C170.721%20117.422%20163.634%20124.696%20154.802%20124.724L17.1332%20125.168C8.46054%20125.196%201.3918%20118.218%201.30816%20109.546L0.412386%2016.666Z'%20fill='%235F5CF0'/%3e%3c/svg%3e",l="data:image/svg+xml,%3csvg%20width='69'%20height='85'%20viewBox='0%200%2069%2085'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.0546875'%20y='16.9419'%20width='47.2491'%20height='71.6357'%20rx='3.78598'%20transform='rotate(-20.0462%200.0546875%2016.9419)'%20fill='%23F1F1F1'/%3e%3crect%20x='10.551'%20y='30.1477'%20width='18.29'%20height='3.04833'%20transform='rotate(-20.0462%2010.551%2030.1477)'%20fill='%23454559'/%3e%3crect%20x='12.3806'%20y='35.1599'%20width='30.4833'%20height='3.04833'%20transform='rotate(-20.0462%2012.3806%2035.1599)'%20fill='%23454559'/%3e%3crect%20x='19.9568'%20y='55.9192'%20width='30.4833'%20height='3.04833'%20transform='rotate(-20.0462%2019.9568%2055.9192)'%20fill='%23454559'/%3e%3crect%20x='14.208'%20y='40.1704'%20width='30.4833'%20height='3.04833'%20transform='rotate(-20.0462%2014.208%2040.1704)'%20fill='%23454559'/%3e%3crect%20x='21.7839'%20y='60.9309'%20width='35.0558'%20height='3.04833'%20transform='rotate(-20.0462%2021.7839%2060.9309)'%20fill='%23454559'/%3e%3crect%20x='16.0376'%20y='45.1824'%20width='25.1487'%20height='3.04833'%20transform='rotate(-20.0462%2016.0376%2045.1824)'%20fill='%23454559'/%3e%3crect%20x='23.6138'%20y='65.9417'%20width='25.1487'%20height='3.04833'%20transform='rotate(-20.0462%2023.6138%2065.9417)'%20fill='%23454559'/%3e%3c/svg%3e",d="data:image/svg+xml,%3csvg%20width='79'%20height='96'%20viewBox='0%200%2079%2096'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='27.9023'%20y='0.557129'%20width='53.9171'%20height='81.7453'%20rx='3.78598'%20transform='rotate(19.8027%2027.9023%200.557129)'%20fill='%23F1F1F1'/%3e%3crect%20x='27.4421'%20y='19.8022'%20width='20.8711'%20height='3.47852'%20transform='rotate(19.8027%2027.4421%2019.8022)'%20fill='%23454559'/%3e%3crect%20x='25.3787'%20y='25.5295'%20width='34.7852'%20height='3.47852'%20transform='rotate(19.8027%2025.3787%2025.5295)'%20fill='%23454559'/%3e%3crect%20x='16.8394'%20y='49.2573'%20width='34.7852'%20height='3.47852'%20transform='rotate(19.8027%2016.8394%2049.2573)'%20fill='%23454559'/%3e%3crect%20x='23.3198'%20y='31.2581'%20width='34.7852'%20height='3.47852'%20transform='rotate(19.8027%2023.3198%2031.2581)'%20fill='%23454559'/%3e%3crect%20x='14.7756'%20y='54.9834'%20width='40.003'%20height='3.47852'%20transform='rotate(19.8027%2014.7756%2054.9834)'%20fill='%23454559'/%3e%3crect%20x='21.2561'%20y='36.9851'%20width='28.6978'%20height='3.47852'%20transform='rotate(19.8027%2021.2561%2036.9851)'%20fill='%23454559'/%3e%3crect%20x='12.7144'%20y='60.7117'%20width='28.6978'%20height='3.47852'%20transform='rotate(19.8027%2012.7144%2060.7117)'%20fill='%23454559'/%3e%3c/svg%3e";class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render(),this.addEventListeners()}render(){const e=document.createElement("style");e.textContent=`
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
		`;const o=document.createElement("div");o.classList.add("block_uploading_file"),o.innerHTML=`
			<input type="file" id="fileInput" accept=".csv" style="display: none" />
			<div class="animation_container">
				<img src="${a}" alt='dir' class="img_dir"/>
				<img src="${l}" alt='file' class="img_back"/>
				<img src="${d}" alt='file' class="img_front"/>
				<span class="animation_blur"></span>
			</div>
			<p class="animation_description">Перенесите ваш файл сюда</p>
		`,this.shadowRoot.append(e,o)}addEventListeners(){const e=this.shadowRoot.querySelector(".block_uploading_file"),o=this.shadowRoot.querySelector("#fileInput");e.addEventListener("click",()=>{o.click()}),o.addEventListener("change",n=>{this.handleFiles(n.target.files)}),e.addEventListener("dragover",n=>{n.preventDefault(),e.classList.add("drag_active")}),e.addEventListener("dragleave",()=>{e.classList.remove("drag_active")}),e.addEventListener("drop",n=>{n.preventDefault(),e.classList.remove("drag_active");const t=n.dataTransfer.files;this.handleFiles(t)})}handleFiles(e){if(e.length>0){const o=e[0];o.type==="text/csv"||o.name.endsWith(".csv")?console.log("Файл загружен:",o.name,o.size):alert("Пожалуйста, загрузите файл формата CSV.")}}}customElements.define("file-dropzone",c);class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){const e=`
			.modal_input_container{
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
			
			.modal_input_container:hover{
				border: 1px solid #5F5CF0;
			}
			
			.input_name_file{
			  border: none;
        outline: none;
				background-color: #F1F1F1;
				font-weight: 500;
				font-size: 17.5px;
				color: #5F5CF0;
				transition: background-color 0.3s ease;
			}
			
			.input_name_file::placeholder {
				font-weight: 500;
				font-size: 17.5px;
				color: #A5A5A5;
			}
			
			.btn_clear{
			  border: none;
			  margin: 0;
			  padding: 0;
			  border: none;
			  font-family: 'Inter', sans-serif;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 33px;
				cursor: auto;
			}
			
			.btn_clear:hover{
				background-color: #F1F1F1;
			}
		`;this.shadowRoot.innerHTML=`
			<div class="modal_input_container">
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
			<style>${e}</style>
		`}}customElements.define("input-design",p);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){const e=`
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
		`;this.shadowRoot.innerHTML=`
			<div class="background_blur">
				<div class='modal'>
					<div class="modal_container">
						<div class="modal_background">
							<div class="background_color_default"></div>
						</div>
						<div class="modal_content">
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
			<style>${e}</style>
		`}}customElements.define("modal-window",h);class f extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.isOpen=!1,this.handleOpenModal=this.handleOpenModal.bind(this),this.render()}handleOpenModal(){this.isOpen=!0,this.render()}render(){const e=`
			.btn_open_modal {
					border: none;
					height: 56px;
					max-width: 277px;
					width: 100%;
					border-radius: 30px;
					font-size: 20px;
					font-weight: 500;
					color: #ffffff;
					background-color: #5F5CF0;
					cursor: pointer;
				}
		`;this.shadowRoot.innerHTML=`
			<button class="btn_open_modal">Загрузить</button>
			${this.isOpen?"<modal-window></modal-window>":""}
			<style>${e}</style>
		`,this.shadowRoot.querySelector(".btn_open_modal").addEventListener("click",this.handleOpenModal)}}customElements.define("btn-open",f);document.querySelector("#app").innerHTML=`
  <div>
		<btn-open></btn-open>
  </div>
`;
