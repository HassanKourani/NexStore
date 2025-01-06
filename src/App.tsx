import { BrowserRouter, Route, Routes } from "react-router";
import LandingPageLayout from "./pages/landing-page-layout";
import { ConfigProvider } from "antd";
import Categories from "./pages/categories";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Primary Colors
          colorPrimary: "#1f4e5f", // Deep Teal - Main accent
          colorBgBase: "#f4e7d3", // Warm Beige - Primary background

          // Text Colors
          colorText: "#a57c59", // Warm Taupe - Main text
          colorTextSecondary: "#4e6b70", // Muted Blue-Green

          // Background Colors
          colorBgContainer: "#c9b29e", // Soft Stone - Secondary background
          colorBgElevated: "#f4e7d3", // Warm Beige

          // Border and Line Colors
          colorBorder: "#4e6b70", // Muted Blue-Green

          // Interactive Colors
          colorPrimaryHover: "#2f6b74", // Rich Cyan - Hover state
          colorPrimaryActive: "#2f6b74", // Rich Cyan - Active state

          // Button Colors
          colorPrimaryText: "#ffffff", // White text on buttons
          colorLink: "#e5b48b", // Soft Peach - Links and CTAs
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPageLayout />}>
            <Route path="/" element={<>Coming Soon</>} />
            <Route path="/stores" element={<>Coming Soon</>} />
            <Route path="/categories" element={<Categories />} />
            <Route path=":category">
              <Route index element={<>Coming Soon</>} />
              <Route path=":store" element={<>Coming Soon</>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
