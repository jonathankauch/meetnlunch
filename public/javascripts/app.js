//AuthO
window.addEventListener('load', function() {

  var webAuth = new auth0.WebAuth({
    domain: 'jonathankauch.eu.auth0.com',
    clientID: 'RUco4CKKtUM41CaMOHZH7fWcOIxndXx4',
    redirectUri: window.location.href,
    audience: 'https://jonathankauch.eu.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  var loginBtn = document.getElementById('btn-login');

  loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    webAuth.authorize();
  });

});
