---
slug: iot-indoor-air-quality-monitor-theory
title: Theory
---
import Image from '@theme/IdealImage';

**Time allocation:** All modules: 20 mins.  
**Keywords:** #Internet_of_things #MQTT #LPWAN #Indoor_air_quality #Python 

## What is IoT

The Internet of Things (IoT) stands for a network of physical devices, vehicles, household appliances, and other devices that are equipped with electronics, software, sensors, moving parts and network connectivity to enable these devices to connect and exchange data.

And it is also a phenomenon, a bubble, a threat and an opportunity. An opportunity to make the world safer, more gentle, more effective and fun.

### Demonstrations

* Risk of misinterpretation of data: [https://youtu.be/nwPtcqcqz00](https://youtu.be/nwPtcqcqz00)
* Risk of hacking: [https://youtu.be/_CQA3X-qNgA](https://youtu.be/_CQA3X-qNgA)

## How IoT helps and how it threatens us
The Internet of Things is here to help us. Today, it is particularly concerned with the following areas:

* Security - we know what is happening in our buildings, where our children are, ...
* Health - we regulate the environment in which we live and work, react more quickly and accurately to the current state of health, ...
* Economics - Better Planning, Optimizing Processes, Enhancing Life, ...
* Ecology - saving resources and nature
* Entertainment - we discover new forms of entertainment

There are also risks associated with the development of IoT:


* Data misuse
* Bulking into privacy
* Incorrect data interpretation
* Overwhelmed by the excess of structured information

In fact, IoT means things around us can communicate with us - send us information or exchange this information on our own. This is already a tremendous move forward because it enables us to significantly accelerate and streamline many activities, make informed decisions and better decisions, better plan our time, manage a lot of activities remotely without having to travel or arrange them through another person.

In IoT, we have a tool with great potential to improve our lives.

## IoT hardware

### What are the "Things"

They are physical devices. which measure, control, communicate. These include, in particular:

* Sensors
* Action members
* Drivers

In another view, we can designate a more complex device for THINGS:

* Vehicles
* Industrial machines
* Home Appliances

#### Important!
Common features are always:

* It is a physical device
* It is equipped with electronics
* It has network connectivity
* It is uniquely identifiable

### Central IoT devices

An indispensable condition of the Internet of Things is that the devices are connected to the Internet. In many cases, however, it is better to connect the device to the Internet through a central element - the Hub. In this case, the device communicates with the Hub through the non-Internet protocol, and only the Hub is connected to the Internet.

There are many central Hubs on the market, among the most popular in the area of ​​the open-source movement are Hubs built on Raspberry Pi.

### Other IoT hardware

Voice assistants like Google Assistant, Amazon Alexa, Microsoft Cortana, or Apple from Apple are on the rise. Physical devices in which assistants are running are becoming an important part of IoT solutions, particularly in homes.

## IoT software

### Firmware

#### Important!
Firmware is software for managing an embedded system. With firmware, the device behaves the way we want it. For example, every 15 mins. measures CO2 and sends hourly samples to the cloud every hour.

An important feature of firmware is power management, which is a critical issue, especially for battery-powered products. Therefore, it is recommended to write firmware in economical programming languages ​​(eg C) so that the computational operations themselves do not last too long and do not absorb the necessary energy.

Due to the storage capabilities of the embedded device, it is also necessary to consider the code size. Writing firmware is, therefore, a very demanding discipline.

### IoT platforms

The added value of the Internet of Things is not found in IoT devices but in analyzes of data obtained from these devices. The accumulated data is referred to as Big Data, and these are stored and processed in backend platforms. Nowadays, it has retreated from operating its own backends and uses highly available and scalable solutions from Amazon (AWS), Microsoft (Azure) or Google. This does not have to be the case for closed systems where the manufacturer offers a complete solution consisting of hardware and applications and runs the system on its own infrastructure.

### IoT applications

The application offer for IoT is huge and dynamically expanding. Major players running IoT platforms offer their own solutions (eg Microsoft IoT Central), but there are many excellent IoT applications developed by smaller companies such as IFTTT, Blynk ad. The vast majority of applications are both desktop and mobile smartphone variants.

## IoT connectivity

### Transmission protocols

The protocol is a convention or standard in computer science, according to which electronic communication and data transfer between two endpoints (most often implemented by the computer) takes place. Simply put, it is a language that understands all the elements of a communication system.

There are many protocols on the Internet, the family of TCP / IP transmission protocols (IP, TCP, UDP, etc.). Generally the most prominent are application protocols such as HTTPS or IMAP.

A lot of protocols are used for IoT communication, but we focus on the MQTT protocol, which has become a standard, is supported by almost all IoT players and is used in our HARDWARIO kit.

### MQTT

#### Important!
MQTT (Message Queuing Telemetry Transport) is an ISO standardized protocol based on the publish-subscribe (publish-subscribe) principle. And how can a published report look like? It consists of so-called Topic (Topic) and own content, eg:

Topic: `myhouse/first_floor/switches/switch1`  
Content: `1`

The message says that the switch is one of the switches on the ground floor of my house in state 1, which is usually ON.

If a particular light bulb is logged on to this message, it will be lit until myhouse/first_floor/switches/switch1 0 message arrives or when it breaks down :)

MQTT system components communicate with a server, often called a broker. He is actually a postman who delivers messages from publishers to those who have subscribed to them. We use the open-source Mosquitto Broker. 

### Wireless transmissions

We already know what language the IoT devices communicate with and who controls the communication. However, messages must be transmitted between IoT devices, either wirelessly or wired. For the sake of simplicity, wireless systems are divided into local and global.

#### Local wireless transmissions

In the world of IoT, popular wireless standards use common standards, such as WiFi or Bluetooth. There are also special wireless technologies such as ZigBee or Z-Wave that have their own communication protocols. An important aspect of wireless transmissions is the choice of bandwidth. It affects transmission quality - reach, reliability and consumption.

For IoT devices that do not usually transfer large data, wireless transmissions in the so-called Sub-GHz band are best suited. In this band, non-license frequencies are reserved for this purpose, for the EU, for example, 868 MHz. Compared to Wi-Fi (operating at 2.4 GHz and 5 GHz), Sub-GHz has almost twice the range, higher reliability (lower frequency and fewer devices using this band) and significantly lower performance demands, with lower consumption. It is, therefore, suitable for battery-powered devices such as the HARDWARIO kit.

#### Global wireless transmissions

Global transmission systems are mainly used for mobile objects or devices installed in places without an Internet connection.

Currently, the most widely used global wireless transmission systems are mobile operators, ie 2G (GPRS, EDGE), 3G and 4G (LTE) networks. IoT devices are equipped with a SIM card and connect to the Internet through the selected mobile network. The disadvantage of these technologies is energy demand, so they are not suitable for battery-powered devices. Fortunately, a new IoT network, collectively referred to as LPWAN, has begun.

#### Important!
[LPWAN](https://en.wikipedia.org/wiki/Low-power_wide-area_network) is from the English Low-Power Wide Area Network, networks with low energy requirements for communication and covering larger areas. These include [NB-IoT](https://en.wikipedia.org/wiki/Narrowband_IoT), [LoRaWAN](https://en.wikipedia.org/wiki/LoRa) and [Sigfox](https://en.wikipedia.org/wiki/Sigfox). Each of these networks has its own specifics, but all are well suited for IoT devices powered by batteries and operated in places where there is no standard internet connection (eg Wi-Fi). That's why they offer the perfect IoT solutions in agriculture, forestry, water management.

#### Demonstrations

* MQTT: [https://youtu.be/EIxdz-2rhLs](https://youtu.be/EIxdz-2rhLs)

### Wired Transmissions

Of course, data from IoT devices is also transmitted by wire. If conditions allow, you can connect your IoT device to the Internet using Ethernet. More often, however, we come across a solution where single IoT devices connect wired to Hub, which is then connected to the Internet. In such cases, the I²C, 1-Wire, RS-232, and RS485 standards are used.

## Indoor Air Quality

#### Important!
In class, we often encounter a climatic discomfort in classes that can affect the work of both teachers and pupils. The main factor affecting, among other things, pupil concentration is the amount of CO2 in the air.

Because of the heat of the school and the exchange of windows, the buildings "naturally breathe". While there is a normal amount of CO2 in the outdoor environment of 400 ppm, in classes it often reaches over 2000 ppm, resulting in symptoms of fatigue, concentration and headache.

In addition to the amount of CO2 in the air, the indoor climate monitor also measures temperature, humidity and air pressure.

Volatile organic compounds or VOCs are organic chemicals that become gas at room temperature and are the main source of air pollution at ground level. The common term used to measure VOC is “Total VOC” or TVOC. TVOC means the total concentration of multiple VOCs presented simultaneously in the air. Acceptable TVOC levels are in the range of up to 0.5 mg/m3, or 500 ppb (parts-per-billion), which is 0.00005%. Higher levels of VOCs are considered harmful because VOCs have a significant impact on human health. Exposure to VOCs may cause eye, nose and throat irritation, as well as upper respiratory tract infection, nausea, allergic reactions and headaches, etc. Long term exposure to higher VOC concentrations may cause chronic respiratory disease or lung cancer.

#### Topis Overlap:


* Biology: Atmosphere (greenhouse gases), photosynthesis, experiments such as measuring the amount of CO2 in the enclosed space (greenhouse) near plants and comparing its amount in day and night hours
* Chemistry: greenhouse gases, dry ice
* Health education: the impact of carbon dioxide on human health, human protection (snow extinguishers)

#### Demonstrations


* CO2 and climate change: https://youtu.be/G0wNsQm0ypA
* CO2 and photosynthesis: https://youtu.be/mmavdDgKMhk

### Python

#### Important!
Python is an open-source scripting programming language. It supports object-oriented programming, allows the creation of full-value applications, yet is easy to learn. We will use it to create IoT projects and thus learn to program on real projects.

### 3D-Print

#### Important!
3D printing is the process of creating three-dimensional solid objects from a digital file by laying continuous layers of material until the project is complete. Each of these layers can be considered a narrow section of the object's horizontal section.

A few steps are required to print a product on a 3D printer. The first is to create a 3D model. The most widespread and easiest way is to model a 3D model in so-called [CAD software](https://cs.wikipedia.org/wiki/Computer_aided_design) or download the model from available databases, such as the popular [Thingiverse](https://www.thingiverse.com/).

After the 3D object is created/downloaded, the printing phase itself may occur. The 3D model must be converted to STL or OBJ format so that the printer control software can read it. In addition, the STL format must be used to create the instructions for the printer itself (motor movement, nozzle control,…). These instructions are called G-Code and most often Skeinforge, Slic3r, Cura, etc. are used to create them. G-Code is sent to the printer, which then prints the object.
