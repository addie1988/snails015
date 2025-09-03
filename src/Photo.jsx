import React, { useEffect, useRef, useState } from "react";

export default function Photo() {
  const photoArea1Ref = useRef(null);
  const photoArea2Ref = useRef(null);
  const lastScrollY = useRef(0);
  const animationId = useRef(null);
  const accumulatedMove1 = useRef(0);
  const accumulatedMove2 = useRef(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (photoArea1Ref.current && photoArea2Ref.current) {
      const area1 = photoArea1Ref.current.querySelector("ul");
      const area2 = photoArea2Ref.current.querySelector("ul");
      
      const containerWidth = photoArea1Ref.current.offsetWidth;
      const ulWidth = area1.scrollWidth;
      const initialOffset = (ulWidth - containerWidth) / 2;
      
      accumulatedMove1.current = -initialOffset;
      accumulatedMove2.current = -initialOffset;
      
      area1.style.transform = `translateX(${accumulatedMove1.current}px)`;
      area2.style.transform = `translateX(${accumulatedMove2.current}px)`;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        animationId.current = requestAnimationFrame(() => {
          updatePhotoMovement();
          ticking = false;
        });
      }
    };

    const updatePhotoMovement = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY.current ? "down" : "up";
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);

      if (photoArea1Ref.current && photoArea2Ref.current) {
        const area1 = photoArea1Ref.current.querySelector("ul");
        const area2 = photoArea2Ref.current.querySelector("ul");

        const moveSpeed = windowWidth <= 768 ? 1.2 : 1.5;
        const moveDistance = scrollDelta * moveSpeed;

        if (scrollDirection === "down") {
          accumulatedMove1.current += moveDistance;
          accumulatedMove2.current -= moveDistance;
        } else {
          accumulatedMove1.current = Math.max(-area1.scrollWidth/2, accumulatedMove1.current - moveDistance * 1.5);
          accumulatedMove2.current = Math.min(area2.scrollWidth/2, accumulatedMove2.current + moveDistance * 1.5);
        }

        const ulWidth = area1.scrollWidth / 2;
        if (accumulatedMove1.current >= ulWidth) {
          accumulatedMove1.current = -ulWidth;
        }
        if (Math.abs(accumulatedMove2.current) >= ulWidth) {
          accumulatedMove2.current = -ulWidth;
        }

        area1.style.transform = `translateX(${accumulatedMove1.current}px)`;
        area2.style.transform = `translateX(${accumulatedMove2.current}px)`;

        const transitionDuration = windowWidth <= 768 ? "0.3s" : "0.4s";
        area1.style.transition = `transform ${transitionDuration} ease-out`;
        area2.style.transition = `transform ${transitionDuration} ease-out`;
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }

      if (photoArea1Ref.current && photoArea2Ref.current) {
        const area1 = photoArea1Ref.current.querySelector("ul");
        const area2 = photoArea2Ref.current.querySelector("ul");
        area1.style.transform = "translateX(0)";
        area2.style.transform = "translateX(0)";
        area1.style.transition = "none";
        area2.style.transition = "none";
        accumulatedMove1.current = 0;
        accumulatedMove2.current = 0;
      }
    };
  }, [windowWidth]);

  const photoItems1 = [
    {maxImg:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",name:"@Anna Smith"},
    {maxImg:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",name:"@John Davis"},
    {maxImg:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",name:"@Michael Chen"},
    {maxImg:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",name:"@Sarah Wilson"},
    {maxImg:"https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop",name:"@Emily Brown"},
    {maxImg:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",name:"@David Lee"}
  ].concat(Array(10).fill([
    {maxImg:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",name:"@Anna Smith"},
    {maxImg:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",name:"@John Davis"},
    {maxImg:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",name:"@Michael Chen"},
    {maxImg:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",name:"@Sarah Wilson"},
    {maxImg:"https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop",name:"@Emily Brown"},
    {maxImg:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",name:"@David Lee"}
  ]).flat());

  const photoItems2 = [
    {maxImg:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop",name:"@Rachel Green"},
    {maxImg:"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop",name:"@James Taylor"},
    {maxImg:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop",name:"@Sophie Martinez"},
    {maxImg:"https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=1776&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=1776&auto=format&fit=crop",name:"@Daniel Kim"},
    {maxImg:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop",name:"@Olivia Johnson"},
    {maxImg:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop",name:"@William Park"}
  ].concat(Array(10).fill([
    {maxImg:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop",name:"@Rachel Green"},
    {maxImg:"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop",name:"@James Taylor"},
    {maxImg:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop",name:"@Sophie Martinez"},
    {maxImg:"https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=1776&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=1776&auto=format&fit=crop",name:"@Daniel Kim"},
    {maxImg:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop",name:"@Olivia Johnson"},
    {maxImg:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop",minImg:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop",name:"@William Park"}
  ]).flat());

  return (
    <div className="photo">
      <div className="photo_content">
        <div className="photo_content_title">
          <div className="photo_content_title_content">
            <h3>The world loves SHADER with more than<span>40 000 downloads</span></h3>
          </div>
        </div>
        <div className="photo_area">
          <div className="photo_area_content">
            <div className="photo_area_1" ref={photoArea1Ref}>
              <ul style={{animation:"scroll 50s linear infinite"}}>
                {[...photoItems1,...photoItems1,...photoItems1,...photoItems1].map((item,index)=>(
                  <li key={index}>
                    <div className="photo_max_img">
                      <img src={item.maxImg} alt="photo" loading="lazy"/>
                    </div>
                    <div className="photo_min_img">
                      <img src={item.minImg} alt="photo" loading="lazy"/>
                      <p>{item.name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="photo_area_2" ref={photoArea2Ref}>
              <ul style={{animation:"scroll 50s linear infinite reverse"}}>
                {[...photoItems2,...photoItems2,...photoItems2,...photoItems2].map((item,index)=>(
                  <li key={index}>
                    <div className="photo_max_img">
                      <img src={item.maxImg} alt="photo" loading="lazy"/>
                    </div>
                    <div className="photo_min_img">
                      <img src={item.minImg} alt="photo" loading="lazy"/>
                      <p>{item.name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
