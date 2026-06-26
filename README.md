# GuardAuto: CAN Bus Firewall Simulation

This is a simulation that shows how cars protect important computer systems from bad people who try to send wrong messages.

##  The Context

Modern cars use a lot of computers. They talk to each other using the Controller Area Network or CAN bus. This system is old. Does not have good security so if someone gets into a computer that is not very important like the radio or the internet connection they can send bad messages to the important computers.

This simulation is, like a firewall that stops messages from getting to the important parts of the car.

##  Core Architecture

The firewall looks at all the messages that come in and checks them against a list of messages.

- **0X123 / 0x456 / 0x789:** These are messages that the car needs to know, like how fast the car is going or what the tire pressure is.

- **0x001:** This is a message that tries to do something it should not do (`CMD_OVERRIDE_BRAKE_RELEASE`) so the firewall stops it.

##  Built With

- HTML5 and CSS3 were used to make the simulation look good in dark mode.

- JavaScript was used to make the simulation work and look at all the messages.

- The way the simulation looks was made with the help of a tool that uses intelligence to make it easy to use and understand how the messages are moving around the system.
