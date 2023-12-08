describe('Helpers Test (with setup and teardown', function() {
    beforeEach(function () {
        // initialization logic
        billAmtInput.value = 100;
        tipAmtInput.value = 15;
        submitPaymentInfo();
      });

      it('should total billAmt on sumPaymentTotal', function() {
        billAmtInput.value = 50;
        tipAmtInput.value = 5;
        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(150);
      })

      it('should total tipAmt on sumPaymentTotal', function() {
        billAmtInput.value = 50;
        tipAmtInput.value = 5;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(20);
      })

      it('should total tipPercent on sumPaymentTotal', function() {
        billAmtInput.value = 50;
        tipAmtInput.value = 5;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(25);
      })

      it('should calculate tip percentage based on bill amount and tip amount correctly on calculateTipPercent', function() {
        let billAmt = allPayments['payment1'].billAmt;
        let tipAmt = allPayments['payment1'].tipAmt;

        expect(calculateTipPercent(billAmt, tipAmt)).toEqual(15);
      })

      it('should expect td to be added to newly generated tr', function() {
        let tr = document.createElement('tr');

        appendTd(tr, 'wheee');
        expect(tr.firstChild.innerHTML).toEqual('wheee');
        expect(tr.children.length).toEqual(1);
      })

      it('should append an X button to the tr', function() {
        let newTr = document.createElement('tr');

        appendDeleteButton(newTr);

        expect(newTr.firstChild.innerHTML).toEqual('X');
        expect(newTr.children.length).toEqual(1);
      })

      afterEach(function() {
        // teardown logic
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        serverTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        for (let key in allPayments) delete allPayments[key];
        paymentId = 0;
      });

})