sha2=`cat ~/Intel/ID\ details/SHA1_app.txt`
sha1=${sha2//[[:blank:]]/:}
echo "$sha1"
plug_url="https://192.168.122.1:8443/sample-ui/plugin.json"
username="Administrator@vsphere.local"
password="Some@123"

bash ./html-client-sdk/tools/vCenter\ plugin\ registration/prebuilt/extension-registration.sh	-action updatePlugin -remote  -url https://photon-machine/sdk \
  -username	$username -password $password -key com.sample.app.ssh -version 1.0.0 -pluginUrl $plug_url -serverThumbprint $sha1 \
  -c 'Example, Inc.' -n 'SSH Plug-in' -s 'This is a ssh sample plug-in'