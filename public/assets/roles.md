---
title: 'Roles'
---

# Roles

Roles are activated only in some countries. All the following is relevant only if a non-empty list of `activated_roles` appears in the [id_token](./login.md#the-id_token) or [Introspection endpoint](./introspection.md) response for you session. You can also check in advance what Environments have activated roles at the [Environments section](https://developers.baikalplatform.com/environments/) of this portal.

A **role unlocks a set of actions that the App, acting on behalf of a specific user, can do within an access session**. What role or roles to activate for a given access session is an authorization decision dynamically taken by Telefónica Kernel based on:

- the end user profile, as obtained from the [UserProfile API](https://developers.baikalplatform.com/apis/userprofile/).
- the identifier used in the authentication. For example, if the user employed her line 2 to authenticate via OTP or her username to authenticate with password.
- the Level-of-Assurance (LoA) of the authentication, i.e. the acr of the login. In this regard, each role has a minimum LoA that is needed to activate that role. For example, the user may need to authenticate with password to gain owner role privileges.

You will be informed of what roles have been activated for a specific session in the [id_token](./login.md#the-id_token) obtained after user login or, alternatively, you can always check that via the [Introspection endpoint](./introspection.md).

For consuming APIs, **the relevant fact about roles is that some operations/scopes can only be consumed for higher privileged roles and these are only activated when the user logs in with a higher LoA. So, if you want to make sure a specific role is assigned for a given session, then the best approach is to include its minimum LoA as the value for `acr_values` used within the [login flow](./login.md)**.

You can check in the [Environments section](https://developers.baikalplatform.com/environments/) of this portal about the details of roles for each country. For example, [here](https://developers.baikalplatform.com/environments/es-pro/roles/) you can see details of the roles that are used in Spain, the minimum LoA for each of them and the list of pi-scopes that are unlocked with each role. Note the final list of pi-scopes that can be accessed in a session will be those that are allowed by the role AND those that are associated to the purposes authorized via registration for that App.
