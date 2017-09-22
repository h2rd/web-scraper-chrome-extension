describe("Current Page URL Selector", function () {
  it("should extract current page url", function () {

    var selector = new Selector({
      id: 'a',
      type: 'SelectorCurrentUrl',
      multiple: false,
      selector: "div"
    });

    var dataDeferred = selector.getData();

    waitsFor(function() {
      return dataDeferred.state() === 'resolved';
    }, "wait for data extraction", 5000);

    runs(function () {
      dataDeferred.done(function(data) {
        expect(data).toEqual([
          {
            a: document.location.href
          }
        ]);
      });
    });
  });
});
