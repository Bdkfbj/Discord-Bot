var agent = new KeepAliveAgent({ maxSockets: 1 });

var options = {
  agent:agent,
  headers: {"Connection":"Keep-Alive"}
}

try {
  var client = Soap.createClient(url);

  var result = client.myfirstfunction(args,options);

//process result
  result = client.mysecondfunction(args,options);

}
