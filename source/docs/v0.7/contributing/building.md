---
title: InfluxDB Documentation
---

# Building InfluxDB From Source

For all systems, the best way to get the source is to clone the repository from GitHub.

``` shell
git clone https://github.com/influxdb/influxdb.git
```

### OS X

First, install the build dependencies of the project (via Homebrew):

``` shell
brew install protobuf bison flex leveldb go hg bzr
```

Then run `./configure --with-flex=/usr/local/Cellar/flex/2.5.37/bin/flex --with-bison=/usr/local/Cellar/bison/3.0.2/bin/bison && make`. This will build the server and run the tests.

### Linux

- You need to [get Go from Google Code](http://code.google.com/p/go/downloads/list).
- Ensure `go` is on your `PATH`.
- If you're on a Red Hat-based distro:

``` bash
sudo yum install hg bzr protobuf-compiler flex bison valgrind g++ make autoconf libtool zlib-dev bzip2-libs
```

- If you're on a Debian-based distro:

``` bash
sudo apt-get install mercurial bzr protobuf-compiler flex bison valgrind g++ make autoconf automake libtool libz-dev libbz2-dev
```

Then run `./configure && make`. This will build the server and run the tests.

### Debian 6

@chobie has put up a nice Gist with step by step instructions for [building InfluxDB on Debian 6](https://gist.github.com/chobie/cb22c504223c3e929a00).

### ARM (Cross compiling)

If you want to cross compile the arm binaries on Linux, you'll have to
install the following packages which are required by
[crosstools-ng](http://crosstool-ng.org/):

`sudo yum install gperf texinfo expat expat-devel` or on ubuntu `sudo apt-get install gperf texinfo expat libexpat1 libexpat1-dev`

Then get crosstools:

```shell
wget http://crosstool-ng.org/download/crosstool-ng/crosstool-ng-1.19.0.tar.bz2
tar -xjvf crosstool-ng-1.19.0.tar.bz2
cd crosstool-ng-1.19.0
./configure --prefix=$HOME/crosstools
make
make install
$HOME/crosstools/bin/ct-ng arm-unknown-linux-gnueabi
# you can run `ct-ng menuconfig` to disable fortran and java
CT_DEBUG_CT_SAVE_STEPS=1 $HOME/crosstools/bin/ct-ng build
# in case of failure, download the necessary packages and restart
RESTART=libc_start_files ct-ng build # where libc_start_files is the last step before failing
```

Then run the following to build the binaries

make arch=arm PATH=$PATH:$HOME/x-tools/arm-unknown-linux-gnueabi/bin CROSS_COMPILE=arm-unknown-linux-gnueabi build
