Modified sample https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/samples/VanillaJSTestApp to try and get redirect to a lightweight intermediate html page working.

Inspired on the following comments:
- https://github.com/AzureAD/microsoft-authentication-library-for-js/issues/526#issuecomment-460107438
- https://github.com/AzureAD/microsoft-authentication-library-for-js/issues/585#issuecomment-470584786
- https://github.com/AzureAD/azure-activedirectory-library-for-js/wiki/FAQs#q1-my-app-is-re-loading-every-time-adal-renews-a-token

Issue after redirect to main page after login:
``` js
ClientAuthError: Invalid state. b6eae390-7d12-4fe1-b766-ea4c3df01995, state expected : null.
    at ClientAuthError.AuthError [as constructor] (https://localhost:30666/dist/msal/dist/msal.js:1473:28)
    at new ClientAuthError (https://localhost:30666/dist/msal/dist/msal.js:1357:28)
    at Function.ClientAuthError.createInvalidStateError (https://localhost:30666/dist/msal/dist/msal.js:1391:16)
    at UserAgentApplication.saveTokenFromHash (https://localhost:30666/dist/msal/dist/msal.js:3342:59)
    at UserAgentApplication.processCallBack (https://localhost:30666/dist/msal/dist/msal.js:2783:29)
    at UserAgentApplication.handleRedirectCallback (https://localhost:30666/dist/msal/dist/msal.js:2136:18)
    at https://localhost:30666/:52:15
```

### How to start the sample?
```
> npm i
> node server.js 
```

Ps: you can ignore the certificate error in the browser, it's self signed.
