![just-call-logo](/metadata/justcall.svg)

# Just Call
### Interact with Justcall's API right within Tray

![Alt text](/metadata/1.png)

## Features



## How to Install

1. Request a Namespace
- Raise a support ticket to obtain a 'namespace' for your organization.
- A 'namespace' groups Tray organizations for sharing connectors.

2. Prerequisite - Create a Custom Service
- Navigate to the Tray UI and select the 'Services' tab.
- Click on 'New Service' and input the service details.
- Save and note the unique service name that appears.

3. Edit the Connector JSON File
- Modify the `connector.json` file, replacing the 'service' name with your unique service name.
- Prefix the 'name' field with your namespace.

4. Set Environment Variables
- Set TRAY_API_URL: ```export TRAY_API_TOKEN=<TRAY_SESSION_TOKEN>```
- Obtain TRAY_SESSION_TOKEN from the Application tab in Dev tools on Tray UI. Use the token appropriate for your region.

5. Deploy the Connector
- Run the deployment command: `tray-cdk deploy`
- Wait for the process to complete and confirm the successful deployment.

6. Finalize the Setup
- Add authentication details on the Tray UI.
- Conduct a test run to ensure proper functionality.

The connector should now be fully deployed and operational.

## How to use

1. Finding Your API Key and Secret

To get started, follow these simple steps to locate your API Key and Secret within your JustCall account:

1. Login: Sign in to your JustCall account to access your dashboard.
2. Settings: Click on the profile icon and navigate to 'Settings.'
3. Developers: Navigate to the Developers section from the left panel.
4. Retrieve Credentials: Use the copy button beside the API Key and Secret fields to copy the credentials and store them safely in your clipboard for use in the further steps.
Authenticating API Requests

Now that you have your API Key and Secret, you can use them to authenticate your API requests. When authenticating into the connector, make sure you write the access token in the format: `api_key:api_secret`

This combination of API Key and Secret, separated by a colon, establishes your identity and grants you access to the JustCall APIs.

📘
Please note that API access is available starting from the JustCall Team plan and above. For detailed information about our pricing plans, visit our Pricing Page

With API Key and Secret authentication, you're equipped to tap into the full potential of JustCall's APIs while ensuring the security of your data and interactions.

