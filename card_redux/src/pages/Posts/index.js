import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Row, Col, Typography, Statistic, Spin, Alert, Empty } from 'antd';
import { UserOutlined, FileTextOutlined, LoadingOutlined } from '@ant-design/icons';
import { fetchAllPosts } from '../../actions/posts';
import './posts.scss';

const { Title, Text } = Typography;

const Posts = () => {
  const dispatch = useDispatch();
  
  // Lấy state từ Redux store - đơn giản như cart
  const { posts, loading, error } = useSelector(state => state.postsReducer);

  // Debug state
  console.log('🔍 Posts Component State:', { posts, loading, error });

  // Fetch posts khi component mount
  useEffect(() => {
    console.log('🚀 Posts Component: Dispatching fetchAllPosts...');
    dispatch(fetchAllPosts());
  }, [dispatch]);

  // Tính toán thống kê
  const totalPosts = posts.length;
  const uniqueUsers = [...new Set(posts.map(post => post.userId))].length;

  // Loading state
  if (loading) {
    return (
      <div className="posts-loading">
        <Spin 
          indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
          tip="Đang tải bài viết..."
          size="large"
        />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="posts-error">
        <Alert
          message="Lỗi tải dữ liệu"
          description={error}
          type="error"
          showIcon
          action={
            <button 
              className="retry-button"
              onClick={() => dispatch(fetchAllPosts())}
            >
              Thử lại
            </button>
          }
        />
      </div>
    );
  }

  // Empty state
  if (!loading && posts.length === 0) {
    return (
      <div className="posts-empty">
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Không có bài viết nào"
        />
      </div>
    );
  }

  return (
    <div className="posts-container">
      {/* Header */}
      <div className="posts-header">
        <Title level={2} className="posts-title">
          <FileTextOutlined /> Danh sách bài viết
        </Title>
        <Text type="secondary" className="posts-subtitle">
          Khám phá các bài viết thú vị từ cộng đồng
        </Text>
      </div>

      {/* Loading state */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <Spin size="large" />
          <div style={{ marginTop: 16 }}>
            <Text>Đang tải bài viết...</Text>
          </div>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div style={{ margin: '20px 0' }}>
          <Text type="danger">{error}</Text>
        </div>
      )}

      {/* Posts content */}
      {!loading && !error && posts.length > 0 && (
        <>
          {/* Statistics */}
          <Row gutter={[16, 16]} className="posts-stats">
            <Col xs={12} sm={8} md={6}>
              <Card className="stat-card">
                <Statistic
                  title="Tổng bài viết"
                  value={totalPosts}
                  prefix={<FileTextOutlined />}
                  valueStyle={{ color: '#1890ff' }}
                />
              </Card>
            </Col>
            <Col xs={12} sm={8} md={6}>
              <Card className="stat-card">
                <Statistic
                  title="Tác giả"
                  value={uniqueUsers}
                  prefix={<UserOutlined />}
                  valueStyle={{ color: '#52c41a' }}
                />
              </Card>
            </Col>
          </Row>

          {/* Posts Grid */}
          <Row gutter={[16, 16]} className="posts-grid">
            {posts.map(post => (
              <Col xs={24} sm={12} md={8} lg={6} key={post.id}>
                <Card
                  className="post-card"
                  hoverable
                  title={
                    <div className="post-card-title">
                      <Text strong ellipsis={{ tooltip: post.title }}>
                        {post.title}
                      </Text>
                    </div>
                  }
                  extra={
                    <Text type="secondary" className="post-id">
                      #{post.id}
                    </Text>
                  }
                >
                  <div className="post-content">
                    <Text 
                      type="secondary" 
                      ellipsis={{ tooltip: post.body }}
                      className="post-body"
                    >
                      {post.body}
                    </Text>
                    
                    <div className="post-meta">
                      <Text type="secondary" className="post-author">
                        <UserOutlined /> Tác giả: {post.userId}
                      </Text>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}

      {/* Empty state */}
      {!loading && !error && posts.length === 0 && (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <Text type="secondary">Không có bài viết nào</Text>
        </div>
      )}
    </div>
  );
};

export default Posts;