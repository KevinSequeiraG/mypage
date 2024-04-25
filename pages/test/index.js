import React, { useEffect, useState } from 'react';
import { Entity, Scene } from 'aframe-react';
import SettingsBtn from '../../components/buttons/settings/settingsBtn';
import Router from "next/router";
import { useRouter } from 'next/router'
import en from "../../public/multilanguage/translations-en.json"
import es from "../../public/multilanguage/translations-es.json"

const Test = () => {
  const [appRendered, setAppRendered] = useState(false)
  const [color, setColor] = useState("red")
  let softSkills = ["teamwork", "work-under-pressure", "puntuality", "ease-of-adaptation", "problem-resolution"]
  const [techSkills, setTechSkills] = useState(["Reactjs", "Nextjs", "HTML5", "CSS3", "Javascript", "Tailwind", "JAVA", "C# .net", "Python", "Git"])
  const [techSkills2, setTechSkills2] = useState(["Firebase", "AFRAME", "ARjs", "SQL SERVER"])
  let softHeight = 1.8
  let techHeight = 1.8
  let techHeight2 = 1.8
  const router = useRouter()
  const { locale } = router;
  const t = locale === "en" ? en : es

  const componentDidMount = () => {
    if (typeof window !== 'undefined') {
      require('aframe')
      setAppRendered(true)
    }
  }

  const changeColor = () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    setColor(colors[Math.floor(Math.random() * colors.length)])
  }

  useEffect(() => {
    componentDidMount()
  }, [])


  return (
    <div>
      <meta charset="UTF-8" />

      {appRendered ?
        <>
          <div className="relative ml-5">
            <button onClick={() => { document.querySelector("html").classList.remove("a-fullscreen"); Router.push("/") }} className="pt-2 absolute left-0 z-[51]"><span className="material-icons">arrow_back</span></button>
            <SettingsBtn />
          </div>
          <Scene >
            <a-assets>
              <img crossOrigin='anonimouys' id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg" />
              <img crossOrigin='anonimouys' id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg" />
            </a-assets>

            <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100" />
            <Entity primitive="a-light" type="ambient" color="#445451" />
            <Entity primitive="a-light" type="point" intensity="2" position="2 4 4" />
            <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048" />

            <a-plane color="red" height="5" width="3" position="-4 2 -2" rotation="0 70 0">
              <a-text value={t["soft-skills"]} height="4" width="4" position="-.8 2 .1"></a-text>
              {
                softSkills.map((skill, i) => {
                  softHeight -= .33
                  return (
                    <a-text key={i} value={t[skill]} height="4" width="4" position={`-.8 ${softHeight} .1`}></a-text>
                  )
                })
              }
            </a-plane>
            <a-plane color="red" height="5" width="3" position="4 2 -2" rotation="0 -70 0">
              <a-text value={t["tech-skills"]} height="4" width="4" position="-.8 2 .1"></a-text>
              {techSkills.map((skill, i) => {
                techHeight -= .33
                return (
                  <a-text key={i} value={skill} height="4" width="4" position={`-1 ${techHeight} .1`}></a-text>
                )
              })}
              {techSkills2.map((skill, i) => {
                techHeight2 -= .33
                return (
                  <a-text key={i} value={skill} height="4" width="4" position={`.23 ${techHeight2} .1`}></a-text>
                )
              })}
            </a-plane>

            <Entity text={{ value: 'Kevin Sequeira Garita', align: 'center' }} position={{ x: 0, y: 2, z: -1 }} />

            <Entity id="box"
              geometry={{ primitive: 'box' }}
              material={{ color: color, opacity: 0.6 }}
              position={{ x: 0, y: 1, z: -3 }}
              events={{ click: () => changeColor() }}>
              <Entity animation__scale={{ property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2' }}
                geometry={{ primitive: 'box', depth: 0.2, height: 0.2, width: 0.2 }}
                material={{ color: '#24CAFF' }} />
            </Entity>

            <Entity primitive="a-camera">
              <Entity primitive="a-cursor" animation__click={{ property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150 }} />
            </Entity>
          </Scene>
        </> : null
      }
    </div>
  )
}

export default Test;