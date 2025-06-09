---
slug: radio-motion-detector
title: Radio motion detector
---
import Image from '@theme/IdealImage';




# Radio Motion Detector

This document will guide you through the **Radio Motion Detector** project. You will be able to interact with your motion detector in **Node-RED** and trigger the **IFTTT** push notification service when the movement gets detected. You will get the push notification on your smart phone.

## Block Concept


<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_block-diagram.webp')}/>
  </div>
</div>

## Requirements

* Either **Hardwario Radio Motion Detector Kit**, or individual components:
  * 1x **Hardwario Climate Module**
  * 1x **Hardwario Core Module**
  * 1x **Hardwario Mini Battery Module**
  * 1x **Hardwario Radio Dongle**
* One of these options:
  * **Hardwario Playground** installed \(recommended\)

    You can find more information in the [**Quick Start Guide**](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/) document.

  * **Raspberry Pi** with the **Hardwario Raspbian** distribution

    You can find more information in the document [**Raspberry Pi Installation**](https://docs.hardwario.com/tower/server-raspberry-pi/).

  * **Hardwario Firmware Tool** installed

    You can find more information in the document [**Toolchain Setup**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain).

## Firmware Upload

In this procedure we will use the **Hardwario Playground** to upload firmware to the **Core Module**.

### Step 1: Connect the Micro USB cable to the **Core Module** and your computer

### Step 2: Flash firmware

Run the Hardwario Playground. In the Firmware tab choose and upload the `bcf-radio-motion-detector` firmware to the **Core Module.**

:::warning

**Flashing Core Module R1 & R2**  
For differences of flashing older **Core Module 1** and newer **Core Module 2** please read **Core Module R1 and R2 comparison** in the **Hardware section**

:::

### **Step 3:** Remove the Micro USB cable from the **Core Module** and your computer

:::success

At this point your firmware is successfully uploaded.

:::

## Hardware Assembling

See short video with easy step by step demonstration:

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
    src="https://www.youtube.com/embed/U8i0Afk3XOI?si=PnW0fsOc5Eh-PS-a"     title="YouTube video player"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>

### Step 1: Start with the **Mini Battery Module**

:::warning

Make sure the **Mini Battery Module** does not have batteries inserted.

:::

### **Step 2:** Plug the **Core Module** on top of the **Mini Battery Module**

### **Step 3:** Plug the **PIR Module** on top of the **Core Module**

## Playground Bootstrap

:::danger

If you are using the new **Hardwario Playground**, then use the **Functions** tab instead of using [**http://localhost:1880/**](http://localhost:1880/). Also the pairing process is now done in **Devices** tab. For communication test use the **Messages** tab.

:::

### **Step 1:** Open **Node-RED** in your web browser

[http://localhost:1880/](http://localhost:1880/)

### Step 2: You should see the empty workspace with **Flow 1**

### **Step 3:** Insert the following snippet in the flow \(using **Menu &gt;&gt; Import**\) and click in **Flow 1** tab

```text
[{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```
It will look like this:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_node-red-gw-controls.webp')}/>
  </div>
</div>  

:::info

This snippet provides control buttons for gateway/radio commands. These commands are sent over the MQTT protocol.

:::

### Step 4: Deploy the flow using the **Deploy** button in the top-right corner

### Step 5: Open the **debug** tab

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_node-red-gw-debug.webp')}/>
  </div>
</div>

:::info

In the **debug** tab, you will be able to see all the MQTT messages.

:::

### Step 6: Click on the **List all gateways** button. You should see a response like this in the **debug** tab

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_node-red-gw-list.webp')}/>
  </div>
</div>

:::success

At this point, you've got working **Node-RED**, **MQTT**, **Hardwario Radio Dongle** and **Hardwario Gateway**.

:::

## Radio Pairing

In this section, we will create a radio link between the **Radio Dongle** and the **Radio Motion Detector**. Follow these steps in **Node-RED**:

### Step 1: Click on the **Start node pairing** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_node-red-gw-pair-start.webp')}/>
  </div>
</div>

### Step 2: Insert the batteries into the **Radio Motion Detector** to send the pairing request (you should also see the red LED on the **Core Module** to be on for about 2 seconds)

### Step 3: Click on the **Stop node pairing** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_node-red-gw-pair-stop.webp')}/>
  </div>
</div>

:::success

At this point, you've got established a radio link between the node (**Radio Motion Detector**) and the gateway (**Radio Dongle**).

:::

## Communication Test

Follow these steps in **Node-RED**:

### Step 1: Switch to **debug** tab on the right

### Step 2: Start waving your hand in front of the **PIR Module** to trigger a radio transmission.

You should then see similar messages:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_radio-test.webp')}/>
  </div>
</div>

:::success

At this point, you've got verified radio communication.

:::

## Enclosure

Optionally put the assembly into the appropriate enclosure, if you have one.

:::info

You can find more information about the enclosures in the document [**Enclosures**](https://docs.hardwario.com/chester/hardware-description/enclosures/).

:::

## Integration with IFTTT

In this section, we will create an **Applet** in the **IFTTT** service. The **Applet** is a sort of event-trigger mechanism.

### Step 1: Open the web-browser and go to [**IFTTT**](https://ifttt.com/)

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_ifttt-01.webp')}/>
  </div>
</div>

### **Step 2:** Log in to IFTTT service. You can sign up using your Google or Facebook identity

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_ifttt-02.webp')}/>
  </div>
</div>

### Step 3: Go to **My Applets** in the menu and click on the **New Applet** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_ifttt-03.webp')}/>
  </div>
</div>

### Step 4: Click on **+this** in the `if this then that` sentence

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_ifttt-04.webp')}/>
  </div>
</div>

### Step 5: Find a service with the name **Webhooks** and select it

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_ifttt-05.webp')}/>
  </div>
</div>

### Step 6: Click on **Receive a web request**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_ifttt-06.webp')}/>
  </div>
</div>

### **Step 7:** Type `motion` in the **Event Name** field and click on **Create Trigger**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_ifttt-07.webp')}/>
  </div>
</div>

### **Step 8:** Click on **+that** in the `if this then that` sentence

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_ifttt-08.webp')}/>
  </div>
</div>

### Step 9: Find action service with the name **Notifications** and select it

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_ifttt-09.webp')}/>
  </div>
</div>

### Step 10: Click on **Send a notification from the IFTTT app**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_ifttt-10.webp')}/>
  </div>
</div>

### **Step 11:** Edit the **Notification** field and insert the text `The motion detected on {{OccurredAt}}` and push the **Create action** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_ifttt-11.webp')}/>
  </div>
</div>

### Step 12: Click on the **Finish** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_ifttt-12.webp')}/>
  </div>
</div>

### Step 13: Click on the **Webhooks** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_ifttt-13.webp')}/>
  </div>
</div>

### Step 14: Click on the **Documentation** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_ifttt-14.webp')}/>
  </div>
</div>

### Step 15: Click on the **event** field

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_ifttt-15.webp')}/>
  </div>
</div>

### Step 16: Insert the name `button` in the **event** field and keep the window open

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_ifttt-16.webp')}/>
  </div>
</div>

### Step 17: Install on your smartphone

Install the **IFTTT** app on your smart phone and sign in using the same account as you just used to create the applet. Allow the app to use the push notifications when asked

### Step 18: Test it

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_ifttt-17.webp')}/>
  </div>
</div>

### Step 19: You should receive the push notification on your smart phone within a few seconds

### Step 20: Copy this URL to the clipboard for later use

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_ifttt-18.webp')}/>
  </div>
</div>

:::success

At this point, you've got working notification **Applet** in the **IFTTT** service.

:::

## Connect IFTTT in Node-RED

In this section, we will create a link between the button event on MQTT and HTTP request to **IFTTT** which will trigger the push notification.

### Step 1: Switch to your **Node-RED** flow

### Step 2: Insert the following snippet in the flow (using **Menu >> Import**):

```text
[{"id":"aa6e1255.ea79f","type":"mqtt in","z":"1683bd68.e7a7b3","name":"","topic":"node/motion-detector:0/pir/-/event-count","qos":"2","broker":"3db59913.baf0c6","x":580,"y":580,"wires":[["fd3ce751.8e9ba8"]]},{"id":"74e6dfc1.7c1dc","type":"http request","z":"1683bd68.e7a7b3","name":"","method":"POST","ret":"txt","url":"https://maker.ifttt.com/trigger/motion/with/key/bbtA7Dn-3HKPG8OcfZMP7WyvKh6I69iEW9j9OtUBGGB","tls":"","x":910,"y":580,"wires":[[]]},{"id":"fd3ce751.8e9ba8","type":"change","z":"1683bd68.e7a7b3","name":"","rules":[{"t":"delete","p":"payload","pt":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":710,"y":680,"wires":[["42aed05e.e145"]]},{"id":"42aed05e.e145","type":"delay","z":"1683bd68.e7a7b3","name":"","pauseType":"delay","timeout":"30","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":900,"y":680,"wires":[["74e6dfc1.7c1dc"]]},{"id":"3db59913.baf0c6","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

It will look like this:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_node-red-ifttt-snippet.webp')}/>
  </div>
</div>

:::info

This snippet creates a connection between the MQTT topic `node/motion-detector:0/pir/-/event-count` and an HTTP request. Before passing the message to the HTTP request, we remove the `payload` parameter since it would be used in the HTTP request body.

:::

### Step 3: Double click on **http request** node and edit the IFTTT URL obtained in the previous section:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector_node-red-ifttt-url.webp')}/>
  </div>
</div>

### Step 4: Save the URL by clicking on the **Done** button

### Step 5: Deploy the flow using the **Deploy** button in the top-right corner

:::success

At this point, you should get a push notification when you press the button.

:::

### Related Documents <a id="related-documents"></a>

* [**Raspberry Pi Installation**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Toolchain Setup**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
* [**Toolchain Guide**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)