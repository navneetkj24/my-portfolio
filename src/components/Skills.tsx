import "../styles/skills.css";
import "../styles/sections.css";

export default function Skills() {
    return (
        <section id="skills" className="skills-section">
            <h2>Skills</h2>
            <p className="italic-text">
                <strong>Infrastructure & Networking:</strong> Windows Server, Active Directory, DNS, DHCP, Firewalls, VPNs
            </p>
            <p className="italic-text">
                <strong>Programming & Development:</strong> HTML5, CSS3, JavaScript, TypeScript, React.js, Angular, Java, Python, Node.js, C#, Flutter
            </p>
            <p className="italic-text">
                <strong>Databases & Tools:</strong> MySQL, MSSQL, Firebase, MongoDB, Git, VS Code, PowerShell, Figma
            </p>
        </section>
    );
}
