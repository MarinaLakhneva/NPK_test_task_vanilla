import './style.css';
import './entities/ButtonOpenModal';

const styles =`
			table {
        width: 100%;
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
	    
	    #loading{
	      display: none;
	      justify-content: center;
	    }
	    
	    #table{
	      display: none;
	    }
		`;

document.querySelector('#app').innerHTML = `
  <div class="app">
		<btn-open id="open"></btn-open>
		<div id="loading"><loading-content></loading-content></div>
		<canvas id="chart"></canvas>
		<table id="table"></table>
  </div>
  <style>${styles}</style>
`
