import '../styles/BasicLayout.css';
import BasicMenu from '../components/menus/BasicMenu';
const BasicLayout = ({ children }) => {
    return (
        <>
            <header className="header">
                <BasicMenu />
            </header>
            <div className="content-wrapper">
                <div className="main-content">
                    {children}
                </div>
                <div className="sidebar">
                    <h1 className="sidebar-title">Sidebar</h1>
                </div>
            </div>
        </>
    );
}

export default BasicLayout;