import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import StarlightBackground from '@/components/layout/StarlightBackground';
import ZapierChatbot from '@/components/layout/ZapierChatbot';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Nivora : Home away from Home',
  description: 'Find PGs, messes, and flats near your college with AI-powered insights.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <Script async type='module' src='https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js'></Script>
      </head>
      <body className="font-body antialiased relative">
        <!-- 🌸 YUNA Floating Chat Widget -->
<style>
  #yuna-bubble {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: linear-gradient(135deg, #f9c5d1, #fcd9e8);
    color: white;
    border-radius: 50%;
    width: 65px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
    font-size: 30px;
    transition: 0.3s;
    z-index: 1000;
  }
  #yuna-bubble:hover {
    transform: scale(1.1);
  }
  #yuna-chat {
    display: none;
    position: fixed;
    bottom: 100px;
    right: 20px;
    width: 360px;
    height: 520px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.25);
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
    z-index: 999;
  }
  #yuna-header {
    background: linear-gradient(135deg, #fbcfe8, #f9a8d4);
    color: white;
    padding: 15px;
    font-weight: 600;
    display: flex;
    align-items: center;
  }
  #yuna-header img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 10px;
  }
  #yuna-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 15px;
    background: #fff0f6;
  }
  .yuna-btn {
    background-color: #fbcfe8;
    color: #4b5563;
    border: none;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    flex: 1 1 45%;
    text-align: center;
    font-size: 14px;
    transition: 0.2s;
  }
  .yuna-btn:hover {
    background-color: #f9a8d4;
    color: white;
  }
</style>

<!-- Floating Button -->
<div id="yuna-bubble">💬</div>

<!-- Chat Window -->
<div id="yuna-chat">
  <div id="yuna-header">
    <img src="/mnt/data/images (2).jpg" alt="Yuna">
    Yuna – Property Assistant
  </div>
  <div id="yuna-buttons">
    <button class="yuna-btn" onclick="openYunaChat('hostels')">🏠 Find Hostels</button>
    <button class="yuna-btn" onclick="openYunaChat('pgs')">🛏️ Find PGs</button>
    <button class="yuna-btn" onclick="openYunaChat('flats')">🏡 Find Flats</button>
    <button class="yuna-btn" onclick="openYunaChat('rent')">💬 Ask about Rent</button>
    <button class="yuna-btn" onclick="openYunaChat('process')">📄 Learn Process</button>
  </div>
</div>

<script>
  const yunaBubble = document.getElementById('yuna-bubble');
  const yunaChat = document.getElementById('yuna-chat');
  
  yunaBubble.onclick = () => {
    yunaChat.style.display = yunaChat.style.display === 'none' ? 'block' : 'none';
  };
  
  function openYunaChat(option) {
    // 👇 Replace with your actual Yuna chat link once deployed
    const chatUrl = 'https://chatgpt.com/g/g-6920b2ac44388191a1a7a4d20f8ee3ee-yuna';
    window.open(chatUrl + '?topic=' + option, 'YunaChat', 'width=400,height=600');
  }
</script>

      </body>
    </html>
  );
}
