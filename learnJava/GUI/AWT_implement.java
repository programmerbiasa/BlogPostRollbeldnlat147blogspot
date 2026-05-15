// import java packages
import java.awt.Frame;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

public class AWT_implement{
public static void main(String[] args) {

// Create a frame (window)
Frame frame = new Frame("AWT implementation");

// Handle window close event using WindowAdapter
frame.addWindowListener(new WindowAdapter() {
	public void windowClosing(WindowEvent e) {
	 System.exit(0);
 }
});

// Set frame size and make it visible
frame.setSize(300, 150);
frame.setVisible(true);

}
}
