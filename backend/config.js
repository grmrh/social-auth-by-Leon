module.exports = {
  'facebookAuth' : {
      'clientID'      : 'your-clientID-here',
      'clientSecret'  : 'your-client-secret-here',
      'callbackURL'     : 'http://localhost:4000/api/auth/facebook/callback',
      'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

  },

  'twitterAuth' : {
      'consumerKey'        : 'your-consumer-key-here',
      'consumerSecret'     : 'your-client-secret-here',
      'callbackURL'        : 'http://localhost:4000/auth/twitter/callback'
  },

  'googleAuth' : {
      'clientID'         : "675914125666-fo971iaf2a2r25gv1piidl8rn6ihprk3.apps.googleusercontent.com",
      'clientSecret'     : "kcJPTKboVI1ye19Wo-opvxQ4",
      'callbackURL'      : 'http://localhost:4000/auth/google/callback'
  }
};
