#!/bin/sh
guid=`cat ~/Intel/ID\ details/GUI.txt`
echo "$guid"
sha2=`cat ~/Intel/ID\ details/SHA1.txt`
echo "$sha1"
sha1=${sha2//[[:blank:]]/}
sname="photon-machine"
sport="443"

java -jar target/remote-plugin-sample-6.7.0.jar --vcenter.guid=$guid --vcenter.thumbprint=$sha1 --vcenter.fqdn=$sname --vcenter.port=$sport
