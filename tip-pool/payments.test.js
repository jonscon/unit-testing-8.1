describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 100;
      tipAmtInput.value = 15;
    });

    it('should add an entry to allPayments on submitPaymentInfo', function() {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('15');
    })

    it('should not add an entry to allPayments on submitPaymentInfo', function() {
        billAmtInput.value = '';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
    })

    it('should create a new payment on createCurPayment', function() {
        expectedPmt = {
            billAmt: '100',
            tipAmt: '15',
            tipPercent: 15,
        };
        expect(createCurPayment()).toEqual(expectedPmt);
    })

    it('should not create a new payment when either inputs are missing in createCurPayment', function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';

        expect(createCurPayment()).toEqual(undefined);
    })

    it('should update payment table on appendPaymentTable', function() {
        let curPayment = createCurPayment();
        allPayments['payment' + paymentId] = curPayment;
        appendPaymentTable(curPayment);

        let currentRowData = document.querySelectorAll('#paymentTable tbody tr td');

        expect(currentRowData.length).toEqual(4);
        expect(currentRowData[0].innerHTML).toEqual('$100');
        expect(currentRowData[1].innerHTML).toEqual('$15');
        expect(currentRowData[2].innerHTML).toEqual('15%');

    })

    afterEach(function() {
        // teardown logic
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        for (let key in allPayments) delete allPayments[key];
        paymentId = 0;
      });
})