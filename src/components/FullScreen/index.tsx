import React, { useState } from 'react';
import screenfull from 'screenfull';
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons';
import { message } from 'antd';

const FullScreen = () => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const changedFullscreen = () => {
    if (!screenfull.isEnabled) {
      message.warning('you browser can not work');
      return false;
    }
    screenfull.toggle();
  };
  return (
    <>
      {isFullscreen ? (
        <FullscreenExitOutlined
          title="全屏"
          onClick={() => {
            changedFullscreen();
            setIsFullscreen(false);
          }}
        />
      ) : (
        <FullscreenOutlined
          title="取消全屏"
          onClick={() => {
            changedFullscreen();
            setIsFullscreen(true);
          }}
        />
      )}
    </>
  );
};

export default FullScreen;
