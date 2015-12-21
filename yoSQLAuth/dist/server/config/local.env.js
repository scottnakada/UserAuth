'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
    DOMAIN: 'http://localhost:9000',
    SESSION_SECRET: 'yosqlauth-secret',

    FACEBOOK_ID: '1569720109934361',
    FACEBOOK_SECRET: 'db09629ba2631168757137ddf4a30724',

    TWITTER_ID: 'CMnIPp4cGi8AbB53qxjgGcLUf',
    TWITTER_SECRET: 'ojx2d4LlOXzkaaRdMaQjnZpWc9HiD3Qz3or9yyfsYTSTfD3WHd',

    GOOGLE_ID: '407628761697-okrt0fnlgmkcntkue5k8f4rs7nf8cq1f.apps.googleusercontent.com',
    GOOGLE_SECRET: 'Vm_ZwrUi5YjS0MnWqBL2zqNc',

    // Control debug level for modules using visionmedia/debug
    DEBUG: ''
};
//# sourceMappingURL=local.env.js.map
