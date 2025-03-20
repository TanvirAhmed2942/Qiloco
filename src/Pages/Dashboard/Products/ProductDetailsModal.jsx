import React from "react";
import { Modal, ConfigProvider } from "antd";

function ProductDetailsModal({ isModalOpen, setIsModalOpen, product }) {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            contentBg: "#232323",
            headerBg: "#232323",
            titleColor: "#ffffff",
            titleFontSize: 24,
          },
          Form: {
            labelColor: "#ffffff",
          },
        },
      }}
    >
      <Modal
        open={isModalOpen}
        width={500}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="w-full flex flex-col items-center my-8">
          <h1 className="w-full mb-8 flex items-center justify-center text-white text-2xl font-sans">
            Product Details
          </h1>
        </div>
      </Modal>
    </ConfigProvider>
  );
}

export default ProductDetailsModal;
