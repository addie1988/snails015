import React, { useState, useRef, useEffect } from 'react'
import './InfiniteMarquee.sass'

export default function InfiniteMarquee({ 
    speed = 15, // 跑馬燈速度 (px/s)
    direction = 'left', // 方向: 'left' 或 'right'
    pauseOnHover = true, // 是否在滑鼠懸停時暫停
    children 
}) {
    const [isPaused, setIsPaused] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const marqueeRef = useRef(null)
    const contentRef = useRef(null)
    const animationRef = useRef(null)
    const positionRef = useRef(0)
    const lastTimeRef = useRef(0)

    useEffect(() => {
        const animate = (currentTime) => {
            if (!lastTimeRef.current) lastTimeRef.current = currentTime
            
            if (!isPaused) {
                const deltaTime = currentTime - lastTimeRef.current
                const deltaPosition = (speed * deltaTime) / 1000
                
                if (direction === 'left') {
                    positionRef.current -= deltaPosition
                } else {
                    positionRef.current += deltaPosition
                }
                
                if (contentRef.current) {
                    contentRef.current.style.transform = `translateX(${positionRef.current}px)`
                }
                
                lastTimeRef.current = currentTime
            }
            
            animationRef.current = requestAnimationFrame(animate)
        }

        animationRef.current = requestAnimationFrame(animate)
        
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [speed, direction, isPaused])

    const handleMouseEnter = () => {
        if (pauseOnHover) {
            setIsHovered(true)
            setIsPaused(true)
        }
    }

    const handleMouseLeave = () => {
        if (pauseOnHover) {
            setIsHovered(false)
            setIsPaused(false)
            lastTimeRef.current = 0 // 重置時間以確保平滑恢復
        }
    }

    return (
        <div 
            className="infinite-marquee"
            ref={marqueeRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div 
                className="marquee-content"
                ref={contentRef}
                style={{
                    transform: 'translateX(0px)',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                {children}
                {children}
                {children}
            </div>
            
            {/* 懸停提示 */}
            {pauseOnHover && (
                <div className={`marquee-hint ${isHovered ? 'visible' : ''}`}>
                    {isHovered ? '已暫停' : '滑鼠懸停暫停'}
                </div>
            )}
        </div>
    )
}
