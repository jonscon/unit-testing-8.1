
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

// expects a table row element, appends a delete button to the row it belongs to
function appendDeleteButton(tr) {
  let newTd = document.createElement('td');
  newTd.classList.add('delete-button');
  newTd.innerText = 'X';

  newTd.addEventListener('click', removeElement);

  tr.append(newTd);
}

function removeElement(e) {
  let element = e.target.closest('tr');
  element.parentNode.removeChild(element);

  delete allServers[element.id];
  updateServerTable();

  delete allPayments[element.id];
}
