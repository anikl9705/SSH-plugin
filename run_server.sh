#!/bin/sh
guid=`cat ~/Intel/ID\ details/GUI.txt`
echo "$guid"
sha2=`cat ~/Intel/ID\ details/SHA1.txt`
sha1=${sha2//[[:blank:]]/}
echo "$sha1"
sname="photon-machine"
sport="443"

java -jar ./html-client-sdk/samples/ssh-app/target/ssh-app-6.7.0-SNAPSHOT.jar --vcenter.guid=$guid --vcenter.thumbprint=$sha1 --vcenter.fqdn=$sname --vcenter.port=$sport
