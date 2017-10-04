# Lift React SPA Demo

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Please refer to their documentation for project specific details.

Additional details on integrating Lift 3 with single page applications can be found in the [Lift 3 Technical FAQ](https://docs.google.com/document/d/1ILvE5GVCb1HRr3El8h3W2nc_t_-_2cxasLQSlIKvb_M/edit#heading=h.gdxdrg3hcy6a)

## Setup steps

1. Check out the repo
1. Perform an `npm install`
1. Update `public/index.html` with your lift environment variables (see Lift Environment Variables section below)
1. Run the demo app `npm start`
1. The app should automatically route you to `http://localhost:3000`

### Lift Environment Variables

The lift environment variables are initialized in the `public/index.html` file located in the repo.

Update the `account_id` and `site_id` variables with your specific values.

```html
  <!-- Lift environment variables: Remote API -->
  <script type="text/javascript">
    window.AcquiaLift = {
      account_id: "XXXXXXXXX",
      site_id: "XXXXXXXXX",
      liftAssetsURL: "https://lift3assets.dev.lift.acquia.com/latest",
      liftDecisionAPIURL: "https://eu-central-1-rc-decisionapi.dev.lift.acquia.com",
      authEndpoint: "https://eu-central-1-rc-oauth2.dev.lift.acquia.com/authorize",
      contentReplacementMode: "trusted"
    };
  </script>
  <!-- Lift Experience Builder script: Remote -->
  <script type="text/javascript" src="https://lift3assets.dev.lift.acquia.com/latest/lift.js"></script>
```

## Lift personalizations

`window.AcquiaLiftPublicApi.personalize()`

When lift is initialized it will perform an initial round of personalization for decisions. Any change in the DOM that would result in markup for slots being added or removed requires `window.AcquiaLiftPublicApi.personalize()` method to be called. This applies to anonymous personalizations as well as when the Lift Experience Builder is active.

## Custom Components / Services

### Personalize: Higher-Order Routing Component

`src/components/Personalize.js`

This react application is using [React Router v4](https://github.com/ReactTraining/react-router) which defaults to using the history api for clean urls. Please refer to the [Lift 3 Technical FAQ](https://docs.google.com/document/d/1ILvE5GVCb1HRr3El8h3W2nc_t_-_2cxasLQSlIKvb_M/edit#heading=h.ue6h9fo7fmq9) to learn more about the current issues/gotchas with integrating routing with Lift3 on SPAs.

The `Personalize` component is a Higher-Order component. It does not add UI but provides functionality to the application. The component will automatically call `window.AcquiaLiftPublicApi.personalize()` on every route change. This approach conforms to React Router v4 best practices.

**Usage:**

```html
<Router>
  <Personalize>
    <div className="App">
      ...
    </div>
  </Personalize>
</Router>
```

### AcquiaLiftPublicApi: Service

`src/services/AcquiaLiftPublicApi.js`

A simple convenience service that exposes `window.AcquiaLiftPublicApi`. This allows for personalize to easily be called in your application when the dom is updated.

**Usage:**

```js
import React, { Component } from 'react';
import LiftAPI from '../services/AcquiaLiftPublicApi';

class MyComponent extends Component {

  rePersonalizePage = () => {
    LiftAPI.personalize();
  }

  render() {
    return(
      <button onClick={this.rePersonalizePage}>
        Re-Personalize Page
      </button>
    )
  }
}
```

### Slot: Component

`src/components/Slot.js`

A convenience component to easily create static slots

**Attributes**

`id`: (Required) The unique id for the slot. Usually copied from the experience builder

`mode`: (Optional) Specify if the slot is 'trusted' or 'untrusted'. Defaults to 'trusted'

**Usage:**

Slot with no static content
```html
  <Slot id="19e30500-103c-11e7-bdbf-916fa4c9e66a" mode="untrusted" />
```

Slot with static content
```html
  <Slot id="19e30500-103c-11e7-bdbf-916fa4c9e66a" mode="untrusted">
    This is static content
  </Slot>
```
