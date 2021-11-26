/***
 * LIBRARY DOCUMENTATION: https://apexcharts.com/
 * VENDOR FILE: ./vendors/apexcharts.min.js
 * ***/

function InitSmallChart(ChartElement, DataLineOne, DataLineTwo = null, IsNegative = false) {
	InitChart(ChartElement, DataLineOne, DataLineTwo, {
		isLitleChart: true,
		isNegative: IsNegative,
		height: 70,
		width: 60
	});
}

function InitMicroChart(ChartElement, DataLineOne, DataLineTwo = null, IsNegative = false) {
	InitChart(ChartElement, DataLineOne, DataLineTwo, {
		isLitleChart: true,
		isNegative: IsNegative,
		height: 60,
		width: 60
	});
}

function InitDefaultChart(ChartElement, DataLineOne, DataLineTwo = null, IsNegative = false) {
	InitChart(ChartElement, DataLineOne, DataLineTwo, {
		isLitleChart: false,
		isNegative: IsNegative,
		height: 200,
		width: '100%'
	});
}

function InitChart(ChartElement, DataLineOne, DataLineTwo = null, config) {
	if (!ChartElement) return;
	
	var chartArea = ChartElement;
	var colors = ["#81FEEF", "#81FEEF"];

	if (config.isNegative) {
		colors = ["#FFADAD", "#FFADAD"];
	}
	
	if (chartArea) {
		var options = {
			chart: {
				type: 'area',
				height: config.height,
				width: config.width,
				toolbar: {
					show: false
				},
				zoom: {
					enabled: false
				},
				defaultLocale: 'pt-br',
				locales: [
					{
						name: 'pt-br',
						options: {
							months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
							shortMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
							days: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
							shortDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
						}
					}
				]
			},
			stroke: {
				curve: 'smooth',
				width: 2
			},
			colors: colors,
			tooltip: {
				x: {
					show: false
				},
				y: {
					title: {
						formatter: (title, element) => {
							return 'R$ ';
						},
					},
				}
			},
			grid: {
				show: false
			},
			legend: {
				show: false
			},
            dataLabels: {
                enabled: false
            },
			yaxis: {
				show: false,
				labels: {
					style: {
						colors: '#5B5B81',
						fontSize: '14px',
						cssClass: 'apexcharts-yaxis-label'
					}
				}
			},
			xaxis: {
				type: 'datetime',
				labels: {
					datetimeFormatter: {
						year: 'yyyy',
						month: "MMM"
					},
					style: {
						colors: '#5B5B81',
						fontSize: '14px',
						cssClass: 'apexcharts-xaxis-label'
					}
				},
				axisBorder: {
					show: false
				},
				axisTicks: {
					show: false
				},
				tickPlacement: 'on',
				crosshairs: {
					show: false
				},
				tooltip: {
					enabled: true
				}
			},
			series: [
				{
					data: []
				},
				{
					data: []
				}
			],
            fill: {
                type: 'gradient',
                gradient: {
                  type: "vertical",
                  shadeIntensity: 0.5,
                  inverseColors: true,
                  opacityFrom: 1,
                  opacityTo: 0,
                  stops: [0, 100]
                }
            }
		}

		if (DataLineOne) {
			options.series[0].data = DataLineOne;
		}

		if (DataLineTwo) {
			options.series[1].data = DataLineTwo;
		}

		if (config.isLitleChart) {
			options.tooltip.enabled = false;
			options.xaxis.labels.show = false;
			options.xaxis.tooltip.enabled = false;
		}
	
		var chart = new ApexCharts(chartArea, options);
		chart.render();
	}
}