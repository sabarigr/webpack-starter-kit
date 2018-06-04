webpackJsonp([0],{

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery, $) {

__webpack_require__(133);

__webpack_require__(135);

__webpack_require__(136);

__webpack_require__(138);

__webpack_require__(139);

__webpack_require__(140);

__webpack_require__(141);

__webpack_require__(143);

var _devbridgeAutocomplete = __webpack_require__(145);

var _devbridgeAutocomplete2 = _interopRequireDefault(_devbridgeAutocomplete);

var _datatables = __webpack_require__(146);

var _datatables2 = _interopRequireDefault(_datatables);

__webpack_require__(147);

__webpack_require__(148);

__webpack_require__(152);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* moved swapSelect function as a jQuery plugin */
(function ($) {
	$.fn.swapSelect = function () {
		var buttonGroups = this;
		var init = function init() {
			buttonGroups.each(function (index, group) {
				$('.btn', group).click(function (event) {
					var button = $(event.target);
					button.siblings().removeClass('is-active');
					button.addClass('is-active');
				}).eq(0).click(); // The default highlighted button;
			});
		};
		init();
		return this;
	};
})(jQuery); // import styles
//require('datatables.net-bs4/css/dataTables.bootstrap4.css');


$(document).ready(function () {

	/* declare variables here */
	var headerNav = $('header.has-nav');

	/* declare the functions here */
	var toggleSidebar = function toggleSidebar() {
		var breakpoint = 768;
		if ($('.has-nav').length > 0) {
			breakpoint = 1200;
		}
		if ($(window).innerWidth() > breakpoint) {
			$('body').removeClass('is-collapsed');
		} else {
			$('body').addClass('is-collapsed');
		}
	};

	var setContentSpacing = function setContentSpacing() {
		$('.content').css('padding-top', headerNav.innerHeight());
	};

	var asin = [{
		value: 'B018E65WW2',
		data: 'THERMO PURE Natural Fat Burner Caffeine Free Weight Loss Pills and Healthy Appetite Suppressant Dietary Supplement, 60 Capsule'
	}, {
		value: 'B01BON4QAQ',
		data: 'PAIN-MD, Top Pain Relief Supplement, Fast Acting Natural Formula for Joint Pain Relief and Muscle Discomfort, More Flexibility with Anti-Inflammatory'
	}, {
		value: 'B01NBHK5XX',
		data: 'Install Centric ICGM12BNGM 2005-16 Class II Complete Installation Solution for Car Stereos'
	}, {
		value: 'B01EXS1NA0',
		data: 'New Domaine Shredded Latex Cooling pillow- Queen'
	}];

	$('#myInput').autocomplete({
		lookup: asin,
		onSelect: function onSelect(suggestion) {
			//var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
			$('#hiddenasin').val('');
			$('#hiddenasin').val(suggestion.value);
			$('#myInput').val(suggestion.data);
		}
	});

	/* register events here */
	$('.navbar-toggle').click(function (event) {
		event.preventDefault();
		$('body').toggleClass('is-collapsed');
	});

	$('#togglepwd').click(function (event) {
		event.preventDefault();
		var input = $('#currentpwd');
		var icon = $('#togglepwd i');
		if (input.attr('type') === 'password') {
			input.attr('type', 'text');
			icon.removeClass('icon-eye').addClass('icon-eye-blocked');
		} else {
			input.attr('type', 'password');
			icon.removeClass('icon-eye-blocked').addClass('icon-eye');
		}
	});

	$('.overlay').click(function () {
		toggleSidebar();
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() > 50) {
			headerNav.addClass('is-scrolling');
		} else {
			headerNav.removeClass('is-scrolling');
		}
	});

	$(window).resize(function () {
		toggleSidebar();
		setContentSpacing();
	});

	$('.select-daterange').change(function () {
		var last = $('.select-daterange option:last-child');

		if (last.is(':selected')) {
			//var selected = $('.select-daterange option:selected').val().toLowerCase();
			$('#daterange').removeClass('d-none');
		} else {
			$('#daterange').addClass('d-none');
		}
	});

	$('.table-filters .badge').click(function (event) {
		event.preventDefault();
		var ele = $(event.target),
		    tableFilters = ele.parent(),
		    group = ele.attr('name'),
		    filters = $('.badge', tableFilters),
		    isAllOption = $(filters).index(ele) === 0,
		    groupAll = $('[name="all"]', tableFilters),
		    groupCogs = $('[name="cogs"]', tableFilters);

		if (group === 'all') {
			groupCogs.removeClass('is-active');
			if (isAllOption) {
				groupAll.addClass('is-active');
			} else {
				groupAll.removeClass('is-active');
			}
		} else {
			groupAll.removeClass('is-active');
		}
		ele.addClass('is-active');
	});

	/* Plugin calls */
	$('.btn-group').swapSelect();

	var options = [];

	$('.input-date').datetimepicker({
		format: 'MMM DD, YYYY',
		inline: false,
		useCurrent: false
	});

	$("#daterange-from").on("dp.change", function (e) {
		$('#daterange-to').data("DateTimePicker").minDate(e.date);
	});

	$("#daterange-to").on("dp.change", function (e) {
		$('#daterange-from').data("DateTimePicker").maxDate(e.date);
	});

	$('.overview-top').sortable({
		placeholder: "portlet-placeholder"
	});

	$('.overview-bottom').sortable({
		connectWith: ".overview-bottom",
		handle: ".card-header",
		cancel: ".portlet-toggle",
		placeholder: "portlet-placeholder"
	});

	$('#table-users').DataTable({
		dom: 'rt<"dataTables_bottom"lp>',
		fixedHeader: true,
		fixedColumns: {
			leftColumns: 1
		},
		orderCellsTop: true,
		scrollX: true,
		scrollCollapse: true,
		scrollY: 300
	});

	$('#table-products_trends, #table-conversion_metrics, #table-inventory_trends').DataTable({
		dom: 'rt<"dataTables_bottom"lp>',
		fixedHeader: true,
		fixedColumns: {
			leftColumns: 1
		},
		orderCellsTop: true,
		scrollX: true,
		scrollCollapse: true,
		scrollY: 300
	});

	$('#table-customers_trends, #table-customers_trends_new, #table-customers_trends_repeat').DataTable({
		dom: 'rt<"dataTables_bottom"lp>',
		fixedHeader: true,
		fixedColumns: {
			leftColumns: 1
		},
		orderCellsTop: true,
		scrollX: true,
		scrollCollapse: true,
		scrollY: 500
	});

	$('#table-sales_geography').DataTable({
		ajax: './data/sales-demography.json',
		dom: 'rt<"dataTables_bottom justify-content-end"p>',
		searching: false,
		lengthChange: false,
		fixedHeader: true,
		info: false,
		columns: [{
			title: 'State',
			data: 'code'
		}, {
			title: 'Sales ($)',
			data: 'value',
			className: 'text-right'
		}, {
			title: 'Units',
			data: 'units'
		}]
	});

	/* Exceptions */
	$('#table-replenishment').DataTable({
		dom: 'rt<"dataTables_bottom justify-content-end"p>',
		searching: false,
		lengthChange: false,
		fixedHeader: true,
		info: false
	});

	$('#table-replenishment_product').DataTable({
		dom: 'rt<"dataTables_bottom justify-content-end"p>',
		searching: false,
		lengthChange: false,
		fixedHeader: true,
		info: false
	});

	$('#table-count_image').DataTable({
		dom: 'rt<"dataTables_bottom justify-content-end"p>',
		searching: false,
		lengthChange: false,
		fixedHeader: true,
		info: false
	});

	$('#table-count_aplus').DataTable({
		dom: 'rt<"dataTables_bottom justify-content-end"p>',
		searching: false,
		lengthChange: false,
		fixedHeader: true,
		info: false
	});

	$('#table-count_twister').DataTable({
		dom: 'rt<"dataTables_bottom justify-content-end"p>',
		searching: false,
		lengthChange: false,
		fixedHeader: true,
		info: false
	});

	$('#table-products_changes').DataTable({
		dom: 'rt<"dataTables_bottom justify-content-end"p>',
		searching: false,
		lengthChange: false,
		fixedHeader: true,
		info: false
	});

	$('#table-products_offer').DataTable({
		dom: 'rt<"dataTables_bottom justify-content-end"p>',
		searching: false,
		lengthChange: false,
		fixedHeader: true,
		info: false
	});

	$('#table-buy_box').DataTable({
		dom: 'rt<"dataTables_bottom justify-content-end"p>',
		searching: false,
		lengthChange: false,
		fixedHeader: true,
		info: false
	});

	$('#table-best_seller').DataTable({
		dom: 'rt<"dataTables_bottom justify-content-end"p>',
		searching: false,
		lengthChange: false,
		fixedHeader: true,
		info: false
	});

	$('#table-amazon_sellers').DataTable({
		dom: 'rt<"dataTables_bottom justify-content-end"p>',
		searching: false,
		lengthChange: false,
		fixedHeader: true,
		info: false
	});

	$('#table-performing_keywords, #table-performing_products, #table-performing_target, #table-performing_untarget').DataTable({
		dom: 'rt<"dataTables_bottom"lp>',
		fixedHeader: true,
		fixedColumns: {
			leftColumns: 1
		},
		orderCellsTop: true,
		scrollX: true,
		scrollCollapse: true,
		scrollY: 500,
		paging: false
	});
	$('#table-aap_performance').DataTable({
		dom: 'rt<"dataTables_bottom"lp>',
		fixedHeader: true,
		fixedColumns: {
			leftColumns: 1
		},
		orderCellsTop: true,
		scrollX: true,
		scrollCollapse: true,
		scrollY: 500,
		paging: false
	});
	$('#table-product_ranks').DataTable({
		dom: 'rt<"dataTables_bottom justify-content-end"p>',
		searching: false,
		lengthChange: false,
		fixedHeader: true,
		info: false,
		scrollX: true
	});

	$('#table-product_gainers').DataTable({
		dom: 'rt<"dataTables_bottom justify-content-end"p>',
		searching: false,
		lengthChange: false,
		fixedHeader: true,
		info: false,
		scrollX: true
	});

	$('#table-product_losers').DataTable({
		dom: 'rt<"dataTables_bottom justify-content-end"p>',
		searching: false,
		lengthChange: false,
		fixedHeader: true,
		info: false,
		scrollX: true
	});

	$('#top20-seller, #top20-problem-products').DataTable({
		dom: 'rt<"dataTables_bottom"lp>',
		fixedHeader: true,
		orderCellsTop: true,
		scrollX: true,
		scrollCollapse: true,
		scrollY: 500,
		paging: false
	});

	$('#table-buy-box-top-sellers').DataTable({
		dom: 'rt<"dataTables_bottom justify-content-end">',
		searching: false,
		lengthChange: false,
		fixedHeader: true,
		info: false
	});

	$('#table-buy-box-top-problem-products').DataTable({
		dom: 'rt<"dataTables_bottom justify-content-end">',
		searching: false,
		lengthChange: false,
		fixedHeader: true,
		info: false
	});

	$('#table-buy-box-price').DataTable({
		dom: 'rt<"dataTables_bottom justify-content-end">',
		searching: false,
		lengthChange: false,
		fixedHeader: true,
		info: false
	});

	$('#table-buy-box-seller-price').DataTable({
		dom: 'rt<"dataTables_bottom justify-content-end">',
		searching: false,
		lengthChange: false,
		fixedHeader: true,
		info: false
	});

	$('#table-charge-back-dispute').DataTable({
		dom: 'rt<"dataTables_bottom"lp>',
		fixedHeader: true,
		orderCellsTop: true,
		scrollX: true,
		scrollCollapse: true,
		scrollY: 300,
		paging: false
	});

	$('#table-keywords').DataTable({
		dom: 'rt<"dataTables_bottom"lp>',
		fixedHeader: true,
		searching: false,
		info: false,
		lengthChange: false,
		paging: false,
		scrollCollapse: true,
		scrollY: 300
	});

	$('#across-theweb').DataTable({
		dom: 'rt<"dataTables_bottom"lp>',
		fixedHeader: true,
		orderCellsTop: true,
		ordering: false,
		scrollX: true,
		scrollCollapse: true,
		scrollY: 500,
		paging: false
	});

	$('#table-reviews_trends').DataTable({
		dom: 'rt<"dataTables_bottom"lp>',
		fixedHeader: true,
		fixedColumns: {
			leftColumns: 2
		},
		orderCellsTop: true,
		scrollX: true,
		scrollCollapse: true,
		scrollY: 300
	});

	$('#table-reviews_weeks').DataTable({
		dom: 'rt<"dataTables_bottom"lp>',
		fixedHeader: true,
		fixedColumns: {
			leftColumns: 1
		},
		orderCellsTop: true,
		scrollX: true,
		scrollCollapse: true,
		scrollY: 300
	});

	$('#table-recommendations-promotion-count').DataTable({
		dom: 'rt<"dataTables_bottom justify-content-end">',
		searching: false,
		scrollX: true,
		lengthChange: false,
		fixedHeader: true,
		info: false
	});

	$('#table-recommendations-promotion-request').DataTable({
		dom: 'rt<"dataTables_bottom justify-content-end">',
		searching: false,
		scrollX: true,
		lengthChange: false,
		fixedHeader: true,
		info: false
	});

	$('#table-recommendations-promotion').DataTable({
		dom: 'rt<"dataTables_bottom justify-content-end">',
		searching: false,
		lengthChange: false,
		fixedHeader: true,
		info: false,
		scrollX: true,
		scrollCollapse: true,
		scrollY: 500,
		paging: false
	});

	$('#table-forecasting_view').DataTable({
		dom: 'rt<"dataTables_bottom"lp>',
		fixedHeader: true,
		fixedColumns: {
			leftColumns: 1
		},
		orderCellsTop: true,
		scrollX: true,
		scrollCollapse: true,
		scrollY: 300
	});

	var reviewsInfo = [{
		rating: 5,
		percent: 50
	}, {
		rating: 4,
		percent: 80
	}, {
		rating: 3,
		percent: 93
	}, {
		rating: 2,
		percent: 45
	}, {
		rating: 1,
		percent: 20
	}];

	var popoverHTML = '' + reviewsInfo.map(function (info) {
		return '\n        <div class="row align-items-center mb-1">\n          <div class="col-auto">\n            <a href="#">' + info.rating + ' stars</a>\n          </div>\n          <div class="col">\n            <div class="progress">\n              <div class="progress-bar bg-info"\n                role="progressbar"\n                style="width: ' + info.percent + '%"\n                aria-valuenow="' + info.percent + '"\n                aria-valuemin="0"\n                aria-valuemax="100">\n                ' + info.percent + '\n              </div>\n            </div>\n          </div>\n        </div>\n      ';
	}).join('');

	$('[data-toggle="popover"]').popover({
		container: 'body',
		content: popoverHTML,
		html: true,
		title: 'Review Ratings',
		trigger: 'hover',
		placement: 'left',
		boundary: 'viewport'
	});

	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		//  $($.fn.dataTable.tables(true)).css('width', '100%');
		$($.fn.dataTable.tables(true)).DataTable().columns.adjust().draw();
	});

	/* functions to be invoked on page init */
	toggleSidebar();
	setContentSpacing();
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(1)))

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _highcharts = __webpack_require__(153);

var _highcharts2 = _interopRequireDefault(_highcharts);

var _highmaps = __webpack_require__(154);

var _highmaps2 = _interopRequireDefault(_highmaps);

var _usAll = __webpack_require__(155);

var _usAll2 = _interopRequireDefault(_usAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
	var getRandomNumbers = function getRandomNumbers(size) {
		var numbers = [];
		while (numbers.length < size) {
			var random = Math.floor(Math.random() * 50) + 1;
			if (numbers.indexOf(random) > -1) continue;
			numbers[numbers.length] = random;
		}
		return numbers;
	};
	/* Sales: Sales to Customers */
	if ($('#chart-sales_customers').length > 0) {
		_highcharts2.default.chart('chart-sales_customers', {
			chart: {
				type: 'column',
				height: 9 / 21 * 100 + '%'
			},
			title: {
				text: 'Sales to Customers'
			},
			xAxis: {
				categories: ['20 May', '21 May', '22 May', '23 May', '24 May', '25 May']
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Sales($)'
				}
			},
			legend: {
				align: 'left',
				x: 30,
				verticalAlign: 'bottom',
				y: 0,
				backgroundColor: _highcharts2.default.theme && _highcharts2.default.theme.background2 || 'white',
				shadow: false
			},
			tooltip: {
				headerFormat: '<b>{point.x}</b><br/>',
				pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
			},
			plotOptions: {
				column: {
					stacking: 'normal'
				}
			},
			series: [{
				name: '3P Sales - MFN',
				type: 'column',
				data: [105, 0, 35, 35, 0, 140]
			}, {
				name: '3P Sales - FBA',
				type: 'column',
				data: [119, 0, 52, 39, 26, 0]
			}, {
				name: 'Amazon Sales',
				type: 'column',
				data: [25960, 26450, 52480, 30897, 32584, 0]
			}, {
				name: 'Amazon COGS',
				data: [21545, 25443, 48564, 25153, 31544, 0]
			}],
			responsive: {
				rules: [{
					condition: {
						maxWidth: 500
					},
					chartOptions: {
						chart: {
							height: 300
						},
						subtitle: {
							text: null
						},
						navigator: {
							enabled: false
						}
					}
				}]
			}
		});
	}

	/* Sales: Sales to Amazon */
	if ($('#chart-sales_amazon').length > 0) {
		_highcharts2.default.chart('chart-sales_amazon', {
			chart: {
				type: 'column',
				height: 9 / 21 * 100 + '%'
			},
			title: {
				text: 'Sales to Amazon'
			},
			xAxis: {
				categories: ['20 May', '21 May', '22 May', '23 May', '24 May', '25 May']
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Units'
				}
			},
			legend: {
				align: 'center',
				x: 0,
				verticalAlign: 'bottom',
				y: 0,
				backgroundColor: _highcharts2.default.theme && _highcharts2.default.theme.background2 || 'white',
				shadow: false
			},
			tooltip: {
				headerFormat: '<b>{point.x}</b><br/>',
				pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
			},
			series: [{
				name: 'Amazon PO',
				data: [25960, 26450, 52480, 30897, 32584, 0]
			}, {
				name: 'Amazon Shipped - Confirmed PO',
				data: [25450, 24343, 52130, 29765, 31575, 0]
			}],
			responsive: {
				rules: [{
					condition: {
						maxWidth: 500
					},
					chartOptions: {
						chart: {
							height: 300
						},
						subtitle: {
							text: null
						},
						navigator: {
							enabled: false
						}
					}
				}]
			}
		});
	}

	/* Sales: Geographic Trends */
	if ($('#chart-sales_geographic').length > 0) {
		$.getJSON('./data/sales-demography.json', function (_ref) {
			var data = _ref.data;

			// Make codes uppercase to match the map data
			$.each(data, function () {
				this.code = this.code.toUpperCase();
			});

			// Instantiate the map
			_highmaps2.default.mapChart('chart-sales_geographic', {
				title: {
					text: 'Sales per State'
				},

				legend: {
					layout: 'vertical',
					borderWidth: 0,
					backgroundColor: 'rgba(255,255,255,0.85)',
					floating: true,
					verticalAlign: 'middle',
					align: 'right',
					y: 0
				},

				mapNavigation: {
					enabled: true
				},

				colorAxis: {
					min: 1,
					type: 'logarithmic',
					minColor: '#EEEEFF',
					maxColor: '#000022',
					stops: [[0, '#EFEFFF'], [0.67, '#055948'], [1, '#000022']]
				},

				series: [{
					data: data,
					mapData: _usAll2.default,
					joinBy: ['postal-code', 'code'],
					dataLabels: {
						enabled: true,
						color: '#FFFFFF',
						format: '{point.code}'
					},
					name: 'Sales per State',
					tooltip: {
						pointFormat: '{point.code}: ${point.value}'
					}
				}]
			});
		});
	}

	/* Inventory: Inventory Source */
	if ($('#chart-inventory').length > 0) {
		_highcharts2.default.chart('chart-inventory', {
			chart: {
				zoomType: 'xy',
				height: 300
			},
			title: {
				text: 'Inventory'
			},
			xAxis: [{
				categories: ['20 May', '21 May', '22 May', '23 May', '24 May', '25 May', '26 May'],
				crosshair: true
			}],
			yAxis: [{ // Primary yAxis
				labels: {
					format: '{value}',
					style: {
						color: _highcharts2.default.getOptions().colors[1]
					}
				},
				title: {
					text: '',
					style: {
						color: _highcharts2.default.getOptions().colors[1]
					}
				}
			}, { // Secondary yAxis
				title: {
					text: '',
					style: {
						color: _highcharts2.default.getOptions().colors[0]
					}
				},
				labels: {
					format: '{value}',
					style: {
						color: _highcharts2.default.getOptions().colors[0]
					}
				},
				opposite: true
			}],
			tooltip: {
				shared: true
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				x: 0,
				verticalAlign: 'bottom',
				y: 0,
				backgroundColor: _highcharts2.default.theme && _highcharts2.default.theme.legendBackgroundColor || '#FFFFFF'
			},
			series: [{
				name: 'Amazon On-Hand',
				type: 'column',
				color: '#1b66aa',
				yAxis: 1,
				data: [2487, 2007, 1865, 2845, 3125, 2508, 3085]
			}, {
				name: 'Amazon Back-Ordered',
				color: '#25aa1b',
				data: [110, 50, 95, 28, 65, 32, 29]
			}, {
				name: 'Amazon Cancelled',
				data: [12, 23, 27, 29, 21, 51, 5]
			}]
		});
	}

	/* Exceptions: Count of Exceptions */
	if ($('#chart-exceptions_count').length > 0) {
		_highcharts2.default.chart('chart-exceptions_count', {
			chart: {
				type: 'column',
				zoomType: 'xy'
			},
			title: {
				text: 'Count of Exceptions'
			},
			xAxis: {
				categories: ['20 May', '21 May', '22 May', '23 May', '24 May', '25 May', '26 May']
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Exceptions'
				}
			},
			tooltip: {
				shared: true
			},
			plotOptions: {
				column: {
					stacking: 'normal'
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				x: 0,
				verticalAlign: 'bottom',
				y: 0,
				backgroundColor: _highcharts2.default.theme && _highcharts2.default.theme.legendBackgroundColor || '#FFFFFF'
			},
			series: [{
				name: 'Count of Image Change',
				type: 'column',
				data: [7, 12, 16, 15, 6, 1, 14]
			}, {
				name: 'Count of No A+',
				type: 'column',
				data: [12, 5, 6, 2, 3, 11, 9]
			}, {
				name: 'Count of variation (twister) change',
				type: 'column',
				data: [12, 24, 10, 9, 19, 15, 6]
			}, {
				name: 'Replenishment Code',
				type: 'column',
				data: [12, 5, 6, 24, 10, 9, 19]
			}, {
				name: 'Product Category Changes',
				type: 'column',
				data: [2, 3, 11, 9, 7, 12, 16]
			}, {
				name: 'Products without offer',
				type: 'column',
				data: [8, 3, 11, 9, 9, 19, 10]
			}]
		});
	}

	function advchange(val) {
		if (val == '1') {
			$(".chart-advertising-1").css("display", "block");
			$(".chart-advertising-2").css("display", "none");
			$(".chart-advertising-3").css("display", "none");
		} else if (val == '2') {
			$(".chart-advertising-1").css("display", "none");
			$(".chart-advertising-2").css("display", "block");
			$(".chart-advertising-3").css("display", "none");
		} else if (val == '3') {
			$(".chart-advertising-1").css("display", "none");
			$(".chart-advertising-2").css("display", "none");
			$(".chart-advertising-3").css("display", "block");
		} else {
			$(".chart-advertising-1").css("display", "block");
			$(".chart-advertising-2").css("display", "none");
			$(".chart-advertising-3").css("display", "none");
		}
	}

	$('#adv-ams-select').change(function () {
		advchange($(this).val());
	});

	/* Advertising: All AMS Advertising Source */
	if ($('#chart-advertising1').length > 0) {
		_highcharts2.default.chart('chart-advertising1', {
			chart: {
				zoomType: 'xy'
			},
			title: {
				text: ''
			},
			xAxis: [{
				categories: ['20 May', '21 May', '22 May', '23 May', '24 May', '25 May'],
				crosshair: true
			}],
			yAxis: [{ // Primary yAxis
				labels: {
					format: '{value}',
					style: {
						color: _highcharts2.default.getOptions().colors[1]
					}
				},
				title: {
					text: '',
					style: {
						color: _highcharts2.default.getOptions().colors[1]
					}
				}
			}, { // Secondary yAxis
				title: {
					text: '',
					style: {
						color: _highcharts2.default.getOptions().colors[0]
					}
				},
				labels: {
					format: '{value}',
					style: {
						color: _highcharts2.default.getOptions().colors[0]
					}
				},
				opposite: true
			}],
			tooltip: {
				shared: true
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				x: 0,
				verticalAlign: 'bottom',
				y: 0,
				backgroundColor: _highcharts2.default.theme && _highcharts2.default.theme.legendBackgroundColor || '#FFFFFF'
			},
			series: [{
				name: 'Sales',
				color: '#ed7d31',
				type: 'column',
				yAxis: 1,
				data: [8360, 2786, 5574, 7365, 4254, 6853]
			}, {
				name: 'Impressions',
				//        type: 'spline',
				color: '#4472C4',
				data: [20025, 15921, 23652, 17456, 16854, 23254]
			}, {
				name: 'Clicks',
				color: '#1b66aa',
				//        type: 'spline',
				yAxis: 1,
				data: [28674, 39854, 41654, 24568, 25859, 33529]
			}, {
				name: 'CPC',
				color: '#25aa1b',
				//        type: 'spline',
				yAxis: 1,
				data: [12150, 10170, 11265, 12856, 9546, 8654]
			}, {
				name: 'ACOS',
				color: '#7cb5ec',
				//        type: 'spline',
				yAxis: 1,
				data: [9, 15, 8, 9, 6, 7]
			}, {
				name: 'Live Campaigns',
				color: '#795548',
				//        type: 'spline',
				yAxis: 1,
				data: [10, 6, 8, 12, 11, 10]
			}]
		});
	}
	if ($('#chart-advertising2').length > 0) {
		_highcharts2.default.chart('chart-advertising2', {
			chart: {
				zoomType: 'xy'
			},
			title: {
				text: ''
			},
			xAxis: [{
				categories: ['20 May', '21 May', '22 May', '23 May', '24 May', '25 May'],
				crosshair: true
			}],
			yAxis: [{ // Primary yAxis
				labels: {
					format: '{value}',
					style: {
						color: _highcharts2.default.getOptions().colors[1]
					}
				},
				title: {
					text: '',
					style: {
						color: _highcharts2.default.getOptions().colors[1]
					}
				}
			}, { // Secondary yAxis
				title: {
					text: '',
					style: {
						color: _highcharts2.default.getOptions().colors[0]
					}
				},
				labels: {
					format: '{value}',
					style: {
						color: _highcharts2.default.getOptions().colors[0]
					}
				},
				opposite: true
			}],
			tooltip: {
				shared: true
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				x: 0,
				verticalAlign: 'bottom',
				y: 0,
				backgroundColor: _highcharts2.default.theme && _highcharts2.default.theme.legendBackgroundColor || '#FFFFFF'
			},
			series: [{
				name: 'Sales',
				color: '#ed7d31',
				type: 'column',
				yAxis: 1,
				data: [4856, 8531, 7489, 7255, 3568, 7452]
			}, {
				name: 'Impressions',
				//        type: 'spline',
				color: '#4472C4',
				data: [24075, 22051, 23832, 20546, 19150, 21354]
			}, {
				name: 'Clicks',
				color: '#1b66aa',
				//        type: 'spline',
				yAxis: 1,
				data: [25664, 32371, 38487, 21869, 21745, 31625]
			}, {
				name: 'CPC',
				color: '#25aa1b',
				//        type: 'spline',
				yAxis: 1,
				data: [11450, 9203, 10789, 11875, 7489, 6254]
			}, {
				name: 'ACOS',
				color: '#7cb5ec',
				//        type: 'spline',
				yAxis: 1,
				data: [8, 12, 9, 10, 12, 8]
			}, {
				name: 'Live Campaigns',
				color: '#795548',
				//        type: 'spline',
				yAxis: 1,
				data: [12, 5, 8, 12, 4, 14]
			}]
		});
	}
	if ($('#chart-advertising3').length > 0) {
		_highcharts2.default.chart('chart-advertising3', {
			chart: {
				zoomType: 'xy'
			},
			title: {
				text: ''
			},
			xAxis: [{
				categories: ['20 May', '21 May', '22 May', '23 May', '24 May', '25 May'],
				crosshair: true
			}],
			yAxis: [{ // Primary yAxis
				labels: {
					format: '{value}',
					style: {
						color: _highcharts2.default.getOptions().colors[1]
					}
				},
				title: {
					text: '',
					style: {
						color: _highcharts2.default.getOptions().colors[1]
					}
				}
			}, { // Secondary yAxis
				title: {
					text: '',
					style: {
						color: _highcharts2.default.getOptions().colors[0]
					}
				},
				labels: {
					format: '{value}',
					style: {
						color: _highcharts2.default.getOptions().colors[0]
					}
				},
				opposite: true
			}],
			tooltip: {
				shared: true
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				x: 0,
				verticalAlign: 'bottom',
				y: 0,
				backgroundColor: _highcharts2.default.theme && _highcharts2.default.theme.legendBackgroundColor || '#FFFFFF'
			},
			series: [{
				name: 'Sales',
				color: '#ed7d31',
				type: 'column',
				yAxis: 1,
				data: [9860, 4586, 6874, 7665, 4354, 7053]
			}, {
				name: 'Impressions',
				//        type: 'spline',
				color: '#4472C4',
				data: [21025, 17951, 24632, 19446, 18950, 26254]
			}, {
				name: 'Clicks',
				color: '#1b66aa',
				//        type: 'spline',
				yAxis: 1,
				data: [30587, 42927, 44458, 26742, 27121, 35896]
			}, {
				name: 'CPC',
				color: '#25aa1b',
				//        type: 'spline',
				yAxis: 1,
				data: [13456, 9270, 12385, 13856, 10546, 9654]
			}, {
				name: 'ACOS',
				color: '#7cb5ec',
				//        type: 'spline',
				yAxis: 1,
				data: [10, 15, 16, 4, 4, 18]
			}, {
				name: 'Live Campaigns',
				color: '#795548',
				//        type: 'spline',
				yAxis: 1,
				data: [6, 12, 15, 18, 11, 10]
			}]
		});
	}
	/* Advertising: All AAP Advertising Source */
	if ($('#chart-aap-advertising').length > 0) {
		_highcharts2.default.chart('chart-aap-advertising', {
			chart: {
				zoomType: 'xy',
				height: 300
			},
			title: {
				text: 'AAP Advertising'
			},
			xAxis: [{
				categories: ['01 Apr', '03 Apr', '05 Apr', '07 Apr', '09 Apr', '11 Apr', '13 Apr', '15 Apr', '17 Apr', '19 Apr', '21 Apr'],
				crosshair: true
			}],
			yAxis: [{ // Primary yAxis
				labels: {
					format: '{value}',
					style: {
						color: _highcharts2.default.getOptions().colors[1]
					}
				},
				title: {
					text: '',
					style: {
						color: _highcharts2.default.getOptions().colors[1]
					}
				}
			}, { // Secondary yAxis
				title: {
					text: '',
					style: {
						color: _highcharts2.default.getOptions().colors[0]
					}
				},
				labels: {
					format: '{value}',
					style: {
						color: _highcharts2.default.getOptions().colors[0]
					}
				},
				opposite: true
			}],
			tooltip: {
				shared: true
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				x: 0,
				verticalAlign: 'bottom',
				y: 0,
				backgroundColor: _highcharts2.default.theme && _highcharts2.default.theme.legendBackgroundColor || '#FFFFFF'
			},
			series: [{
				name: 'Total Cost',
				type: 'column',
				color: '#1b66aa',
				yAxis: 1,
				data: [10, 20, 30, 40, 70, 80, 90, 100, 150, 170, 180]
			}, {
				name: 'CTR',
				type: 'spline',
				color: '#25aa1b',
				data: [20, 30, 40, 45, 50, 58, 68, 75, 78, 92, 10]
			}, {
				name: 'Impressions',
				type: 'spline',
				data: [10, 15, 20, 24, 28, 38, 52, 62, 70, 80, 90]
			}]
		});
	}
	/* Product Ranks: Daily Rank of all products */
	if ($('#chart-product_ranks').length > 0) {
		_highcharts2.default.chart('chart-product_ranks', {
			chart: {
				height: 300
			},
			title: {
				text: 'Daily ranking of all Products'
			},
			xAxis: {
				categories: ['20 May', '21 May', '22 May', '23 May', '24 May', '25 May', '26 May']
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Rank'
				}
			},
			legend: {
				align: 'center',
				x: 0,
				verticalAlign: 'bottom',
				y: 0,
				backgroundColor: _highcharts2.default.theme && _highcharts2.default.theme.background2 || 'white',
				shadow: false
			},
			tooltip: {
				headerFormat: '<b>{point.x}</b><br/>',
				pointFormat: '{series.name} Rank: {point.y}'
			},
			series: [{
				name: 'All Products',
				data: [79112, 84907, 53308, 87699, 82817, 85442, 88092]
			}]
		});
	}

	/* Map: All Count of Violations  */
	if ($('#chart-map').length > 0) {
		_highcharts2.default.chart('chart-map', {
			chart: {
				zoomType: 'xy'
			},
			title: {
				text: 'Count of Violations'
			},
			xAxis: [{
				categories: ['15 Apr', '16 Apr', '17 Apr', '18 Apr', '19 Apr', '20 Apr'],
				crosshair: true
			}],
			yAxis: [{ // Primary yAxis
				labels: {
					format: '{value}',
					style: {
						color: _highcharts2.default.getOptions().colors[1]
					}
				},
				title: {
					text: '',
					style: {
						color: _highcharts2.default.getOptions().colors[1]
					}
				}
			}, { // Secondary yAxis
				title: {
					text: '',
					style: {
						color: _highcharts2.default.getOptions().colors[0]
					}
				},
				labels: {
					format: '{value}',
					style: {
						color: _highcharts2.default.getOptions().colors[0]
					}
				},
				opposite: false
			}],
			tooltip: {
				shared: true
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				x: 0,
				verticalAlign: 'bottom',
				y: 0,
				backgroundColor: _highcharts2.default.theme && _highcharts2.default.theme.legendBackgroundColor || '#FFFFFF'
			},
			series: [{
				name: 'Violations',
				color: '#4472c4',
				type: 'column',
				yAxis: 1,
				data: [900, 600, 300, 200, 400, 1100]
			}]
		});
	}

	if ($('#chart-buy-box').length > 0) {
		_highcharts2.default.chart('chart-buy-box', {
			chart: {
				zoomType: 'xy',
				height: 300
			},
			title: {
				text: 'All Products - BuyBox'
			},
			xAxis: [{
				title: {
					text: 'Date',
					style: {
						color: _highcharts2.default.getOptions().colors[1]
					}
				},
				categories: ['20 May', '21 May', '22 May', '23 May', '24 May', '25 May', '26 May']
			}],
			yAxis: {
				min: 82,
				max: 100,
				labels: {
					formatter: function formatter() {
						return this.value + '%';
					}
				},
				title: {
					text: 'BuyBox %',
					style: {
						color: _highcharts2.default.getOptions().colors[1]
					}
				}
			},
			series: [{
				name: 'Products',
				type: 'column',
				color: '#1b66aa',
				data: [98, 88, 92, 90, 95, 86]
			}]
		});
	}

	if ($('#chart-chargeback-trend').length > 0) {
		_highcharts2.default.chart('chart-chargeback-trend', {
			chart: {
				zoomType: 'xy',
				height: 300
			},
			title: {
				text: 'Chargeback Trends'
			},
			xAxis: [{
				categories: ['January', 'February', 'March', 'April', 'May', 'September'],
				crosshair: true
			}],
			yAxis: [{ // Secondary yAxis
				title: {
					text: '',
					style: {
						color: _highcharts2.default.getOptions().colors[0]
					}
				},
				labels: {
					format: '{value}',
					style: {
						color: _highcharts2.default.getOptions().colors[0]
					}
				}
			}],
			tooltip: {
				shared: true
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				x: 0,
				verticalAlign: 'bottom',
				y: 0,
				backgroundColor: _highcharts2.default.theme && _highcharts2.default.theme.legendBackgroundColor || '#FFFFFF'
			},
			series: [{
				name: 'Chargebacks this year',
				type: 'line',
				color: '#25aa1b',
				data: [1200, 900, 600, 500, 700, 500]
			}, {
				name: 'Chargebacks last year',
				type: 'line',
				data: [1000, 600, 200, 200, 400, 1200]
			}]
		});
	}

	/* Reviews: YTD reviews / Last Year Reviews  */
	if ($('#chart-reviews').length > 0) {
		_highcharts2.default.chart('chart-reviews', {
			chart: {
				type: 'area',
				zoomType: 'xy'
			},
			title: {
				text: 'YTD reviews / Last Year Reviews'
			},
			xAxis: {
				allowDecimals: false,
				categories: ['15 Apr', '16 Apr', '17 Apr', '18 Apr', '19 Apr', '20 Apr']
			},
			yAxis: {
				labels: {
					formatter: function formatter() {
						return this.value / 10;
					}
				}
			},
			tooltip: {
				pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
			},
			series: [{
				name: 'Total Reviews Last Year',
				color: '#7cb5ec',
				data: [90, 100, 95, 90, 80, 105]
			}, {
				name: 'Total Reviews Year to Date',
				color: '#dfe1e2',
				data: [70, 65, 45, 78, 75, 70]
			}]
		});
	}
	/* Reviews: Pie chart */
	if ($('#chart-reviews-pie').length > 0) {
		_highcharts2.default.chart('chart-reviews-pie', {
			chart: {
				type: 'pie'
			},
			title: {
				text: 'Star Rating'
			},
			plotOptions: {
				series: {
					dataLabels: {
						enabled: true,
						format: '{point.name}: {point.y:.1f}%'
					}
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
				pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
			},
			series: [{
				name: 'Star',
				colorByPoint: true,
				data: [{
					name: '5 Star',
					y: 62.74
				}, {
					name: '4 Star',
					y: 10.57
				}, {
					name: '3 Star',
					y: 7.23
				}, {
					name: '2 Star',
					y: 5.58
				}, {
					name: '1 Star',
					y: 4.02
				}]
			}]
		});
	}

	/* Reviews: Forecast  */
	if ($('#chart-forecast').length > 0) {
		_highcharts2.default.chart('chart-forecast', {
			title: {
				text: ' a'

			},
			xAxis: {
				type: 'datetime',
				//tickInterval: 30 * 24 * 3600 * 1000,
				labels: {
					rotation: -45,
					step: 1
				},
				dateTimeLabelFormats: { // don't display the dummy year
					month: '%b \'%y',
					year: '%Y'
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'top',
				verticalAlign: 'top'
			},

			plotOptions: {
				series: {
					label: {
						connectorAllowed: false
					},
					pointStart: 2018
				}
			},
			series: [{
				name: 'Ordered Units',
				data: [0, 10, 100, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
				pointStart: Date.UTC(2018, 0, 28),
				pointInterval: 24 * 3600 * 1000 * 7 // one week
			}, {
				name: 'Mean Forecast',
				data: [0, 10, 100, 2000, 5000, 8000, 9000, 9500, 10000, 10500, 11000, 11500, 12000],
				pointStart: Date.UTC(2018, 0, 28),
				pointInterval: 24 * 3600 * 1000 * 7 // one week
			}, {
				name: 'P70 Forecast',
				data: [0, 10, 100, 2000, 3000, 3500, 3750, 4000, 4500, 4750, 4800, 5000, 5500],
				pointStart: Date.UTC(2018, 0, 28),
				pointInterval: 24 * 3600 * 1000 * 7 // one week
			}, {
				name: 'P80 Forecast',
				data: [0, 10, 100, 2000, 2500, 3000, 3550, 4200, 4800, 4870, 4800, 4900, 4950],
				pointStart: Date.UTC(2018, 0, 28),
				pointInterval: 24 * 3600 * 1000 * 7 // one week
			}, {
				name: 'P90 Forecast',
				data: [0, 10, 100, 2000, 2500, 2750, 3000, 3250, 3500, 3750, 4000, 4200, 5000],
				pointStart: Date.UTC(2018, 0, 28),
				pointInterval: 24 * 3600 * 1000 * 7 // one week
			}],

			responsive: {
				rules: [{
					condition: {
						maxWidth: 800
					},
					chartOptions: {
						legend: {
							layout: 'horizontal',
							align: 'center',
							verticalAlign: 'bottom'
						}
					}
				}]
			}
		});
	}

	if ($('#chart-keywords').length > 0) {
		var keywordsChart = _highcharts2.default.chart('chart-keywords', {
			chart: {
				type: 'spline',
				height: 300
			},
			title: {
				text: 'Search Rank: Stereo'
			},
			xAxis: {
				type: 'datetime',
				dateTimeLabelFormats: {
					month: '%e. %b',
					year: '%b'
				},
				title: {
					text: 'Date'
				}
			},
			yAxis: {
				title: {
					text: 'Search Rank'
				},
				min: 0
			},
			plotOptions: {
				spline: {
					marker: {
						enabled: false
					}
				}
			},
			colors: ['#6CF', '#39F', '#06C', '#036', '#000'],
			series: [{
				name: 'Date',
				data: [10, 12, 9, 7, 6, 5],
				pointStart: Date.UTC(2018, 3, 15),
				pointInterval: 24 * 3600 * 1000 // one day
			}]
		});

		$('.keyword').click(function (event) {
			event.preventDefault();
			var keyword = $(event.target);
			$('.keyword').removeClass('is-active');
			keyword.addClass('is-active');
			keywordsChart.update({
				title: {
					text: 'Search Rank: ' + keyword.attr('name')
				},
				series: [{
					data: getRandomNumbers(6)
				}]
			});
		}).eq(0).trigger('click');
	}

	/* Overview - Sales */
	if ($('#chart-overview_sales').length > 0) {
		_highcharts2.default.chart('chart-overview_sales', {
			chart: {
				type: 'column',
				height: 300
			},
			title: {
				text: 'Sales to Customers'
			},
			xAxis: {
				categories: ['20 May', '21 May', '22 May', '23 May', '24 May', '25 May']
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Sales($)'
				}
			},
			legend: {
				align: 'left',
				x: 30,
				verticalAlign: 'bottom',
				y: 0,
				backgroundColor: _highcharts2.default.theme && _highcharts2.default.theme.background2 || 'white',
				shadow: false
			},
			tooltip: {
				headerFormat: '<b>{point.x}</b><br/>',
				pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
			},
			plotOptions: {
				column: {
					stacking: 'normal'
				}
			},
			series: [{
				name: '3P Sales - MFN',
				type: 'column',
				data: [105, 0, 35, 35, 0, 140]
			}, {
				name: '3P Sales - FBA',
				type: 'column',
				data: [119, 0, 52, 39, 26, 0]
			}, {
				name: 'Amazon Sales',
				type: 'column',
				data: [25960, 26450, 52480, 30897, 32584, 0]
			}, {
				name: 'Amazon COGS',
				data: [21545, 25443, 48564, 25153, 31544, 0]
			}],
			responsive: {
				rules: [{
					condition: {
						maxWidth: 500
					},
					chartOptions: {
						chart: {
							height: 300
						},
						subtitle: {
							text: null
						},
						navigator: {
							enabled: false
						}
					}
				}]
			}
		});
	}

	if ($('#chart-overview_advertising').length > 0) {
		_highcharts2.default.chart('chart-overview_advertising', {
			chart: {
				height: 300
			},
			title: {
				text: ''
			},
			xAxis: [{
				categories: ['20 May', '21 May', '22 May', '23 May', '24 May', '25 May'],
				crosshair: true
			}],
			yAxis: [{ // Primary yAxis
				labels: {
					format: '{value}',
					style: {
						color: _highcharts2.default.getOptions().colors[1]
					}
				},
				title: {
					text: '',
					style: {
						color: _highcharts2.default.getOptions().colors[1]
					}
				}
			}, { // Secondary yAxis
				title: {
					text: '',
					style: {
						color: _highcharts2.default.getOptions().colors[0]
					}
				},
				labels: {
					format: '{value}',
					style: {
						color: _highcharts2.default.getOptions().colors[0]
					}
				},
				opposite: true
			}],
			tooltip: {
				shared: true
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				x: 0,
				verticalAlign: 'bottom',
				y: 0,
				backgroundColor: _highcharts2.default.theme && _highcharts2.default.theme.legendBackgroundColor || '#FFFFFF'
			},
			series: [{
				name: 'Sales',
				color: '#ed7d31',
				type: 'column',
				yAxis: 1,
				data: [8360, 2786, 5574, 7365, 4254, 6853]
			}, {
				name: 'Impressions',
				color: '#4472C4',
				data: [20025, 15921, 23652, 17456, 16854, 23254]
			}, {
				name: 'Clicks',
				color: '#1b66aa',
				yAxis: 1,
				data: [28674, 39854, 41654, 24568, 25859, 33529]
			}, {
				name: 'CPC',
				color: '#25aa1b',
				yAxis: 1,
				data: [12150, 10170, 11265, 12856, 9546, 8654]
			}, {
				name: 'ACOS',
				color: '#7cb5ec',
				yAxis: 1,
				data: [9, 15, 8, 9, 6, 7]
			}, {
				name: 'Live Campaigns',
				color: '#795548',
				yAxis: 1,
				data: [10, 6, 8, 12, 11, 10]
			}]
		});
	}

	if ($('#chart-overview_product_ranks').length > 0) {
		_highcharts2.default.chart('chart-overview_product_ranks', {
			chart: {
				height: 300
			},
			title: {
				text: 'Daily ranking of all Products'
			},
			xAxis: {
				categories: ['20 May', '21 May', '22 May', '23 May', '24 May', '25 May', '26 May']
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Rank'
				}
			},
			legend: {
				align: 'center',
				x: 0,
				verticalAlign: 'bottom',
				y: 0,
				backgroundColor: _highcharts2.default.theme && _highcharts2.default.theme.background2 || 'white',
				shadow: false
			},
			tooltip: {
				headerFormat: '<b>{point.x}</b><br/>',
				pointFormat: '{series.name} Rank: {point.y}'
			},
			series: [{
				name: 'All Products',
				data: [79112, 84907, 53308, 87699, 82817, 85442, 88092]
			}]
		});
	}

	if ($('#chart-overview_buybox').length > 0) {
		_highcharts2.default.chart('chart-overview_buybox', {
			chart: {
				zoomType: 'xy',
				height: 300
			},
			title: {
				text: 'All Products - BuyBox'
			},
			xAxis: [{
				title: {
					text: 'Date',
					style: {
						color: _highcharts2.default.getOptions().colors[1]
					}
				},
				categories: ['20 May', '21 May', '22 May', '23 May', '24 May', '25 May', '26 May']
			}],
			yAxis: {
				min: 82,
				max: 100,
				labels: {
					formatter: function formatter() {
						return this.value + '%';
					}
				},
				title: {
					text: 'BuyBox %',
					style: {
						color: _highcharts2.default.getOptions().colors[1]
					}
				}
			},
			series: [{
				name: 'Products',
				type: 'column',
				color: '#1b66aa',
				data: [98, 88, 92, 90, 95, 86]
			}]
		});
	}

	if ($('#chart-overview_map').length > 0) {
		_highcharts2.default.chart('chart-overview_map', {
			chart: {
				zoomType: 'xy',
				height: 300
			},
			title: {
				text: 'Count of Violations'
			},
			xAxis: [{
				categories: ['15 Apr', '16 Apr', '17 Apr', '18 Apr', '19 Apr', '20 Apr'],
				crosshair: true
			}],
			yAxis: [{ // Primary yAxis
				labels: {
					format: '{value}',
					style: {
						color: _highcharts2.default.getOptions().colors[1]
					}
				},
				title: {
					text: '',
					style: {
						color: _highcharts2.default.getOptions().colors[1]
					}
				}
			}, { // Secondary yAxis
				title: {
					text: '',
					style: {
						color: _highcharts2.default.getOptions().colors[0]
					}
				},
				labels: {
					format: '{value}',
					style: {
						color: _highcharts2.default.getOptions().colors[0]
					}
				},
				opposite: false
			}],
			tooltip: {
				shared: true
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				x: 0,
				verticalAlign: 'bottom',
				y: 0,
				backgroundColor: _highcharts2.default.theme && _highcharts2.default.theme.legendBackgroundColor || '#FFFFFF'
			},
			series: [{
				name: 'Violations',
				color: '#4472c4',
				type: 'column',
				yAxis: 1,
				data: [900, 600, 300, 200, 400, 1100]
			}]
		});
	}

	if ($('#chart-overview_inventory').length > 0) {
		_highcharts2.default.chart('chart-overview_inventory', {
			chart: {
				zoomType: 'xy',
				height: 300
			},
			title: {
				text: 'Inventory'
			},
			xAxis: [{
				categories: ['20 May', '21 May', '22 May', '23 May', '24 May', '25 May', '26 May'],
				crosshair: true
			}],
			yAxis: [{ // Primary yAxis
				labels: {
					format: '{value}',
					style: {
						color: _highcharts2.default.getOptions().colors[1]
					}
				},
				title: {
					text: '',
					style: {
						color: _highcharts2.default.getOptions().colors[1]
					}
				}
			}, { // Secondary yAxis
				title: {
					text: '',
					style: {
						color: _highcharts2.default.getOptions().colors[0]
					}
				},
				labels: {
					format: '{value}',
					style: {
						color: _highcharts2.default.getOptions().colors[0]
					}
				},
				opposite: true
			}],
			tooltip: {
				shared: true
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				x: 0,
				verticalAlign: 'bottom',
				y: 0,
				backgroundColor: _highcharts2.default.theme && _highcharts2.default.theme.legendBackgroundColor || '#FFFFFF'
			},
			series: [{
				name: 'Amazon On-Hand',
				type: 'column',
				color: '#1b66aa',
				yAxis: 1,
				data: [2487, 2007, 1865, 2845, 3125, 2508, 3085]
			}, {
				name: 'Amazon Back-Ordered',
				color: '#25aa1b',
				data: [110, 50, 95, 28, 65, 32, 29]
			}, {
				name: 'Amazon Cancelled',
				data: [12, 23, 27, 29, 21, 51, 5]
			}]
		});
	}
});
//import HighMaps from 'Highcharts/highmaps';
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mapData = { "title": "United States of America", "version": "1.1.2", "type": "FeatureCollection", "copyright": "Copyright (c) 2015 Highsoft AS, Based on data from Natural Earth", "copyrightShort": "Natural Earth", "copyrightUrl": "http://www.naturalearthdata.com", "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:EPSG:102004" } }, "hc-transform": { "default": { "crs": "+proj=lcc +lat_1=33 +lat_2=45 +lat_0=39 +lon_0=-96 +x_0=0 +y_0=0 +datum=NAD83 +units=m +no_defs", "scale": 0.000151481324748, "jsonres": 15.5, "jsonmarginX": -999, "jsonmarginY": 9851.0, "xoffset": -2361356.09818, "yoffset": 1398996.77886 }, "us-all-hawaii": { "xpan": 190, "ypan": 417, "hitZone": { "type": "Polygon", "coordinates": [[[1747, 3920], [3651, 2950], [3651, -999], [1747, -999], [1747, 3920]]] }, "crs": "+proj=aea +lat_1=8 +lat_2=18 +lat_0=13 +lon_0=-157 +x_0=0 +y_0=0 +datum=NAD83 +units=m +no_defs", "scale": 0.000123090941806, "jsonres": 15.5, "jsonmarginX": -999, "jsonmarginY": 9851.0, "xoffset": -338610.47557, "yoffset": 1022754.31736 }, "us-all-alaska": { "rotation": -0.0174532925199, "xpan": 5, "ypan": 357, "hitZone": { "type": "Polygon", "coordinates": [[[-999, 5188], [-707, 5188], [1747, 3920], [1747, -999], [-999, -999], [-999, 5188]]] }, "crs": "+proj=tmerc +lat_0=54 +lon_0=-142 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs", "scale": 5.84397059179e-05, "jsonres": 15.5, "jsonmarginX": -999, "jsonmarginY": 9851.0, "xoffset": -1566154.00853, "yoffset": 1992671.14918 } },

  "features": [{ "type": "Feature", "id": "US.MA", "properties": { "hc-group": "admin1", "hc-middle-x": 0.36, "hc-middle-y": 0.47, "hc-key": "us-ma", "hc-a2": "MA", "labelrank": "0", "hasc": "US.MA", "woe-id": "2347580", "state-fips": "25", "fips": "US25", "postal-code": "MA", "name": "Massachusetts", "country": "United States of America", "region": "Northeast", "longitude": "-71.99930000000001", "woe-name": "Massachusetts", "latitude": "42.3739", "woe-label": "Massachusetts, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[9430, 7889], [9476, 7878], [9436, 7864], [9417, 7844], [9430, 7889]]], [[[9314, 7915], [9312, 7927], [9304, 7921], [9278, 7938], [9254, 7990], [9177, 7968], [8997, 7925], [8860, 7896], [8853, 7901], [8856, 8080], [8922, 8096], [9005, 8115], [9005, 8115], [9222, 8166], [9242, 8201], [9300, 8236], [9318, 8197], [9357, 8186], [9312, 8147], [9299, 8081], [9324, 8091], [9365, 8074], [9428, 7985], [9483, 7974], [9525, 8007], [9501, 8067], [9535, 8028], [9549, 7982], [9504, 7965], [9420, 7906], [9411, 7955], [9371, 7921], [9373, 7898], [9339, 7878], [9327, 7915], [9314, 7915]]]] } }, { "type": "Feature", "id": "US.WA", "properties": { "hc-group": "admin1", "hc-middle-x": 0.56, "hc-middle-y": 0.52, "hc-key": "us-wa", "hc-a2": "WA", "labelrank": "0", "hasc": "US.WA", "woe-id": "2347606", "state-fips": "53", "fips": "US53", "postal-code": "WA", "name": "Washington", "country": "United States of America", "region": "West", "longitude": "-120.361", "woe-name": "Washington", "latitude": "47.4865", "woe-label": "Washington, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-77, 9797], [-56, 9768], [-91, 9757], [-86, 9712], [-136, 9751], [-111, 9756], [-77, 9797]]], [[[-52, 9689], [-85, 9658], [-66, 9645], [-43, 9568], [-77, 9588], [-74, 9635], [-89, 9664], [-52, 9690], [-60, 9697], [-61, 9737], [-31, 9701], [-12, 9731], [-9, 9774], [-33, 9788], [-46, 9839], [-32, 9851], [926, 9593], [767, 8925], [779, 8870], [774, 8822], [398, 8914], [378, 8905], [289, 8922], [163, 8905], [94, 8923], [38, 8914], [-10, 8925], [-22, 8950], [-113, 8979], [-207, 8965], [-283, 9014], [-271, 9096], [-280, 9134], [-321, 9167], [-357, 9171], [-365, 9207], [-400, 9226], [-436, 9219], [-460, 9259], [-436, 9333], [-441, 9279], [-416, 9297], [-401, 9347], [-434, 9357], [-429, 9395], [-369, 9396], [-424, 9436], [-424, 9523], [-410, 9624], [-433, 9678], [-428, 9749], [-385, 9790], [-313, 9713], [-183, 9655], [-161, 9666], [-146, 9623], [-100, 9637], [-95, 9567], [-135, 9518], [-77, 9566], [-112, 9491], [-89, 9426], [-154, 9433], [-175, 9394], [-167, 9449], [-222, 9394], [-157, 9376], [-124, 9418], [-82, 9426], [-82, 9476], [-66, 9527], [-18, 9570], [-37, 9644], [-24, 9661], [-52, 9689]]]] } }, { "type": "Feature", "id": "US.CA", "properties": { "hc-group": "admin1", "hc-middle-x": 0.51, "hc-middle-y": 0.67, "hc-key": "us-ca", "hc-a2": "CA", "labelrank": "0", "hasc": "US.CA", "woe-id": "2347563", "state-fips": "6", "fips": "US06", "postal-code": "CA", "name": "California", "country": "United States of America", "region": "West", "longitude": "-119.591", "woe-name": "California", "latitude": "36.7496", "woe-label": "California, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[-833, 8186], [-50, 7955], [-253, 7203], [32, 6779], [261, 6430], [593, 5936], [620, 5788], [660, 5730], [598, 5702], [559, 5661], [555, 5605], [510, 5537], [489, 5536], [476, 5452], [519, 5416], [492, 5355], [451, 5357], [-76, 5426], [-69, 5467], [-95, 5476], [-84, 5583], [-110, 5649], [-224, 5792], [-276, 5799], [-265, 5822], [-284, 5881], [-342, 5885], [-417, 5946], [-422, 5975], [-484, 6035], [-539, 6046], [-588, 6077], [-659, 6091], [-686, 6135], [-647, 6273], [-691, 6316], [-672, 6333], [-720, 6428], [-742, 6442], [-793, 6601], [-820, 6637], [-816, 6709], [-775, 6726], [-761, 6756], [-778, 6807], [-821, 6819], [-855, 6888], [-842, 6929], [-853, 6979], [-833, 7041], [-810, 7042], [-816, 6985], [-764, 6931], [-772, 6991], [-797, 7030], [-787, 7089], [-738, 7083], [-782, 7126], [-806, 7122], [-833, 7050], [-892, 7126], [-903, 7243], [-983, 7395], [-967, 7420], [-969, 7507], [-943, 7553], [-936, 7629], [-964, 7712], [-999, 7766], [-993, 7813], [-890, 7943], [-849, 8038], [-844, 8118], [-860, 8134], [-833, 8186]]] } }, { "type": "Feature", "id": "US.OR", "properties": { "hc-group": "admin1", "hc-middle-x": 0.47, "hc-middle-y": 0.52, "hc-key": "us-or", "hc-a2": "OR", "labelrank": "0", "hasc": "US.OR", "woe-id": "2347596", "state-fips": "41", "fips": "US41", "postal-code": "OR", "name": "Oregon", "country": "United States of America", "region": "West", "longitude": "-120.386", "woe-name": "Oregon", "latitude": "43.8333", "woe-label": "Oregon, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[-50, 7955], [-833, 8186], [-851, 8223], [-847, 8281], [-817, 8362], [-827, 8415], [-793, 8455], [-756, 8527], [-714, 8570], [-672, 8648], [-594, 8829], [-582, 8877], [-494, 9051], [-493, 9108], [-468, 9158], [-460, 9216], [-396, 9192], [-367, 9202], [-359, 9169], [-321, 9167], [-280, 9134], [-271, 9096], [-283, 9014], [-207, 8965], [-113, 8979], [-22, 8950], [-10, 8925], [38, 8914], [94, 8923], [163, 8905], [289, 8922], [378, 8905], [398, 8914], [774, 8822], [785, 8775], [821, 8744], [823, 8698], [776, 8646], [718, 8545], [624, 8450], [615, 8403], [662, 8361], [616, 8265], [510, 7813], [-50, 7955]]] } }, { "type": "Feature", "id": "US.WI", "properties": { "hc-group": "admin1", "hc-middle-x": 0.41, "hc-middle-y": 0.38, "hc-key": "us-wi", "hc-a2": "WI", "labelrank": "0", "hasc": "US.WI", "woe-id": "2347608", "state-fips": "55", "fips": "US55", "postal-code": "WI", "name": "Wisconsin", "country": "United States of America", "region": "Midwest", "longitude": "-89.5831", "woe-name": "Wisconsin", "latitude": "44.3709", "woe-label": "Wisconsin, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[6206, 8297], [6197, 8237], [6159, 8156], [6136, 8180], [6161, 8249], [6206, 8297]]], [[[5575, 7508], [5561, 7544], [5494, 7563], [5465, 7670], [5479, 7702], [5445, 7758], [5431, 7866], [5405, 7892], [5360, 7903], [5273, 7994], [5217, 8029], [5181, 8035], [5136, 8072], [5146, 8117], [5144, 8214], [5158, 8253], [5117, 8285], [5116, 8322], [5147, 8375], [5220, 8422], [5214, 8573], [5245, 8603], [5303, 8589], [5410, 8635], [5449, 8660], [5489, 8656], [5481, 8617], [5508, 8583], [5554, 8572], [5588, 8553], [5611, 8510], [5795, 8473], [5849, 8447], [5968, 8437], [5993, 8394], [6045, 8372], [6042, 8286], [6080, 8287], [6071, 8242], [6096, 8224], [6058, 8180], [6028, 8078], [6049, 8076], [6099, 8156], [6129, 8170], [6153, 8151], [6124, 8019], [6136, 7996], [6101, 7916], [6110, 7860], [6082, 7742], [6089, 7679], [6116, 7626], [6119, 7543], [5780, 7519], [5606, 7509], [5575, 7508]]]] } }, { "type": "Feature", "id": "US.ME", "properties": { "hc-group": "admin1", "hc-middle-x": 0.43, "hc-middle-y": 0.40, "hc-key": "us-me", "hc-a2": "ME", "labelrank": "0", "hasc": "US.ME", "woe-id": "2347578", "state-fips": "23", "fips": "US23", "postal-code": "ME", "name": "Maine", "country": "United States of America", "region": "Northeast", "longitude": "-69.1973", "woe-name": "Maine", "latitude": "45.148", "woe-label": "Maine, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[9623, 8727], [9643, 8763], [9665, 8747], [9641, 8690], [9623, 8727]]], [[[9225, 8399], [9079, 8830], [9115, 8824], [9130, 8917], [9168, 8971], [9177, 9035], [9160, 9062], [9160, 9140], [9176, 9161], [9166, 9236], [9238, 9459], [9272, 9467], [9292, 9423], [9319, 9415], [9428, 9491], [9519, 9435], [9630, 9097], [9697, 9099], [9717, 9017], [9747, 8995], [9778, 9009], [9851, 8939], [9818, 8875], [9789, 8883], [9784, 8851], [9706, 8811], [9712, 8773], [9690, 8747], [9669, 8782], [9611, 8766], [9590, 8707], [9615, 8647], [9554, 8716], [9552, 8761], [9517, 8719], [9529, 8622], [9505, 8581], [9483, 8586], [9467, 8544], [9433, 8531], [9420, 8493], [9387, 8524], [9346, 8471], [9362, 8439], [9314, 8347], [9298, 8291], [9235, 8354], [9225, 8399]]]] } }, { "type": "Feature", "id": "US.MI", "properties": { "hc-group": "admin1", "hc-middle-x": 0.71, "hc-middle-y": 0.67, "hc-key": "us-mi", "hc-a2": "MI", "labelrank": "0", "hasc": "US.MI", "woe-id": "2347581", "state-fips": "26", "fips": "US26", "postal-code": "MI", "name": "Michigan", "country": "United States of America", "region": "Midwest", "longitude": "-84.9479", "woe-name": "Michigan", "latitude": "43.4343", "woe-label": "Michigan, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[6802, 8561], [6808, 8523], [6764, 8521], [6774, 8565], [6802, 8561]]], [[[5863, 9010], [5834, 8966], [5759, 8913], [5758, 8947], [5863, 9010]]], [[[6976, 7443], [6815, 7415], [6718, 7400], [6716, 7416], [6323, 7372], [6364, 7423], [6399, 7509], [6417, 7630], [6409, 7695], [6330, 7861], [6345, 7903], [6322, 7979], [6361, 8059], [6352, 8141], [6381, 8159], [6381, 8204], [6423, 8217], [6453, 8283], [6469, 8252], [6460, 8196], [6479, 8180], [6501, 8221], [6497, 8298], [6533, 8342], [6567, 8348], [6542, 8410], [6593, 8461], [6646, 8436], [6627, 8469], [6669, 8467], [6654, 8434], [6698, 8433], [6726, 8400], [6837, 8377], [6863, 8359], [6884, 8307], [6860, 8285], [6902, 8213], [6903, 8115], [6872, 8094], [6868, 8040], [6821, 8014], [6824, 7934], [6868, 7920], [6900, 7950], [6937, 8030], [6993, 8059], [7042, 8027], [7097, 7866], [7128, 7802], [7124, 7704], [7066, 7697], [7061, 7631], [7021, 7590], [7008, 7500], [6976, 7443]]], [[[5874, 8741], [5900, 8700], [5901, 8651], [5938, 8693], [6017, 8689], [6049, 8673], [6107, 8596], [6174, 8609], [6192, 8589], [6244, 8596], [6318, 8663], [6430, 8674], [6485, 8705], [6529, 8713], [6518, 8645], [6560, 8631], [6591, 8646], [6609, 8627], [6633, 8653], [6688, 8665], [6692, 8589], [6745, 8536], [6723, 8521], [6631, 8516], [6606, 8530], [6598, 8476], [6541, 8514], [6480, 8529], [6444, 8521], [6426, 8490], [6320, 8470], [6302, 8429], [6244, 8388], [6264, 8448], [6227, 8437], [6192, 8395], [6185, 8444], [6096, 8224], [6071, 8242], [6080, 8287], [6042, 8286], [6045, 8372], [5993, 8394], [5968, 8437], [5849, 8447], [5795, 8473], [5611, 8510], [5588, 8553], [5554, 8572], [5623, 8604], [5661, 8642], [5731, 8656], [5776, 8696], [5805, 8702], [5860, 8764], [5868, 8750], [5893, 8802], [5958, 8837], [6017, 8829], [5931, 8757], [5903, 8703], [5900, 8738], [5874, 8741]]]] } }, { "type": "Feature", "id": "US.NV", "properties": { "hc-group": "admin1", "hc-middle-x": 0.46, "hc-middle-y": 0.38, "hc-key": "us-nv", "hc-a2": "NV", "labelrank": "0", "hasc": "US.NV", "woe-id": "2347587", "state-fips": "32", "fips": "US32", "postal-code": "NV", "name": "Nevada", "country": "United States of America", "region": "West", "longitude": "-117.02", "woe-name": "Nevada", "latitude": "39.4299", "woe-label": "Nevada, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[-50, 7955], [510, 7813], [897, 7727], [1073, 7690], [929, 6975], [818, 6420], [777, 6221], [752, 6180], [669, 6227], [631, 6217], [631, 6159], [611, 6068], [614, 5982], [593, 5936], [261, 6430], [32, 6779], [-253, 7203], [-50, 7955]]] } }, { "type": "Feature", "id": "US.NM", "properties": { "hc-group": "admin1", "hc-middle-x": 0.51, "hc-middle-y": 0.50, "hc-key": "us-nm", "hc-a2": "NM", "labelrank": "0", "hasc": "US.NM", "woe-id": "2347590", "state-fips": "35", "fips": "US35", "postal-code": "NM", "name": "New Mexico", "country": "United States of America", "region": "West", "longitude": "-106.024", "woe-name": "New Mexico", "latitude": "34.5002", "woe-label": "New Mexico, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[1841, 6242], [3091, 6104], [3083, 6007], [3081, 5975], [3072, 5970], [2976, 4810], [2181, 4887], [2208, 4823], [1830, 4873], [1815, 4756], [1630, 4782], [1736, 5514], [1841, 6242]]] } }, { "type": "Feature", "id": "US.CO", "properties": { "hc-group": "admin1", "hc-middle-x": 0.51, "hc-middle-y": 0.50, "hc-key": "us-co", "hc-a2": "CO", "labelrank": "0", "hasc": "US.CO", "woe-id": "2347564", "state-fips": "8", "fips": "US08", "postal-code": "CO", "name": "Colorado", "country": "United States of America", "region": "West", "longitude": "-105.543", "woe-name": "Colorado", "latitude": "38.9998", "woe-label": "Colorado, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[3091, 6104], [1841, 6242], [1966, 7108], [1990, 7269], [2964, 7155], [3357, 7124], [3339, 6866], [3329, 6696], [3290, 6089], [3091, 6104]]] } }, { "type": "Feature", "id": "US.WY", "properties": { "hc-group": "admin1", "hc-middle-x": 0.51, "hc-middle-y": 0.50, "hc-key": "us-wy", "hc-a2": "WY", "labelrank": "0", "hasc": "US.WY", "woe-id": "2347609", "state-fips": "56", "fips": "US56", "postal-code": "WY", "name": "Wyoming", "country": "United States of America", "region": "West", "longitude": "-107.552", "woe-name": "Wyoming", "latitude": "42.9999", "woe-label": "Wyoming, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[2964, 7155], [1990, 7269], [1600, 7329], [1643, 7585], [1677, 7785], [1750, 8226], [1772, 8355], [3056, 8191], [3019, 7770], [3010, 7672], [3002, 7575], [2964, 7155]]] } }, { "type": "Feature", "id": "US.KS", "properties": { "hc-group": "admin1", "hc-middle-x": 0.30, "hc-middle-y": 0.49, "hc-key": "us-ks", "hc-a2": "KS", "labelrank": "0", "hasc": "US.KS", "woe-id": "2347575", "state-fips": "20", "fips": "US20", "postal-code": "KS", "name": "Kansas", "country": "United States of America", "region": "Midwest", "longitude": "-98.3309", "woe-name": "Kansas", "latitude": "38.5", "woe-label": "Kansas, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[3339, 6866], [4682, 6826], [4769, 6780], [4726, 6705], [4767, 6667], [4781, 6624], [4824, 6600], [4833, 6050], [3290, 6089], [3329, 6696], [3339, 6866]]] } }, { "type": "Feature", "id": "US.NE", "properties": { "hc-group": "admin1", "hc-middle-x": 0.43, "hc-middle-y": 0.50, "hc-key": "us-ne", "hc-a2": "NE", "labelrank": "0", "hasc": "US.NE", "woe-id": "2347586", "state-fips": "31", "fips": "US31", "postal-code": "NE", "name": "Nebraska", "country": "United States of America", "region": "Midwest", "longitude": "-99.68550000000001", "woe-name": "Nebraska", "latitude": "41.5002", "woe-label": "Nebraska, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[4682, 6826], [3339, 6866], [3357, 7124], [2964, 7155], [3002, 7575], [3010, 7672], [4071, 7611], [4148, 7558], [4194, 7574], [4297, 7577], [4330, 7551], [4409, 7521], [4453, 7479], [4469, 7474], [4478, 7398], [4515, 7341], [4533, 7291], [4529, 7228], [4559, 7206], [4571, 7165], [4579, 7031], [4592, 6986], [4592, 6981], [4592, 6981], [4591, 6981], [4591, 6981], [4619, 6915], [4682, 6826]]] } }, { "type": "Feature", "id": "US.OK", "properties": { "hc-group": "admin1", "hc-middle-x": 0.78, "hc-middle-y": 0.52, "hc-key": "us-ok", "hc-a2": "OK", "labelrank": "0", "hasc": "US.OK", "woe-id": "2347595", "state-fips": "40", "fips": "US40", "postal-code": "OK", "name": "Oklahoma", "country": "United States of America", "region": "South", "longitude": "-97.1309", "woe-name": "Oklahoma", "latitude": "35.452", "woe-label": "Oklahoma, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[3290, 6089], [4833, 6050], [4833, 6017], [4835, 5920], [4877, 5632], [4875, 5180], [4790, 5207], [4714, 5260], [4685, 5235], [4632, 5257], [4595, 5233], [4559, 5242], [4474, 5191], [4405, 5248], [4360, 5237], [4347, 5258], [4312, 5234], [4304, 5199], [4283, 5247], [4248, 5227], [4181, 5268], [4121, 5246], [4093, 5310], [4007, 5296], [3908, 5334], [3856, 5341], [3842, 5388], [3753, 5388], [3686, 5437], [3707, 5936], [3081, 5975], [3083, 6007], [3091, 6104], [3290, 6089]]] } }, { "type": "Feature", "id": "US.MO", "properties": { "hc-group": "admin1", "hc-middle-x": 0.48, "hc-middle-y": 0.51, "hc-key": "us-mo", "hc-a2": "MO", "labelrank": "0", "hasc": "US.MO", "woe-id": "2347584", "state-fips": "29", "fips": "US29", "postal-code": "MO", "name": "Missouri", "country": "United States of America", "region": "Midwest", "longitude": "-92.446", "woe-name": "Missouri", "latitude": "38.5487", "woe-label": "Missouri, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[4835, 5920], [4833, 6017], [4833, 6050], [4824, 6600], [4781, 6624], [4767, 6667], [4726, 6705], [4769, 6780], [4682, 6826], [4619, 6915], [4591, 6981], [4591, 6981], [4592, 6981], [4846, 6977], [5120, 6985], [5389, 7006], [5449, 6947], [5449, 6947], [5449, 6947], [5436, 6893], [5454, 6813], [5475, 6774], [5540, 6711], [5588, 6679], [5616, 6596], [5642, 6567], [5672, 6592], [5735, 6561], [5692, 6420], [5752, 6350], [5792, 6336], [5873, 6276], [5898, 6211], [5886, 6165], [5918, 6121], [5975, 6097], [5976, 6033], [5956, 5988], [5932, 6005], [5921, 5968], [5911, 5955], [5907, 5967], [5890, 5980], [5893, 5966], [5901, 5936], [5869, 5898], [5888, 5872], [5868, 5834], [5731, 5821], [5790, 5904], [5767, 5957], [4835, 5920]]] } }, { "type": "Feature", "id": "US.IL", "properties": { "hc-group": "admin1", "hc-middle-x": 0.56, "hc-middle-y": 0.45, "hc-key": "us-il", "hc-a2": "IL", "labelrank": "0", "hasc": "US.IL", "woe-id": "2347572", "state-fips": "17", "fips": "US17", "postal-code": "IL", "name": "Illinois", "country": "United States of America", "region": "Midwest", "longitude": "-89.1991", "woe-name": "Illinois", "latitude": "39.946", "woe-label": "Illinois, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[6119, 7543], [6121, 7488], [6192, 7351], [6247, 6739], [6226, 6674], [6254, 6638], [6266, 6585], [6244, 6520], [6222, 6503], [6194, 6422], [6176, 6404], [6179, 6328], [6159, 6283], [6171, 6241], [6102, 6218], [6105, 6131], [6015, 6162], [5987, 6157], [5962, 6117], [5975, 6097], [5918, 6121], [5886, 6165], [5898, 6211], [5873, 6276], [5792, 6336], [5752, 6350], [5692, 6420], [5735, 6561], [5672, 6592], [5642, 6567], [5616, 6596], [5588, 6679], [5540, 6711], [5475, 6774], [5454, 6813], [5436, 6893], [5449, 6947], [5449, 6947], [5449, 6947], [5458, 7004], [5496, 7020], [5535, 7098], [5536, 7132], [5509, 7160], [5523, 7224], [5579, 7232], [5646, 7276], [5671, 7332], [5672, 7411], [5625, 7441], [5575, 7508], [5575, 7508], [5606, 7509], [5848, 7523], [6119, 7543]]] } }, { "type": "Feature", "id": "US.IN", "properties": { "hc-group": "admin1", "hc-middle-x": 0.49, "hc-middle-y": 0.43, "hc-key": "us-in", "hc-a2": "IN", "labelrank": "0", "hasc": "US.IN", "woe-id": "2347573", "state-fips": "18", "fips": "US18", "postal-code": "IN", "name": "Indiana", "country": "United States of America", "region": "Midwest", "longitude": "-86.1396", "woe-name": "Indiana", "latitude": "39.8874", "woe-label": "Indiana, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[6192, 7351], [6239, 7329], [6323, 7372], [6716, 7416], [6718, 7400], [6732, 7296], [6797, 6730], [6792, 6683], [6808, 6651], [6737, 6617], [6682, 6619], [6693, 6572], [6657, 6540], [6652, 6507], [6622, 6498], [6608, 6438], [6583, 6411], [6531, 6450], [6485, 6413], [6485, 6390], [6444, 6379], [6426, 6401], [6359, 6356], [6303, 6376], [6269, 6350], [6209, 6363], [6179, 6328], [6176, 6404], [6194, 6422], [6222, 6503], [6244, 6520], [6266, 6585], [6254, 6638], [6226, 6674], [6247, 6739], [6192, 7351]]] } }, { "type": "Feature", "id": "US.VT", "properties": { "hc-group": "admin1", "hc-middle-x": 0.42, "hc-middle-y": 0.43, "hc-key": "us-vt", "hc-a2": "VT", "labelrank": "0", "hasc": "US.VT", "woe-id": "2347604", "state-fips": "50", "fips": "US50", "postal-code": "VT", "name": "Vermont", "country": "United States of America", "region": "Northeast", "longitude": "-72.7317", "woe-name": "Vermont", "latitude": "44.0886", "woe-label": "Vermont, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[8922, 8096], [8856, 8080], [8807, 8284], [8772, 8287], [8772, 8328], [8740, 8402], [8748, 8453], [8739, 8514], [8720, 8537], [8695, 8646], [8811, 8677], [9024, 8736], [9020, 8661], [9045, 8629], [9033, 8585], [8978, 8526], [8986, 8490], [8981, 8392], [8964, 8320], [8979, 8261], [8979, 8148], [9005, 8115], [9005, 8115], [8922, 8096]]] } }, { "type": "Feature", "id": "US.AR", "properties": { "hc-group": "admin1", "hc-middle-x": 0.47, "hc-middle-y": 0.43, "hc-key": "us-ar", "hc-a2": "AR", "labelrank": "0", "hasc": "US.AR", "woe-id": "2347562", "state-fips": "5", "fips": "US05", "postal-code": "AR", "name": "Arkansas", "country": "United States of America", "region": "South", "longitude": "-92.14279999999999", "woe-name": "Arkansas", "latitude": "34.7563", "woe-label": "Arkansas, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[4975, 5016], [4971, 5157], [4910, 5157], [4875, 5180], [4877, 5632], [4835, 5920], [5767, 5957], [5790, 5904], [5731, 5821], [5868, 5834], [5871, 5791], [5827, 5763], [5835, 5714], [5798, 5670], [5802, 5602], [5762, 5567], [5770, 5547], [5730, 5520], [5706, 5470], [5709, 5414], [5635, 5340], [5647, 5309], [5609, 5297], [5620, 5250], [5583, 5215], [5607, 5162], [5598, 5120], [5618, 5077], [5605, 5041], [5563, 5038], [4975, 5016]]] } }, { "type": "Feature", "id": "US.TX", "properties": { "hc-group": "admin1", "hc-middle-x": 0.69, "hc-middle-y": 0.52, "hc-key": "us-tx", "hc-a2": "TX", "labelrank": "0", "hasc": "US.TX", "woe-id": "2347602", "state-fips": "48", "fips": "US48", "postal-code": "TX", "name": "Texas", "country": "United States of America", "region": "South", "longitude": "-98.7607", "woe-name": "Texas", "latitude": "31.131", "woe-label": "Texas, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[4875, 5180], [4910, 5157], [4971, 5157], [4975, 5016], [4980, 4752], [5033, 4679], [5031, 4646], [5105, 4506], [5093, 4447], [5059, 4380], [5065, 4253], [5047, 4228], [5018, 4172], [5032, 4146], [4989, 4147], [4854, 4084], [4875, 4116], [4831, 4102], [4842, 4162], [4778, 4141], [4769, 4106], [4839, 4052], [4789, 4023], [4801, 4063], [4739, 3976], [4638, 3901], [4557, 3881], [4544, 3857], [4451, 3804], [4448, 3787], [4381, 3749], [4308, 3672], [4340, 3735], [4307, 3756], [4261, 3721], [4306, 3712], [4263, 3655], [4221, 3658], [4249, 3617], [4213, 3527], [4195, 3545], [4141, 3510], [4206, 3511], [4178, 3442], [4232, 3206], [4272, 3164], [4203, 3135], [4114, 3192], [4013, 3198], [3979, 3230], [3915, 3245], [3878, 3279], [3810, 3292], [3795, 3375], [3727, 3467], [3715, 3534], [3721, 3603], [3677, 3628], [3595, 3762], [3548, 3801], [3525, 3881], [3477, 3970], [3469, 4021], [3393, 4097], [3411, 4119], [3365, 4132], [3310, 4204], [3150, 4220], [3103, 4248], [3082, 4218], [3018, 4214], [2959, 4096], [2967, 4083], [2896, 4024], [2861, 4031], [2754, 4113], [2695, 4134], [2651, 4187], [2595, 4230], [2567, 4305], [2573, 4370], [2512, 4503], [2437, 4557], [2309, 4714], [2275, 4731], [2239, 4806], [2208, 4823], [2181, 4887], [2976, 4810], [3072, 5970], [3081, 5975], [3707, 5936], [3686, 5437], [3753, 5388], [3842, 5388], [3856, 5341], [3908, 5334], [4007, 5296], [4093, 5310], [4121, 5246], [4181, 5268], [4248, 5227], [4283, 5247], [4304, 5199], [4312, 5234], [4347, 5258], [4360, 5237], [4405, 5248], [4474, 5191], [4559, 5242], [4595, 5233], [4632, 5257], [4685, 5235], [4714, 5260], [4790, 5207], [4875, 5180]]], [[[4269, 3610], [4220, 3493], [4219, 3420], [4245, 3297], [4214, 3394], [4222, 3530], [4269, 3610]]]] } }, { "type": "Feature", "id": "US.RI", "properties": { "hc-group": "admin1", "hc-middle-x": 0.55, "hc-middle-y": 0.78, "hc-key": "us-ri", "hc-a2": "RI", "labelrank": "0", "hasc": "US.RI", "woe-id": "2347598", "state-fips": "44", "fips": "US44", "postal-code": "RI", "name": "Rhode Island", "country": "United States of America", "region": "Northeast", "longitude": "-71.5082", "woe-name": "Rhode Island", "latitude": "41.6242", "woe-label": "Rhode Island, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[9339, 7878], [9325, 7871], [9314, 7915], [9327, 7915], [9339, 7878]]], [[[9177, 7968], [9254, 7990], [9278, 7938], [9304, 7921], [9320, 7866], [9285, 7851], [9279, 7822], [9216, 7790], [9212, 7845], [9177, 7968]]]] } }, { "type": "Feature", "id": "US.AL", "properties": { "hc-group": "admin1", "hc-middle-x": 0.47, "hc-middle-y": 0.42, "hc-key": "us-al", "hc-a2": "AL", "labelrank": "0", "hasc": "US.AL", "woe-id": "2347559", "state-fips": "1", "fips": "US01", "postal-code": "AL", "name": "Alabama", "country": "United States of America", "region": "South", "longitude": "-86.7184", "woe-name": "Alabama", "latitude": "32.8551", "woe-label": "Alabama, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[6487, 4443], [6440, 4378], [6291, 4361], [6336, 4375], [6317, 4398], [6267, 4399], [6216, 4788], [6236, 5574], [6215, 5600], [6213, 5603], [6762, 5652], [6912, 5135], [6947, 5053], [6998, 4970], [6970, 4930], [6958, 4846], [6990, 4774], [6983, 4704], [7015, 4637], [6436, 4574], [6431, 4541], [6487, 4486], [6487, 4443]]] } }, { "type": "Feature", "id": "US.MS", "properties": { "hc-group": "admin1", "hc-middle-x": 0.51, "hc-middle-y": 0.48, "hc-key": "us-ms", "hc-a2": "MS", "labelrank": "0", "hasc": "US.MS", "woe-id": "2347583", "state-fips": "28", "fips": "US28", "postal-code": "MS", "name": "Mississippi", "country": "United States of America", "region": "South", "longitude": "-89.71890000000001", "woe-name": "Mississippi", "latitude": "32.8657", "woe-label": "Mississippi, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[6267, 4399], [6164, 4396], [6059, 4360], [6017, 4328], [5936, 4451], [5955, 4536], [5523, 4510], [5540, 4526], [5522, 4581], [5545, 4585], [5545, 4642], [5565, 4662], [5584, 4738], [5636, 4781], [5670, 4868], [5629, 4895], [5611, 4977], [5627, 5018], [5605, 5041], [5618, 5077], [5598, 5120], [5607, 5162], [5583, 5215], [5620, 5250], [5609, 5297], [5647, 5309], [5635, 5340], [5709, 5414], [5706, 5470], [5730, 5520], [5770, 5547], [5762, 5567], [6122, 5592], [6215, 5600], [6236, 5574], [6216, 4788], [6267, 4399]]] } }, { "type": "Feature", "id": "US.NC", "properties": { "hc-group": "admin1", "hc-middle-x": 0.62, "hc-middle-y": 0.50, "hc-key": "us-nc", "hc-a2": "NC", "labelrank": "0", "hasc": "US.NC", "woe-id": "2347592", "state-fips": "37", "fips": "US37", "postal-code": "NC", "name": "North Carolina", "country": "United States of America", "region": "South", "longitude": "-78.866", "woe-name": "North Carolina", "latitude": "35.6152", "woe-label": "North Carolina, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[8716, 6394], [8720, 6381], [8694, 6389], [8694, 6389], [8704, 6391], [8705, 6390], [8709, 6392], [8712, 6393], [8716, 6394]]], [[[8727, 6396], [8756, 6332], [8852, 6203], [8782, 6278], [8722, 6395], [8724, 6396], [8727, 6396]]], [[[7532, 6183], [7623, 6187], [7858, 6219], [8691, 6388], [8768, 6281], [8670, 6318], [8707, 6291], [8620, 6230], [8584, 6234], [8581, 6204], [8719, 6244], [8742, 6161], [8737, 6222], [8760, 6252], [8795, 6220], [8797, 6153], [8772, 6164], [8750, 6091], [8709, 6073], [8638, 6097], [8638, 6070], [8551, 6078], [8664, 6053], [8635, 6009], [8661, 6003], [8610, 5957], [8551, 5988], [8590, 5949], [8631, 5940], [8676, 5955], [8686, 5995], [8721, 5956], [8670, 5890], [8565, 5865], [8469, 5764], [8443, 5714], [8432, 5616], [8368, 5624], [8302, 5600], [8029, 5790], [7791, 5756], [7782, 5790], [7714, 5830], [7457, 5802], [7290, 5724], [7210, 5711], [7034, 5685], [7038, 5756], [7073, 5762], [7085, 5807], [7131, 5847], [7188, 5859], [7269, 5928], [7298, 5973], [7352, 6010], [7365, 5989], [7437, 6050], [7464, 6038], [7490, 6093], [7523, 6123], [7532, 6183]]]] } }, { "type": "Feature", "id": "US.VA", "properties": { "hc-group": "admin1", "hc-middle-x": 0.64, "hc-middle-y": 0.54, "hc-key": "us-va", "hc-a2": "VA", "labelrank": "0", "hasc": "US.VA", "woe-id": "2347605", "state-fips": "51", "fips": "US51", "postal-code": "VA", "name": "Virginia", "country": "United States of America", "region": "South", "longitude": "-78.2431", "woe-name": "Virginia", "latitude": "37.7403", "woe-label": "Virginia, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[8722, 6395], [8696, 6432], [8704, 6391], [8694, 6389], [8694, 6389], [8686, 6398], [8691, 6388], [7858, 6219], [7623, 6187], [7532, 6183], [7472, 6170], [7116, 6120], [7221, 6173], [7268, 6217], [7309, 6294], [7363, 6332], [7431, 6411], [7470, 6351], [7530, 6341], [7567, 6378], [7595, 6360], [7649, 6382], [7664, 6419], [7690, 6412], [7773, 6459], [7767, 6505], [7840, 6674], [7857, 6759], [7932, 6729], [7974, 6848], [7998, 6837], [8048, 6900], [8072, 6952], [8076, 7028], [8188, 6969], [8198, 7020], [8256, 7009], [8251, 6984], [8341, 6945], [8347, 6939], [8353, 6939], [8367, 6892], [8334, 6870], [8323, 6802], [8347, 6786], [8385, 6812], [8429, 6763], [8484, 6768], [8507, 6740], [8571, 6721], [8572, 6647], [8536, 6648], [8499, 6683], [8431, 6711], [8532, 6636], [8597, 6606], [8561, 6578], [8558, 6548], [8577, 6545], [8611, 6494], [8586, 6478], [8526, 6534], [8449, 6533], [8518, 6510], [8580, 6459], [8619, 6482], [8679, 6482], [8727, 6396], [8724, 6396], [8722, 6395]], [[8558, 6548], [8552, 6548], [8552, 6548], [8552, 6548], [8484, 6605], [8532, 6551], [8552, 6548], [8552, 6548], [8552, 6548], [8557, 6544], [8558, 6548]]], [[[8709, 6392], [8713, 6400], [8716, 6394], [8712, 6393], [8709, 6392]]], [[[8765, 6797], [8756, 6760], [8761, 6796], [8765, 6797]]], [[[8688, 6764], [8691, 6772], [8739, 6789], [8726, 6737], [8674, 6599], [8696, 6561], [8678, 6528], [8652, 6583], [8652, 6652], [8688, 6764]]]] } }, { "type": "Feature", "id": "US.IA", "properties": { "hc-group": "admin1", "hc-middle-x": 0.35, "hc-middle-y": 0.49, "hc-key": "us-ia", "hc-a2": "IA", "labelrank": "0", "hasc": "US.IA", "woe-id": "2347574", "state-fips": "19", "fips": "US19", "postal-code": "IA", "name": "Iowa", "country": "United States of America", "region": "Midwest", "longitude": "-93.3891", "woe-name": "Iowa", "latitude": "42.0423", "woe-label": "Iowa, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[5575, 7508], [5625, 7441], [5672, 7411], [5671, 7332], [5646, 7276], [5579, 7232], [5523, 7224], [5509, 7160], [5536, 7132], [5535, 7098], [5496, 7020], [5458, 7004], [5449, 6947], [5449, 6947], [5449, 6947], [5389, 7006], [5120, 6985], [4846, 6977], [4592, 6981], [4591, 6981], [4579, 7031], [4571, 7165], [4559, 7206], [4529, 7228], [4533, 7291], [4515, 7341], [4478, 7398], [4469, 7474], [4453, 7479], [4423, 7540], [4459, 7636], [4438, 7663], [4433, 7734], [4459, 7735], [5137, 7745], [5445, 7758], [5479, 7702], [5465, 7670], [5494, 7563], [5561, 7544], [5577, 7513], [5575, 7508], [5575, 7508]]] } }, { "type": "Feature", "id": "US.MD", "properties": { "hc-group": "admin1", "hc-middle-x": 0.61, "hc-middle-y": 0.27, "hc-key": "us-md", "hc-a2": "MD", "labelrank": "0", "hasc": "US.MD", "woe-id": "2347579", "state-fips": "24", "fips": "US24", "postal-code": "MD", "name": "Maryland", "country": "United States of America", "region": "South", "longitude": "-77.0454", "woe-name": "Maryland", "latitude": "39.3874", "woe-label": "Maryland, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[8761, 6796], [8769, 6819], [8765, 6797], [8761, 6796]]], [[[8779, 6915], [8779, 6884], [8777, 6914], [8777, 6914], [8779, 6915]]], [[[8739, 6789], [8691, 6772], [8688, 6764], [8647, 6746], [8650, 6806], [8590, 6833], [8592, 6815], [8525, 6862], [8581, 6899], [8555, 6926], [8511, 6936], [8544, 6974], [8512, 6986], [8496, 7036], [8530, 7108], [8537, 7165], [8497, 7093], [8472, 7099], [8469, 7056], [8432, 7052], [8471, 7014], [8458, 6959], [8483, 6868], [8513, 6820], [8462, 6849], [8543, 6778], [8548, 6753], [8491, 6782], [8433, 6785], [8382, 6834], [8354, 6797], [8335, 6827], [8370, 6891], [8367, 6916], [8385, 6943], [8341, 6945], [8251, 6984], [8256, 7009], [8198, 7020], [8162, 7087], [8101, 7099], [8046, 7067], [8043, 7043], [8000, 7038], [7977, 7057], [7949, 7003], [7928, 7007], [7857, 6922], [7835, 7053], [8176, 7119], [8559, 7201], [8650, 6887], [8771, 6913], [8770, 6856], [8753, 6848], [8739, 6789]]]] } }, { "type": "Feature", "id": "US.DE", "properties": { "hc-group": "admin1", "hc-middle-x": 0.91, "hc-middle-y": 0.77, "hc-key": "us-de", "hc-a2": "DE", "labelrank": "0", "hasc": "US.DE", "woe-id": "2347566", "state-fips": "10", "fips": "US10", "postal-code": "DE", "name": "Delaware", "country": "United States of America", "region": "South", "longitude": "-75.41119999999999", "woe-name": "Delaware", "latitude": "38.8657", "woe-label": "Delaware, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[8777, 6914], [8771, 6915], [8771, 6913], [8650, 6887], [8559, 7201], [8589, 7239], [8625, 7239], [8601, 7183], [8613, 7145], [8652, 7114], [8675, 7051], [8735, 6995], [8751, 6999], [8779, 6915], [8777, 6914], [8777, 6914]]] } }, { "type": "Feature", "id": "US.PA", "properties": { "hc-group": "admin1", "hc-middle-x": 0.50, "hc-middle-y": 0.49, "hc-key": "us-pa", "hc-a2": "PA", "labelrank": "0", "hasc": "US.PA", "woe-id": "2347597", "state-fips": "42", "fips": "US42", "postal-code": "PA", "name": "Pennsylvania", "country": "United States of America", "region": "Northeast", "longitude": "-77.60939999999999", "woe-name": "Pennsylvania", "latitude": "40.8601", "woe-label": "Pennsylvania, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[8611, 7549], [8632, 7530], [8615, 7490], [8627, 7443], [8646, 7444], [8739, 7361], [8691, 7310], [8673, 7276], [8625, 7239], [8589, 7239], [8559, 7201], [8176, 7119], [7835, 7053], [7630, 7017], [7589, 7253], [7589, 7253], [7530, 7595], [7556, 7610], [7662, 7693], [7674, 7625], [8514, 7797], [8573, 7765], [8588, 7712], [8673, 7663], [8673, 7663], [8611, 7549]]] } }, { "type": "Feature", "id": "US.NJ", "properties": { "hc-group": "admin1", "hc-middle-x": 0.68, "hc-middle-y": 0.64, "hc-key": "us-nj", "hc-a2": "NJ", "labelrank": "0", "hasc": "US.NJ", "woe-id": "2347589", "state-fips": "34", "fips": "US34", "postal-code": "NJ", "name": "New Jersey", "country": "United States of America", "region": "Northeast", "longitude": "-74.4653", "woe-name": "New Jersey", "latitude": "40.0449", "woe-label": "New Jersey, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[8611, 7549], [8673, 7663], [8759, 7635], [8846, 7608], [8840, 7532], [8810, 7504], [8805, 7466], [8866, 7456], [8875, 7438], [8886, 7281], [8853, 7228], [8849, 7172], [8812, 7122], [8784, 7047], [8766, 7040], [8769, 7097], [8716, 7095], [8623, 7151], [8610, 7186], [8624, 7231], [8676, 7269], [8691, 7310], [8739, 7361], [8646, 7444], [8627, 7443], [8615, 7490], [8632, 7530], [8611, 7549]]] } }, { "type": "Feature", "id": "US.NY", "properties": { "hc-group": "admin1", "hc-middle-x": 0.54, "hc-middle-y": 0.49, "hc-key": "us-ny", "hc-a2": "NY", "labelrank": "0", "hasc": "US.NY", "woe-id": "2347591", "state-fips": "36", "fips": "US36", "postal-code": "NY", "name": "New York", "country": "United States of America", "region": "Northeast", "longitude": "-75.32420000000001", "woe-name": "New York", "latitude": "43.1988", "woe-label": "New York, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[8673, 7663], [8588, 7712], [8573, 7765], [8514, 7797], [7674, 7625], [7662, 7693], [7763, 7795], [7803, 7872], [7754, 7932], [7747, 7976], [7812, 8010], [7918, 8040], [7988, 8041], [8031, 8026], [8061, 8043], [8133, 8055], [8180, 8080], [8224, 8141], [8264, 8164], [8243, 8232], [8257, 8274], [8225, 8259], [8202, 8296], [8230, 8345], [8280, 8379], [8297, 8437], [8358, 8526], [8422, 8581], [8453, 8585], [8695, 8646], [8720, 8537], [8739, 8514], [8748, 8453], [8740, 8402], [8772, 8328], [8772, 8287], [8807, 8284], [8856, 8080], [8853, 7901], [8860, 7896], [8896, 7702], [8912, 7685], [8874, 7645], [8896, 7623], [8881, 7575], [8930, 7617], [8982, 7620], [9002, 7641], [9094, 7671], [9134, 7722], [9173, 7697], [9177, 7721], [9184, 7702], [9231, 7730], [9141, 7649], [9083, 7619], [9032, 7570], [8936, 7519], [8857, 7498], [8812, 7468], [8814, 7503], [8840, 7506], [8858, 7554], [8843, 7544], [8846, 7608], [8759, 7635], [8695, 7656], [8673, 7663], [8673, 7663]]] } }, { "type": "Feature", "id": "US.ID", "properties": { "hc-group": "admin1", "hc-middle-x": 0.51, "hc-middle-y": 0.75, "hc-key": "us-id", "hc-a2": "ID", "labelrank": "0", "hasc": "US.ID", "woe-id": "2347571", "state-fips": "16", "fips": "US16", "postal-code": "ID", "name": "Idaho", "country": "United States of America", "region": "West", "longitude": "-114.133", "woe-name": "Idaho", "latitude": "43.7825", "woe-label": "Idaho, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[926, 9593], [1093, 9555], [1036, 9301], [1076, 9210], [1061, 9142], [1117, 9085], [1172, 8979], [1170, 8959], [1219, 8896], [1258, 8897], [1253, 8859], [1219, 8796], [1204, 8727], [1211, 8698], [1177, 8675], [1167, 8620], [1200, 8590], [1278, 8630], [1303, 8596], [1303, 8522], [1338, 8434], [1326, 8419], [1347, 8377], [1374, 8375], [1391, 8331], [1392, 8280], [1415, 8254], [1451, 8281], [1508, 8261], [1536, 8282], [1614, 8258], [1671, 8261], [1686, 8296], [1713, 8295], [1750, 8226], [1677, 7785], [1643, 7585], [1393, 7629], [1073, 7690], [897, 7727], [510, 7813], [616, 8265], [662, 8361], [615, 8403], [624, 8450], [718, 8545], [776, 8646], [823, 8698], [821, 8744], [785, 8775], [774, 8822], [779, 8870], [767, 8925], [926, 9593]]] } }, { "type": "Feature", "id": "US.SD", "properties": { "hc-group": "admin1", "hc-middle-x": 0.51, "hc-middle-y": 0.44, "hc-key": "us-sd", "hc-a2": "SD", "labelrank": "0", "hasc": "US.SD", "woe-id": "2347600", "state-fips": "46", "fips": "US46", "postal-code": "SD", "name": "South Dakota", "country": "United States of America", "region": "Midwest", "longitude": "-100.255", "woe-name": "South Dakota", "latitude": "44.4711", "woe-label": "South Dakota, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[3010, 7672], [3019, 7770], [3056, 8191], [3059, 8191], [3080, 8436], [4231, 8374], [4444, 8372], [4429, 8325], [4387, 8283], [4419, 8232], [4462, 8203], [4459, 7735], [4433, 7734], [4438, 7663], [4459, 7636], [4423, 7540], [4453, 7479], [4409, 7521], [4330, 7551], [4297, 7577], [4194, 7574], [4148, 7558], [4071, 7611], [3010, 7672]]] } }, { "type": "Feature", "id": "US.CT", "properties": { "hc-group": "admin1", "hc-middle-x": 0.48, "hc-middle-y": 0.50, "hc-key": "us-ct", "hc-a2": "CT", "labelrank": "0", "hasc": "US.CT", "woe-id": "2347565", "state-fips": "9", "fips": "US09", "postal-code": "CT", "name": "Connecticut", "country": "United States of America", "region": "Northeast", "longitude": "-72.7594", "woe-name": "Connecticut", "latitude": "41.6486", "woe-label": "Connecticut, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[9216, 7790], [9204, 7796], [9095, 7743], [9023, 7721], [8972, 7689], [8896, 7623], [8874, 7645], [8912, 7685], [8896, 7702], [8860, 7896], [8997, 7925], [9177, 7968], [9212, 7845], [9216, 7790]]] } }, { "type": "Feature", "id": "US.NH", "properties": { "hc-group": "admin1", "hc-middle-x": 0.38, "hc-middle-y": 0.57, "hc-key": "us-nh", "hc-a2": "NH", "labelrank": "0", "hasc": "US.NH", "woe-id": "2347588", "state-fips": "33", "fips": "US33", "postal-code": "NH", "name": "New Hampshire", "country": "United States of America", "region": "Northeast", "longitude": "-71.6301", "woe-name": "New Hampshire", "latitude": "43.5993", "woe-label": "New Hampshire, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[9298, 8291], [9306, 8288], [9300, 8236], [9242, 8201], [9222, 8166], [9005, 8115], [9005, 8115], [8979, 8148], [8979, 8261], [8964, 8320], [8981, 8392], [8986, 8490], [8978, 8526], [9033, 8585], [9045, 8629], [9020, 8661], [9024, 8736], [9036, 8814], [9079, 8830], [9225, 8399], [9235, 8354], [9298, 8291]]] } }, { "type": "Feature", "id": "US.KY", "properties": { "hc-group": "admin1", "hc-middle-x": 0.65, "hc-middle-y": 0.50, "hc-key": "us-ky", "hc-a2": "KY", "labelrank": "0", "hasc": "US.KY", "woe-id": "2347576", "state-fips": "21", "fips": "US21", "postal-code": "KY", "name": "Kentucky", "country": "United States of America", "region": "South", "longitude": "-85.5729", "woe-name": "Kentucky", "latitude": "37.3994", "woe-label": "Kentucky, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[5893, 5966], [5890, 5980], [5907, 5967], [5893, 5966]]], [[[5921, 5968], [5932, 6005], [5956, 5988], [5976, 6033], [5975, 6097], [5962, 6117], [5987, 6157], [6015, 6162], [6105, 6131], [6102, 6218], [6171, 6241], [6159, 6283], [6179, 6328], [6209, 6363], [6269, 6350], [6303, 6376], [6359, 6356], [6426, 6401], [6444, 6379], [6485, 6390], [6485, 6413], [6531, 6450], [6583, 6411], [6608, 6438], [6622, 6498], [6652, 6507], [6657, 6540], [6693, 6572], [6682, 6619], [6737, 6617], [6808, 6651], [6792, 6683], [6797, 6730], [6873, 6741], [6900, 6725], [6933, 6672], [7001, 6669], [7036, 6641], [7069, 6664], [7119, 6643], [7198, 6692], [7216, 6653], [7270, 6617], [7270, 6617], [7270, 6617], [7272, 6548], [7358, 6439], [7431, 6411], [7363, 6332], [7309, 6294], [7268, 6217], [7221, 6173], [7116, 6120], [7104, 6113], [6814, 6086], [6751, 6077], [6516, 6061], [6250, 6032], [6200, 6040], [6210, 5991], [5921, 5968]]], [[[7270, 6617], [7271, 6617], [7270, 6617], [7270, 6617], [7270, 6617], [7270, 6617]]]] } }, { "type": "Feature", "id": "US.OH", "properties": { "hc-group": "admin1", "hc-middle-x": 0.45, "hc-middle-y": 0.53, "hc-key": "us-oh", "hc-a2": "OH", "labelrank": "0", "hasc": "US.OH", "woe-id": "2347594", "state-fips": "39", "fips": "US39", "postal-code": "OH", "name": "Ohio", "country": "United States of America", "region": "Midwest", "longitude": "-82.67189999999999", "woe-name": "Ohio", "latitude": "40.0924", "woe-label": "Ohio, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[6718, 7400], [6815, 7415], [6976, 7443], [7095, 7408], [7082, 7394], [7173, 7383], [7258, 7426], [7329, 7440], [7383, 7503], [7530, 7595], [7589, 7253], [7561, 7233], [7587, 7158], [7558, 7018], [7564, 6981], [7504, 6911], [7454, 6903], [7419, 6863], [7399, 6809], [7416, 6775], [7391, 6755], [7354, 6783], [7333, 6723], [7346, 6679], [7321, 6631], [7271, 6617], [7270, 6617], [7216, 6653], [7198, 6692], [7119, 6643], [7069, 6664], [7036, 6641], [7001, 6669], [6933, 6672], [6900, 6725], [6873, 6741], [6797, 6730], [6732, 7296], [6718, 7400]]] } }, { "type": "Feature", "id": "US.TN", "properties": { "hc-group": "admin1", "hc-middle-x": 0.43, "hc-middle-y": 0.54, "hc-key": "us-tn", "hc-a2": "TN", "labelrank": "0", "hasc": "US.TN", "woe-id": "2347601", "state-fips": "47", "fips": "US47", "postal-code": "TN", "name": "Tennessee", "country": "United States of America", "region": "South", "longitude": "-86.3415", "woe-name": "Tennessee", "latitude": "35.7514", "woe-label": "Tennessee, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[6215, 5600], [6122, 5592], [5762, 5567], [5802, 5602], [5798, 5670], [5835, 5714], [5827, 5763], [5871, 5791], [5868, 5834], [5888, 5872], [5869, 5898], [5901, 5936], [5893, 5966], [5907, 5967], [5911, 5955], [5921, 5968], [6210, 5991], [6200, 6040], [6250, 6032], [6516, 6061], [6751, 6077], [6814, 6086], [7104, 6113], [7116, 6120], [7472, 6170], [7532, 6183], [7523, 6123], [7490, 6093], [7464, 6038], [7437, 6050], [7365, 5989], [7352, 6010], [7298, 5973], [7269, 5928], [7188, 5859], [7131, 5847], [7085, 5807], [7073, 5762], [7038, 5756], [7034, 5685], [6918, 5671], [6762, 5652], [6213, 5603], [6215, 5600]]] } }, { "type": "Feature", "id": "US.WV", "properties": { "hc-group": "admin1", "hc-middle-x": 0.35, "hc-middle-y": 0.56, "hc-key": "us-wv", "hc-a2": "WV", "labelrank": "0", "hasc": "US.WV", "woe-id": "2347607", "state-fips": "54", "fips": "US54", "postal-code": "WV", "name": "West Virginia", "country": "United States of America", "region": "South", "longitude": "-80.7128", "woe-name": "West Virginia", "latitude": "38.6422", "woe-label": "West Virginia, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[7270, 6617], [7271, 6617], [7321, 6631], [7346, 6679], [7333, 6723], [7354, 6783], [7391, 6755], [7416, 6775], [7399, 6809], [7419, 6863], [7454, 6903], [7504, 6911], [7564, 6981], [7558, 7018], [7587, 7158], [7561, 7233], [7589, 7253], [7630, 7017], [7835, 7053], [7857, 6922], [7928, 7007], [7949, 7003], [7977, 7057], [8000, 7038], [8043, 7043], [8046, 7067], [8101, 7099], [8162, 7087], [8198, 7020], [8188, 6969], [8076, 7028], [8072, 6952], [8048, 6900], [7998, 6837], [7974, 6848], [7932, 6729], [7857, 6759], [7840, 6674], [7767, 6505], [7773, 6459], [7690, 6412], [7664, 6419], [7649, 6382], [7595, 6360], [7567, 6378], [7530, 6341], [7470, 6351], [7431, 6411], [7358, 6439], [7272, 6548], [7270, 6617], [7270, 6617], [7270, 6617], [7270, 6617], [7270, 6617]]] } }, { "type": "Feature", "id": "US.DC", "properties": { "hc-group": "admin1", "hc-middle-x": 0.57, "hc-middle-y": 0.14, "hc-key": "us-dc", "hc-a2": "DC", "labelrank": "9", "hasc": "US.DC", "woe-id": "2347567", "state-fips": "11", "fips": "US11", "postal-code": "DC", "name": "District of Columbia", "country": "United States of America", "region": "South", "longitude": "-77.01130000000001", "woe-name": "District of Columbia", "latitude": "38.8922", "woe-label": "District of Columbia, US, United States", "type": "Federal District" }, "geometry": { "type": "Polygon", "coordinates": [[[8367, 6916], [8366, 6929], [8353, 6939], [8347, 6939], [8341, 6945], [8385, 6943], [8367, 6916]]] } }, { "type": "Feature", "id": "US.LA", "properties": { "hc-group": "admin1", "hc-middle-x": 0.34, "hc-middle-y": 0.46, "hc-key": "us-la", "hc-a2": "LA", "labelrank": "0", "hasc": "US.LA", "woe-id": "2347577", "state-fips": "22", "fips": "US22", "postal-code": "LA", "name": "Louisiana", "country": "United States of America", "region": "South", "longitude": "-91.9991", "woe-name": "Louisiana", "latitude": "30.5274", "woe-label": "Louisiana, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[6017, 4328], [5915, 4340], [5856, 4368], [5812, 4302], [5834, 4283], [5904, 4280], [5937, 4313], [5992, 4313], [5957, 4259], [6001, 4245], [6035, 4298], [6067, 4259], [5982, 4181], [6027, 4123], [6107, 4114], [6148, 4081], [6125, 4035], [6070, 4042], [6042, 4077], [5966, 4094], [5980, 4115], [5902, 4141], [5913, 4064], [5876, 4028], [5860, 4066], [5811, 4082], [5780, 4036], [5724, 4031], [5620, 4068], [5631, 4121], [5569, 4128], [5532, 4184], [5493, 4173], [5494, 4203], [5430, 4175], [5437, 4145], [5478, 4154], [5526, 4139], [5500, 4112], [5431, 4136], [5399, 4121], [5305, 4135], [5186, 4176], [5128, 4173], [5042, 4153], [5047, 4228], [5065, 4253], [5059, 4380], [5093, 4447], [5105, 4506], [5031, 4646], [5033, 4679], [4980, 4752], [4975, 5016], [5563, 5038], [5605, 5041], [5627, 5018], [5611, 4977], [5629, 4895], [5670, 4868], [5636, 4781], [5584, 4738], [5565, 4662], [5545, 4642], [5545, 4585], [5522, 4581], [5540, 4526], [5523, 4510], [5955, 4536], [5936, 4451], [6017, 4328]]] } }, { "type": "Feature", "id": "US.FL", "properties": { "hc-group": "admin1", "hc-middle-x": 0.77, "hc-middle-y": 0.50, "hc-key": "us-fl", "hc-a2": "FL", "labelrank": "0", "hasc": "US.FL", "woe-id": "2347568", "state-fips": "12", "fips": "US12", "postal-code": "FL", "name": "Florida", "country": "United States of America", "region": "South", "longitude": "-81.6228", "woe-name": "Florida", "latitude": "28.1568", "woe-label": "Florida, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[6487, 4443], [6487, 4486], [6431, 4541], [6436, 4574], [7015, 4637], [7055, 4568], [7649, 4609], [7670, 4559], [7699, 4566], [7687, 4660], [7713, 4686], [7808, 4673], [7822, 4672], [7849, 4570], [7908, 4430], [8008, 4269], [8125, 4130], [8113, 4109], [8144, 4012], [8198, 3936], [8297, 3758], [8321, 3651], [8331, 3476], [8302, 3361], [8313, 3273], [8270, 3209], [8291, 3273], [8273, 3290], [8230, 3255], [8194, 3260], [8141, 3234], [8115, 3258], [8115, 3303], [8070, 3379], [7979, 3429], [7953, 3420], [7907, 3543], [7846, 3536], [7839, 3654], [7796, 3674], [7819, 3634], [7779, 3640], [7675, 3779], [7722, 3884], [7712, 3915], [7671, 3899], [7670, 3851], [7622, 3872], [7618, 3966], [7635, 4045], [7626, 4157], [7576, 4229], [7525, 4222], [7473, 4277], [7425, 4302], [7349, 4395], [7265, 4433], [7186, 4403], [7198, 4370], [7162, 4370], [7148, 4336], [7067, 4277], [6979, 4284], [6986, 4316], [6958, 4349], [6892, 4391], [6798, 4429], [6694, 4444], [6468, 4388], [6505, 4431], [6487, 4443]]] } }, { "type": "Feature", "id": "US.GA", "properties": { "hc-group": "admin1", "hc-middle-x": 0.43, "hc-middle-y": 0.52, "hc-key": "us-ga", "hc-a2": "GA", "labelrank": "0", "hasc": "US.GA", "woe-id": "2347569", "state-fips": "13", "fips": "US13", "postal-code": "GA", "name": "Georgia", "country": "United States of America", "region": "South", "longitude": "-83.4078", "woe-name": "Georgia", "latitude": "32.8547", "woe-label": "Georgia, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[7713, 4686], [7687, 4660], [7699, 4566], [7670, 4559], [7649, 4609], [7055, 4568], [7015, 4637], [6983, 4704], [6990, 4774], [6958, 4846], [6970, 4930], [6998, 4970], [6947, 5053], [6912, 5135], [6762, 5652], [6918, 5671], [7034, 5685], [7210, 5711], [7290, 5724], [7249, 5641], [7323, 5596], [7364, 5593], [7401, 5526], [7444, 5475], [7523, 5430], [7538, 5402], [7600, 5369], [7606, 5340], [7651, 5293], [7708, 5272], [7750, 5169], [7800, 5140], [7844, 5042], [7887, 5035], [7901, 5029], [7811, 4893], [7836, 4826], [7798, 4798], [7817, 4730], [7808, 4673], [7713, 4686]]] } }, { "type": "Feature", "id": "US.SC", "properties": { "hc-group": "admin1", "hc-middle-x": 0.54, "hc-middle-y": 0.35, "hc-key": "us-sc", "hc-a2": "SC", "labelrank": "0", "hasc": "US.SC", "woe-id": "2347599", "state-fips": "45", "fips": "US45", "postal-code": "SC", "name": "South Carolina", "country": "United States of America", "region": "South", "longitude": "-80.6471", "woe-name": "South Carolina", "latitude": "33.8578", "woe-label": "South Carolina, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[8302, 5600], [8236, 5523], [8205, 5458], [8206, 5396], [8173, 5348], [8140, 5346], [8131, 5311], [8056, 5219], [7989, 5173], [7913, 5166], [7971, 5149], [7887, 5035], [7844, 5042], [7800, 5140], [7750, 5169], [7708, 5272], [7651, 5293], [7606, 5340], [7600, 5369], [7538, 5402], [7523, 5430], [7444, 5475], [7401, 5526], [7364, 5593], [7323, 5596], [7249, 5641], [7290, 5724], [7457, 5802], [7714, 5830], [7782, 5790], [7791, 5756], [8029, 5790], [8302, 5600]]] } }, { "type": "Feature", "id": "US.MN", "properties": { "hc-group": "admin1", "hc-middle-x": 0.38, "hc-middle-y": 0.60, "hc-key": "us-mn", "hc-a2": "MN", "labelrank": "0", "hasc": "US.MN", "woe-id": "2347582", "state-fips": "27", "fips": "US27", "postal-code": "MN", "name": "Minnesota", "country": "United States of America", "region": "Midwest", "longitude": "-93.364", "woe-name": "Minnesota", "latitude": "46.0592", "woe-label": "Minnesota, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[4333, 9174], [4688, 9173], [4690, 9272], [4748, 9253], [4770, 9125], [4791, 9104], [4854, 9085], [4916, 9083], [4938, 9052], [4984, 9060], [5024, 9084], [5073, 9082], [5132, 9063], [5181, 8985], [5194, 9006], [5240, 9014], [5304, 8955], [5351, 8941], [5438, 8996], [5463, 8964], [5570, 8974], [5607, 8949], [5668, 8950], [5592, 8895], [5514, 8864], [5432, 8802], [5349, 8700], [5245, 8603], [5214, 8573], [5220, 8422], [5147, 8375], [5116, 8322], [5117, 8285], [5158, 8253], [5144, 8214], [5146, 8117], [5136, 8072], [5181, 8035], [5217, 8029], [5273, 7994], [5360, 7903], [5405, 7892], [5431, 7866], [5445, 7758], [5137, 7745], [4459, 7735], [4462, 8203], [4419, 8232], [4387, 8283], [4429, 8325], [4444, 8372], [4436, 8472], [4402, 8555], [4409, 8628], [4397, 8650], [4394, 8777], [4347, 8957], [4343, 9053], [4353, 9083], [4333, 9174]]] } }, { "type": "Feature", "id": "US.MT", "properties": { "hc-group": "admin1", "hc-middle-x": 0.55, "hc-middle-y": 0.53, "hc-key": "us-mt", "hc-a2": "MT", "labelrank": "0", "hasc": "US.MT", "woe-id": "2347585", "state-fips": "30", "fips": "US30", "postal-code": "MT", "name": "Montana", "country": "United States of America", "region": "West", "longitude": "-110.044", "woe-name": "Montana", "latitude": "46.9965", "woe-label": "Montana, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[1093, 9555], [1689, 9433], [3150, 9234], [3084, 8486], [3080, 8436], [3059, 8191], [3056, 8191], [1772, 8355], [1750, 8226], [1713, 8295], [1686, 8296], [1671, 8261], [1614, 8258], [1536, 8282], [1508, 8261], [1451, 8281], [1415, 8254], [1392, 8280], [1391, 8331], [1374, 8375], [1347, 8377], [1326, 8419], [1338, 8434], [1303, 8522], [1303, 8596], [1278, 8630], [1200, 8590], [1167, 8620], [1177, 8675], [1211, 8698], [1204, 8727], [1219, 8796], [1253, 8859], [1258, 8897], [1219, 8896], [1170, 8959], [1172, 8979], [1117, 9085], [1061, 9142], [1076, 9210], [1036, 9301], [1093, 9555]]] } }, { "type": "Feature", "id": "US.ND", "properties": { "hc-group": "admin1", "hc-middle-x": 0.47, "hc-middle-y": 0.50, "hc-key": "us-nd", "hc-a2": "ND", "labelrank": "0", "hasc": "US.ND", "woe-id": "2347593", "state-fips": "38", "fips": "US38", "postal-code": "ND", "name": "North Dakota", "country": "United States of America", "region": "Midwest", "longitude": "-100.302", "woe-name": "North Dakota", "latitude": "47.4675", "woe-label": "North Dakota, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[3080, 8436], [3084, 8486], [3150, 9234], [3468, 9209], [4333, 9174], [4353, 9083], [4343, 9053], [4347, 8957], [4394, 8777], [4397, 8650], [4409, 8628], [4402, 8555], [4436, 8472], [4444, 8372], [4231, 8374], [3080, 8436]]] } }, { "type": "Feature", "id": "US.AZ", "properties": { "hc-group": "admin1", "hc-middle-x": 0.51, "hc-middle-y": 0.45, "hc-key": "us-az", "hc-a2": "AZ", "labelrank": "0", "hasc": "US.AZ", "woe-id": "2347561", "state-fips": "4", "fips": "US04", "postal-code": "AZ", "name": "Arizona", "country": "United States of America", "region": "West", "longitude": "-111.935", "woe-name": "Arizona", "latitude": "34.3046", "woe-label": "Arizona, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[1630, 4782], [1196, 4850], [1092, 4906], [418, 5307], [451, 5357], [492, 5355], [519, 5416], [476, 5452], [489, 5536], [510, 5537], [555, 5605], [559, 5661], [598, 5702], [660, 5730], [620, 5788], [593, 5936], [614, 5982], [611, 6068], [631, 6159], [631, 6217], [669, 6227], [752, 6180], [777, 6221], [818, 6420], [1488, 6297], [1841, 6242], [1736, 5514], [1630, 4782]]] } }, { "type": "Feature", "id": "US.UT", "properties": { "hc-group": "admin1", "hc-middle-x": 0.52, "hc-middle-y": 0.59, "hc-key": "us-ut", "hc-a2": "UT", "labelrank": "0", "hasc": "US.UT", "woe-id": "2347603", "state-fips": "49", "fips": "US49", "postal-code": "UT", "name": "Utah", "country": "United States of America", "region": "West", "longitude": "-111.544", "woe-name": "Utah", "latitude": "39.5007", "woe-label": "Utah, US, United States", "type": "State" }, "geometry": { "type": "Polygon", "coordinates": [[[1841, 6242], [1488, 6297], [818, 6420], [929, 6975], [1073, 7690], [1393, 7629], [1643, 7585], [1600, 7329], [1990, 7269], [1966, 7108], [1841, 6242]]] } }, { "type": "Feature", "id": "US.HI", "properties": { "hc-group": "admin1", "hc-middle-x": 0.87, "hc-middle-y": 0.79, "hc-key": "us-hi", "hc-a2": "HI", "labelrank": "0", "hasc": "US.HI", "woe-id": "2347570", "state-fips": "15", "fips": "US15", "postal-code": "HI", "name": "Hawaii", "country": "United States of America", "region": "West", "longitude": "-157.999", "woe-name": "Hawaii", "latitude": "21.4919", "woe-label": "Hawaii, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[2871.1, 2945.9], [2875.2, 2942.7], [2879.9, 2943.9], [2887.0, 2943.5], [2908.4, 2936.0], [2926.2, 2927.0], [2959.3, 2906.2], [2969.8, 2895.8], [2975.6, 2888.1], [2975.6, 2868.8], [2976.2, 2860.2], [2981.8, 2860.4], [2989.5, 2864.1], [2995.3, 2860.2], [2998.0, 2855.8], [2997.4, 2846.7], [3000.1, 2841.1], [3003.5, 2836.0], [3013.7, 2826.7], [3024.4, 2822.1], [3028.7, 2818.5], [3031.0, 2814.1], [3030.4, 2808.4], [3019.0, 2794.3], [3010.1, 2790.9], [2997.5, 2778.6], [2988.9, 2776.0], [2988.6, 2773.6], [2981.4, 2771.8], [2975.3, 2767.2], [2953.3, 2760.6], [2944.8, 2762.6], [2939.9, 2762.7], [2935.5, 2761.3], [2924.6, 2753.9], [2920.9, 2749.4], [2913.7, 2747.3], [2906.4, 2742.2], [2896.2, 2736.4], [2893.2, 2735.4], [2884.5, 2727.0], [2883.0, 2723.6], [2883.3, 2715.9], [2873.3, 2705.7], [2870.1, 2696.8], [2867.2, 2693.6], [2858.8, 2686.4], [2857.0, 2687.4], [2857.1, 2692.0], [2852.9, 2695.4], [2844.7, 2699.6], [2830.0, 2708.8], [2817.8, 2712.1], [2815.1, 2719.8], [2812.5, 2720.6], [2810.9, 2726.2], [2809.3, 2735.1], [2811.5, 2745.8], [2816.0, 2776.4], [2815.6, 2781.7], [2812.9, 2786.6], [2805.6, 2807.3], [2801.6, 2814.3], [2802.1, 2818.9], [2799.7, 2823.2], [2796.3, 2833.9], [2792.8, 2839.1], [2789.8, 2841.4], [2785.4, 2846.6], [2780.6, 2859.9], [2784.8, 2870.8], [2795.1, 2879.5], [2796.2, 2883.5], [2799.0, 2885.8], [2807.4, 2888.9], [2813.4, 2898.4], [2817.9, 2906.3], [2822.3, 2911.4], [2825.4, 2911.5], [2827.7, 2920.9], [2826.3, 2924.9], [2822.9, 2928.1], [2815.9, 2938.7], [2813.0, 2947.9], [2812.4, 2962.2], [2816.2, 2969.6], [2818.8, 2972.0], [2826.0, 2972.0], [2844.7, 2968.0], [2850.0, 2958.0], [2857.7, 2955.0], [2862.8, 2952.2], [2866.3, 2948.0], [2871.1, 2945.9]]], [[[2685.2, 3028.0], [2683.1, 3024.1], [2677.4, 3024.1], [2672.1, 3025.0], [2662.7, 3023.0], [2656.2, 3022.3], [2651.9, 3026.6], [2654.3, 3029.7], [2658.6, 3033.4], [2670.2, 3040.4], [2675.5, 3042.3], [2679.6, 3041.9], [2684.7, 3036.2], [2682.1, 3030.0], [2685.2, 3028.0]]], [[[2609.3, 3070.6], [2599.6, 3070.1], [2595.6, 3075.8], [2594.6, 3080.7], [2594.3, 3089.5], [2593.6, 3094.0], [2590.2, 3096.0], [2581.9, 3099.3], [2579.4, 3103.3], [2581.0, 3107.7], [2585.7, 3110.1], [2594.0, 3111.1], [2613.5, 3108.3], [2622.3, 3100.4], [2628.7, 3093.1], [2631.3, 3086.9], [2630.0, 3083.4], [2625.7, 3076.7], [2616.7, 3072.6], [2609.3, 3070.6]]], [[[2673.9, 3132.2], [2675.6, 3130.2], [2683.4, 3127.1], [2684.3, 3124.4], [2686.7, 3123.7], [2687.2, 3118.4], [2690.0, 3115.9], [2695.5, 3106.3], [2699.0, 3106.6], [2701.3, 3109.2], [2705.1, 3109.1], [2716.1, 3110.5], [2722.5, 3115.1], [2725.7, 3116.2], [2732.1, 3116.5], [2743.2, 3114.2], [2746.4, 3112.2], [2747.4, 3109.8], [2752.3, 3104.5], [2758.6, 3099.6], [2758.8, 3097.7], [2762.9, 3098.7], [2765.5, 3096.6], [2767.9, 3092.2], [2774.8, 3091.2], [2781.6, 3088.0], [2791.4, 3084.8], [2795.9, 3075.7], [2794.9, 3067.4], [2791.3, 3060.7], [2786.3, 3059.3], [2782.2, 3053.3], [2776.8, 3053.2], [2766.0, 3047.7], [2754.9, 3048.2], [2751.2, 3048.0], [2731.5, 3038.5], [2721.5, 3040.8], [2718.9, 3040.1], [2710.5, 3039.7], [2704.9, 3044.9], [2701.6, 3049.9], [2703.3, 3051.3], [2703.4, 3055.1], [2701.8, 3068.9], [2700.2, 3072.7], [2700.3, 3077.0], [2699.0, 3080.5], [2694.8, 3083.7], [2688.7, 3082.3], [2687.7, 3079.4], [2685.2, 3078.9], [2679.4, 3082.6], [2675.0, 3083.4], [2670.7, 3086.1], [2667.9, 3085.8], [2660.5, 3094.3], [2655.0, 3101.5], [2654.7, 3106.1], [2652.7, 3108.6], [2654.7, 3118.8], [2656.5, 3123.8], [2658.6, 3127.1], [2661.1, 3127.3], [2664.7, 3132.0], [2668.7, 3131.6], [2672.3, 3133.2], [2673.9, 3132.2]]], [[[2542.4, 3172.8], [2550.3, 3172.5], [2552.8, 3171.9], [2554.4, 3169.4], [2557.4, 3169.4], [2586.4, 3165.0], [2594.1, 3164.7], [2596.9, 3170.6], [2598.9, 3171.1], [2601.5, 3167.6], [2602.5, 3163.6], [2612.6, 3161.0], [2622.6, 3161.3], [2627.0, 3161.9], [2631.9, 3163.6], [2637.2, 3163.5], [2642.1, 3162.2], [2644.1, 3162.6], [2646.1, 3160.1], [2650.7, 3159.2], [2646.9, 3152.3], [2640.8, 3146.4], [2633.3, 3142.2], [2625.8, 3139.1], [2618.1, 3137.5], [2610.3, 3138.3], [2602.5, 3139.8], [2587.1, 3143.9], [2577.6, 3147.2], [2554.7, 3145.6], [2547.6, 3144.5], [2537.6, 3144.7], [2533.7, 3146.2], [2531.4, 3149.3], [2531.3, 3153.2], [2535.1, 3159.1], [2538.7, 3160.4], [2541.9, 3164.2], [2542.9, 3168.2], [2540.2, 3172.9], [2542.4, 3172.8]]], [[[2414.1, 3252.1], [2415.3, 3248.5], [2417.5, 3247.3], [2418.6, 3243.6], [2422.1, 3243.3], [2425.5, 3238.6], [2425.5, 3233.8], [2422.8, 3232.6], [2424.3, 3223.3], [2428.6, 3221.7], [2432.0, 3216.6], [2435.0, 3215.5], [2437.4, 3213.2], [2440.6, 3217.4], [2437.6, 3219.4], [2437.9, 3221.8], [2440.1, 3222.8], [2448.0, 3221.2], [2445.1, 3218.3], [2444.8, 3211.6], [2448.1, 3209.6], [2451.4, 3205.2], [2450.5, 3202.8], [2453.3, 3197.1], [2461.8, 3192.0], [2463.0, 3190.8], [2453.8, 3181.6], [2451.7, 3180.9], [2451.1, 3184.2], [2449.4, 3185.6], [2439.8, 3183.8], [2433.5, 3180.0], [2429.0, 3180.6], [2426.4, 3184.7], [2416.6, 3189.1], [2413.7, 3194.2], [2413.7, 3196.2], [2409.6, 3193.0], [2411.6, 3190.7], [2403.3, 3190.2], [2404.6, 3191.8], [2399.9, 3193.0], [2399.1, 3199.7], [2405.5, 3202.8], [2406.3, 3204.6], [2400.6, 3208.2], [2398.9, 3204.7], [2394.5, 3208.7], [2395.9, 3202.7], [2394.8, 3202.0], [2388.7, 3207.1], [2390.1, 3203.7], [2397.6, 3196.7], [2396.6, 3193.5], [2393.0, 3192.0], [2373.9, 3188.4], [2369.7, 3190.8], [2368.0, 3197.9], [2365.9, 3203.5], [2361.4, 3209.6], [2357.7, 3211.5], [2356.8, 3217.1], [2355.5, 3220.1], [2349.9, 3224.5], [2347.5, 3228.2], [2347.2, 3238.6], [2345.9, 3240.5], [2337.4, 3247.6], [2345.9, 3249.6], [2354.3, 3250.0], [2368.8, 3249.7], [2370.5, 3253.5], [2374.1, 3255.5], [2379.9, 3260.1], [2379.6, 3261.3], [2382.9, 3267.5], [2390.2, 3273.8], [2396.5, 3275.6], [2400.5, 3274.5], [2406.2, 3268.8], [2409.8, 3262.0], [2408.9, 3258.2], [2414.1, 3252.1]]], [[[1955.8, 3294.7], [1953.2, 3293.9], [1948.4, 3296.6], [1946.0, 3304.1], [1946.6, 3308.8], [1948.8, 3313.7], [1956.7, 3321.5], [1963.0, 3326.1], [1971.1, 3330.6], [1973.3, 3335.9], [1973.1, 3339.8], [1976.7, 3341.3], [1980.1, 3341.2], [1983.8, 3339.7], [1985.5, 3336.0], [1981.3, 3331.1], [1979.8, 3326.6], [1981.2, 3321.0], [1978.5, 3317.4], [1972.1, 3314.3], [1968.3, 3313.2], [1961.2, 3308.2], [1959.7, 3305.0], [1955.8, 3294.7]]], [[[2117.8, 3386.1], [2120.7, 3384.6], [2123.8, 3384.8], [2127.6, 3382.7], [2129.1, 3379.5], [2132.9, 3376.7], [2134.9, 3369.7], [2136.6, 3368.7], [2136.1, 3360.5], [2134.2, 3358.0], [2131.3, 3350.1], [2128.4, 3348.5], [2128.0, 3342.6], [2128.8, 3334.9], [2128.0, 3329.3], [2123.0, 3328.3], [2125.2, 3324.9], [2121.7, 3323.7], [2118.3, 3320.9], [2116.9, 3318.4], [2109.4, 3313.0], [2107.3, 3310.8], [2098.5, 3314.0], [2089.0, 3314.5], [2078.6, 3316.4], [2076.9, 3318.0], [2074.0, 3315.9], [2073.1, 3317.6], [2068.2, 3320.6], [2065.1, 3326.1], [2062.8, 3326.7], [2060.0, 3329.4], [2056.1, 3330.0], [2050.6, 3332.5], [2043.4, 3334.4], [2041.2, 3340.1], [2038.1, 3343.0], [2038.3, 3352.8], [2040.3, 3353.5], [2048.5, 3363.0], [2049.2, 3368.3], [2052.4, 3371.8], [2062.1, 3374.2], [2067.8, 3377.5], [2071.4, 3380.6], [2076.1, 3382.7], [2077.8, 3384.8], [2086.0, 3386.8], [2088.1, 3384.2], [2095.7, 3382.1], [2095.7, 3385.2], [2099.3, 3386.6], [2107.5, 3385.9], [2111.6, 3384.7], [2115.5, 3387.5], [2117.8, 3386.1]]]] } }, { "type": "Feature", "id": "US.AK", "properties": { "hc-group": "admin1", "hc-middle-x": 0.53, "hc-middle-y": 0.33, "hc-key": "us-ak", "hc-a2": "AK", "labelrank": "0", "hasc": "US.AK", "woe-id": "2347560", "state-fips": "2", "fips": "US02", "postal-code": "AK", "name": "Alaska", "country": "United States of America", "region": "West", "longitude": "-151.604", "woe-name": "Alaska", "latitude": "65.3609", "woe-label": "Alaska, US, United States", "type": "State" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[322, 4275], [321, 4280], [339, 4292], [360, 4283], [392, 4281], [424, 4297], [443, 4318], [478, 4297], [476, 4285], [459, 4279], [461, 4263], [472, 4263], [490, 4288], [507, 4272], [503, 4256], [519, 4248], [528, 4258], [548, 4257], [582, 4240], [564, 4217], [594, 4212], [584, 4202], [611, 4198], [655, 4200], [684, 4194], [704, 4174], [712, 4178], [723, 4165], [746, 4156], [788, 4155], [808, 4136], [832, 4134], [851, 4144], [877, 4147], [901, 4136], [913, 4120], [929, 4117], [943, 4100], [957, 4101], [989, 3159], [1039, 3148], [1057, 3163], [1084, 3166], [1081, 3138], [1107, 3121], [1113, 3108], [1167, 3060], [1180, 3028], [1208, 3055], [1220, 3056], [1229, 3102], [1271, 3127], [1297, 3104], [1295, 3091], [1335, 3059], [1347, 3039], [1367, 3031], [1397, 3002], [1477, 2890], [1491, 2875], [1490, 2858], [1504, 2853], [1511, 2833], [1523, 2836], [1613, 2802], [1622, 2783], [1617, 2766], [1636, 2722], [1622, 2680], [1606, 2663], [1592, 2664], [1577, 2702], [1585, 2718], [1577, 2755], [1555, 2778], [1526, 2764], [1520, 2723], [1499, 2746], [1510, 2753], [1513, 2796], [1473, 2829], [1468, 2844], [1424, 2880], [1406, 2878], [1414, 2903], [1397, 2917], [1390, 2938], [1366, 2963], [1364, 2998], [1355, 2976], [1348, 2979], [1354, 2974], [1334, 2977], [1331, 2984], [1344, 2982], [1324, 2991], [1283, 3075], [1286, 3041], [1310, 2985], [1307, 2971], [1288, 2985], [1264, 2982], [1266, 2998], [1249, 3031], [1245, 3018], [1199, 3046], [1202, 3028], [1224, 3026], [1254, 2995], [1255, 2977], [1229, 2976], [1225, 2963], [1169, 2999], [1134, 3041], [1085, 3062], [1050, 3083], [1069, 3102], [1060, 3119], [1025, 3098], [969, 3113], [977, 3128], [953, 3122], [899, 3136], [842, 3125], [826, 3141], [792, 3157], [802, 3194], [788, 3179], [783, 3158], [761, 3173], [742, 3174], [759, 3196], [727, 3195], [706, 3205], [716, 3212], [705, 3227], [679, 3222], [658, 3229], [636, 3221], [637, 3247], [620, 3199], [631, 3213], [642, 3184], [628, 3167], [614, 3132], [576, 3140], [552, 3130], [545, 3108], [537, 3114], [509, 3089], [521, 3115], [493, 3078], [478, 3071], [455, 3077], [433, 3070], [426, 3086], [455, 3099], [483, 3126], [457, 3115], [438, 3133], [464, 3170], [478, 3204], [473, 3223], [491, 3228], [524, 3249], [543, 3235], [554, 3240], [588, 3228], [544, 3260], [549, 3268], [527, 3271], [524, 3284], [490, 3256], [469, 3252], [424, 3205], [428, 3196], [407, 3182], [408, 3170], [377, 3133], [343, 3131], [339, 3114], [317, 3109], [309, 3075], [334, 3075], [352, 3048], [305, 3020], [308, 3008], [287, 2998], [271, 2977], [246, 2981], [222, 2955], [212, 2964], [200, 2941], [186, 2947], [152, 2925], [163, 2924], [146, 2893], [133, 2901], [107, 2879], [96, 2891], [89, 2869], [73, 2877], [24, 2852], [40, 2842], [7, 2817], [-44, 2808], [-61, 2821], [-118, 2794], [-130, 2803], [-155, 2792], [-167, 2799], [-155, 2816], [-167, 2823], [-200, 2781], [-223, 2772], [-230, 2808], [-252, 2775], [-262, 2795], [-286, 2772], [-278, 2800], [-223, 2823], [-171, 2853], [-115, 2850], [-113, 2838], [-84, 2825], [-99, 2845], [-80, 2870], [-38, 2892], [12, 2907], [27, 2896], [31, 2922], [57, 2946], [97, 2964], [126, 3051], [154, 3072], [156, 3089], [95, 3074], [79, 3099], [90, 3123], [60, 3099], [61, 3072], [44, 3066], [28, 3121], [8, 3111], [-6, 3123], [-7, 3147], [-37, 3132], [-62, 3132], [-69, 3120], [-112, 3131], [-85, 3135], [-82, 3162], [-87, 3191], [-63, 3208], [-76, 3277], [-72, 3305], [-89, 3269], [-149, 3267], [-172, 3278], [-167, 3295], [-184, 3332], [-198, 3342], [-212, 3370], [-166, 3383], [-134, 3368], [-125, 3345], [-109, 3358], [-131, 3376], [-161, 3385], [-185, 3401], [-173, 3407], [-186, 3433], [-191, 3419], [-205, 3460], [-194, 3469], [-211, 3484], [-189, 3485], [-198, 3504], [-175, 3498], [-170, 3526], [-130, 3555], [-118, 3553], [-108, 3582], [-85, 3606], [-61, 3612], [-46, 3602], [-34, 3577], [-22, 3576], [7, 3591], [28, 3609], [31, 3600], [76, 3594], [100, 3613], [106, 3664], [92, 3688], [125, 3701], [117, 3734], [102, 3721], [73, 3725], [45, 3711], [20, 3709], [8, 3729], [-28, 3742], [-59, 3740], [-101, 3771], [-108, 3789], [-98, 3804], [-111, 3837], [-95, 3829], [-73, 3837], [-119, 3868], [-138, 3897], [-124, 3909], [-95, 3914], [-87, 3908], [-68, 3921], [-2, 3935], [36, 3937], [67, 3929], [47, 3893], [52, 3877], [111, 3858], [119, 3845], [140, 3868], [162, 3859], [147, 3882], [128, 3880], [135, 3893], [119, 3943], [132, 3945], [139, 3923], [133, 3914], [145, 3887], [163, 3891], [175, 3870], [196, 3867], [201, 3879], [179, 3900], [152, 3894], [142, 3915], [154, 3949], [129, 3950], [86, 3976], [89, 4000], [86, 4032], [55, 4092], [40, 4106], [27, 4135], [45, 4151], [57, 4180], [76, 4171], [124, 4160], [156, 4170], [182, 4190], [189, 4216], [201, 4233], [224, 4253], [229, 4246], [253, 4268], [256, 4258], [287, 4258], [317, 4277], [322, 4275]], [[322, 4275], [323, 4272], [323, 4272], [323, 4272], [311, 4248], [326, 4263], [323, 4272], [323, 4272], [323, 4272], [324, 4274], [322, 4275]]], [[[-905, 2721], [-922, 2724], [-904, 2733], [-898, 2724], [-905, 2721]]], [[[-739, 2715], [-724, 2712], [-729, 2702], [-734, 2709], [-739, 2715]]], [[[-645, 2693], [-651, 2700], [-684, 2693], [-643, 2725], [-634, 2718], [-623, 2738], [-597, 2740], [-595, 2719], [-626, 2714], [-645, 2693]]], [[[-439, 2748], [-458, 2742], [-469, 2755], [-457, 2762], [-439, 2748]]], [[[-268, 2722], [-267, 2733], [-255, 2724], [-252, 2715], [-268, 2722]]], [[[-303, 2804], [-293, 2800], [-290, 2768], [-309, 2757], [-338, 2767], [-359, 2754], [-385, 2761], [-386, 2779], [-369, 2783], [-354, 2800], [-335, 2796], [-303, 2804]]], [[[-59, 2737], [-58, 2733], [-70, 2740], [-62, 2746], [-59, 2737]]], [[[1485, 2651], [1482, 2635], [1455, 2672], [1458, 2688], [1473, 2659], [1485, 2651]]], [[[1568, 2687], [1567, 2665], [1547, 2678], [1548, 2705], [1568, 2687]]], [[[-81, 2759], [-83, 2747], [-107, 2735], [-88, 2750], [-81, 2759]]], [[[-100, 2783], [-114, 2781], [-119, 2759], [-135, 2762], [-131, 2784], [-100, 2783]]], [[[1530, 2716], [1542, 2706], [1538, 2690], [1528, 2711], [1530, 2716]]], [[[1427, 2708], [1429, 2706], [1439, 2711], [1430, 2683], [1427, 2708]]], [[[1439, 2743], [1430, 2731], [1420, 2735], [1421, 2742], [1439, 2743]]], [[[1555, 2775], [1573, 2753], [1578, 2721], [1569, 2699], [1529, 2721], [1537, 2731], [1531, 2760], [1555, 2775]]], [[[1408, 2747], [1414, 2765], [1435, 2776], [1437, 2763], [1408, 2747]]], [[[1480, 2788], [1503, 2783], [1494, 2762], [1468, 2778], [1475, 2803], [1480, 2788]]], [[[1467, 2811], [1469, 2795], [1445, 2798], [1451, 2810], [1467, 2811]]], [[[1495, 2807], [1510, 2793], [1504, 2784], [1485, 2797], [1482, 2819], [1495, 2807]]], [[[253, 2834], [251, 2826], [235, 2816], [239, 2829], [253, 2834]]], [[[276, 2825], [279, 2820], [259, 2824], [263, 2832], [276, 2825]]], [[[1448, 2845], [1470, 2828], [1458, 2816], [1449, 2816], [1448, 2845]]], [[[333, 2880], [345, 2878], [321, 2864], [319, 2872], [333, 2880]]], [[[1295, 2870], [1295, 2846], [1283, 2843], [1288, 2862], [1295, 2870]]], [[[1246, 2943], [1241, 2926], [1234, 2942], [1237, 2951], [1246, 2943]]], [[[345, 2973], [360, 2960], [353, 2961], [333, 2971], [345, 2973]]], [[[370, 2989], [380, 3007], [393, 2992], [407, 2995], [413, 2978], [404, 2970], [365, 2959], [347, 2974], [353, 2990], [370, 2989]]], [[[389, 3006], [380, 3014], [397, 3021], [396, 3012], [389, 3006]]], [[[-42, 3112], [-58, 3105], [-53, 3120], [-31, 3126], [-42, 3112]]], [[[643, 3141], [641, 3133], [628, 3129], [639, 3150], [643, 3141]]], [[[683, 3167], [692, 3162], [662, 3126], [639, 3113], [651, 3133], [678, 3156], [683, 3167]]], [[[-250, 3366], [-233, 3350], [-243, 3328], [-239, 3312], [-272, 3312], [-294, 3323], [-315, 3350], [-321, 3371], [-293, 3362], [-286, 3369], [-250, 3366]]], [[[712, 3177], [732, 3173], [708, 3154], [714, 3166], [712, 3177]]], [[[655, 3184], [659, 3177], [651, 3159], [646, 3171], [655, 3184]]], [[[-553, 3496], [-557, 3490], [-570, 3515], [-566, 3524], [-553, 3496]]], [[[735, 3177], [725, 3175], [725, 3181], [752, 3187], [735, 3177]]], [[[-478, 2741], [-509, 2724], [-476, 2727], [-492, 2716], [-574, 2704], [-597, 2711], [-551, 2713], [-526, 2758], [-501, 2752], [-507, 2737], [-487, 2749], [-478, 2741]]], [[[1452, 2689], [1461, 2728], [1438, 2724], [1443, 2751], [1435, 2778], [1419, 2778], [1414, 2794], [1439, 2796], [1449, 2769], [1468, 2766], [1516, 2700], [1532, 2652], [1522, 2641], [1495, 2679], [1475, 2669], [1476, 2693], [1452, 2689]]], [[[1292, 2882], [1302, 2902], [1330, 2883], [1354, 2825], [1358, 2769], [1323, 2816], [1325, 2832], [1311, 2830], [1320, 2852], [1308, 2856], [1308, 2872], [1292, 2882]]], [[[362, 2955], [355, 2938], [381, 2954], [386, 2936], [380, 2918], [395, 2917], [382, 2900], [349, 2913], [366, 2899], [363, 2889], [337, 2894], [303, 2868], [278, 2838], [275, 2849], [298, 2883], [281, 2883], [271, 2862], [256, 2873], [259, 2892], [247, 2904], [253, 2919], [284, 2939], [295, 2933], [298, 2909], [306, 2934], [302, 2950], [318, 2956], [321, 2936], [329, 2963], [348, 2946], [340, 2965], [362, 2955]]], [[[1277, 2920], [1294, 2891], [1278, 2884], [1270, 2906], [1243, 2925], [1247, 2941], [1271, 2972], [1321, 2953], [1323, 2931], [1299, 2928], [1309, 2919], [1325, 2926], [1333, 2899], [1320, 2896], [1277, 2920]]], [[[1355, 2884], [1341, 2912], [1326, 2962], [1314, 2989], [1331, 2969], [1358, 2968], [1379, 2937], [1376, 2926], [1357, 2961], [1361, 2939], [1379, 2919], [1383, 2888], [1350, 2853], [1347, 2875], [1355, 2884]]], [[[-347, 3767], [-339, 3759], [-322, 3764], [-307, 3758], [-307, 3734], [-290, 3713], [-256, 3692], [-266, 3681], [-286, 3692], [-315, 3679], [-313, 3698], [-337, 3738], [-353, 3750], [-371, 3746], [-381, 3757], [-379, 3773], [-362, 3796], [-362, 3776], [-347, 3767]]], [[[1402, 2834], [1394, 2792], [1400, 2779], [1385, 2761], [1377, 2790], [1389, 2804], [1373, 2811], [1364, 2838], [1379, 2842], [1395, 2828], [1402, 2835], [1401, 2839], [1383, 2863], [1396, 2866], [1441, 2858], [1445, 2825], [1422, 2845], [1441, 2817], [1439, 2809], [1410, 2805], [1402, 2834]]]] } }, { "type": "Feature", "properties": { "hc-group": "__separator_lines__" }, "geometry": { "type": "MultiLineString", "coordinates": [[[-707, 5188], [3651, 2950]], [[1747, 2584], [1747, 3799]]] } }] };

module.exports = mapData;

/***/ })

},[132]);
//# sourceMappingURL=app.js.map
