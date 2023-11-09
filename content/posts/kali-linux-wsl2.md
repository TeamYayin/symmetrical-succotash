---
title: Kali Desktop Experience for Windows
date: 2020-08-19
categories:
  - Kali Linux
  - Windows Subsystem for Linux
image_path: /images/blog/4.jpg
author: Prajwal
---

Kali Linux is giving its Windows Subsystem for Linux(WSL 2) users an automated Xfce graphical desktop environment Win-KeX . This removes need for remote desktop clients or xClients or out of box scripts. Just typing in `kex` or clicking on the button, Win-KeX will give us a persistent-session GUI.

Install Win-KeX via: `sudo apt update && sudo apt install kali-win-kex`

Run Win-KeX via: `kex`

Stop Win-Kex via on WSL2 Terminal: `kex stop`

Stop Kali Desktop by pressing `F8` fn key and selecting _Exit Viewer_ option on the TigerVNC menu.

you can find more information about Win-Kex on <a href="https://www.kali.org/docs/wsl/win-kex/" target="_blank">kali-docs</a> and <a href="https://www.bleepingcomputer.com/news/security/kali-linux-gets-a-gui-desktop-in-windows-subsystem-for-linux/" target="_blank">bleeping computer blog</a>

> Win-Kex is only for WSL 2, please update your windows 10 version to support WSL2 and then the WSL version.

_One issue by running without any custom settings is that Tiger Vnc occupies fullscreen by default on all monitors, which could be removed in current session by disabling full screen mode on all monitors in options menu which is display on pressing `F8` Fn key. But this setting could not be stored for later GUI spawns_