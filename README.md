# SSH-plugin

## Registering the plugin

- Change the ssh certificates and path information in the bash files. 

- `run_server.sh` can be used to run the server whereas `register_extension.sh` or `update_extension.sh` can be used to register or update the extension. 

- You would need to build the project with maven prior to runnning it (similar to the sdk guide available [here](https://code.vmware.com/docs/9681/developing-remote-plug-ins-with-the-vsphere-client-sdk--6-7-u3-/GUID-0F420ECA-B6B7-4A0F-87F2-724EE61DD067.html)).

## Some notes about the usage

- The login information is stored on the server as a local variable, so you will need to save it again when restarting. 

- You can get locked out of the server for too many incorrect login attempts. A guide is available [here](https://communities.vmware.com/thread/594712)
