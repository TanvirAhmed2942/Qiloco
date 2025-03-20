import React, { useState } from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  Button,
  ConfigProvider,
  message,
} from "antd";
import UploadComponent from "./UploadComponent";
import { useCreateProductMutation } from "../../../redux/apiSlices/productSlice";

function AddProductModal({ isModalOpen, setIsModalOpen }) {
  const [form] = Form.useForm();
  const [uploadedFiles, setUploadedFiles] = useState([]); // Store uploaded images
  const [focusedField, setFocusedField] = useState(null); // Track focused field
  const [resetCounter, setResetCounter] = useState(0); // Add a reset counter
  const [createProduct, { isLoading }] = useCreateProductMutation();

  const data = {
    name: "",
    description: "",
    price: "",
    quantity: "",
    moodTag: [],
    potency: "",
    genetics: "",
    origin: "",
    type: "",
    scent: "",
  };

  const resetForm = () => {
    form.resetFields(); // Reset all input fields
    setUploadedFiles([]); // Clear uploaded images
    setResetCounter((prev) => prev + 1); // Increment reset counter to trigger child component reset
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const onFinish = async (values) => {
    const formData = new FormData();

    // Append the 'image' as a single file
    if (uploadedFiles.length > 0) {
      formData.append("image", uploadedFiles[0]);
    }

    // Create the data object and append it to FormData
    const productData = {
      name: values.productName,
      description: values.productDescription,
      price: values.productPrice,
      quantity: values.productQuantity || 10, // Default quantity if not provided
      potency: values.productPotency || "High", // Default potency if not provided
      genetics: values.productGenetics || "Indica-dominant", // Default genetics if not provided
      origin: values.productOrigin || "California", // Default origin
      type: values.productType || "Hybrid", // Default type
      scent: values.productScent || "Earthy", // Default scent
      moodTag: values.filterMood || [], // Assign the mood tags directly as an array
    };

    // Append the 'data' object to the FormData
    formData.append("data", JSON.stringify(productData));

    // Console log the FormData content (for debugging purposes)
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      // Send data to the server using the mutation
      const response = await createProduct(formData).unwrap();
      message.success("Product created successfully!");

      // Reset form and close modal after successful submission
      resetForm();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Failed to create product:", error);
      message.error("Failed to create product. Please try again.");
    }
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
            labelColor: "#efefef",
          },
          Select: {
            selectorBg: "black",
            activeOutlineColor: "grey",
            optionSelectedBg: "grey",
            multipleItemBorderColor: "grey",
            activeBorderColor: "grey",
            hoverBorderColor: "grey",
          },
          Input: {
            hoverBg: "black",
          },
        },
      }}
    >
      <Modal
        title="Add Product Details"
        open={isModalOpen}
        width={1000}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          className="flex flex-col"
          style={{ padding: 5, marginBlockStart: 15 }}
          onFinish={onFinish}
        >
          {/* Two Sections Side by Side */}
          <div className="flex gap-4">
            {/* Left Section */}
            <div className="w-1/2 bg-transparent rounded-md">
              <Form.Item
                label="Product Name"
                name="productName"
                rules={[{ required: true, message: "Product Name required!" }]}
              >
                <Input
                  placeholder="Enter your product name"
                  className="border-none h-12"
                  style={{
                    background:
                      focusedField === "productName" ? "#e8f0fd" : "black",
                  }}
                  onFocus={() => setFocusedField("productName")}
                  onBlur={() => setFocusedField(null)}
                />
              </Form.Item>

              <Form.Item
                label="Product Descriptions"
                name="productDescription"
                rules={[
                  { required: true, message: "Product Description required!" },
                ]}
              >
                <Input.TextArea
                  placeholder="Write product description"
                  className="border-none"
                  style={{
                    background:
                      focusedField === "productDescription"
                        ? "#e8f0fd"
                        : "black",
                  }}
                  onFocus={() => setFocusedField("productDescription")}
                  onBlur={() => setFocusedField(null)}
                />
              </Form.Item>

              <Form.Item
                label="Filter"
                name="productFilter"
                rules={[{ required: true, message: "Filter required!" }]}
              >
                <Input
                  placeholder="High"
                  className="border-none h-12"
                  style={{
                    background:
                      focusedField === "productFilter" ? "#e8f0fd" : "black",
                  }}
                  onFocus={() => setFocusedField("productFilter")}
                  onBlur={() => setFocusedField(null)}
                />
              </Form.Item>

              <Form.Item
                name="filterMood"
                label="Filter by mood [Tag]"
                rules={[
                  {
                    required: true,
                    message: "Please select Tags",
                    type: "array",
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  placeholder="[Tag]"
                  className="border-none"
                  style={{
                    background:
                      focusedField === "filterMood" ? "#e8f0fd" : "black",
                  }}
                  onFocus={() => setFocusedField("filterMood")}
                  onBlur={() => setFocusedField(null)}
                >
                  <Select.Option value="Chill">Chill</Select.Option>
                  <Select.Option value="Soothing">Soothing</Select.Option>
                  <Select.Option value="Euphoric">Euphoric</Select.Option>
                  <Select.Option value="Creative">Creative</Select.Option>
                  <Select.Option value="Happy">Happy</Select.Option>
                  <Select.Option value="Sad">Sad</Select.Option>
                  <Select.Option value="Medium">Medium</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Price"
                name="productPrice"
                rules={[{ required: true, message: "Product Price required!" }]}
              >
                <Input
                  placeholder="Enter your product price"
                  className="border-none h-12"
                  style={{
                    background:
                      focusedField === "productPrice" ? "#e8f0fd" : "black",
                  }}
                  onFocus={() => setFocusedField("productPrice")}
                  onBlur={() => setFocusedField(null)}
                />
              </Form.Item>

              <Form.Item label="Size (Optional)" name="productSize">
                <Input
                  placeholder="1kg"
                  className="border-none h-12"
                  style={{
                    background:
                      focusedField === "productSize" ? "#e8f0fd" : "black",
                  }}
                  onFocus={() => setFocusedField("productSize")}
                  onBlur={() => setFocusedField(null)}
                />
              </Form.Item>
            </div>

            {/* Right Section (Upload) */}
            <div className="w-1/2">
              <h5 className="text-[18px] text-[#efefef] font-normal mb-1 ">
                Product Gallery
              </h5>
              <UploadComponent
                onFileUpload={setUploadedFiles}
                resetTrigger={resetCounter}
              />
            </div>
          </div>

          {/* Full-Width Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              className="w-full h-12 bg-quilocoD hover:bg-quilocoD/90 text-white text-[18px] font-medium rounded-lg"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </ConfigProvider>
  );
}

export default AddProductModal;
