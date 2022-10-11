import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
// import codingPerson from "../../assets/lottie/codingPerson";
import mobileAppDevelopment1 from "../../assets/lottie/mobileAppDevelopment1";
import mobileAppDevelopment2 from "../../assets/lottie/mobileAppDevelopment2";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      
      {skillsSection.skills.map((skill, i) => {
        return (
          <div className={((i % 2 == 0)) ? "skills-main-div" : "skills-main-div-reversed"}>
            {
               ((i % 2) == 0) ? 
                <>
                  <Fade left duration={1000}>
                    <SkillBannerComponent lottieBanner={mobileAppDevelopment1} />
                  </Fade>
                  <Fade right duration={1000}>
                    <SkillDetailsComponent isDark={isDark} rightAligned={false} item={skill} />
                  </Fade>
                </>
               : 
                <>
                  <Fade right duration={1000}>
                    <SkillBannerComponent lottieBanner={mobileAppDevelopment2} />
                  </Fade>
                  <Fade left duration={1000}>
                    <SkillDetailsComponent isDark={isDark} rightAligned={true} item={skill} />
                  </Fade>
                </>
            }
            
          </div>
        );
      })}

      <Fade left duration={1000}>
        <div className="skills-border"></div>
      </Fade>

    </div>
  );
}

const SkillBannerComponent = (({ lottieBanner }) => (
  <div className="skills-image-div">
    {illustration.animated ? (
      <DisplayLottie animationData={lottieBanner} />
    ) : (
      <img
        alt="Man Working"
        src={require("../../assets/images/developerActivity.svg")}
      ></img>
    )}
  </div>
));

const SkillDetailsComponent = (({ isDark, rightAligned, item }) => (
  <div className="skills-text-div">
    <h1
      className={isDark ? "dark-mode skills-heading" : "skills-heading"}
    >
      {item.title}{" "}
    </h1>
    <p
      className={
        isDark
          ? "dark-mode subTitle skills-text-subtitle"
          : "subTitle skills-text-subtitle"
      }
    >
      {item.subTitle}
    </p>
    <SoftwareSkill softwareSkills={item.softwareSkills ?? []} />
    <div>
      {item.bullets.map((skills, i) => {
        return (
          <p
            key={i}
            className={
              isDark
                ? rightAligned ? "dark-mode subTitle skills-text-reversed" : "dark-mode subTitle skills-text"
                : rightAligned ? "subTitle skills-text-reversed" : "subTitle skills-text"
            }
          >
            {skills}
          </p>
        );
      })}
    </div>
  </div>
));
