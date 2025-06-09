---
slug: radio-smart-led-strip
title: Radio smart LED strip
---
import Image from '@theme/IdealImage';


# Radio Smart LED Strip

This document will guide you through the **Radio Smart LED Strip** project. You will be able to interact with your LED strip in **Node-RED** and Blynk and control Power appliance using 16A Relay.

## Block Concept

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_block-diagram.webp')}/>
  </div>
</div>

### Requirements <a id="requirements"></a>

* Either **Hardwario Radio Power Controller Kit**, or individual components:
  * 1x **Hardwario Cover Module**
  * 1x **Hardwario Core Module**
  * 1x **Hardwario Power Module**
  * 1x AC/DC ADAPTER 5V/3A \(or higher current rating\)
  * 1x 3D printed enclosure BCE301
* Other components:
  * 1x **Hardwario Radio Dongle** \(not included in the kit\)
  * 1x RGB or RGBW Digital LED strip \(not included in the kit\)
  * Micro USB cable \(not included in the kit\)
* One of these options:
  * **Hardwario Playground** installed \(recommended\)

    You can find more information in the [**Quick Start Guide**](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/) document.

  * **Raspberry Pi** with the **Hardwario Raspbian** distribution

    You can find more information in the document [**Raspberry Pi Installation**](https://docs.hardwario.com/tower/server-raspberry-pi/).

  * **Hardwario Firmware Tool** installed

    You can find more information in the document [**Toolchain Setup**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain).

### Firmware Upload <a id="firmware-upload"></a>

In this procedure we will use the **Hardwario Playground** to upload firmware to the **Core Module**.

### Step 1: Connect the Micro USB cable to the **Core Module** and your computer

### Step 2: Flash firmware

Run the Hardwario Playground. In the Firmware tab choose and upload the `bcf-radio-power-controller-` firmware to the **Core Module**:

If your LED strip is **144 LEDs RGBW**:

```text
bcf-radio-power-controller-rgbw144
```

If your LED strip is **150 LEDs RGB**:

```text
bcf-radio-power-controller-rgb150
```

If your LED strip is **72 LEDs RGBW**:

```text
bcf-radio-power-controller-rgbw72
```

:::warning

**Flashing Core Module R1 & R2**  
For differences of flashing older **Core Module 1** and newer **Core Module 2** please read **Core Module R1 and R2 comparison** in the **Hardware section**

:::

### Step 3: Remove the Micro USB cable from the **Core Module** and your computer

:::success

At this point your firmware is successfully uploaded

:::

## Hardware Assembling

See short video with easy step by step demonstration:

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
   src="https://www.youtube.com/embed/idxAoc2q6O0?si=swz-oTJNNCQ7wvX6"    title="YouTube video player"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>


### Step 1: Start with the **Power Module**

:::warning

Make sure the **Power Module** does not have power adapter inserted.

:::

### **Step 2:** Plug the **Core Module** on top of the **Power Module**

### **Step 3:** Plug the **Cover Module** on top of the **Core Module**

### **Step 4:** Put assembled modules into the enclosure BCE301 and fix it with O-rings


<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_project-thermostat-relay-bc.webp')}/>
  </div>
</div>

### Step 5: Connect the LED strip to the pluggable socket on the right side

### Step 6: Connect the 5V DC Power Jack

## Playground Bootstrap

:::danger

If you are using the new **Hardwario Playground**, then use the **Functions** tab instead of using [**http://localhost:1880/**](http://localhost:1880/). Also the pairing process is now done in **Devices** tab. For communication test use the **Messages** tab.

:::

### Step 1: Open **Node-RED** in your web browser

[http://localhost:1880/](http://localhost:1880/)

### Step 2: You should see the empty workspace with **Flow 1**

### **Step 3:** Insert the following snippet in the flow \(using **Menu &gt;&gt; Import &gt;&gt; Clipboard**\) and click in **Flow 1** tab, then deploy

```text
[{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

It will look like this:

:::info

This snippet provides control buttons for gateway/radio commands. These commands are sent over the MQTT protocol.

:::

### Step 4: Deploy the flow using the **Deploy** button in the top-right corner

### Step 5: Open the **debug** tab

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_node-red-gw-debug.webp')}/>
  </div>
</div>

:::info

In the **debug** tab, you will be able to see all the MQTT messages.

:::

### Step 6: Click on the **List all gateways** button. You should see a response like this in the **debug** tab

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_node-red-gw-list.webp')}/>
  </div>
</div>

:::success

At this point, you've got working **Node-RED**, **MQTT**, **Hardwario Radio Dongle**and **Hardwario Gateway**.

:::

## Radio Pairing

In this section, we will create a radio link between the **Radio Dongle** and the **Radio Smart LED strip**.

Follow these steps in **Node-RED**:

### Step 1: Click on the **Start node pairing** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_node-red-gw-pair-start.webp')}/>
  </div>
</div>

### Step 2: Connect the power adapter into the **Radio Power Controller** to send the pairing request \(you should also see the red LED on the **Core Module** to be on for about 2 seconds\)

### Step 3: Click on the **Stop node pairing** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_node-red-gw-pair-stop.webp')}/>
  </div>
</div>

:::success

At this point, you've got established a radio link between the node \(**Radio Smart LED Strip**\) and the gateway \(**Radio Dongle**\).

:::

## Communication Test

Follow these steps in **Node-RED**:

### Step 1: Switch to **debug** tab on the right

### Step 2: Insert the following snippet in the flow \(using **Menu &gt;&gt; Import**\) and click in **Flow 1** tab

```text
[{"id":"c81deb91.e6df28","type":"inject","z":"6115d89b.b435c8","name":"led true","topic":"node/{id}/led/-/state/set","payload":"true","payloadType":"bool","repeat":"","crontab":"","once":false,"onceDelay":"","x":150,"y":40,"wires":[["fc940043.2c94c"]]},{"id":"e865057.ad650f8","type":"inject","z":"6115d89b.b435c8","name":"led false","topic":"node/{id}/led/-/state/set","payload":"false","payloadType":"bool","repeat":"","crontab":"","once":false,"onceDelay":"","x":160,"y":80,"wires":[["fc940043.2c94c"]]},{"id":"f4eda4ad.e61008","type":"inject","z":"6115d89b.b435c8","name":"relay true","topic":"node/{id}/relay/-/state/set","payload":"true","payloadType":"bool","repeat":"","crontab":"","once":false,"onceDelay":"","x":160,"y":180,"wires":[["fc940043.2c94c"]]},{"id":"d068e0ba.850d9","type":"inject","z":"6115d89b.b435c8","name":"relay false","topic":"node/{id}/relay/-/state/set","payload":"false","payloadType":"bool","repeat":"","crontab":"","once":false,"onceDelay":"","x":160,"y":220,"wires":[["fc940043.2c94c"]]},{"id":"4b02e13b.874a7","type":"inject","z":"6115d89b.b435c8","name":"led get","topic":"node/{id}/led/-/state/get","payload":"null","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":150,"y":120,"wires":[["fc940043.2c94c"]]},{"id":"b8aadc82.6fb1a","type":"inject","z":"6115d89b.b435c8","name":"relay get","topic":"node/{id}/relay/-/state/get","payload":"null","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":160,"y":260,"wires":[["fc940043.2c94c"]]},{"id":"39fb65a3.c426ea","type":"inject","z":"6115d89b.b435c8","name":"led-strip set color #ff0000","topic":"node/{id}/led-strip/-/color/set","payload":"\"#ff0000\"","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":"","x":210,"y":320,"wires":[["fc940043.2c94c"]]},{"id":"c820ce88.576dd","type":"inject","z":"6115d89b.b435c8","name":"led-strip set color #008000","topic":"node/{id}/led-strip/-/color/set","payload":"\"#008000\"","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":"","x":210,"y":360,"wires":[["fc940043.2c94c"]]},{"id":"edcffa41.db6bf8","type":"inject","z":"6115d89b.b435c8","name":"led-strip compound","topic":"node/{id}/led-strip/-/compound/set","payload":"[20, \"#ff0000\", 20, \"#ff7f00\", 20, \"#ffff00\", 20, \"#00ff00\", 20, \"#0000ff\", 20, \"#960082\", 24, \"#D500ff\"]","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":190,"y":560,"wires":[["fc940043.2c94c"]]},{"id":"f145c1a6.00731","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect test","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"test\"}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":190,"y":600,"wires":[["fc940043.2c94c"]]},{"id":"94faa725.2a6638","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect rainbow","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"rainbow\", \"wait\":50}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":200,"y":640,"wires":[["fc940043.2c94c"]]},{"id":"50812ed8.45f09","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect rainbow-cycle","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"rainbow-cycle\", \"wait\":50}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":220,"y":680,"wires":[["fc940043.2c94c"]]},{"id":"1c45c443.698d6c","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect theater-chase-rainbow","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"theater-chase-rainbow\", \"wait\":50}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":250,"y":720,"wires":[["fc940043.2c94c"]]},{"id":"695dee35.ff264","type":"inject","z":"6115d89b.b435c8","name":"led-strip set brightness 50%","topic":"node/{id}/led-strip/-/brightness/set","payload":"50","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":"","x":220,"y":460,"wires":[["fc940043.2c94c"]]},{"id":"f11b54bb.3fd3f8","type":"inject","z":"6115d89b.b435c8","name":"led-strip set brightness 100%","topic":"node/{id}/led-strip/-/brightness/set","payload":"100","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":"","x":220,"y":500,"wires":[["fc940043.2c94c"]]},{"id":"efb0acf7.7808c","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect color-wipe blue","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"color-wipe\", \"wait\":50, \"color\": \"#0000ff\"}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":220,"y":760,"wires":[["fc940043.2c94c"]]},{"id":"c2d7e432.c76cc8","type":"inject","z":"6115d89b.b435c8","name":"led-strip set color #000000(00)","topic":"node/{id}/led-strip/-/color/set","payload":"\"#000000(00)\"","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":"","x":220,"y":400,"wires":[["fc940043.2c94c"]]},{"id":"e4691220.e3747","type":"mqtt out","z":"6115d89b.b435c8","name":"","topic":"","qos":"","retain":"","broker":"a6621c71.92f09","x":890,"y":400,"wires":[]},{"id":"fc940043.2c94c","type":"change","z":"6115d89b.b435c8","name":"set node id","rules":[{"t":"change","p":"topic","pt":"msg","from":"{id}","fromt":"str","to":"power-controller:0","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":710,"y":400,"wires":[["e4691220.e3747"]]},{"id":"fcca537f.99cac","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect stroboscope blue","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"stroboscope\", \"wait\":50, \"color\":\"#0000ff\"}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":230,"y":800,"wires":[["fc940043.2c94c"]]},{"id":"23fe88e4.4dc058","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect icicle red","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"icicle\", \"wait\":50, \"color\":\"#ff0000\"}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":200,"y":840,"wires":[["fc940043.2c94c"]]},{"id":"811a0f5b.8f1ee","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect pulse-color red","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"pulse-color\", \"wait\":200, \"color\":\"#ff0000\"}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":220,"y":880,"wires":[["fc940043.2c94c"]]},{"id":"a6621c71.92f09","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""}]
```

### Step 3: Edit **set node id** node, and change "Replace with" to your node id, e.g. `kit-power-controller:0` \(you can find your node id by clicking on List paired nodes\)

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_set-node-id.webp')}/>
  </div>
</div>

### Step 4: Press **led-strip set color \#ff0000**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_radio-test.webp')}/>
  </div>
</div>

## Integration with Blynk

Now we have assembled our Radio Power Controller and let's start with some basic integration with **Blynk**. We will start without describing what **Blynk** is. If you want get some information about what **Blynk** is. The best thing you can do is to visit their [**page**](https://www.blynk.cc/). In our example we will be showing you how to control LED strip colours in **Blynk**'s mobile application.

Firstly we need to configure our **Node-RED** app.

### **Step 1: Blynk nodes**

If you are using Hardwario raspi version you should be fine, but still check that **Blynk** nodes are installed. \(You can view them on the left side menu in **Node-RED**\). Otherwise you will need to install **Node-RED** package `node-red-contrib-blynk-ws`.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_nodered-1.webp')}/>
  </div>
</div>

### **Step 2:** Add another flow \(you can add them by big plus button next to the flow name\)

### Step 3: Insert the following snippet in the flow \(using **Menu &gt;&gt; Import &gt;&gt; Clipboard**\) and click in Flow 3 tab

```text
[{"id":"702c9447.9b790c","type":"blynk-ws-in-write","z":"aaf5722e.dfdca","name":"","pin":"1","client":"746d7fe1.2a0be","x":330,"y":280,"wires":[["4da0fdbd.a3c614"]]},{"id":"4da0fdbd.a3c614","type":"function","z":"aaf5722e.dfdca","name":"Convert to BC format","func":"var finalString = '\"#'\nvar colorToSave = \"\";\nmsg.arrayOfValues.forEach((color) => {\n    var carry = (parseInt(color)).toString(16)\n    if(carry.length == 1) carry = \"0\" + carry;\n    finalString += carry;\n    colorToSave += carry;\n});\n\nflow.set(\"color\", colorToSave);\n\nif((flow.get(\"ledstrip\")) == false){\n    msg.payload = '\"#000000(00)\"'\n}\nelse{\n    var white = flow.get(\"white\");\n    if(white == null) white = \"00\";\n    msg.payload = finalString + '(' + white + ')\"'; \n}\n\n\nmsg.topic = \"node/power-controller:0/led-strip/-/color/set\";\nreturn msg;\n","outputs":1,"noerr":0,"x":600,"y":280,"wires":[["a7ef9db0.cc602"]]},{"id":"a7ef9db0.cc602","type":"mqtt out","z":"aaf5722e.dfdca","name":"","topic":"","qos":"","retain":"","broker":"71afb0a.14d505","x":870,"y":420,"wires":[]},{"id":"b596fcc7.b5206","type":"blynk-ws-in-write","z":"aaf5722e.dfdca","name":"","pin":"4","client":"746d7fe1.2a0be","x":330,"y":460,"wires":[["80140f23.46bf6"]]},{"id":"80140f23.46bf6","type":"function","z":"aaf5722e.dfdca","name":"String to bool parser","func":"if(msg.payload == true)\n{\n    msg.payload = true;\n}\nelse{\n    msg.payload = false;\n}\nmsg.topic = \"node/power-controller:0/relay/-/state/set\";\nreturn msg;","outputs":1,"noerr":0,"x":600,"y":460,"wires":[["a7ef9db0.cc602"]]},{"id":"62416cd0.a6dbf4","type":"blynk-ws-in-write","z":"aaf5722e.dfdca","name":"","pin":"3","client":"746d7fe1.2a0be","x":330,"y":400,"wires":[["3bce27cc.257308"]]},{"id":"3bce27cc.257308","type":"function","z":"aaf5722e.dfdca","name":"Handler","func":"var lastColor = flow.get(\"color\")|| \"000000(00)\";\n\nif(msg.payload == false) {\n    msg.payload = '\"#000000(00)\"';\n    flow.set(\"ledstrip\", false);\n}\nelse {\n    msg.payload = '\"#' + '' + lastColor + '\"';\n    flow.set(\"ledstrip\", true);\n}\nmsg.topic = \"node/power-controller:0/led-strip/-/color/set\";\n\nreturn msg;","outputs":1,"noerr":0,"x":640,"y":400,"wires":[["a7ef9db0.cc602"]]},{"id":"d619d828.3e1bf8","type":"blynk-ws-in-write","z":"aaf5722e.dfdca","name":"","pin":"5","client":"746d7fe1.2a0be","x":330,"y":520,"wires":[["9b87dc69.53d55"]]},{"id":"e267bf2d.7e292","type":"blynk-ws-in-write","z":"aaf5722e.dfdca","name":"","pin":"6","client":"746d7fe1.2a0be","x":330,"y":580,"wires":[["81fcc52c.023c08"]]},{"id":"3121623b.8b75de","type":"blynk-ws-in-write","z":"aaf5722e.dfdca","name":"","pin":"2","client":"746d7fe1.2a0be","x":330,"y":340,"wires":[["99a36ea2.e29bf"]]},{"id":"9b87dc69.53d55","type":"function","z":"aaf5722e.dfdca","name":"Rainbow","func":"if(msg.payload == true && flow.get(\"ledstrip\")||true){\n    msg.payload = '{\"type\":\"rainbow\", \"wait\":50}';\n    msg.topic = \"node/power-controller:0/led-strip/-/effect/set\"   \n}\n\nreturn msg;","outputs":1,"noerr":0,"x":640,"y":520,"wires":[["a7ef9db0.cc602"]]},{"id":"81fcc52c.023c08","type":"function","z":"aaf5722e.dfdca","name":"Theater chase","func":"if(msg.payload == true && flow.get(\"ledstrip\")||true){\n    msg.payload = '{\"type\":\"theater-chase-rainbow\", \"wait\":50}';\n    msg.topic = \"node/power-controller:0/led-strip/-/effect/set\"   \n}\n\nreturn msg;","outputs":1,"noerr":0,"x":620,"y":580,"wires":[["a7ef9db0.cc602"]]},{"id":"99a36ea2.e29bf","type":"function","z":"aaf5722e.dfdca","name":"White color handler","func":"var carry = (parseInt(msg.payload)).toString(16)\nif(carry.length == 1) carry = \"0\" + carry;\n\nflow.set(\"white\", carry);\n\nvar color = flow.get(\"color\");\nif(color == null) color = \"000000\";\n\nmsg.payload = '\"#' + color +'(' + carry + ')\"';\nmsg.topic = \"node/power-controller:0/led-strip/-/color/set\";\nreturn msg;","outputs":1,"noerr":0,"x":610,"y":340,"wires":[["a7ef9db0.cc602"]]},{"id":"d40dc7b0.acf648","type":"blynk-ws-in-write","z":"aaf5722e.dfdca","name":"","pin":"7","client":"746d7fe1.2a0be","x":330,"y":640,"wires":[["a03ff4eb.de9fd8"]]},{"id":"a03ff4eb.de9fd8","type":"function","z":"aaf5722e.dfdca","name":"Brightness handler","func":"if(msg.payload == true && flow.get(\"ledstrip\")||true){\n    msg.payload = msg.payload;\n    msg.topic = \"node/power-controller:0/led-strip/-/brightness/set\"   \n}\n\nreturn msg;","outputs":1,"noerr":0,"x":610,"y":640,"wires":[["a7ef9db0.cc602"]]},{"id":"746d7fe1.2a0be","type":"blynk-ws-client","z":"","name":"","path":"ws://blynk-cloud.com/websockets","key":"","dbg_all":false,"dbg_read":false,"dbg_write":false,"dbg_notify":false,"dbg_mail":false,"dbg_prop":false,"dbg_low":false,"dbg_pins":""},{"id":"71afb0a.14d505","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

It will look like this:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_nodered-2.webp')}/>
  </div>
</div>

### Step 4: Configure Blynk connection

Configure MQTT node to connect it on you broker. It will propably connect on localhost if you are using Raspberry Pi. After that you will need to configure **Blynk**node. Just fill in URL `ws://blynk-cloud.com/websockets`. The `Auth Token` we will configure later after obtaining one from Blynk over e-mail.


### Step 5: Mobile app

Now download the **Blynk** app from [**App Store**](https://itunes.apple.com/us/app/blynk-iot-for-arduino-esp32/id808760481?mt=8) or [**Google Play**](https://play.google.com/store/apps/details?id=cc.blynk&hl=en)

### **Step 6:** After installing, you should create account, login and you should see something like that

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_blynk-1.webp')}/>
  </div>
</div>

### Step 7: Now click a button on the top right to scan QR code

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_blynk-2.webp')}/>
  </div>
</div>

### Step 8: Now you should scan following QR code to get everything preconfigured

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_blynk-qr.webp')}/>
  </div>
</div>

### Step 9: You should see something like this

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_blynk-3.webp')}/>
  </div>
</div>

### Step 10: Email

Click the settings wheel and you should see settings for your project. We need to get `Auth Token` which you have to copy to our **Node-RED** in **Blynk** node configuration.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_blynk-4.webp')}/>
  </div>
</div>

### Step 11: Now deploy your **Node-RED** app and hit play button in your **Blynk** project and you should be done!

### Related Documents <a id="related-documents"></a>

* [**Raspberry Pi Installation**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Toolchain Setup**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
* [**Toolchain Guide**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)