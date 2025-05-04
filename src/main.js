import './style.css';
import './components/ButtonOpenModal';

document.querySelector('#app').innerHTML = `
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
`
