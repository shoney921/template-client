import '../styles/AboutPage.css';
import BasicLayout from '../layouts/BasicLayout';

const AboutPage: React.FC = () => {
  return (
    <BasicLayout>
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">About Us</h1>
          <p className="about-description">
            우리 회사/서비스에 대한 소개 페이지입니다.
          </p>
        </div>
      </div>
    </BasicLayout>
  );
};

export default AboutPage;
