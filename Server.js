require("appdynamics").profile({
 controllerHostName: 'data202504010654198.saas.appdynamics.com',
 controllerPort: 443,
 
 // If SSL, be sure to enable the next line
 controllerSslEnabled: true,
 accountName: 'data202504010654198',
 accountAccessKey: '9ty2axn6bs4c',
 applicationName: 'Node_app',
 tierName: 'Tomcat',
 nodeName: 'process' // The controller will automatically append the node name with a unique number
});
