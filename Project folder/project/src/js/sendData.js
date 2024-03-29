//fetch data from frontend

$("#submitbtn"). click(function(){
  console.log("Button clicked");
  var name = $("#name").val();
  var organ = $("#organ").val();
  var bg = $("#bg").val();
  var status = $("#status").val();
  //console.log(contract.address);

});



App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',

  init: function() {
    return App.initWeb3();
  },
/**Set up web3: web3.js is a javascript library that allows our client-side application
to talk to the blockchain. We configure web3 inside the "initWeb3" function.**/

  initWeb3: function() {
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }
    return App.initContract();
  },

  initContract: function() {
    $.getJSON("donations.json", function(donations) {    //----------------------> NOTE THIS PART CHANGED!!!
      // Instantiate a new truffle contract from the artifact
      App.contracts.donations = TruffleContract(donations);
      // Connect provider to interact with contract
      App.contracts.donations.setProvider(App.web3Provider);

      return App.render();
    });
  },

  render: function() {
    var donationsInstance;
    var loader = $("#loader");
    var content = $("#content");

    loader.show();
    content.hide();

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);
      }
    });

    // Load contract data
    App.contracts.donations.deployed().then(function(instance) {
      donationsInstance = instance;
      return donationsInstance.length;
    }).then(function(l) {
      var info = $("#info");

      info.empty();
      var data="Length:"+l;
      info.append(data);
      loader.hide();
      content.show();


      //Code goes in here
      //Now we are going to create transactions, for this we require a transaction object
      const txObject = {
          nonce:    web3.utils.toHex(txCount),
          gasLimit: web3.utils.toHex(800000),
          gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
          to: contractAddress,
          data: data
        }
      //Code ends






    }).catch(function(error) {
      console.warn(error);
    });
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
