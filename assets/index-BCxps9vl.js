var c=Object.defineProperty;var p=(n,e,t)=>e in n?c(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var a=(n,e,t)=>p(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const h="data:image/svg+xml,%3csvg%20width='171'%20height='126'%20viewBox='0%200%20171%20126'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.412386%2016.666C0.328426%207.96051%207.31278%200.832773%2016.0182%200.739843L50.8476%200.368042C55.4039%200.319404%2059.1369%203.97358%2059.1855%208.52987C59.2338%2013.049%2062.9088%2016.6882%2067.4281%2016.6922L153.034%2016.768C161.602%2016.7756%20168.597%2023.6203%20168.791%2032.1857L170.521%20108.592C170.721%20117.422%20163.634%20124.696%20154.802%20124.724L17.1332%20125.168C8.46054%20125.196%201.3918%20118.218%201.30816%20109.546L0.412386%2016.666Z'%20fill='%235F5CF0'/%3e%3c/svg%3e",u="data:image/svg+xml,%3csvg%20width='69'%20height='85'%20viewBox='0%200%2069%2085'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.0546875'%20y='16.9419'%20width='47.2491'%20height='71.6357'%20rx='3.78598'%20transform='rotate(-20.0462%200.0546875%2016.9419)'%20fill='%23F1F1F1'/%3e%3crect%20x='10.551'%20y='30.1477'%20width='18.29'%20height='3.04833'%20transform='rotate(-20.0462%2010.551%2030.1477)'%20fill='%23454559'/%3e%3crect%20x='12.3806'%20y='35.1599'%20width='30.4833'%20height='3.04833'%20transform='rotate(-20.0462%2012.3806%2035.1599)'%20fill='%23454559'/%3e%3crect%20x='19.9568'%20y='55.9192'%20width='30.4833'%20height='3.04833'%20transform='rotate(-20.0462%2019.9568%2055.9192)'%20fill='%23454559'/%3e%3crect%20x='14.208'%20y='40.1704'%20width='30.4833'%20height='3.04833'%20transform='rotate(-20.0462%2014.208%2040.1704)'%20fill='%23454559'/%3e%3crect%20x='21.7839'%20y='60.9309'%20width='35.0558'%20height='3.04833'%20transform='rotate(-20.0462%2021.7839%2060.9309)'%20fill='%23454559'/%3e%3crect%20x='16.0376'%20y='45.1824'%20width='25.1487'%20height='3.04833'%20transform='rotate(-20.0462%2016.0376%2045.1824)'%20fill='%23454559'/%3e%3crect%20x='23.6138'%20y='65.9417'%20width='25.1487'%20height='3.04833'%20transform='rotate(-20.0462%2023.6138%2065.9417)'%20fill='%23454559'/%3e%3c/svg%3e",f="data:image/svg+xml,%3csvg%20width='79'%20height='96'%20viewBox='0%200%2079%2096'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='27.9023'%20y='0.557129'%20width='53.9171'%20height='81.7453'%20rx='3.78598'%20transform='rotate(19.8027%2027.9023%200.557129)'%20fill='%23F1F1F1'/%3e%3crect%20x='27.4421'%20y='19.8022'%20width='20.8711'%20height='3.47852'%20transform='rotate(19.8027%2027.4421%2019.8022)'%20fill='%23454559'/%3e%3crect%20x='25.3787'%20y='25.5295'%20width='34.7852'%20height='3.47852'%20transform='rotate(19.8027%2025.3787%2025.5295)'%20fill='%23454559'/%3e%3crect%20x='16.8394'%20y='49.2573'%20width='34.7852'%20height='3.47852'%20transform='rotate(19.8027%2016.8394%2049.2573)'%20fill='%23454559'/%3e%3crect%20x='23.3198'%20y='31.2581'%20width='34.7852'%20height='3.47852'%20transform='rotate(19.8027%2023.3198%2031.2581)'%20fill='%23454559'/%3e%3crect%20x='14.7756'%20y='54.9834'%20width='40.003'%20height='3.47852'%20transform='rotate(19.8027%2014.7756%2054.9834)'%20fill='%23454559'/%3e%3crect%20x='21.2561'%20y='36.9851'%20width='28.6978'%20height='3.47852'%20transform='rotate(19.8027%2021.2561%2036.9851)'%20fill='%23454559'/%3e%3crect%20x='12.7144'%20y='60.7117'%20width='28.6978'%20height='3.47852'%20transform='rotate(19.8027%2012.7144%2060.7117)'%20fill='%23454559'/%3e%3c/svg%3e";class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render(),this.initializeElements(),this.setupEventListeners(),this.fileData={uploadedFile:null,error:!1,errorMsg:""}}render(){const e=`
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
				margin: 0;
				padding: 0;
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
		`;this.shadowRoot.innerHTML=`
			<div class="block_uploading_file">
				<input type="file" id="fileInput" accept=".csv" style="display: none" />
				<div class="dropzone">
					<img src="${h}" alt='dir' class="img_dir"/>
					<img src="${u}" alt='file' class="img_back"/>
					<img src="${f}" alt='file' class="img_front"/>
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
			<style>${e}</style>
		`,this.startAnimation()}startAnimation(){this.offset=0,this.direction=1,this.animationInterval=setInterval(()=>{this.offset+=this.direction*.5,Math.abs(this.offset)>=5&&(this.direction*=-1);const e=this.shadowRoot.querySelector(".img_back"),t=this.shadowRoot.querySelector(".img_front");e.style.transform=`translateY(${this.offset*.5}px)`,t.style.transform=`translateY(${-this.offset*1.3}px)`},50)}initializeElements(){this.blockUploadingFile=this.shadowRoot.querySelector(".block_uploading_file"),this.dropzone=this.shadowRoot.querySelector(".dropzone"),this.fileInput=this.shadowRoot.querySelector("#fileInput")}setupEventListeners(){this.dropzone.addEventListener("click",()=>this.fileInput.click()),this.fileInput.addEventListener("change",e=>this.handleFileUpload(e.target.files)),this.dropzone.addEventListener("dragover",e=>{e.preventDefault(),this.blockUploadingFile.classList.add("block_uploading_file_active")}),this.dropzone.addEventListener("dragleave",()=>{this.blockUploadingFile.classList.remove("block_uploading_file_active")}),this.dropzone.addEventListener("drop",e=>{e.preventDefault(),this.blockUploadingFile.classList.remove("block_uploading_file_active"),this.handleFileUpload(e.dataTransfer.files)})}handleFileUpload(e){if(e.length===0)return;const t=e[0];this.isValidFile(t)?(this.fileData={uploadedFile:t,error:!1,errorMsg:""},this.displayFileInfo(t)):this.fileData={uploadedFile:null,error:!0,errorMsg:"Неправильный формат файла"},this.dispatchFileUploadedEvent(t)}isValidFile(e){return e.type==="text/csv"||e.name.endsWith(".csv")}displayFileInfo(e){const t=new Date(e.lastModified),i=`${String(t.getDate()).padStart(2,"0")}/${String(t.getMonth()+1).padStart(2,"0")}/${t.getFullYear()}`;this.shadowRoot.querySelector(".file_uploaded_name").textContent=e.name,this.shadowRoot.querySelector(".file_uploaded_description_size").textContent=`${e.size}б`,this.shadowRoot.querySelector(".file_uploaded_description_lastModified").textContent=i,this.shadowRoot.querySelector(".dropzone").style.display="none",this.shadowRoot.querySelector(".dropzone_description").style.display="none",this.shadowRoot.querySelector(".file_uploaded").style.opacity="1"}dispatchFileUploadedEvent(e){const t=new CustomEvent("file-uploaded",{detail:{file:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}getUploadedFile(){return this.fileData}}customElements.define("file-dropzone",m);class g extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render(),this.initializeElements(),this.setupEventListeners()}render(){const e=`
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
			
			.hover{
				transition: all ease 400ms;
			}
			
			.modal_input_container.hover {
				background-color: #BBB9D2;
			}
			
			.modal_input_container:hover{
				border: 1px solid #5F5CF0;
			}
			
			.modal_input_container.active {
        border-color: #5F5CF0;
      }

			.input_name_file{
			  border: none;
        outline: none;
				background-color: #F1F1F1;
				font-weight: 500;
				font-size: 17.5px;
				color: #5F5CF0;
				transition: all ease 400ms;
			}
			
			.input_name_file::placeholder {
				font-weight: 500;
				font-size: 17.5px;
				color: #A5A5A5;
			}
			
			.input_name_file.hover {
				background-color: #BBB9D2;
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
		`}initializeElements(){this.inputContainer=this.shadowRoot.querySelector(".modal_input_container"),this.inputElement=this.shadowRoot.querySelector(".input_name_file"),this.clearButton=this.shadowRoot.querySelector(".btn_clear"),this.setupEventListeners(),this.updateClearButton()}setupEventListeners(){this.clearButton.addEventListener("click",()=>this.clearInput()),this.inputElement.addEventListener("input",e=>this.handleInputChange(e)),this.clearButton.addEventListener("mouseenter",()=>{this.inputElement.value.trim()!==""&&(this.inputElement.classList.add("hover"),this.inputContainer.classList.add("hover"))}),this.clearButton.addEventListener("mouseleave",()=>{this.inputElement.classList.remove("hover"),this.inputContainer.classList.remove("hover")})}handleInputChange(e){const t=e.target.value;this.updateClearButton(t),this.dispatchEvent(new CustomEvent("input-change",{detail:{value:t},bubbles:!0,composed:!0}))}updateClearButton(e=""){this.clearButton.disabled=e.trim()==="",this.clearButton.style.cursor=e.trim()===""?"auto":"pointer",e.trim()!==""?this.inputContainer.classList.add("active"):this.inputContainer.classList.remove("active")}clearInput(){this.inputElement.value="",this.updateClearButton(),this.inputElement.classList.remove("hover"),this.inputContainer.classList.remove("hover"),this.dispatchEvent(new CustomEvent("input-change",{detail:{value:""},bubbles:!0,composed:!0}))}getInputValue(){return this.inputElement.value}}customElements.define("input-design",g);const _="data:image/svg+xml,%3csvg%20width='66'%20height='70'%20viewBox='0%200%2066%2070'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_di_2220_522)'%3e%3cpath%20d='M27.8384%2058.1079C27.1498%2060.4434%2024.6802%2061.8061%2022.4636%2060.7984C19.1111%2059.2743%2016.0412%2057.1692%2013.4006%2054.5696C9.70921%2050.9353%206.97104%2046.4467%205.42867%2041.5015C3.8863%2036.5562%203.58734%2031.3069%204.55828%2026.2185C5.52921%2021.1301%207.74007%2016.3597%2010.995%2012.3298C14.2499%208.29993%2018.4485%205.13499%2023.2188%203.11532C27.9891%201.09566%2033.1838%200.28362%2038.3429%200.751128C43.5019%201.21864%2048.4661%202.95126%2052.7956%205.79553C55.8925%207.83007%2058.5964%2010.3885%2060.7916%2013.3453C62.2431%2015.3003%2061.4304%2018.0013%2059.292%2019.1658C57.1537%2020.3303%2054.5054%2019.5042%2052.9498%2017.6311C51.52%2015.9095%2049.8381%2014.4026%2047.9542%2013.165C44.8366%2011.1169%2041.262%209.86925%2037.5471%209.53261C33.8322%209.19596%2030.0915%209.7807%2026.6565%2011.235C23.2216%2012.6893%2020.1983%2014.9684%2017.8544%2017.8702C15.5106%2020.772%2013.9186%2024.2071%2013.2195%2027.8712C12.5203%2031.5352%2012.7356%2035.3152%2013.8462%2038.8761C14.9569%2042.4371%2016.9286%2045.6693%2019.5867%2048.2862C21.1929%2049.8676%2023.0199%2051.1949%2025.0038%2052.2305C27.1623%2053.3572%2028.527%2055.7724%2027.8384%2058.1079Z'%20fill='%235F5CF0'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_di_2220_522'%20x='0'%20y='-3.37744'%20width='65.5239'%20height='72.512'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='4'/%3e%3cfeGaussianBlur%20stdDeviation='2'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.172549%200%200%200%200%200.172549%200%200%200%200%200.172549%200%200%200%200.2%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_2220_522'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_2220_522'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='-5'/%3e%3cfeGaussianBlur%20stdDeviation='2'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.2%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect2_innerShadow_2220_522'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e";class b extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){const e=`
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
		`;this.shadowRoot.innerHTML=`
			<img src="${_}" class='throbber' alt='throbber' />
			<style>${e}</style>
		`}}customElements.define("loading-element",b);class x extends HTMLElement{static get observedAttributes(){return["data-file"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render(),this.error=!1,this.initializeElements()}attributeChangedCallback(e,t,i){this.render()}render(){const e=JSON.parse(this.getAttribute("data-file")),t=e.filename||"",i=e.name||"",o=e.timestamp||"",s=e.message||"",r=e.errMessage||"",l=e.status||"";this.error=l==="error";const d=`
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
		`;this.shadowRoot.innerHTML=`
			<div class="modal_content_request_response">
				<p class="request_response_description">filename:</p>
				<p class="request_response_description">${t}</p>
				<div class="request_response">
					<p class="request_response_description">name: ${i}</p>
					<p class="request_response_description">timestamp: ${o}</p>
					<p class="request_response_description">message: ${s}</p>
				</div>
			</div>
			<div class="modal_content_request_response-error">
				<div class="request_response">
					<p class="request_response_description">${r}</p>
				</div>
			</div>
			<style>${d}</style>
		`}initializeElements(){this.error&&(this.shadowRoot.querySelector(".modal_content_request_response").style.display="none",this.shadowRoot.querySelector(".modal_content_request_response-error").style.display="flex")}}customElements.define("request-response",x);const y=async(n,e)=>{const t=new FormData;t.append("file",n),t.append("name",e);try{const i=await fetch("https://file-upload-server-mc26.onrender.com/api/v1/upload",{method:"POST",body:t});if(!i.ok){const s=await i.json();throw new Error(JSON.stringify({status:i.status,message:s.message||"Ошибка загрузки файла"}))}return await i.json()}catch(i){const{status:o,message:s}=JSON.parse(i.message);return{status:o,message:s}}},v={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"UTC"};class w extends HTMLElement{constructor(){super();a(this,"updateSubmitButtonState",()=>{this.updateValues(),this.modalDescription=this.shadowRoot.querySelector(".modal_description"),this.uploadedFile.error?(this.backgroundErr.classList.add("active_error","active_default"),this.modalDescription.textContent=this.uploadedFile.errorMsg):(this.backgroundErr.classList.remove("active_error","active_default"),this.modalDescription.textContent="Перед загрузкой дайте имя файлу");const t=this.uploadedFile.uploadedFile&&this.inputFileName;this.submitButton.disabled=!t,this.submitButton.style.backgroundColor=t?"#5F5CF0":"",this.submitButton.style.cursor=t?"pointer":"auto"});this.attachShadow({mode:"open"}),this.render(),this.initializeElements(),this.uploadedFile=null,this.inputFileName="",this.data=null,this.updateValues()}render(){const t=`
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
				border: none;
				padding: 16px 88px;
				box-sizing: border-box;
				height: 56px;
				width: 100%;
				border-radius: 30px;
				background: #BBB9D2;
				font-weight: 500;
				font-size: 20px;
				color: #ffffff;
				transition: background-color 400ms ease;
				cursor: auto;
			}
		`;let i;this.data&&(i=`<request-response data-file='${JSON.stringify(this.data)}'></request-response>`),this.shadowRoot.innerHTML=`
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
								<loading-element></loading-element>
							</div>
							<div class='modal_content_response'>
								${i}
							</div>
						</div>
						<div class="modal_footer">
							<button class="btn_submit" onclick="this.getRootNode().host.handleSubmit()">Загрузить</button>
						</div>
					</div>
				</div>
			</div>
			<style>${t}</style>
		`}cacheDOMElements(){this.closeButton=this.shadowRoot.querySelector(".btn_close_modal"),this.closeButton.addEventListener("click",()=>{this.dispatchEvent(new Event("close"))}),this.backgroundBlur=this.shadowRoot.querySelector(".background_blur"),this.submitButton=this.shadowRoot.querySelector(".btn_submit"),this.backgroundDef=this.shadowRoot.querySelector(".background_color_default"),this.backgroundErr=this.shadowRoot.querySelector(".background_color_error"),this.backgroundSuc=this.shadowRoot.querySelector(".background_color_success"),this.fileDropzone=this.shadowRoot.querySelector("file-dropzone"),this.inputDesign=this.shadowRoot.querySelector("input-design")}initializeElements(){this.cacheDOMElements(),setTimeout(()=>{this.backgroundBlur.style.opacity="1"},300);const t=()=>{this.updateSubmitButtonState()};this.fileDropzone.addEventListener("file-uploaded",t),this.inputDesign.addEventListener("input-change",t),this.updateSubmitButtonState()}updateValues(){this.uploadedFile=this.fileDropzone.getUploadedFile(),this.inputFileName=this.inputDesign.getInputValue()}hideElements(t){t.forEach(i=>{const o=this.shadowRoot.querySelector(i);o&&(o.style.display="none")})}async handleSubmit(){this.shadowRoot.querySelector(".modal_title").textContent="Загрузка файла",this.hideElements([".modal_description",".modal_content_content",".modal_footer"]),this.shadowRoot.querySelector(".modal").style.height="264px",this.shadowRoot.querySelector(".modal_content").style.top="57px",this.shadowRoot.querySelector(".modal_content_loading").style.display="flex";try{const t=await y(this.uploadedFile.uploadedFile,this.inputFileName),o=new Date(t.timestamp).toLocaleString("en-GB",v).replace(",","");this.data={status:"success",filename:t.filename.split("_")[2],name:t.name,timestamp:o,message:t.message,errMessage:""}}catch(t){t.status&&t.message&&(this.data={status:"error",filename:"",name:"",timestamp:"",message:"",errMessage:`Error: ${t.status} ${t.message}`})}finally{this.render(),this.cacheDOMElements(),this.backgroundBlur.style.opacity="1",this.hideElements([".modal_content_content",".modal_description",".modal_footer",".modal_content_loading"]),this.shadowRoot.querySelector(".modal").style.height="264px",this.shadowRoot.querySelector(".modal_content").style.top="57px",this.shadowRoot.querySelector(".modal_content_response").style.display="flex",this.backgroundDef.classList.add("active_default");const t=this.data.status==="success";this.shadowRoot.querySelector(".modal_title").textContent=t?"Файл успешно загружен":"Ошибка в загрузке файла",this.backgroundSuc.classList.add(t?"active_success":"active_error")}}}customElements.define("modal-window",w);class F extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.isOpen=!1,this.handleOpenModal=this.handleOpenModal.bind(this),this.handleCloseModal=this.handleCloseModal.bind(this),this.render()}handleOpenModal(){this.isOpen=!0,this.render()}handleCloseModal(){this.isOpen=!1,this.render()}render(){const e=`
			.btn_open_modal {
					height: 56px;
					max-width: 277px;
					width: 100%;
					border: none;
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
		`,this.shadowRoot.querySelector(".btn_open_modal").addEventListener("click",this.handleOpenModal),this.isOpen&&this.shadowRoot.querySelector("modal-window").addEventListener("close",this.handleCloseModal)}}customElements.define("btn-open",F);document.querySelector("#app").innerHTML=`
  <div class="app">
		<btn-open></btn-open>
		<div class="table"></div>
  </div>
  <style>
    .app{
		  display: flex;
		  flex-direction: column;
		  padding: 64px 60px 74px 57px;
		  box-sizing: border-box;
		  gap: 41px;
		  height: 100vh;
    }
    .table{
			  display: flex;
			  background-color: #F1F1F1;
			  flex-grow: 1;
		}
	</style>
`;
