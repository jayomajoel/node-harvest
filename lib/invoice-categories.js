var InvoiceCategories;

module.exports = InvoiceCategories = function(api) {

    var self = this;

    this.api = api;
    this.client = api.client;

    this.categoriesByInvoice = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.getByInvoice = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.create = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    this.delete = function(options, cb) {

        var url = '';

        return self.client.get(url, {}, cb);

    };

    return this;
};