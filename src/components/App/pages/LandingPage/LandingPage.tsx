import React from 'react';
import { Col, Icon, Input, Row } from 'antd';
import './LandingPage.less';
import img1 from './undraw_data_points.svg';
import img2 from './undraw_growth_analytics.svg';

const { Search } = Input;

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="fc-landing-section-1">
        <div className="fc-landing-center">
          <div className="fc-landing-hero">
            <Row
              gutter={[
                { xs: 0, sm: 0, md: 0, lg: 24 },
                { xs: 24, sm: 24, md: 32, lg: 0 },
              ]}
            >
              <Col
                xs={{ span: 22, offset: 1 }}
                sm={{ span: 24, offset: 0 }}
                md={{ span: 24, offset: 0 }}
                lg={{ span: 15, offset: 0 }}
              >
                <div className="fc-landing-hero-left">
                  <div className="fc-landing-hero-text-1">
                    Comprehensive repository of modeling data at One Figma
                  </div>
                  <div className="fc-landing-hero-text-2">
                    Pitcher Dialog lets you easily access, publish and manage your pitcher sets.
                  </div>
                  <div className="fc-landing-hero-learn-more">Learn more &gt;</div>
                  <div className="fc-landing-hero-search-box">
                    <Search
                      placeholder="Search for pitcher sets"
                      onSearch={(value: string) => {
                        /* eslint-disable-next-line no-console */
                        console.log(value);
                      }}
                      enterButton
                    />
                  </div>
                </div>
              </Col>
              <Col
                xs={{ span: 22, offset: 1 }}
                sm={{ span: 18, offset: 3 }}
                md={{ span: 16, offset: 4 }}
                lg={{ span: 9, offset: 0 }}
              >
                <div className="fc-landing-hero-right">
                  <img src={img1} alt="undraw_data_points.svg" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="fc-landing-section-2">
        <div className="fc-landing-center">
          <div className="fc-data-starter-kit">
            <div className="fc-data-starter-kit-title">Data Starter Kit</div>
            <div className="fc-data-starter-kit-description">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa.
            </div>
            <Row
              className="fc-data-starter-kit-categories"
              gutter={[
                { xs: 0, sm: 0, md: 0, lg: 24 },
                { xs: 24, sm: 24, md: 32, lg: 0 },
              ]}
            >
              <Col
                className="fc-data-starter-kit-category"
                xs={{ span: 24, offset: 0 }}
                sm={{ span: 24, offset: 0 }}
                md={{ span: 12, offset: 0 }}
                lg={{ span: 6, offset: 0 }}
              >
                <div className="fc-data-starter-kit-category-title">Category 1</div>
                <div className="fc-data-starter-kit-category-items">
                  <div className="fc-data-starter-kit-category-item">
                    <div className="fc-data-starter-kit-category-item-icon">
                      <Icon type="build" />
                    </div>
                    <div className="fc-data-starter-kit-category-item-text">Item 1</div>
                  </div>
                  <div className="fc-data-starter-kit-category-item">
                    <div className="fc-data-starter-kit-category-item-icon">
                      <Icon type="build" />
                    </div>
                    <div className="fc-data-starter-kit-category-item-text">Item 2</div>
                  </div>
                  <div className="fc-data-starter-kit-category-item">
                    <div className="fc-data-starter-kit-category-item-icon">
                      <Icon type="build" />
                    </div>
                    <div className="fc-data-starter-kit-category-item-text">Item 3</div>
                  </div>
                  <div className="fc-data-starter-kit-category-item">
                    <div className="fc-data-starter-kit-category-item-icon">
                      <Icon type="build" />
                    </div>
                    <div className="fc-data-starter-kit-category-item-text">Item 4</div>
                  </div>
                </div>
              </Col>
              <Col
                className="fc-data-starter-kit-category"
                xs={{ span: 24, offset: 0 }}
                sm={{ span: 24, offset: 0 }}
                md={{ span: 12, offset: 0 }}
                lg={{ span: 6, offset: 0 }}
              >
                <div className="fc-data-starter-kit-category-title">Category 2</div>
                <div className="fc-data-starter-kit-category-items">
                  <div className="fc-data-starter-kit-category-item">
                    <div className="fc-data-starter-kit-category-item-icon">
                      <Icon type="build" />
                    </div>
                    <div className="fc-data-starter-kit-category-item-text">Item 1</div>
                  </div>
                  <div className="fc-data-starter-kit-category-item">
                    <div className="fc-data-starter-kit-category-item-icon">
                      <Icon type="build" />
                    </div>
                    <div className="fc-data-starter-kit-category-item-text">Item 2</div>
                  </div>
                  <div className="fc-data-starter-kit-category-item">
                    <div className="fc-data-starter-kit-category-item-icon">
                      <Icon type="build" />
                    </div>
                    <div className="fc-data-starter-kit-category-item-text">Item 3</div>
                  </div>
                  <div className="fc-data-starter-kit-category-item">
                    <div className="fc-data-starter-kit-category-item-icon">
                      <Icon type="build" />
                    </div>
                    <div className="fc-data-starter-kit-category-item-text">Item 4</div>
                  </div>
                </div>
              </Col>
              <Col
                className="fc-data-starter-kit-category"
                xs={{ span: 24, offset: 0 }}
                sm={{ span: 24, offset: 0 }}
                md={{ span: 12, offset: 0 }}
                lg={{ span: 6, offset: 0 }}
              >
                <div className="fc-data-starter-kit-category-title">Category 3</div>
                <div className="fc-data-starter-kit-category-items">
                  <div className="fc-data-starter-kit-category-item">
                    <div className="fc-data-starter-kit-category-item-icon">
                      <Icon type="build" />
                    </div>
                    <div className="fc-data-starter-kit-category-item-text">Item 1</div>
                  </div>
                  <div className="fc-data-starter-kit-category-item">
                    <div className="fc-data-starter-kit-category-item-icon">
                      <Icon type="build" />
                    </div>
                    <div className="fc-data-starter-kit-category-item-text">Item 2</div>
                  </div>
                  <div className="fc-data-starter-kit-category-item">
                    <div className="fc-data-starter-kit-category-item-icon">
                      <Icon type="build" />
                    </div>
                    <div className="fc-data-starter-kit-category-item-text">Item 3</div>
                  </div>
                  <div className="fc-data-starter-kit-category-item">
                    <div className="fc-data-starter-kit-category-item-icon">
                      <Icon type="build" />
                    </div>
                    <div className="fc-data-starter-kit-category-item-text">Item 4</div>
                  </div>
                </div>
              </Col>
              <Col
                className="fc-data-starter-kit-category"
                xs={{ span: 24, offset: 0 }}
                sm={{ span: 24, offset: 0 }}
                md={{ span: 12, offset: 0 }}
                lg={{ span: 6, offset: 0 }}
              >
                <div className="fc-data-starter-kit-category-title">Category 4</div>
                <div className="fc-data-starter-kit-category-items">
                  <div className="fc-data-starter-kit-category-item">
                    <div className="fc-data-starter-kit-category-item-icon">
                      <Icon type="build" />
                    </div>
                    <div className="fc-data-starter-kit-category-item-text">Item 1</div>
                  </div>
                  <div className="fc-data-starter-kit-category-item">
                    <div className="fc-data-starter-kit-category-item-icon">
                      <Icon type="build" />
                    </div>
                    <div className="fc-data-starter-kit-category-item-text">Item 2</div>
                  </div>
                  <div className="fc-data-starter-kit-category-item">
                    <div className="fc-data-starter-kit-category-item-icon">
                      <Icon type="build" />
                    </div>
                    <div className="fc-data-starter-kit-category-item-text">Item 3</div>
                  </div>
                  <div className="fc-data-starter-kit-category-item">
                    <div className="fc-data-starter-kit-category-item-icon">
                      <Icon type="build" />
                    </div>
                    <div className="fc-data-starter-kit-category-item-text">Item 4</div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="fc-landing-section-3">
        <div className="fc-landing-center">
          <div className="fc-landing-section-title">You are making impact</div>
          <div className="fc-my-stats-box">
            <Row className="fc-my-stats-primary-row">
              <Col
                className="fc-my-stats-primary-col"
                xs={{ span: 24, offset: 0 }}
                sm={{ span: 24, offset: 0 }}
                md={{ span: 8, offset: 0 }}
                lg={{ span: 8, offset: 0 }}
              >
                <div className="fc-img-container">
                  <img src={img2} alt="undraw_growth_analytics.svg" />
                </div>
              </Col>
              <Col
                className="fc-my-stats-primary-col"
                xs={{ span: 24, offset: 0 }}
                sm={{ span: 24, offset: 0 }}
                md={{ span: 16, offset: 0 }}
                lg={{ span: 16, offset: 0 }}
              >
                <div className="fc-my-stats-primary">
                  <span className="fc-my-stats-primary-num">72</span>
                  <span className="fc-my-stats-primary-text">pitcher sets owned by you</span>
                </div>
              </Col>
            </Row>
            <Row className="fc-my-stats-secondary-row">
              <Col
                className="fc-my-stats-secondary-col"
                xs={{ span: 24, offset: 0 }}
                sm={{ span: 24, offset: 0 }}
                md={{ span: 8, offset: 0 }}
                lg={{ span: 8, offset: 0 }}
              >
                <div className="fc-my-stats-secondary">
                  <div className="fc-my-stats-secondary-name">accessed</div>
                  <div className="fc-my-stats-secondary-value">
                    <span className="fc-my-stats-secondary-num">1999</span>
                    <span className="fc-my-stats-secondary-text">times</span>
                  </div>
                </div>
              </Col>
              <Col
                className="fc-my-stats-secondary-col"
                xs={{ span: 24, offset: 0 }}
                sm={{ span: 24, offset: 0 }}
                md={{ span: 8, offset: 0 }}
                lg={{ span: 8, offset: 0 }}
              >
                <div className="fc-my-stats-secondary">
                  <div className="fc-my-stats-secondary-name">used by</div>
                  <div className="fc-my-stats-secondary-value">
                    <span className="fc-my-stats-secondary-num">76</span>
                    <span className="fc-my-stats-secondary-text">users</span>
                  </div>
                </div>
              </Col>
              <Col
                className="fc-my-stats-secondary-col"
                xs={{ span: 24, offset: 0 }}
                sm={{ span: 24, offset: 0 }}
                md={{ span: 8, offset: 0 }}
                lg={{ span: 8, offset: 0 }}
              >
                <div className="fc-my-stats-secondary">
                  <div className="fc-my-stats-secondary-name">used by</div>
                  <div className="fc-my-stats-secondary-value">
                    <span className="fc-my-stats-secondary-num">42</span>
                    <span className="fc-my-stats-secondary-text">modelers</span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="stats-link-row">
              <Col
                className="stats-link-cell"
                xs={{ span: 24, offset: 0 }}
                sm={{ span: 24, offset: 0 }}
                md={{ span: 24, offset: 0 }}
                lg={{ span: 24, offset: 0 }}
              >
                <div className="fc-my-stats-link-container">
                  <a className="fc-my-stats-link" href="http://www.google.com">
                    see your pitcher sets &gt;
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
