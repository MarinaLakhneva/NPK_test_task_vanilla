import './style.css';
import './entities/ButtonOpenModal';

const styles =`
			table {
        border-collapse: collapse;
      }

      thead tr {
        position: sticky;
        top: 0;
        z-index: 1;
      }
      
      th{
				background-color: #5F5CF0;
				color: #ffffff;
			}
			
			td{
				text-align: center;
			}
			
			th, td{
				padding: 5px 10px;
				box-sizing: border-box;
				border: 1px solid #A5A5A5;
			}
			
			.app{
			  display: flex;
			  flex-direction: column;
			  margin: 64px 60px 74px 57px;
			  box-sizing: border-box;
			  gap: 41px;
	    }
	    
	    #container{
	      display: none;
			  flex-direction: column;
			  gap: 10px
	    }
	    
	    #loading{
	      display: none;
	      justify-content: center;
	    }
	    
	    #chart {
        max-width: 600px;
        max-height: 400px;
        width: 100%;
        height: auto;
      }
      
	    #btn-save{
				max-width: 150px;
				width: 100%;
				height: 40px;
				border: none;
				border-radius: 30px;
				font-size: 16px;
				font-weight: 500;
				color: #ffffff;
				background-color: #5F5CF0;
				transition: opacity 400ms ease;
				cursor: pointer;
			}
			
			#btn-save:hover {
				opacity: 0.8;
			}
		`;

document.querySelector('#app').innerHTML = `
  <div class="app">
		<btn-open id="open"></btn-open>
		<div id="loading"><loading-content></loading-content></div>
		<div id="container">
			<canvas id="chart"></canvas>
			<button id="btn-save">Скачать</button>
			<table id="table"></table>
		</div>
  </div>
  <style>${styles}</style>
`
