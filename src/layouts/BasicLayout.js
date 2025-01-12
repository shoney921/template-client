import '../styles/BasicLayout.css';

const BasicLayout = ({ children }) => {
    return (
        <>
            <header className="header">
                <h1 className="header-title">Header</h1>
            </header>
            <div className="content-wrapper">
                <main className="main-content">
                    {children}
                </main>
                <aside className="sidebar">
                    <h1 className="sidebar-title">Sidebar</h1>
                </aside>
            </div>
        </>
    );
}

export default BasicLayout;