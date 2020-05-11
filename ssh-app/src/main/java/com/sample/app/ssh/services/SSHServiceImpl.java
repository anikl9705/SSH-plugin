package com.sample.app.ssh.services;

import com.google.common.primitives.Bytes;
import com.jcraft.jsch.*;
import com.sample.app.ssh.model.SSHUser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.Vector;

public class SSHServiceImpl implements SSHService{
    private SSHUser sshUser;

    private static final Logger LOGGER= LoggerFactory.getLogger(SSHServiceImpl.class);

    public SSHServiceImpl(){
        this.sshUser = new SSHUser();
        this.sshUser.updateData("username", "password", "server");
        LOGGER.info("SSHServiceImpl");
    }

    @Override
    public String executeCmd(String cmd) {
        String command = "";
        command += cmd;
        command += "\nexit\n";
        return executeCommand(command);
    }

    @Override
    public String executeShellCmd(String cmd) {
        String command = "";
        command += "shell\n";
        command += cmd;
        command += "\nexit\nexit\n";
        return executeCommand(command);
    }

    @Override
    public String executeCommand(String cmd) {
        LOGGER.info(cmd);
//        System.out.println(command);
        try {
            JSch jsch = new JSch();
            Session session = jsch.getSession(sshUser.getUsername(), sshUser.getHostname(), 22);
            session.setUserInfo(sshUser);
            session.connect();
            Channel channel = session.openChannel("shell");
            channel.setInputStream(new ByteArrayInputStream(cmd.getBytes(StandardCharsets.UTF_8)));
//            ByteArrayOutputStream out = new ByteArrayOutputStream();
            channel.setOutputStream(System.out);
            InputStream in = channel.getInputStream();
            StringBuilder outBuff = new StringBuilder();
            int exitStatus = -1;

            channel.connect();

            while (true) {
                for (int c; ((c = in.read()) >= 0);) {
                    outBuff.append((char) c);
                }

                if (channel.isClosed()) {
                    if (in.available() > 0) continue;
                    exitStatus = channel.getExitStatus();
                    break;
                }
            }
            channel.disconnect();
            session.disconnect();

            LOGGER.info(outBuff.toString());

//            System.out.print (outBuff.toString());
            return outBuff.toString();
        } catch (Exception e) {
            LOGGER.info(e.toString());
            return null;
        }
    }

    @Override
    public Vector<String> getFileList() {
        String path = "/var/usr/VMware/VMware VirtualCenter/Logs/";
        Vector<String> result = new Vector<String>();
        try{
            JSch jsch = new JSch();
            Session session = jsch.getSession(sshUser.getUsername(), sshUser.getHostname(), 22);
            session.setUserInfo(sshUser);
            session.connect();

            Channel channel = session.openChannel("sftp");
            channel.connect();
            ChannelSftp sftp = (ChannelSftp) channel;
            Vector<ChannelSftp.LsEntry> entries = sftp.ls(path);
            for(ChannelSftp.LsEntry e : entries){
                LOGGER.info(e.getFilename());
                result.add(e.getFilename());
            }
            return result;
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    static int checkAck(InputStream in) throws IOException{
        int b=in.read();
        // b may be 0 for success,
        //          1 for error,
        //          2 for fatal error,
        //          -1
        if(b==0) return b;
        if(b==-1) return b;

        if(b==1 || b==2){
            StringBuffer sb=new StringBuffer();
            int c;
            do {
                c=in.read();
                sb.append((char)c);
            }
            while(c!='\n');
            if(b==1){ // error
                System.out.print(sb.toString());
            }
            if(b==2){ // fatal error
                System.out.print(sb.toString());
            }
        }
        return b;
    }

    @Override
    public String getFileInfo() {
//        String filename = "vsphere-client-gc.log.0.current";
//        String path = "/var/log/vmware/vsphere-client/" + filename;
//        String temp_path = "./" + filename;
//        String result = "";
//        try{
//            JSch jsch = new JSch();
//            Session session = jsch.getSession(sshUser.getUsername(), sshUser.getHostname(), 22);
//            session.setUserInfo(sshUser);
//            session.connect();
//
//            String command = "scp -f '" + path + "'";
//            Channel channel = session.openChannel("exec");
//            ((ChannelExec)channel).setCommand(command);
//
//            OutputStream out = channel.getOutputStream();
//            InputStream in = channel.getInputStream();
//            FileOutputStream fos=null;
//
//            channel.connect();
//
//            byte[] buf = new byte[1024];
//            String file=null;
//
//            buf[0] = 0;
//            out.write(buf, 0, 1);
//            out.flush();
//
//            while(true){
//                int c=checkAck(in);
//                c = checkAck(in);
//                LOGGER.info(Integer.toString(c));
//                if(c!='C'){
//                    break;
//                }
//                in.read(buf, 0, 5);
//
//                long filesize=0L;
//                while(true){
//                    if(in.read(buf, 0, 1)<0){
//                        // error
//                        break;
//                    }
//                    if(buf[0]==' ')break;
//                    filesize=filesize*10L+(long)(buf[0]-'0');
//                }
//
//
//                for(int i=0;;i++){
//                    in.read(buf, i, 1);
//                    if(buf[i]==(byte)0x0a){
//                        file=new String(buf, 0, i);
//                        break;
//                    }
//                }
//
//                LOGGER.info("filesize="+filesize+", file="+file);
//
//                // send '\0'
//                buf[0]=0; out.write(buf, 0, 1); out.flush();
//
//                // read a content of lfile
//                fos=new FileOutputStream(temp_path);
//                int foo;
//                while(true){
//                    if(buf.length<filesize) foo=buf.length;
//                    else foo=(int)filesize;
//                    foo=in.read(buf, 0, foo);
//                    if(foo<0){
//                        // error
//                        break;
//                    }
//                    fos.write(buf, 0, foo);
//                    filesize-=foo;
//                    if(filesize==0L) break;
//                }
//                fos.close();
//                fos=null;
//
//                buf[0]=0; out.write(buf, 0, 1); out.flush();
//            }
//            channel.disconnect();
//            session.disconnect();
//
////            Channel channel = session.openChannel("sftp");
////            ChannelSftp sftp = (ChannelSftp) channel;
////            sftp.connect();
////            SftpATTRS attrs = sftp.stat(path);
////            long len = attrs.getSize();
////            OutputStream out = new OutputStream() {
////                @Override
////                public void write(int i) throws IOException {
////
////                }
////            };
////            ByteArrayOutputStream out = new ByteArrayOutputStream();
////            sftp.get(path, out, null, ChannelSftp.RESUME, Math.max(0, len-1000));
//            RandomAccessFile fil = new RandomAccessFile(temp_path, "r");
//            fil.seek(Math.max(0, file.length()-1000));
//            byte[] bytes = new byte[1000];
//            fil.readFully(bytes);
            String result = "";
//            StringBuilder outBuff = new StringBuilder();
//            int exitStatus = -1;
//
//            while (true) {
//                for (int c; ((c = in.read()) >= 0);) {
//                    outBuff.append((char) c);
//                }
//
//                if (sftp.isClosed()) {
//                    if (in.available() > 0) continue;
//                    exitStatus = sftp.getExitStatus();
//                    break;
//                }
//            }


//            result = outBuff.toString();
//            result = result.substring(Math.max(0, result.length() - 1000));
            LOGGER.info("Done Log");
            return result;
//        }catch (Exception e){
//            e.printStackTrace();
//        }
//        return null;
    }

    @Override
    public String getHistory() {
        return null;
    }

    @Override
    public boolean updateUser(SSHUser user) {
        LOGGER.info(user.getHostname() + " has been Updated");
        this.sshUser.updateData(user.getUsername(), user.getPassword(), user.getHostname());
        return true;
    }
}
