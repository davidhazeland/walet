angular.module("portfolio").run(["$templateCache", function($templateCache) {$templateCache.put("scripts/view/base.html","<div id=\"menu\">\r\n	<section id=\"account\">\r\n		<div class=\"container\">\r\n			<img src=\"images/avatar.jpg\" class=\"ava\"/>\r\n			<span>David Hazeland</span>\r\n		</div>\r\n	</section>\r\n	<section class=\"search\">\r\n		<div class=\"container\">\r\n			<input type=\"search\" class=\"search__input\"/>\r\n			<i class=\"search-icon search__icon\"></i>\r\n		</div>\r\n	</section>\r\n	<nav>\r\n		<ul class=\"navigation\">\r\n			<li class=\"navigation__item\">\r\n				<a href=\"#\">Expense</a>\r\n			</li>\r\n			<li class=\"navigation__item navigation__item--current\">\r\n				<a href=\"#\">Income</a>\r\n			</li>\r\n			<li class=\"navigation__item\">\r\n				<a href=\"#\">Dashboard</a>\r\n			</li>\r\n			<li class=\"navigation__item\">\r\n				<a href=\"#\">Contact Us</a>\r\n			</li>\r\n			<li class=\"navigation__item\">\r\n				<a href=\"#\">Sign Out</a>\r\n			</li>\r\n		</ul>\r\n	</nav>\r\n	<p class=\"copyright\">Copyright 2015 by <span>David Hazeland</span></p>\r\n</div>\r\n<div id=\"feature\">\r\n	<header ng-controller=\"HeaderCtrl\">\r\n		<div class=\"container\">\r\n			<a href=\"#\" class=\"logo\"></a>\r\n			<i class=\"menu-icon\" ng-click=\"toggleMenu()\"></i>\r\n			<i class=\"add-icon\"></i>\r\n		</div>	\r\n	</header>\r\n	<section id=\"content\">\r\n		<div class=\"container\">\r\n			<div class=\"date-filter\">\r\n				<span class=\"date-filter__icon calendar-icon\"></span>\r\n				<span class=\"date-filter__selection\">This Month</span>\r\n				<span class=\"date-filter__caret caret-icon\"></span>\r\n			</div>\r\n			<span class=\"total\">\r\n				130769$\r\n			</span>\r\n			<ul class=\"transaction\">\r\n				<li class=\"transaction__item\">\r\n					<a href=\"#\">\r\n						<div class=\"title group\">\r\n							<span class=\"name fl\">Lorem ipsum</span>\r\n							<span class=\"value fr\">1000$</span>\r\n						</div>\r\n						<div class=\"info group\">\r\n							<span class=\"tag fl\">new</span>\r\n							<span class=\"date fr\">13 Jul</span>\r\n						</div>\r\n					</a>\r\n				</li>\r\n				<li class=\"transaction__item\">\r\n					<a href=\"#\">\r\n						<div class=\"title group\">\r\n							<span class=\"name fl\">Lorem ipsum</span>\r\n							<span class=\"value fr\">1000$</span>\r\n						</div>\r\n						<div class=\"info group\">\r\n							<span class=\"tag fl\">new</span>\r\n							<span class=\"date fr\">13 Jul</span>\r\n						</div>\r\n					</a>\r\n				</li>\r\n				<li class=\"transaction__item\">\r\n					<a href=\"#\">\r\n						<div class=\"title group\">\r\n							<span class=\"name fl\">Lorem ipsum</span>\r\n							<span class=\"value fr\">1000$</span>\r\n						</div>\r\n						<div class=\"info group\">\r\n							<span class=\"tag fl\">new</span>\r\n							<span class=\"date fr\">13 Jul</span>\r\n						</div>\r\n					</a>\r\n				</li>\r\n				<li class=\"transaction__item\">\r\n					<a href=\"#\">\r\n						<div class=\"title group\">\r\n							<span class=\"name fl\">Lorem ipsum</span>\r\n							<span class=\"value fr\">1000$</span>\r\n						</div>\r\n						<div class=\"info group\">\r\n							<span class=\"tag fl\">new</span>\r\n							<span class=\"date fr\">13 Jul</span>\r\n						</div>\r\n					</a>\r\n				</li>\r\n				<li class=\"transaction__item\">\r\n					<a href=\"#\">\r\n						<div class=\"title group\">\r\n							<span class=\"name fl\">Lorem ipsum</span>\r\n							<span class=\"value fr\">1000$</span>\r\n						</div>\r\n						<div class=\"info group\">\r\n							<span class=\"tag fl\">new</span>\r\n							<span class=\"date fr\">13 Jul</span>\r\n						</div>\r\n					</a>\r\n				</li>\r\n				<li class=\"transaction__item\">\r\n					<a href=\"#\">\r\n						<div class=\"title group\">\r\n							<span class=\"name fl\">Lorem ipsum</span>\r\n							<span class=\"value fr\">1000$</span>\r\n						</div>\r\n						<div class=\"info group\">\r\n							<span class=\"tag fl\">new</span>\r\n							<span class=\"date fr\">13 Jul</span>\r\n						</div>\r\n					</a>\r\n				</li>\r\n				<li class=\"transaction__item\">\r\n					<a href=\"#\">\r\n						<div class=\"title group\">\r\n							<span class=\"name fl\">Lorem ipsum</span>\r\n							<span class=\"value fr\">1000$</span>\r\n						</div>\r\n						<div class=\"info group\">\r\n							<span class=\"tag fl\">new</span>\r\n							<span class=\"date fr\">13 Jul</span>\r\n						</div>\r\n					</a>\r\n				</li>\r\n				<li class=\"transaction__item\">\r\n					<a href=\"#\">\r\n						<div class=\"title group\">\r\n							<span class=\"name fl\">Lorem ipsum</span>\r\n							<span class=\"value fr\">1000$</span>\r\n						</div>\r\n						<div class=\"info group\">\r\n							<span class=\"tag fl\">new</span>\r\n							<span class=\"date fr\">13 Jul</span>\r\n						</div>\r\n					</a>\r\n				</li>\r\n				<li class=\"transaction__item\">\r\n					<a href=\"#\">\r\n						<div class=\"title group\">\r\n							<span class=\"name fl\">Lorem ipsum</span>\r\n							<span class=\"value fr\">1000$</span>\r\n						</div>\r\n						<div class=\"info group\">\r\n							<span class=\"tag fl\">new</span>\r\n							<span class=\"date fr\">13 Jul</span>\r\n						</div>\r\n					</a>\r\n				</li>\r\n				<li class=\"transaction__item\">\r\n					<a href=\"#\">\r\n						<div class=\"title group\">\r\n							<span class=\"name fl\">Lorem ipsum</span>\r\n							<span class=\"value fr\">1000$</span>\r\n						</div>\r\n						<div class=\"info group\">\r\n							<span class=\"tag fl\">new</span>\r\n							<span class=\"date fr\">13 Jul</span>\r\n						</div>\r\n					</a>\r\n				</li>\r\n				<li class=\"transaction__item\">\r\n					<a href=\"#\">\r\n						<div class=\"title group\">\r\n							<span class=\"name fl\">Lorem ipsum</span>\r\n							<span class=\"value fr\">1000$</span>\r\n						</div>\r\n						<div class=\"info group\">\r\n							<span class=\"tag fl\">new</span>\r\n							<span class=\"date fr\">13 Jul</span>\r\n						</div>\r\n					</a>\r\n				</li>\r\n			</ul>\r\n		</div>\r\n		<div class=\"container hidden\">\r\n			<div class=\"date-filter\">\r\n				<span class=\"date-filter__icon calendar-icon\"></span>\r\n				<span class=\"date-filter__selection\">This Month</span>\r\n				<span class=\"date-filter__caret caret-icon\"></span>\r\n			</div>\r\n			<div class=\"overview\">\r\n				<p class=\"overview__item group\">\r\n					<span class=\"net-worth fl\">Net Worth</span>\r\n					<span class=\"net-worth-value fr\">$1369</span>\r\n				</p>\r\n				<p class=\"overview__item overview__item--current group\">\r\n					<span class=\"expense fl\">Expense</span>\r\n					<span class=\"expense-value fr\">$700</span>\r\n				</p>\r\n				<p class=\"overview__item group\">\r\n					<span class=\"income fl\">Income</span>\r\n					<span class=\"income-value fr\">$2144</span>\r\n				</p>\r\n			</div>\r\n			<div class=\"chart\" ng-controller=\"ChartCtrl\">\r\n				<canvas id=\"expense\"></canvas>\r\n				<h4>Compare Expense vs Income</h4>\r\n				<canvas id=\"compare\"></canvas>\r\n			</div>\r\n		</div>\r\n	</section>\r\n</div>\r\n<div id=\"popup\" class=\"hidden\">\r\n	<section id=\"popup__date-filter\" class=\"picker hidden\">\r\n		<h3 class=\"group picker__title\">SELECT DATE FILTER<i class=\"close-icon fr\"></i></h3>	\r\n		<ul class=\"picker-selection\">\r\n			<li class=\"picker-selection__item\">\r\n				<a href=\"#\">This Week<i class=\"tick-icon fr\"></i></a>\r\n			</li>\r\n			<li class=\"picker-selection__item picker-selection__item--current\">\r\n				<a href=\"#\">This Month<i class=\"tick-icon fr\"></i></a>\r\n			</li>\r\n			<li class=\"picker-selection__item\">\r\n				<a href=\"#\">Last Month<i class=\"tick-icon fr\"></i></a>\r\n			</li>\r\n			<li class=\"picker-selection__item\">\r\n				<a href=\"#\">This Year<i class=\"tick-icon fr\"></i></a>\r\n			</li>\r\n			<li class=\"picker-selection__item\">\r\n				<a href=\"#\">Last Year<i class=\"tick-icon fr\"></i></a>\r\n			</li>\r\n		</ul>\r\n	</section>\r\n	<section id=\"popup__transaction-type\" class=\"picker hidden\">\r\n		<h3 class=\"group picker__title\">SELECT TRANSACTION<i class=\"close-icon fr\"></i></h3>	\r\n		<ul class=\"picker-selection\">\r\n			<li class=\"picker-selection__item\">\r\n				<a href=\"#\">INCOME<i class=\"tick-icon fr\"></i></a>\r\n			</li>\r\n			<li class=\"picker-selection__item picker-selection__item--current\">\r\n				<a href=\"#\">EXPENSE<i class=\"tick-icon fr\"></i></a>\r\n			</li>\r\n		</ul>\r\n	</section>\r\n	<section id=\"popup__transaction-detail\" class=\"transaction-detail\">\r\n		<h3 class=\"group transaction-detail__title\">TRANSACTION DETALS<i class=\"close-icon fr\"></i></h3>	\r\n		<ul class=\"transaction-detail-content\">\r\n			<li class=\"transaction-detail-content__item\">\r\n				<span class=\"title\">Name</span>\r\n				<span class=\"contect\">Lorem Ipsum</span>\r\n			</li>\r\n			<li class=\"transaction-detail-content__item\">\r\n				<span class=\"title\">Amount</span>\r\n				<span class=\"contect\">$100</span>\r\n			</li>\r\n			<li class=\"transaction-detail-content__item\">\r\n				<span class=\"title\">Tag</span>\r\n				<span class=\"contect\">lr, code</span>\r\n			</li>\r\n			<li class=\"transaction-detail-content__item\">\r\n				<span class=\"title\">Date</span>\r\n				<span class=\"contect\">13/7/2015</span>\r\n			</li>\r\n		</ul>\r\n		<button class=\"transaction-detail__edit fl\">Edit</button>\r\n		<button class=\"transaction-detail__delete fr\">Delete</button>\r\n	</section>\r\n</div>\r\n<div id=\"overlay\" class=\"hidden\">\r\n	<section class=\"save-transaction\">\r\n		<div class=\"save-transaction__header income\">\r\n			<div class=\"container\">\r\n				<i class=\"close-icon fl\"></i>	\r\n				<i class=\"tick-icon fr\"></i>	\r\n				<p><span>Income</span><i class=\"caret-white-icon\"></i></p>\r\n			</div>\r\n		</div>\r\n		<div clas=\"save-transaction__content\">\r\n			<form class=\"transaction-form group\">\r\n				<input placeholder=\"Description\" type=\"text\" class=\"transaction-form__description fl\"/>\r\n				<input placeholder=\"Amount\" type=\"number\" class=\"transaction-form__amount fr\" />\r\n				<input placeholder=\"Tag\" type=\"text\" class=\"transaction-form__tag\" />\r\n				<input placeholder=\"Date\" type=\"date\" class=\"transaction-form__date\" />\r\n				<button class=\"transaction-form__save\">Save Transaction</button>\r\n			</form>\r\n		</div>\r\n	</section>\r\n</div>");}]);