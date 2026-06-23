import React, { useEffect, useState } from 'react';
import { Entity, Scene } from 'aframe-react';
import SettingsBtn from '../../components/buttons/settings/settingsBtn';
import Router from "next/router";
import { useRouter } from 'next/router'
import en from "../../public/multilanguage/translations-en.json"
import es from "../../public/multilanguage/translations-es.json"

const FONT = '/fonts/arial.json'

const Test = () => {
  const [appRendered, setAppRendered] = useState(false)
  const [color, setColor] = useState("#e74c3c")
  let softSkills = ["teamwork", "work-under-pressure", "puntuality", "ease-of-adaptation", "problem-resolution"]
  const [techSkills] = useState(["Reactjs", "Nextjs", "HTML5", "CSS3", "Javascript", "Tailwind", "JAVA", "C# .net", "Python", "Git"])
  const [techSkills2] = useState(["Firebase", "AFRAME", "ARjs", "SQL SERVER"])
  let softHeight = 1.8
  let techHeight = 1.8
  let techHeight2 = 1.8
  const router = useRouter()
  const { locale } = router;
  const t = locale === "en" ? en : es

  const componentDidMount = () => {
    if (typeof window !== 'undefined') {
      if (!customElements.get('a-scene')) {
        require('aframe')
      }
      setAppRendered(true)
    }
  }

  const changeColor = () => {
    const colors = ['#e74c3c', '#e67e22', '#f1c40f', '#2ecc71', '#3498db', '#9b59b6'];
    setColor(colors[Math.floor(Math.random() * colors.length)])
  }

  useEffect(() => {
    componentDidMount()
  }, [])

  return (
    <div>
      <meta charSet="UTF-8" />

      {appRendered ?
        <>
          <div className="relative ml-5">
            <button onClick={() => { document.querySelector("html").classList.remove("a-fullscreen"); Router.push("/") }} className="pt-2 absolute left-0 z-[51]"><span className="material-icons">arrow_back</span></button>
            <SettingsBtn />
          </div>
          <Scene>
            <a-assets>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" crossOrigin="anonymous" id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" crossOrigin="anonymous" id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg" />
            </a-assets>

            {/* Environment */}
            <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100" />
            <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048" />

            {/* Ambient light + orbiting colored point light for dynamic shadows */}
            <Entity primitive="a-light" type="ambient" color="#556" intensity="0.6" />
            <Entity primitive="a-light" type="point" intensity="2.5" color="#fff"
              animation="property: position; from: -5 4 2; to: 5 4 -4; dir: alternate; dur: 6000; loop: true; easing: easeInOutSine" />
            <Entity primitive="a-light" type="point" intensity="1" color="#88aaff"
              animation="property: position; from: 3 5 -5; to: -3 2 3; dir: alternate; dur: 8000; loop: true; easing: easeInOutSine" />

            {/* Left panel — soft skills, bobs up/down */}
            <a-plane color="#c0392b" height="5" width="3" position="-4 2 -2" rotation="0 70 0"
              animation="property: position; from: -4 1.7 -2; to: -4 2.3 -2; dir: alternate; dur: 3000; loop: true; easing: easeInOutSine">
              <a-text font={FONT} negate="false" color="white" value={t["soft-skills"]} height="4" width="4" position="-1.2 2 .1"></a-text>
              {softSkills.map((skill, i) => {
                softHeight -= .33
                return (
                  <a-text font={FONT} negate="false" color="white" key={i} value={t[skill]} height="4" width="4" position={`-1.2 ${softHeight} .1`}></a-text>
                )
              })}
            </a-plane>

            {/* Right panel — tech skills, bobs at different speed/phase */}
            <a-plane color="#c0392b" height="5" width="3" position="4 2 -2" rotation="0 -70 0"
              animation="property: position; from: 4 2.3 -2; to: 4 1.7 -2; dir: alternate; dur: 3500; loop: true; easing: easeInOutSine">
              <a-text font={FONT} negate="false" color="white" value={t["tech-skills"]} height="4" width="4" position="-.8 2 .1"></a-text>
              {techSkills.map((skill, i) => {
                techHeight -= .33
                return (
                  <a-text font={FONT} negate="false" color="white" key={i} value={skill} height="4" width="4" position={`-1 ${techHeight} .1`}></a-text>
                )
              })}
              {techSkills2.map((skill, i) => {
                techHeight2 -= .33
                return (
                  <a-text font={FONT} negate="false" color="white" key={i} value={skill} height="4" width="4" position={`.23 ${techHeight2} .1`}></a-text>
                )
              })}
            </a-plane>

            {/* Name — subtle floating */}
            <a-text font={FONT} negate="false" color="white" value="Kevin Sequeira Garita"
              align="center" width="6" position="0 2.5 -2"
              animation="property: position; from: 0 2.3 -2; to: 0 2.7 -2; dir: alternate; dur: 4000; loop: true; easing: easeInOutSine">
            </a-text>

            {/* Bouncing arrow hinting the box is clickable */}
            <a-cone color="#f1c40f" height="0.25" radius-bottom="0.12" radius-top="0" position="0 2.5 -3" rotation="180 0 0"
              animation="property: position; from: 0 2.7 -3; to: 0 2.3 -3; dir: alternate; dur: 500; loop: true; easing: easeInOutSine">
            </a-cone>
            <a-text font={FONT} negate="false" value="¡Click!" color="#f1c40f" align="center" width="3" position="0 3 -3"
              animation="property: opacity; from: 1; to: 0.3; dir: alternate; dur: 800; loop: true">
            </a-text>

            {/* Interactive box — rotates, bobs, pulses */}
            <Entity id="box"
              className="clickable"
              geometry={{ primitive: 'box' }}
              material={{ color: color, opacity: 0.85, metalness: 0.3, roughness: 0.4 }}
              position={{ x: 0, y: 1, z: -3 }}
              animation__rotate="property: rotation; to: 0 360 0; dur: 4000; loop: true; easing: linear"
              animation__bob="property: position; from: 0 0.8 -3; to: 0 1.2 -3; dir: alternate; dur: 1500; loop: true; easing: easeInOutSine"
              animation__pulse="property: scale; from: 1 1 1; to: 1.12 1.12 1.12; dir: alternate; dur: 700; loop: true"
              events={{ click: () => changeColor() }}>
              {/* Inner decorative box */}
              <Entity
                geometry={{ primitive: 'box', depth: 0.25, height: 0.25, width: 0.25 }}
                material={{ color: '#fff', opacity: 0.6 }}
                animation__spin={{ property: 'rotation', to: '360 360 0', dur: 2000, loop: true, easing: 'linear' }} />
            </Entity>

            {/* Camera with raycaster limited to .clickable elements */}
            <Entity primitive="a-camera" raycaster="objects: .clickable">
              <Entity primitive="a-cursor" color="#f1c40f"
                animation__click={{ property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150 }}
                animation__hover={{ property: 'scale', startEvents: 'mouseenter', from: '1 1 1', to: '2 2 2', dur: 150 }}
                animation__unhover={{ property: 'scale', startEvents: 'mouseleave', from: '2 2 2', to: '1 1 1', dur: 150 }} />
            </Entity>
          </Scene>
        </> : null
      }
    </div>
  )
}

export default Test;
