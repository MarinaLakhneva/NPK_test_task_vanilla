import { Chart, BarController, LinearScale, BarElement, CategoryScale } from 'chart.js';
Chart.register(BarController, LinearScale, BarElement, CategoryScale);

const carriage = '\n';
export function readCsvFile(file) {
	const loading = document.getElementById('loading');
	const table = document.getElementById('table');
	const ctx = document.getElementById('chart').getContext('2d');
	let chartData = [];
	let labels = [];
	
	if (!file || !FileReader) {
		return;
	}
	
	loading.style.display = 'flex';
	const reader = new FileReader();
	reader.onload = function (e) {
		toTable(e.target.result);
	};
	reader.readAsText(file);
	
	function toTable(text) {
		if (!text || !table) {
			return;
		}
		
		while (table.lastElementChild) {
			table.removeChild(table.lastElementChild);
		}
		
		const rows = text.split(carriage);
		
		const thead = document.createElement('thead');
		const tr = document.createElement('tr');
		const headers = rows.shift().trim().split(/;/);
		headers.forEach(function (h, index) {
			const th = document.createElement('th');
			const ht = h.trim();
			if (!ht) {
				return;
			}
			
			th.textContent = ht;
			tr.appendChild(th);
			thead.appendChild(tr);
			
			if (index > 0) {
				labels.push(ht);
			}
		});
		table.appendChild(thead);
		
		const tbody = document.createElement('tbody');
		rows.forEach(function (r) {
			const tr = document.createElement('tr');
			const rt = r.trim();
			if (!rt) {
				return;
			}
			
			const data = rt.split(/;/);
			data.forEach(function (d, index) {
				const td = document.createElement('td');
				const dt = d.trim();
				const input = document.createElement('input');
				input.type = 'text';
				input.value = dt;
				
				td.appendChild(input);
				tr.appendChild(td);
				tbody.appendChild(tr);
				
				if (index > 0) {
					chartData.push(parseFloat(dt));
				}
			});
			table.appendChild(tbody);
		});
		
		loading.style.display = 'none';
		table.style.display = 'table';
		let curChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: labels,
				datasets: [{
					label: 'Данные из CSV',
					data: chartData,
					backgroundColor: 'rgba(95, 92, 240, 0.2)',
					borderColor: '#5F5CF0',
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
		
		function clearChart() {
			if (curChart) {
				curChart.destroy();
				curChart = null;
			}
		}
		document.getElementById('open').addEventListener('click', clearChart);
	}
}
