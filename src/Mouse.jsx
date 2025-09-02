import { useState, useEffect, useRef } from 'react'
import './Mouse.sass'

export default function Mouse({ 
    effect = 'default', // 'default', 'trail', 'magnetic', 'particles'
    color = '#ff0000',
    size = 16,
    trailLength = 3,
    magneticStrength = 0.3
}) {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)
    const [trailPositions, setTrailPositions] = useState([])
    const mouseRef = useRef(null)

    useEffect(() => {
        let mouseX = 0
        let mouseY = 0
        let trailX = 0
        let trailY = 0

        const handleMouseMove = (e) => {
            mouseX = e.clientX
            mouseY = e.clientY
            setIsVisible(true)

            // 更新軌跡位置
            if (effect === 'trail') {
                setTrailPositions(prev => {
                    const newPositions = [...prev, { x: e.clientX, y: e.clientY }]
                    return newPositions.slice(-trailLength)
                })
            }
        }

        const handleMouseLeave = () => {
            setIsVisible(false)
        }

        const animate = () => {
            // 平滑跟隨效果
            const easing = effect === 'magnetic' ? magneticStrength : 0.15
            trailX += (mouseX - trailX) * easing
            trailY += (mouseY - trailY) * easing

            setPosition({
                x: trailX,
                y: trailY
            })

            requestAnimationFrame(animate)
        }

        // 添加事件監聽器
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseleave', handleMouseLeave)

        // 開始動畫
        animate()

        // 清理
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [effect, trailLength, magneticStrength])

    // 根據效果類型渲染不同的滑鼠追蹤
    const renderMouseEffect = () => {
        switch (effect) {
            case 'trail':
                return (
                    <>
                        {/* 軌跡點 */}
                        {trailPositions.map((pos, index) => (
                            <div
                                key={index}
                                className="mouse-trail-dot"
                                style={{
                                    left: pos.x - size/2,
                                    top: pos.y - size/2,
                                    width: size * (1 - index * 0.2),
                                    height: size * (1 - index * 0.2),
                                    opacity: 1 - index * 0.3,
                                    backgroundColor: color,
                                }}
                            />
                        ))}
                    </>
                )
            
            case 'particles':
                return (
                    <>
                        {/* 粒子效果 */}
                        <div
                            className="mouse-particle"
                            style={{
                                left: position.x - size/2,
                                top: position.y - size/2,
                                width: size,
                                height: size,
                                backgroundColor: color,
                            }}
                        />
                    </>
                )
            
            default:
                return (
                    <>
                        {/* 主滑鼠追蹤點 */}
                        <div
                            ref={mouseRef}
                            className={`mouse-cursor ${isVisible ? 'visible' : ''}`}
                            style={{
                                left: position.x - size/2,
                                top: position.y - size/2,
                                width: size,
                                height: size,
                                backgroundColor: color,
                                boxShadow: `0 0 20px ${color}80`,
                            }}
                        />

                        {/* 滑鼠軌跡效果 */}
                        <div
                            className={`mouse-trail ${isVisible ? 'visible' : ''}`}
                            style={{
                                left: position.x - size * 0.75,
                                top: position.y - size * 0.75,
                                width: size * 1.5,
                                height: size * 1.5,
                                backgroundColor: `${color}30`,
                            }}
                        />

                        {/* 外圈光暈效果 */}
                        <div
                            className={`mouse-halo ${isVisible ? 'visible' : ''}`}
                            style={{
                                left: position.x - size * 1.25,
                                top: position.y - size * 1.25,
                                width: size * 2.5,
                                height: size * 2.5,
                                borderColor: `${color}30`,
                            }}
                        />
                    </>
                )
        }
    }

    return (
        <div className="mouse-container">
            {renderMouseEffect()}
        </div>
    )
}