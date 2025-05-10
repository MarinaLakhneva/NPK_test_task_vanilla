import './style.css';
import './components/ButtonOpenModal';
import './components/csvDisplay';

const styles =`
			.app{
			  display: flex;
			  flex-direction: column;
			  padding: 64px 60px 74px 57px;
			  box-sizing: border-box;
			  gap: 41px;
			  height: 100vh;
	    }
		`;

document.querySelector('#app').innerHTML = `
  <div class="app">
		<btn-open></btn-open>
		<csv-display id="CsvDisplay"></csv-display>
  </div>
  <style>${styles}</style>
`
