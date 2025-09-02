import React, { useState } from 'react'
import Mouse from './Mouse.jsx'

export default function MouseExample() {
    const [currentEffect, setCurrentEffect] = useState('default')
    const [currentColor, setCurrentColor] = useState('#ff0000')
    const [currentSize, setCurrentSize] = useState(16)

    const effects = [
        { value: 'default', label: '預設效果' },
        { value: 'trail', label: '軌跡效果' },
        { value: 'particles', label: '粒子效果' },
        { value: 'magnetic', label: '磁性效果' }
    ]

    const colors = [
        { value: '#ff0000', label: '紅色' },
        { value: '#00ff00', label: '綠色' },
        { value: '#0000ff', label: '藍色' },
        { value: '#ffff00', label: '黃色' },
        { value: '#ff00ff', label: '紫色' },
        { value: '#00ffff', label: '青色' }
    ]

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>滑鼠追蹤效果展示</h1>
            
            {/* 控制面板 */}
            <div style={{ 
                marginBottom: '20px', 
                padding: '20px', 
                backgroundColor: '#f5f5f5', 
                borderRadius: '8px' 
            }}>
                <h3>控制選項</h3>
                
                {/* 效果選擇 */}
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ marginRight: '10px' }}>效果類型：</label>
                    <select 
                        value={currentEffect} 
                        onChange={(e) => setCurrentEffect(e.target.value)}
                        style={{ padding: '5px', borderRadius: '4px' }}
                    >
                        {effects.map(effect => (
                            <option key={effect.value} value={effect.value}>
                                {effect.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* 顏色選擇 */}
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ marginRight: '10px' }}>顏色：</label>
                    <select 
                        value={currentColor} 
                        onChange={(e) => setCurrentColor(e.target.value)}
                        style={{ padding: '5px', borderRadius: '4px' }}
                    >
                        {colors.map(color => (
                            <option key={color.value} value={color.value}>
                                {color.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* 大小調整 */}
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ marginRight: '10px' }}>大小：</label>
                    <input 
                        type="range" 
                        min="8" 
                        max="32" 
                        value={currentSize} 
                        onChange={(e) => setCurrentSize(parseInt(e.target.value))}
                        style={{ width: '200px' }}
                    />
                    <span style={{ marginLeft: '10px' }}>{currentSize}px</span>
                </div>
            </div>

            {/* 說明文字 */}
            <div style={{ 
                marginBottom: '20px', 
                padding: '15px', 
                backgroundColor: '#e8f4fd', 
                borderRadius: '8px',
                border: '1px solid #bee5eb'
            }}>
                <h4>效果說明：</h4>
                <ul>
                    <li><strong>預設效果：</strong>包含主追蹤點、軌跡和光暈</li>
                    <li><strong>軌跡效果：</strong>顯示滑鼠移動的軌跡點</li>
                    <li><strong>粒子效果：</strong>帶有浮動動畫的粒子</li>
                    <li><strong>磁性效果：</strong>滑鼠跟隨有磁性吸附感</li>
                </ul>
            </div>

            {/* 滑鼠追蹤組件 */}
            <Mouse 
                effect={currentEffect}
                color={currentColor}
                size={currentSize}
                trailLength={5}
                magneticStrength={0.3}
            />

            {/* 測試區域 */}
            <div style={{ 
                height: '400px', 
                backgroundColor: '#f0f0f0', 
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                color: '#666'
            }}>
                在此區域移動滑鼠來測試效果
            </div>
        </div>
    )
}
