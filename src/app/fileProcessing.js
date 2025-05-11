import { Chart, BarController, LinearScale, BarElement, CategoryScale } from 'chart.js';
Chart.register(BarController, LinearScale, BarElement, CategoryScale);

const carriage = '\n';
export function readCSV(file) {
	const content = document.getElementById('container');
	const loading = document.getElementById('loading');
	const table = document.getElementById('table');
	let head = [];
	
	const ctx = document.getElementById('chart').getContext('2d');
	let chartData = [];
	let labels = [];
	
	if (!file || !FileReader) {
		return;
	}
	
	// Отображаем загрузку пока формируется таблица и строится график
	loading.style.display = 'flex';
	// Создаем новый экземпляр объекта FileReader, который предоставляет методы для чтения содержимого файла
	const reader = new FileReader();
	reader.onload = function (e) {
		toTable(e.target.result);
	};
	// В случае успеха, содержимое файла будет доступно в e.target.result в обработчике onload
	reader.readAsText(file);
	
	function toTable(text) {
		if (!text || !table) {
			return;
		}
		
		while (table.lastElementChild) {
			table.removeChild(table.lastElementChild);
		}
		
		// Разбиваем строку на массив подстрок используя значение carriage в качестве разделителя
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
			
			head.push(ht);
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
				
				input.addEventListener('input', function () {
					chartData[index - 1] = parseFloat(input.value);
					curChart.update();
				});
				
				td.appendChild(input);
				tr.appendChild(td);
				tbody.appendChild(tr);
				
				// Начинаем со второго столбца таблицы, поскольку с него начинаются экспериментальные данные
				if (index > 0) {
					chartData.push(parseFloat(dt));
				}
			});
			table.appendChild(tbody);
		});
		
		loading.style.display = 'none';
		content.style.display = 'flex';
		let curChart = new Chart(ctx, {
			type: 'bar', // Тип графика: столбчатая диаграмма
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
						beginAtZero: true // Начало оси y с нуля
					}
				}
			}
		});
		
		function downloadCSV() {
			let csvContent = "data:text/csv;charset=utf-8," + head.join(";") + carriage;
			// Проходим по каждой строке таблицы (tbody) и извлекаем данные
			Array.from(tbody.rows).forEach(row => {
				const rowData = Array.from(row.cells).map(cell => cell.firstChild.value).join(";");
				csvContent += rowData + carriage;
			});
			
			// Кодируем содержимое CSV для использования в URI
			const encodedUri = encodeURI(csvContent);
			const link = document.createElement("a");
			// Устанавливаем атрибут href со сгенерированным URI
			link.setAttribute("href", encodedUri);
			link.setAttribute("download", "dear.csv");
			
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
		document.getElementById('btn-save').addEventListener('click', downloadCSV);
		
		function clearChart() {
			content.style.display = 'none';
			if (curChart) {
				curChart.destroy();
				curChart = null;
			}
		}
		document.getElementById('open').addEventListener('click', clearChart);
	}
}
