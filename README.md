# qiscus SDK Web
> qiscus sdk / client for web browser

## Target release
- multiple build

## Sub Packages
- qiscus-sdk-core
  Core logic of qiscus sdk

- qiscus-sdk-react
  Client / View implementation of qiscus-sdk-core with reactjs
  it can become an example too for someone who want to create
  their own client written in reactjs.

- qiscus-sdk-vue
  Client / View implementation of qiscus-sdk-core with vuejs
  it can become an example too for someone who want to create
  their own client writen in vuejs.

- qiscus-sdk-initiator
  --is it really needed?--
  Basically, this package is to initialize qiscus sdk to the DOM
  ```
  qiscusSdkInitiator.init({
    core: qiscusSdkCore,                 // qiscus-sdk-core
    client: qiscusSdkReact,              // qiscus-sdk-react / qiscus-sdk-vue
    appId: 'qiscus-provied-app-id',      // qiscus widget appId
    email: 'username@domain.com',        // current user email
    password: 'password',                // current user password
    username: 'username',                // current user username
    avatarURL: 'https://avatar.com/url'  // current user avatar url
  })
  ```

# NOTE:
- Currently cannot transpile a packages, there is already a pull request
  but not yet merged. https://github.com/lerna/lerna/pull/255