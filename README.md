# Facial Recognition NodeJS

Getting Started
Dependencies

OS

Command

OS X

Using Homebrew:

brew install pkg-config cairo pango libpng jpeg giflib librsvg

Ubuntu

sudo apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev

Fedora

sudo yum install gcc-c++ cairo-devel pango-devel libjpeg-turbo-devel giflib-devel

Solaris

pkgin install cairo pango pkg-config xproto renderproto kbproto xextproto

OpenBSD

doas pkg_add cairo pango png jpeg giflib

Windows

See the below

Others

See the wiki


For Windows:

Building the node-canvas module requires:

A global installation of node-gyp.
GTK 2
For JPEG support (node-canvas 2.0 and later): libjpeg-turbo
Install Manually(For Windows)==============


1. Installing node-gyp

Follow the instructions here: https://github.com/nodejs/node-gyp#on-windows

Basically , run cmd as admin> npm install --global --production windows-build-tools 

 from an elevated PowerShell or CMD.exe (run as Administrator).


2. Installing GTK 2

You will need the cairo library which is bundled in GTK. Download the GTK 2 bundle for Win32 or Win64. Unzip the contents in C:\GTK.

Notes:

Both GTK and Node.js need either be 64bit or 32bit to compile successfully.
Download GTK 2, not GTK 3, which is missing the required libpng. If you get linker errors you've most likely picked the wrong bundle.
If you use a different location than C:\GTK, add a GTK_Root argument to npm install or node-gyp rebuild. For example: node-gyp rebuild --GTK_Root=C:\somewhere\GTK.

3. Installing libjpeg-turbo 

Download the libjpeg-turbo-1.4.2-gcc.exe(32bit)  or libjpeg-turbo-1.4.2-gcc64.exe (64bit).

Install location as : C:\libjpeg-turbo , (remove-gcc/ 64,etc from folder name )

Notes:

Both libjpeg-turbo and Node.js need either be 64bit or 32bit to compile successfully.
If you use a different location, add a jpeg_root argument to npm install or node-gyp rebuild. For example: node-gyp rebuild --jpeg_root=C:\somewhere\libjpeg-turbo.

4. Installing 

After all dependencies are setup, run  npm install 


4. Running 

After all dependencies are installed, run  node app


TroubleShooting:

If on running node app, canvas shows error , it’s probably due to some missing dll files.

Go to C:\GTK , then search  .dll files in search bar of GTK folder, now copy all dll files found, and paste innode_modules/canvas/build/release/  .Skip duplicates files, if it asks while pasting. This will fix the error .
