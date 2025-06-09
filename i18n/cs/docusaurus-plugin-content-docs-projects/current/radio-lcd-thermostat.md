---
slug: radio-lcd-thermostat
title: Radio LCD thermostat
---
import Image from '@theme/IdealImage';



# Radio LCD Thermostat

This document will guide you through the **Radio LCD Thermostat** project. With this gadget you will be able to control remotly you temperature.

## Block Concept


<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_block-diagram.webp')}/>
  </div>
</div>

## Requirements

* Either **BigClown Radio LCD Thermostat Kit**, or individual components:
  * 1x **BigClown LCD Module**
  * 1x **BigClown Core Module**
  * 1x **BigClown Mini Battery Module**
  * 1x **BigClown Radio Dongle**
* One of these options:
  * **BigClown Playground** installed \(recommended\)

    You can find more information in the [**Quick Start Guide**](../basics/quick-start-guide.md) document.

  * **Raspberry Pi** with the **BigClown Raspbian** distribution

    You can find more information in the document [**Raspberry Pi Installation**](../tutorials/raspberry-pi-installation.md).

  * **BigClown Firmware Tool** installed

    You can find more information in the document [**Toolchain Setup**](../firmware/toolchain-setup.md).

## Firmware Upload

In this procedure we will use the **BigClown Playground** to upload firmware to the **Core Module**.

### Step 1: Connect the Micro USB cable to the **Core Module** and your computer

### Step 2: Flash firmware

Run the BigClown Playground. In the Firmware tab choose and upload the `bcf-radio-lcd-thermostat` firmware to the **Core Module**:

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
    src="https://www.youtube.com/embed/5fihG2xp4y8?si=US5A8Sm3CeTFJtKf"     title="YouTube video player"
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

### **Step 3:** Plug the **LCD Module** on top of the **Core Module**

## Playground Bootstrap

:::danger

If you are using the new **BigClown Playground**, then use the **Functions** tab instead of using [**http://localhost:1880/**](http://localhost:1880/). Also the pairing process is now done in **Devices** tab. For communication test use the **Messages** tab.

:::

### Step 1: Open **Node-RED** in your web browser

[http://localhost:1880/](http://localhost:1880/)

### Step 2: You should see the empty workspace with **Flow 1**

### Step 3: Insert the following snippet in the flow \(using **Menu &gt;&gt; Import**\)

```text
[{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

It will look like this:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_node-red-gw-controls.webp')}/>
  </div>
</div>

:::info 

This snippet provides control buttons for gateway/radio commands. These commands are sent over the MQTT protocol.

:::

### Step 4: Deploy the flow using the **Deploy** button in the top-right corner

### Step 5: Open the **debug** tab

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_node-red-gw-debug.webp')}/>
  </div>
</div>

:::info 

In the **debug** tab, you will be able to see all the MQTT messages.

:::

### Step 6: Click on the **List all gateways** button. You should see a response like this in the **debug** tab

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_node-red-gw-list.webp')}/>
  </div>
</div>

:::success

At this point, you've got working **Node-RED**, **MQTT**, **BigClown Radio Dongle** and **BigClown Gateway**.

:::

## Radio Pairing

In this section, we will create a radio link between the **Radio Dongle** and the **Radio LCD Thermostat**.

Follow these steps in **Node-RED**:

### Step 1: Click on the **Start node pairing** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_node-red-gw-pair-start.webp')}/>
  </div>
</div>

### Step 2: Insert the batteries into the **Radio LCD Thermostat** to send the pairing request (you should also see the red LED on the **Core Module** to be on for about 2 seconds)

### Step 3: Click on the **Stop node pairing** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_node-red-gw-pair-stop.webp')}/>
  </div>
</div>

:::success

At this point, you've got established a radio link between the node (**Radio LCD Thermostat**) and the gateway (**Radio Dongle**).

:::

## Communication Test

Follow these steps in **Node-RED**:

### Step 1: Switch to **debug** tab on the right

### Step 2: Insert the following snippet in the flow (using **Menu >> Import**)

```text
[{"id":"12b3deae.bbbdf1","type":"mqtt in","z":"f2f80e07.95983","name":"","topic":"node/lcd-thermostat:0/#","qos":"2","broker":"25b87ea5.743312","x":390,"y":320,"wires":[["7694514b.9b64d"]]},{"id":"7694514b.9b64d","type":"debug","z":"f2f80e07.95983","name":"","active":true,"console":"false","complete":"false","x":630,"y":320,"wires":[]},{"id":"25b87ea5.743312","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

### Step 3: If you see some messages in debug log (like temperature) your kit works correctly

:::success

At this point, you've got verified radio communication.

:::

## Integration with Blynk

Now we have assembled our kit and let's start with some basic integration with **Blynk**. We will start without describing what **Blynk** is. If you want get some information about what **Blynk** is. The best thing you can do is visit their [**page**](https://www.blynk.cc/). In our example we will be showing you how monitor your temperature in time graph. As well as switch your relay which depends on pre-set temperature.

Firstly we need to configure our **Node-RED** app.

### Step 1: Blynk nodes

If you are using BigClown raspi version you should be fine, but still check that **Blynk** nodes are installed. (You can view them on the left side menu in **Node-RED**). Otherwise you will need to install **Node-RED** package `node-red-contrib-blynk-ws`.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_nodered-1.webp')}/>
  </div>
</div>

### Step 2: Add another flow (you can add them by big plus button next to the flow name)

### Step 3: Insert the following snippet in the flow (using **Menu >> Import**)

```text
[{"id":"85a6bc11.f6088","type":"tab","label":"Flow 2","disabled":false,"info":""},{"id":"cdb6da8f.c84f88","type":"blynk-ws-out-write","z":"85a6bc11.f6088","name":"","pin":"1","pinmode":0,"client":"172c134d.989ead","x":700,"y":440,"wires":[]},{"id":"9dd2498e.466368","type":"mqtt in","z":"85a6bc11.f6088","name":"","topic":"node/lcd-thermostat:0/thermometer/0:1/temperature","qos":"2","broker":"3d7de0ee.6b9ed","x":210,"y":140,"wires":[["2390ca91.f7db36"]]},{"id":"c35cea67.a92b48","type":"inject","z":"85a6bc11.f6088","name":"Every 1 second","topic":"","payload":"","payloadType":"date","repeat":"1","crontab":"","once":false,"onceDelay":"","x":130,"y":440,"wires":[["10c14148.1cc99f","19338151.912a9f"]]},{"id":"5b5fb6fe.549268","type":"mqtt out","z":"85a6bc11.f6088","name":"","topic":"node/power-controller:0/relay/-/state/set","qos":"","retain":"","broker":"3d7de0ee.6b9ed","x":780,"y":340,"wires":[]},{"id":"2390ca91.f7db36","type":"change","z":"85a6bc11.f6088","name":"","rules":[{"t":"set","p":"temperature","pt":"flow","to":"$number(msg.payload)","tot":"jsonata"}],"action":"","property":"","from":"","to":"","reg":false,"x":540,"y":140,"wires":[["63757f48.e9115"]]},{"id":"518ff012.d2933","type":"mqtt in","z":"85a6bc11.f6088","name":"","topic":"node/lcd-thermostat:0/thermometer/set-point/temperature","qos":"2","broker":"3d7de0ee.6b9ed","x":230,"y":60,"wires":[["efd4b628.96d098"]]},{"id":"efd4b628.96d098","type":"change","z":"85a6bc11.f6088","name":"","rules":[{"t":"set","p":"setpoint","pt":"flow","to":"$number(msg.payload)","tot":"jsonata"}],"action":"","property":"","from":"","to":"","reg":false,"x":560,"y":60,"wires":[["63757f48.e9115"]]},{"id":"10c14148.1cc99f","type":"change","z":"85a6bc11.f6088","name":"","rules":[{"t":"set","p":"payload","pt":"msg","to":"temperature","tot":"flow"}],"action":"","property":"","from":"","to":"","reg":false,"x":400,"y":440,"wires":[["cdb6da8f.c84f88"]]},{"id":"19338151.912a9f","type":"change","z":"85a6bc11.f6088","name":"","rules":[{"t":"set","p":"payload","pt":"msg","to":"setpoint","tot":"flow"}],"action":"","property":"","from":"","to":"","reg":false,"x":400,"y":480,"wires":[["32f2b7a7.072788"]]},{"id":"32f2b7a7.072788","type":"blynk-ws-out-write","z":"85a6bc11.f6088","name":"","pin":"2","pinmode":0,"client":"172c134d.989ead","x":700,"y":480,"wires":[]},{"id":"63757f48.e9115","type":"switch","z":"85a6bc11.f6088","name":"comparison","property":"setpoint","propertyType":"flow","rules":[{"t":"gt","v":"temperature","vt":"flow"},{"t":"lte","v":"temperature","vt":"flow"}],"checkall":"true","repair":false,"outputs":2,"x":530,"y":260,"wires":[["b83b5274.58c59"],["4984fb4c.bbe3f4"]]},{"id":"b83b5274.58c59","type":"change","z":"85a6bc11.f6088","name":"true","rules":[{"t":"set","p":"payload","pt":"msg","to":"true","tot":"bool"}],"action":"","property":"","from":"","to":"","reg":false,"x":670,"y":240,"wires":[["5b5fb6fe.549268"]]},{"id":"4984fb4c.bbe3f4","type":"change","z":"85a6bc11.f6088","name":"false","rules":[{"t":"set","p":"payload","pt":"msg","to":"false","tot":"bool"}],"action":"","property":"","from":"","to":"","reg":false,"x":670,"y":280,"wires":[["5b5fb6fe.549268"]]},{"id":"172c134d.989ead","type":"blynk-ws-client","z":"","name":"","path":"ws://blynk-cloud.com/websockets","key":"4035de467a9a483b9d1318c92d3fabcb","dbg_all":false,"dbg_read":false,"dbg_write":false,"dbg_notify":false,"dbg_mail":false,"dbg_prop":false,"dbg_sync":false,"dbg_bridge":false,"dbg_low":false,"dbg_pins":"","multi_cmd":false,"proxy_type":"no","proxy_url":""},{"id":"3d7de0ee.6b9ed","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""}]
```

It will look like this:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_nodered-2.webp')}/>
  </div>
</div>

### Step 4: Connect

Configure MQTT node to connect it on you broker. It will probably connect on localhost if you are using Raspberry Pi. After that you will need to configure **Blynk** node. Just fill in URL `ws://blynk-cloud.com/websockets`. The `Auth Token` we will configure later after obtaining one from Blynk over e-mail.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_nodered-screen-2.webp')}/>
  </div>
</div>

### Step 5: Now download the **Blynk** app from [**App Store**](https://itunes.apple.com/us/app/blynk-iot-for-arduino-esp32/id808760481?mt=8) or [**Google Play**](https://play.google.com/store/apps/details?id=cc.blynk&hl=en)

### **Step 6:** After installing, you should create account, login and you should see something like that

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_blynk-1.webp')}/>
  </div>
</div>

### Step 7: Now click a button on the top right to scan QR code

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_blynk-2.webp')}/>
  </div>
</div>

### Step 8: Now you should scan following QR code to get everything preconfigured

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_blynk-qr.webp')}/>
  </div>
</div>

### Step 9: You should see something like this, just without the temperatures values yet

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_blynk-3.webp')}/>
  </div>
</div>

### Step 10: Email

Click the settings wheel and you should see settings for your project. We need to get `Auth Token` which you have to copy to our **Node-RED** in **Blynk** node configuration.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_blynk-4.webp')}/>
  </div>
</div>

### Step 11: Now deploy your **Node-RED** app and hit play button in your **Blynk** project and you should be done!

## Related Documents

* [**Raspberry Pi Installation**](../tutorials/raspberry-pi-installation.md)
* [**Toolchain Setup**](../firmware/toolchain-setup.md)
* [**Toolchain Guide**](../firmware/toolchain-guide.md)