var SelectorCurrentUrl = {

	canReturnMultipleRecords: function () {
		return false;
	},

	canHaveChildSelectors: function () {
		return false;
	},

	canHaveLocalChildSelectors: function () {
		return false;
	},

	canCreateNewJobs: function () {
		return false;
	},
	willReturnElements: function () {
		return false;
	},
	_getData: function (parentElement) {
		var dfd = $.Deferred();

                var data = {};
                data[this.id] = document.location.href

		dfd.resolve([data]);
		return dfd.promise();
	},

	getDataColumns: function () {
		return [this.id];
	},

	getFeatures: function () {
		return ['id', 'type'];
	}
};
