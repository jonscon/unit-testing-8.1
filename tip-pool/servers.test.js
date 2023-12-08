describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server when input is empty', function() {
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  })

  it ('should update #serverTable after adding servers', function() {
    allServers = {
      'server1': {serverName: 'Doge'},
      'server2': {serverName: 'Michael'},
      'server3': {serverName: 'Santa'}
    };

    updateServerTable();
    expect(serverTbody.childElementCount).toEqual(3);
  });

  afterEach(function() {
    // teardown logic
    for (let key in allServers) delete allServers[key];
    serverTbody.innerHTML = '';
    serverNameInput.value = '';
    serverId = 0;
  });
});
