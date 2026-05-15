// import java packages
import javax.swing.JFrame;
public class Swing_implement{
/**
* Create the GUI and show it.
* 
*/
	private static void createGUI() {
	//Create the window.
	JFrame frame = new JFrame("Swing implementation");
	frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
			
	//Display the window.
	frame.pack();
	frame.setSize(300,150);
	frame.setVisible(true);
	}	
	public static void main(String[] args) {
	//Schedule a job for the event-dispatching thread:
	javax.swing.SwingUtilities.invokeLater(new Runnable() {
		public void run() {
			createGUI();
		}
	});
	}
}
