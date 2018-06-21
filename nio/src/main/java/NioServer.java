import java.io.IOException;
import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.nio.channels.SelectionKey;
import java.nio.channels.Selector;
import java.nio.channels.ServerSocketChannel;

public class NioServer {
    public static void main(String[] args) throws IOException {
        //创建服务
        ServerSocketChannel serverSocketChannel = ServerSocketChannel.open();
        //绑定监听端口
        serverSocketChannel.bind(new InetSocketAddress(InetAddress.getByName("localhost"),8080));
        //设置为非阻塞模式
        serverSocketChannel.configureBlocking(false);
        //创建多路复用器并且启动线程
        Selector selector = Selector.open();
        new Thread(new ReactorTask()).start();
        //
        SelectionKey selectionKey = serverSocketChannel.register(selector,SelectionKey.OP_ACCEPT);
    }
}
