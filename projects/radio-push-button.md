---
slug: radio-push-button
title: Radio push button
---
import Image from '@theme/IdealImage';

# Radio Push Button

This document will guide you through the **Radio Push Button** project. You will be able to interact with your push button in **Node-RED** and trigger the **IFTTT** push notification service when the button gets pressed. You will get the push notification on your smart phone.

## Block Concept

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_block-diagram.webp')}/>
  </div>
</div>

## Requirements

* Either **BigClown Radio Push Button Kit**, or individual components:
  * 1x **BigClown Button Module**
  * 1x **BigClown Core Module**
  * 1x **BigClown Mini Battery Module**
  * 1x **BigClown Radio Dongle**
* One of these options:
  * **BigClown Playground** installed (recommended)

    You can find more information in the [**Quick Start Guide**](../basics/quick-start-guide.md) document.

  * **Raspberry Pi** with the **BigClown Raspbian** distribution

    You can find more information in the document [**Raspberry Pi Installation**](../tutorials/raspberry-pi-installation.md).

  * **BigClown Toolchain** installed

    You can find more information in the document [**Toolchain Setup**](../firmware/toolchain-setup.md).

## Firmware Upload

In this procedure we will use the **BigClown Playground** to upload firmware to the **Core Module**.

### Step 1: Connect the Micro USB cable to the **Core Module** and your computer

### Step 2: Flash Firmware

Run the BigClown Playground. In the Firmware tab choose and upload the `bcf-radio-push-button` firmware to the **Core Module**:

:::warning

**Flashing Core Module R1 & R2**  
For differences of flashing older **Core Module 1** and newer **Core Module 2** please read **Core Module R1 and R2 comparison** in the **Hardware section**

:::

### Step 3: Remove the Micro USB cable from the **Core Module** and your computer

:::success

At this point your firmware is successfully uploaded.

:::

## Hardware Assembling

See short video with easy step by step demonstration:

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
    src="https://www.youtube.com/embed/OCPPKXzCBg0?si=_KXwaBvBpYjCHWzy"     title="YouTube video player"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>

### Step 1: Start with the **Mini Battery Module**

### **Step 2:** Plug the **Core Module** on top of the **Mini Battery Module**

### **Step 3:** Plug the **Button Module** on top of the **Core Module**

## Playground Bootstrap

:::danger

If you are using the new **BigClown Playground**, then use the **Functions** tab instead of using [**http://localhost:1880/**](http://localhost:1880/). Also the pairing process is now done in **Devices** tab. For communication test use the **Messages** tab.

:::

### **Step 1:** Open **Node-RED** in your web browser

[http://localhost:1880/](http://localhost:1880/)

### Step 2: You should see the empty workspace with **Flow 1**

### **Step 3:** Insert the following snippet in the flow (using **Menu >> Import**) and click in **Flow 1** tab

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_node-red-gw-controls.webp')}/>
  </div>
</div>

:::info

This snippet provides control buttons for gateway/radio commands. These commands are sent over the MQTT protocol.

:::

### Step 4: Deploy the flow using the **Deploy** button in the top-right corner

### Step 5: Open the **debug** tab

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_node-red-gw-debug.webp')}/>
  </div>
</div>

:::info

In the **debug** tab, you will be able to see all the MQTT messages.

:::

### Step 6: Click on the **List all gateways** button. You should see a response like this in the **debug** tab

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_node-red-gw-list.webp')}/>
  </div>
</div>

:::success

At this point, you've got working **Node-RED**, **MQTT**, **BigClown Radio Dongle**and **BigClown Gateway**.

:::

## Radio Pairing

In this section, we will create a radio link between the **Radio Dongle** and the **Radio Push Button**.

Follow these steps in **Node-RED**:

### Step 1: Click on the **Start node pairing** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_node-red-gw-pair-start.webp')}/>
  </div>
</div>

### Step 2: Assembly

Insert the batteries into the **Radio Push Button** to send the pairing request (you should also see the red LED on the **Core Module** to be on for about 2 seconds).

### Step 3: Click on the **Stop node pairing** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_node-red-gw-pair-stop.webp')}/>
  </div>
</div>

:::success

At this point, you've got established a radio link between the node (**Radio Push Button**) and the gateway (**Radio Dongle**).

:::

## Communication Test

Follow these steps in **Node-RED**:

### Step 1: Switch to **debug** tab on the right

### Step 2: Press the button and you should see the counting messages

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_radio-test.webp')}/>
  </div>
</div>

:::success

At this point, you've got verified radio communication.

:::

## Enclosure

Optionally put the assembly into the appropriate enclosure, if you have one.

:::info

You can find more information about the enclosures in the document [**Enclosures**](../basics/enclosures.md).

:::

## Integration with IFTTT

In this section, we will create an **Applet** in the **IFTTT** service. The **Applet** is a sort of event-trigger mechanism.

### Step 1: Open the web-browser and go to [**IFTTT**](https://ifttt.com/)

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-01.webp')}/>
  </div>
</div>

### Step 2: Log in to IFTTT service. You can sign up using your Google or Facebook identity

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-02.webp')}/>
  </div>
</div>

### Step 3: Go to **My Applets** in the menu and click on the **New Applet** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-03.webp')}/>
  </div>
</div>

### Step 4: Click on **+this** in the `if this then that` sentence

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-04.webp')}/>
  </div>
</div>

### Step 5: Find a service with the name **Webhooks** and select it

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-05.webp')}/>
  </div>
</div>

### Step 6: Click on **Receive a web request**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-06.webp')}/>
  </div>
</div>

### **Step 7:** Type `button` in the **Event Name** field and click on **Create Trigger**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-07.webp')}/>
  </div>
</div>

### **Step 8:** Click on **+that** in the `if this then that` sentence

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-08.webp')}/>
  </div>
</div>

### Step 9: Find action service with the name **Notifications** and select it

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-09.webp')}/>
  </div>
</div>

### Step 10: Click on **Send a notification from the IFTTT app**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-10.webp')}/>
  </div>
</div>

### **Step 11:** Edit the **Notification** field and insert the text `The button has been pressed on {{OccurredAt}}` and push the **Create action** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-11.webp')}/>
  </div>
</div>

### Step 12: Click on the **Finish** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-12.webp')}/>
  </div>
</div>

### Step 13: Click on the **Webhooks** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-13.webp')}/>
  </div>
</div>

### Step 14: Click on the **Documentation** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-14.webp')}/>
  </div>
</div>

### Step 15: Click on the **event** field

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-15.webp')}/>
  </div>
</div>

### Step 16: Insert the name `button` in the **event** field and keep the window open

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-16.webp')}/>
  </div>
</div>

### Step 17: Mobile app

Install the **IFTTT** app on your smart phone and sign in using the same account as you just used to create the applet. Allow the app to use the push notifications when asked

### Step 18: Click on the **Test It** button in the web-browser window

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-17.webp')}/>
  </div>
</div>

### Step 19: You should receive the push notification on your smart phone within a few seconds

### Step 20: Copy this URL to the clipboard for later use

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-18.webp')}/>
  </div>
</div>

:::success

At this point, you've got working notification **Applet** in the **IFTTT** service.

:::

## Connect IFTTT in Node-RED

In this section, we will create a link between the button event on MQTT and HTTP request to **IFTTT** which will trigger the push notification.

### Step 1: Switch to your **Node-RED** flow

### Step 2: Insert the following snippet in the flow (using **Menu >> Import**)

```text
[{"id":"e507a379.e9d1d","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"node/push-button:0/push-button/-/event-count","qos":"2","broker":"b9592cd0.2b74f","x":660,"y":760,"wires":[["5d4d5593.80242c"]]},{"id":"62133f2.84223c","type":"http request","z":"dfc861b.b2a02a","name":"","method":"POST","ret":"txt","url":"","tls":"","x":1010,"y":760,"wires":[[]]},{"id":"5d4d5593.80242c","type":"change","z":"dfc861b.b2a02a","name":"","rules":[{"t":"delete","p":"payload","pt":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":890,"y":860,"wires":[["62133f2.84223c"]]},{"id":"b9592cd0.2b74f","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

It will look like this:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_node-red-ifttt-snippet.webp')}/>
  </div>
</div>

:::info

This snippet creates a connection between the MQTT topic `node/push-button:0/push-button/-/event-count` and an HTTP request. Before passing the message to the HTTP request, we remove the `payload` parameter since it would be used in the HTTP request body.

:::

### Step 3: Double click on **http request** node and edit the IFTTT URL obtained in the previous section

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_node-red-ifttt-url.webp')}/>
  </div>
</div>

### Step 4: Save the URL by clicking on the **Done** button

### Step 5: Deploy the flow using the **Deploy** button in the top-right corner

:::success

At this point, you should get a push notification when you press the button.

:::

## Related Documents

* [**Raspberry Pi Installation**](../tutorials/raspberry-pi-installation.md)
* [**Toolchain Setup**](../firmware/toolchain-setup.md)
* [**Toolchain Guide**](../firmware/toolchain-guide.md)