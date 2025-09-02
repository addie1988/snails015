import React, { useState } from 'react'
import InfiniteMarquee from './InfiniteMarquee'

export default function MarqueeExample() {
    const [speed, setSpeed] = useState(15)
    const [direction, setDirection] = useState('left')
    const [pauseOnHover, setPauseOnHover] = useState(true)

    const sampleItems = [
        { icon: '🚀', text: '火箭發射' },
        { icon: '🌟', text: '星星閃耀' },
        { icon: '🎨', text: '藝術創作' },
        { icon: '💻', text: '程式開發' },
        { icon: '🎵', text: '音樂製作' },
        { icon: '📱', text: '手機應用' },
        { icon: '🌍', text: '地球探索' },
        { icon: '🎮', text: '遊戲娛樂' },
        { icon: '📚', text: '知識學習' },
        { icon: '🎭', text: '表演藝術' }
    ]

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>無限循環跑馬燈展示</h1>
            
            {/* 控制面板 */}
            <div style={{ 
                marginBottom: '30px', 
                padding: '20px', 
                backgroundColor: '#f5f5f5', 
                borderRadius: '8px' 
            }}>
                <h3>控制選項</h3>
                
                {/* 速度控制 */}
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ marginRight: '10px' }}>速度：</label>
                    <input 
                        type="range" 
                        min="5" 
                        max="50" 
                        value={speed} 
                        onChange={(e) => setSpeed(parseInt(e.target.value))}
                        style={{ width: '200px' }}
                    />
                    <span style={{ marginLeft: '10px' }}>{speed} px/s</span>
                </div>

                {/* 方向控制 */}
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ marginRight: '10px' }}>方向：</label>
                    <select 
                        value={direction} 
                        onChange={(e) => setDirection(e.target.value)}
                        style={{ padding: '5px', borderRadius: '4px' }}
                    >
                        <option value="left">向左</option>
                        <option value="right">向右</option>
                    </select>
                </div>

                {/* 懸停暫停控制 */}
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ marginRight: '10px' }}>
                        <input 
                            type="checkbox" 
                            checked={pauseOnHover} 
                            onChange={(e) => setPauseOnHover(e.target.checked)}
                            style={{ marginRight: '5px' }}
                        />
                        滑鼠懸停暫停
                    </label>
                </div>
            </div>

            {/* 跑馬燈展示 */}
            <div style={{ marginBottom: '30px' }}>
                <h3>基本跑馬燈</h3>
                <InfiniteMarquee 
                    speed={speed}
                    direction={direction}
                    pauseOnHover={pauseOnHover}
                >
                    {sampleItems.map((item, index) => (
                        <div key={index} className="marquee-item">
                            <span style={{ fontSize: '24px' }}>{item.icon}</span>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </InfiniteMarquee>
            </div>

            {/* 不同速度的跑馬燈 */}
            <div style={{ marginBottom: '30px' }}>
                <h3>慢速跑馬燈</h3>
                <InfiniteMarquee 
                    speed={8}
                    direction="left"
                    pauseOnHover={true}
                >
                    {sampleItems.slice(0, 6).map((item, index) => (
                        <div key={index} className="marquee-item">
                            <span style={{ fontSize: '24px' }}>{item.icon}</span>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </InfiniteMarquee>
            </div>

            {/* 向右移動的跑馬燈 */}
            <div style={{ marginBottom: '30px' }}>
                <h3>向右移動跑馬燈</h3>
                <InfiniteMarquee 
                    speed={12}
                    direction="right"
                    pauseOnHover={true}
                >
                    {sampleItems.slice(0, 8).map((item, index) => (
                        <div key={index} className="marquee-item">
                            <span style={{ fontSize: '24px' }}>{item.icon}</span>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </InfiniteMarquee>
            </div>

            {/* 說明文字 */}
            <div style={{ 
                padding: '15px', 
                backgroundColor: '#e8f4fd', 
                borderRadius: '8px',
                border: '1px solid #bee5eb'
            }}>
                <h4>功能說明：</h4>
                <ul>
                    <li><strong>無限循環：</strong>內容會無縫循環播放</li>
                    <li><strong>速度控制：</strong>可調整移動速度</li>
                    <li><strong>方向控制：</strong>可選擇向左或向右移動</li>
                    <li><strong>懸停暫停：</strong>滑鼠懸停時會暫停，移開後繼續</li>
                    <li><strong>響應式設計：</strong>自動適應不同螢幕尺寸</li>
                </ul>
            </div>
        </div>
    )
}
