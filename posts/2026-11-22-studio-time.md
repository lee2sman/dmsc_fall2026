---
title: Week 14 - Studio Time
---

* Group live coding music
* "Low res" - procedural generation in games
* Permacomputing
* Procedural Generation in Games
* Studio time

### On the Nature of Awe

by Brian Ellis, for the Flash Laptop And Phone Orchestra

Today we will be performing Brian's piece [On the Nature of Awe](https://go.brianellissound.com/FLAPO/On_The_Nature_Of_Awe2/)

*[Brian Ellis](https://brianellissound.com/) is a creative coder, composer, and multi-instrumentalist. His artistic drive lies in using code to democratize creative expression. He founded the Brooklyn Motion Capture Dance Ensemble to explore this concept through the medium of dance, and to expand the possibilities of movement-based musical interfaces. He also built and maintains [motion-into-midi.com](motion-into-midi.com), an open-source tool that lets anyone do motion capture on their laptop. Brian maintains many performance practices, incorporating classical guitar, mountain dulcimer, live electronics, and no-input-mixing into his solo practice, and he is an active ensemble member and improviser with many groups.*

## Permacomputing

The L5 creative coding library is specifically built with principles aligned with the concept of permacomputing. Permacomputing is a concept and community of practice concerned with issues of sustainability in computing, inspired by the concept and community around permaculture. Permacomputing concerns itself with the computer and surrounding technology's impact on the environment.

Permacomputing is both a concept and a growing community or movement encompassing many approaches and ideas, from considering lifecycles of computing machinery to the culture of who builds software and how it is made and maintained.

There are various ways to 'get started' with permacomputing on the [permacomputing wiki](https://permacomputing.net), such as helping a school work with recycled computers, researching how to provide less resource-intensive tools and systems for one's lab or workspace, and helping artists interested to engage with ecological topics using tools and media in line with this intention. L5 attempts to work within these areas, as well as engage intentionally in permacomputing as concept and with its implementation.

L5's software stack was selected based on goals of being longevity, lightweight and minimal. 

### Why L5 is built with Lua

 To address sustainability, we must consider the impact of consumption on computing technology, and the especially disposable nature of of our computing devices. As built-in planned obsolescence for phones, tablets and even computers is part of the overall silicon valley strategy, L5 was built with goals of longevity in mind. Code written in L5 should work as long as pobbile and on as wide a spctrum of ocmputing devices as possible. This supports the mission of supporting creative coding that doesn't require the constant upgrade cycle of new computers, GPUs, and devices. This also supports those with limited access to resources, including older computers. 

Lua is a programming language originating in Brazil in 1993, built outside of the culture and industry of Silicon Valley, and still maintained by professors at a university there. Lua is a 'lightweight', versatile programming language, known for its simplicity and efficiency. 

Where Java undergoes regular major updates and JavaScript is a fast-evolving and changing language, Lua is a slow and intentionally developed language. For this reason, Lua programs have a high chance of running for years, ideally with little or no changes.

### Some features of L5 as a permacomputing-inspired library

- **Fast**: Scripts, images, and audio load near-instantly
- **Minimal footprint**: L5 (~6MB, from Love2d ~4.5MB + LuaJIT ~1.5MB) vs Processing (~500MB) vs p5.js (~1-4MB + browser ~250-355MB)
- **Lighter impact**: Runs on older hardware and devices.
- **Cross-platform**: Runs on Windows, macOS, Linux, iOS, Android, Raspberry Pi
- **Offline, Low-bandwidth**: Optimized for installations and standalone applications. Website documentation designed for lower bandwidth and offline use. 
- **Resiliency**: Underlying Lua language and Love2d frameworks change much slower than equivalent languages like JavaScript and Java

## More procedural generation in games

Some games and automata from the recent Low Rez Jam

![Libryinth](https://img.itch.zone/aW1nLzI3NTc5NzczLnBuZw==/original/9PxUu3.png)  

[Libryinth by Munro](https://munro.itch.io/libryinth)


![Border Gore low res map automata](https://img.itch.zone/aW1nLzIyNzQwODA5LmdpZg==/original/ys3BaH.gif)

[Border Gore](https://jackoatley.itch.io/border-gore) by Jack Oatley

![RC Mower low res graphics](https://img.itch.zone/aW1nLzIyNzcxMTA0LmdpZg==/original/7cxNNf.gif)

[RC Mower](https://passages.itch.io/rc-mower)

## Talks from Roguelike Celebration

<iframe width="560" height="315" src="https://www.youtube.com/embed/-xrcmY7LNPI?si=V3c5t7RKxsE-7TRO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Chelsea Thompto - Spaces for Contemplation: Procedural Generation in Nonlinear Narrative in Art 

<iframe width="560" height="315" src="https://www.youtube.com/embed/9yFferxbrBU?si=wHSOUU9bm7pyawaf&amp;start=13" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Elliot Trinidad- Tuning the Blaseball Name Generator

## Final Project guidelines

Your final project is a project that makes use of procedural generation. It can be a procedurally-generated game, story, art toy or other digital media.

It is permitted to include 'hand-crafted' content as well as procedurally-generated content.

The final project should be a compelling work that is complete on its own and produces different meaningful results each time it is run.

Write a proposal for your final project. Includes screenshots of other media that has influenced your thinking, and any thoughts, techniques for building, or questions that you have at this time.

High level idea: You are worldbuilding, creating an ecosystem of characters, a world with varied terrain or environment, and procedurally generated objects in that world and text.

Deliverables:
* a character that a player can play
* procedurally generate a terrain or environment
* procedurally generate characters in the world
* procedurally generate text that meaningfully flavors the world, its characters or environment

Optional:
* procedurally generated music
* playable with win/lose states


## BONUS

### PATHFINDING

###  30 Weird Chess Algorithms: Elo World 

<iframe width="560" height="315" src="https://www.youtube.com/embed/DpXy041BIlA?si=BfLYFhrnR-hgbLTt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  
By Tom7 (Suckerpinch)
bonus.md
