---
title: Overview - Adobe Pass Authentication
description: This is the overview page of Cat Analytics
#contributors:
#  - https://github.com/icaraps 
---

<Hero slots="heading, text"></Hero>

# Adobe Pass Authentication

Adobe Pass Authentication is an entitlement solution for TV Everywhere for determining whether a user is entitled to a specific resource.

<InlineAlert variant="info" slots="header, text"></InlineAlert>

Note

The content on this page is provided for information purposes only. Usage of this API requires a current license from Adobe. No unauthorized use is permitted.

<AnnouncementBlock slots="heading, text, button"></AnnouncementBlock>

### Use the interactive API environment

You can now interact with the Adobe Pass Authentication API endpoints directly from the API reference pages. Get an authorization through our [DCR API](api/dcr_api) and click the button below to interact with our REST API.

[Try our REST API](api/rest_api_v2/interactive)

<Resources slots="heading, links"></Resources>

#### Resources

* [Adobe Pass Documentation](https://experienceleague.adobe.com/en/docs/pass/authentication/home)
* [Adobe Pass Authentication Repository](https://github.com/AdobeDocs/adobe-pass)

## Overview

Adobe Pass Authentication workflows integrate entitlement systems from both Content Providers (Programmers) and Pay TV Providers (MVPDs) in order to provide a modular framework for determining whether someone who requests access to a resource is entitled to it.

Below you can find links to the Adobe Pass Authentication Flows documentation and API References. For more detailed information, please refer to the documentation linked in the resources section.

## Discover

### Adobe Pass Flows

#### Basic Flows

##### [Primary Device Profiles](https://experienceleague.adobe.com/en/docs/pass/authentication/programmer-integration-guide/rest-api-v2/rest-api-v2-flows/rest-api-v2-basic-flows/rest-api-v2-basic-profiles-primary-application-flow.html)

Obtain information on user active logins from the primary streaming application.

##### [Second Screen Profiles](https://experienceleague.adobe.com/en/docs/pass/authentication/programmer-integration-guide/rest-api-v2/rest-api-v2-flows/rest-api-v2-basic-flows/rest-api-v2-basic-profiles-secondary-application-flow.html)

Obtain information on user active logins from a secondary device.

##### [Primary Device Authentication](https://experienceleague.adobe.com/en/docs/pass/authentication/programmer-integration-guide/rest-api-v2/rest-api-v2-flows/rest-api-v2-basic-flows/rest-api-v2-basic-authentication-primary-application-flow.html)

The scenario in which the primary streaming application has the ability to provide all the required parameters in one single call in order to create an authentication session and has the capability to open a user agent in order to authenticate with the selected MVPD.

##### [Second Screen Authentication](https://experienceleague.adobe.com/en/docs/pass/authentication/programmer-integration-guide/rest-api-v2/rest-api-v2-flows/rest-api-v2-basic-flows/rest-api-v2-basic-authentication-secondary-application-flow.html)

The scenario in which the primary streaming application has the capability to create an authentication session, but does not have the ability to gather all the required parameters or open a user agent in order to authenticate with the selected MVPD.

##### [Authorization](https://experienceleague.adobe.com/en/docs/pass/authentication/programmer-integration-guide/rest-api-v2/rest-api-v2-flows/rest-api-v2-basic-flows/rest-api-v2-basic-authorization-primary-application-flow.html)

Verify that a user is entitled to view content represented as resource from the primary streaming application.

##### [Preauthorization](https://experienceleague.adobe.com/en/docs/pass/authentication/programmer-integration-guide/rest-api-v2/rest-api-v2-flows/rest-api-v2-basic-flows/rest-api-v2-basic-preauthorization-primary-application-flow.html)

Verify that a user may have access to a list of resources in order for the primary streaming application to present accurate information to the user on content he would be able to see.

##### [Logout](https://experienceleague.adobe.com/en/docs/pass/authentication/programmer-integration-guide/rest-api-v2/rest-api-v2-flows/rest-api-v2-basic-flows/rest-api-v2-basic-logout-primary-application-flow.html)

The flow that enables the Programmer Application to delete the authenticated profile information saved on the Adobe Pass backend and navigate to the MVPD logout endpoint to trigger the deletion of the authenticated profile information.

#### Degraded Access Flows

##### [Degraded Access](https://experienceleague.adobe.com/en/docs/pass/authentication/programmer-integration-guide/rest-api-v2/rest-api-v2-flows/rest-api-v2-degraded-access-flows/rest-api-v2-access-degraded-flows.html)

Flows related to the Degradation feature, providing the capability to temporarily bypass specific MVPD Authentication and Authorization endpoints.

#### Temporary Access Flows

##### [Temporary Access](https://experienceleague.adobe.com/en/docs/pass/authentication/programmer-integration-guide/rest-api-v2/rest-api-v2-flows/rest-api-v2-temporary-access-flows/rest-api-v2-access-temporary-flows.html)

Flows related to the TempPass feature, offering temporary access to protected content to users who don't have account credentials with an MVPD.

#### Single Sign-On Flows

##### [Partner SSO Authentication](https://experienceleague.adobe.com/en/docs/pass/authentication/programmer-integration-guide/rest-api-v2/rest-api-v2-flows/rest-api-v2-single-sign-on-flows/rest-api-v2-single-sign-on-partner-flows.html)

Perform authentication through a Partner that is providing its own partner framework for implementing the authentication flow with supported MVPDs.

##### [Platform Identity SSO Authentication](https://experienceleague.adobe.com/en/docs/pass/authentication/programmer-integration-guide/rest-api-v2/rest-api-v2-flows/rest-api-v2-single-sign-on-flows/rest-api-v2-single-sign-on-platform-identity-flows.html)

This single sign-on method is based on sharing a unique identifier which could be a device scoped identifier or platform scoped identifier. This unique identifier can be used from multiple applications to perform single sign-on flows at device / platform level.

##### [Service Token SSO Authentication](https://experienceleague.adobe.com/en/docs/pass/authentication/programmer-integration-guide/rest-api-v2/rest-api-v2-flows/rest-api-v2-single-sign-on-flows/rest-api-v2-single-sign-on-service-token-flows.html)

This single-sign-on method is based on sharing a user unique identifier value across multiple devices and platforms. This user unique identifier which comes from an external identity service can be used from multiple applications/devices to perform single sign-on flows.

##### [SSO Logout](https://experienceleague.adobe.com/en/docs/pass/authentication/programmer-integration-guide/rest-api-v2/rest-api-v2-flows/rest-api-v2-single-sign-on-flows/rest-api-v2-single-sign-on-logout-flow.html)

The flow that enables the Programmer Application to delete the authenticated profile information saved on the Adobe Pass backend, created through Single Sign-On mechanism.

### API References

##### [Configuration API](api/rest_api_v2/interactive/#tag/Configuration-Controller)

For full documentation of this API head over to our [public docs](https://experienceleague.adobe.com/en/docs/pass/authentication/programmer-integration-guide/rest-api-v2/rest-api-v2-apis/rest-api-v2-configuration-apis/rest-api-v2-configuration-apis-retrieve-configuration-for-specific-service-provider.html).

##### [Sessions API](api/rest_api_v2/interactive/#tag/Sessions-Controller)

For full documentation of this API head over to our [public docs](https://experienceleague.adobe.com/en/docs/pass/authentication/programmer-integration-guide/rest-api-v2/rest-api-v2-apis/rest-api-v2-sessions-apis/rest-api-v2-sessions-apis-create-authentication-session.html).

##### [Profiles API](api/rest_api_v2/interactive/#tag/Profiles-Controller)

For full documentation of this API head over to our [public docs](https://experienceleague.adobe.com/en/docs/pass/authentication/programmer-integration-guide/rest-api-v2/rest-api-v2-apis/rest-api-v2-profiles-apis/rest-api-v2-profiles-apis-retrieve-authenticated-profiles-for-specific-mvpd.html).

##### [Decisions API](api/rest_api_v2/interactive/#tag/Decision-Controller)

For full documentation of this API head over to our [public docs](https://experienceleague.adobe.com/en/docs/pass/authentication/programmer-integration-guide/rest-api-v2/rest-api-v2-apis/rest-api-v2-decisions-apis/rest-api-v2-decisions-apis-retrieve-authorization-decisions-using-specific-mvpd.html).

##### [Logout API](api/rest_api_v2/interactive/#tag/Logout-Controller)

For full documentation of this API head over to our [public docs](https://experienceleague.adobe.com/en/docs/pass/authentication/programmer-integration-guide/rest-api-v2/rest-api-v2-apis/rest-api-v2-logout-apis/rest-api-v2-logout-apis-initiate-logout-for-specific-mvpd.html).

##### [Partner SSO API](api/rest_api_v2/interactive/#tag/Partner-SSO-Controller)

For full documentation of this API head over to our [public docs](https://experienceleague.adobe.com/en/docs/pass/authentication/programmer-integration-guide/rest-api-v2/rest-api-v2-apis/rest-api-v2-partner-single-sign-on-apis/rest-api-v2-partner-single-sign-on-apis-retrieve-partner-authentication-request.html).
